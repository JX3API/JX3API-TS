import { WebSocket } from "ws";
import { EventEmitter } from "events";
import { WsEvent } from "../types/websocket";

/**
 * WebSocket连接状态枚举
 */
export enum WebSocketState {
  CONNECTING = 0, // 连接中
  OPEN = 1,       // 已连接
  CLOSING = 2,    // 关闭中
  CLOSED = 3,     // 已关闭
}

/**
 * WebSocket配置选项
 */
export interface WebSocketOptions {
  /** WebSocket服务器URL */
  wsURL?: string;
  /** WebSocket认证令牌 */
  wstoken?: string;
  /** 自动重连选项 */
  reconnect?: {
    /** 是否启用自动重连 */
    enabled: boolean;
    /** 最大重连次数，0表示无限次 */
    maxAttempts: number;
    /** 重连延迟(毫秒) */
    delay: number;
    /** 重连延迟增长倍数 */
    backoffFactor: number;
  };
  /** 心跳检测选项 */
  heartbeat?: {
    /** 是否启用心跳检测 */
    enabled: boolean;
    /** 心跳间隔(毫秒) */
    interval: number;
    /** 心跳超时(毫秒) */
    timeout: number;
    /** 心跳消息内容 */
    message: string | object;
  };
}

/**
 * WebSocket服务类
 * @class WebSocketService
 * @description 用于管理WebSocket连接，支持心跳检测和断线重连
 */
export class JX3WebSocket extends EventEmitter {
  /** WebSocket实例 */
  private ws: WebSocket | null = null;
  /** WebSocket服务器URL */
  private url: string;
  /** WebSocket认证令牌 */
  private token?: string;
  /** 当前连接状态 */
  private state: WebSocketState = WebSocketState.CLOSED;
  /** 配置选项 */
  private options: WebSocketOptions;
  /** 默认配置 */
  private static readonly DEFAULT_OPTIONS: WebSocketOptions = {
    wsURL: "wss://socket.jx3api.com",
    reconnect: {
      enabled: true,
      maxAttempts: 5,
      delay: 3000,
      backoffFactor: 1.5,
    },
    heartbeat: {
      enabled: true,
      interval: 30000,
      timeout: 5000,
      message: { type: "ping" },
    },
  };
  /** 心跳定时器 */
  private heartbeatTimer?: NodeJS.Timeout;
  /** 心跳超时定时器 */
  private heartbeatTimeoutTimer?: NodeJS.Timeout;
  /** 重连定时器 */
  private reconnectTimer?: NodeJS.Timeout;
  /** 当前重连尝试次数 */
  private reconnectAttempts = 0;
  /** 当前重连延迟 */
  private currentReconnectDelay = 0;

  /**
   * 创建WebSocket服务实例
   * @param options WebSocket配置选项
   */
  constructor(options: WebSocketOptions = {}) {
    super();
    this.options = { ...JX3WebSocket.DEFAULT_OPTIONS, ...options };
    this.url = this.options.wsURL || JX3WebSocket.DEFAULT_OPTIONS.wsURL!;
    this.token = options.wstoken;
  }

  /**
   * 连接到WebSocket服务器
   * @returns 返回Promise，连接成功时resolve，失败时reject
   */
  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.state === WebSocketState.OPEN) {
        resolve();
        return;
      }

      // 如果已有连接，先关闭
      this.cleanup();

      // 更新状态为连接中
      this.state = WebSocketState.CONNECTING;

      // 构建URL，添加token参数
      const connectUrl = this.token ? `${this.url}?token=${this.token}` : this.url;

      try {
        this.ws = new WebSocket(connectUrl);

        // 设置事件处理器
        this.ws.on("open", () => {
          this.state = WebSocketState.OPEN;
          this.reconnectAttempts = 0;
          this.currentReconnectDelay = this.options.reconnect?.delay || 0;
          this.emit("open");
          this.startHeartbeat();
          resolve();
        });

        this.ws.on("message", (data: Buffer) => {
          try {
            const message = JSON.parse(data.toString());
            this.handleMessage(message);
          } catch (error) {
            this.emit("error", new Error(`Failed to parse message: ${error}`));
          }
        });

        this.ws.on("close", (code: number, reason: Buffer) => {
          this.state = WebSocketState.CLOSED;
          this.stopHeartbeat();
          this.emit("close", code, reason.toString());
          this.handleReconnect();
        });

        this.ws.on("error", (error: Error) => {
          this.emit("error", error);
          // 连接错误时，如果还在连接状态，则reject promise
          if (this.state === WebSocketState.CONNECTING) {
            reject(error);
          }
        });
      } catch (error) {
        this.state = WebSocketState.CLOSED;
        this.emit("error", error);
        reject(error);
        this.handleReconnect();
      }
    });
  }

  /**
   * 关闭WebSocket连接
   * @param code 关闭代码
   * @param reason 关闭原因
   */
  public disconnect(code?: number, reason?: string): void {
    if (this.state === WebSocketState.CLOSED || this.state === WebSocketState.CLOSING) {
      return;
    }

    this.state = WebSocketState.CLOSING;
    this.cleanup();

    if (this.ws) {
      try {
        this.ws.close(code, reason);
      } catch (error) {
        this.emit("error", error);
      } finally {
        this.ws = null;
        this.state = WebSocketState.CLOSED;
      }
    }
  }

  /**
   * 发送消息到WebSocket服务器
   * @param data 要发送的数据
   * @returns 是否发送成功
   */
  public send(data: string | object): boolean {
    if (this.state !== WebSocketState.OPEN) {
      return false;
    }

    try {
      const message = typeof data === "string" ? data : JSON.stringify(data);
      this.ws?.send(message);
      return true;
    } catch (error) {
      this.emit("error", error);
      return false;
    }
  }

  /**
   * 获取当前连接状态
   * @returns 当前连接状态
   */
  public getState(): WebSocketState {
    return this.state;
  }

  /**
   * 处理接收到的消息
   * @param message 接收到的消息对象
   */
  private handleMessage(message: any): void {
    // 处理心跳响应
    if (message.type === "pong") {
      this.resetHeartbeatTimeout();
      this.emit("pong", message);
      return;
    }

    // 处理事件消息
    if (message.action && typeof message.action === "number") {
      const actionType = message.action.toString();
      this.emit("event", actionType, message);
      this.emit(`event:${actionType}`, message);
    }

    // 发送通用消息事件
    this.emit("message", message);
  }

  /**
   * 启动心跳检测
   */
  private startHeartbeat(): void {
    const heartbeatOptions = this.options.heartbeat;
    if (!heartbeatOptions?.enabled) {
      return;
    }

    this.stopHeartbeat();

    this.heartbeatTimer = setInterval(() => {
      if (this.state === WebSocketState.OPEN) {
        this.send(heartbeatOptions.message);
        this.startHeartbeatTimeout();
      }
    }, heartbeatOptions.interval);
  }

  /**
   * 停止心跳检测
   */
  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = undefined;
    }
    this.stopHeartbeatTimeout();
  }

  /**
   * 启动心跳超时检测
   */
  private startHeartbeatTimeout(): void {
    const heartbeatOptions = this.options.heartbeat;
    if (!heartbeatOptions?.enabled || !heartbeatOptions.timeout) {
      return;
    }

    this.stopHeartbeatTimeout();

    this.heartbeatTimeoutTimer = setTimeout(() => {
      this.emit("heartbeat:timeout");
      // 心跳超时，尝试重新连接
      this.disconnect(1001, "Heartbeat timeout");
    }, heartbeatOptions.timeout);
  }

  /**
   * 重置心跳超时检测
   */
  private resetHeartbeatTimeout(): void {
    this.stopHeartbeatTimeout();
    this.startHeartbeatTimeout();
  }

  /**
   * 停止心跳超时检测
   */
  private stopHeartbeatTimeout(): void {
    if (this.heartbeatTimeoutTimer) {
      clearTimeout(this.heartbeatTimeoutTimer);
      this.heartbeatTimeoutTimer = undefined;
    }
  }

  /**
   * 处理断线重连
   */
  private handleReconnect(): void {
    const reconnectOptions = this.options.reconnect;
    if (!reconnectOptions?.enabled) {
      return;
    }

    // 清除之前的重连定时器
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = undefined;
    }

    // 检查是否达到最大重连次数
    if (reconnectOptions.maxAttempts > 0 && this.reconnectAttempts >= reconnectOptions.maxAttempts) {
      this.emit("reconnect:failed", this.reconnectAttempts);
      return;
    }

    // 计算重连延迟
    if (this.reconnectAttempts === 0) {
      this.currentReconnectDelay = reconnectOptions.delay;
    } else {
      this.currentReconnectDelay *= reconnectOptions.backoffFactor;
    }

    this.reconnectAttempts++;
    this.emit("reconnect:attempt", this.reconnectAttempts, this.currentReconnectDelay);

    // 设置重连定时器
    this.reconnectTimer = setTimeout(() => {
      this.emit("reconnect");
      this.connect().catch((error) => {
        this.emit("reconnect:error", error);
      });
    }, this.currentReconnectDelay);
  }

  /**
   * 清理资源
   */
  private cleanup(): void {
    this.stopHeartbeat();

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = undefined;
    }
  }

  /**
   * 订阅特定类型的事件
   * @param actionType 事件类型
   * @param listener 事件监听器
   */
  public on<T extends keyof WsEvent>(event: `event:${T}`, listener: (data: WsEvent[T]) => void): this;
  public on(event: string | symbol, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

}