/**
 * JX3 API SDK - WebSocket Client
 *
 * 连接 wss://socket.jx3api.com，接收游戏实时事件推送。
 * 内置心跳保活与自动重连机制。
 */

import type { SocketEventMap, SocketAction } from "./types.js";

const DEFAULT_WSS_URL = "wss://socket.jx3api.com";
const HEARTBEAT_INTERVAL = 30_000;
const RECONNECT_BASE_DELAY = 1_000;
const RECONNECT_MAX_DELAY = 30_000;

export interface SocketOptions {
  /** WebSocket 地址，默认 wss://socket.jx3api.com */
  url?: string;
  /** API Token，用于身份验证 */
  token?: string;
  /** 是否自动重连，默认 true */
  autoReconnect?: boolean;
  /** 最大重连次数，默认 Infinity */
  maxReconnects?: number;
}

type Listener<A extends SocketAction> = (detail: SocketEventMap[A]) => void;
type AnyListener = (action: number, detail: unknown) => void;

export class JX3Socket {
  readonly #url: string;
  readonly #token: string;
  readonly #autoReconnect: boolean;
  readonly #maxReconnects: number;

  #ws: WebSocket | null = null;
  #heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  #reconnectAttempts = 0;
  #reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  #closed = false;

  readonly #listeners = new Map<number, Set<Listener<any>>>();
  readonly #anyListeners = new Set<AnyListener>();
  readonly #metaListeners = {
    open: new Set<() => void>(),
    close: new Set<(code: number, reason: string) => void>(),
    error: new Set<(error: unknown) => void>(),
  };

  constructor(options: SocketOptions = {}) {
    this.#url = options.url ?? DEFAULT_WSS_URL;
    this.#token = options.token ?? "";
    this.#autoReconnect = options.autoReconnect ?? true;
    this.#maxReconnects = options.maxReconnects ?? Infinity;
  }

  /** 建立连接 */
  connect(): this {
    this.#closed = false;
    this.#reconnectAttempts = 0;
    this.#createConnection();
    return this;
  }

  /** 主动关闭连接 */
  close(): void {
    this.#closed = true;
    this.#stopHeartbeat();
    this.#clearReconnectTimer();
    this.#ws?.close(1000, "client close");
    this.#ws = null;
  }

  /** 监听特定 action 事件 */
  on<A extends SocketAction>(action: A, listener: Listener<A>): this {
    let set = this.#listeners.get(action);
    if (!set) {
      set = new Set();
      this.#listeners.set(action, set);
    }
    set.add(listener);
    return this;
  }

  /** 移除特定 action 事件监听 */
  off<A extends SocketAction>(action: A, listener: Listener<A>): this {
    this.#listeners.get(action)?.delete(listener);
    return this;
  }

  /** 监听所有事件 */
  onAny(listener: AnyListener): this {
    this.#anyListeners.add(listener);
    return this;
  }

  /** 移除全局监听 */
  offAny(listener: AnyListener): this {
    this.#anyListeners.delete(listener);
    return this;
  }

  /** 连接/关闭/错误事件 */
  onOpen(listener: () => void): this {
    this.#metaListeners.open.add(listener);
    return this;
  }

  onClose(listener: (code: number, reason: string) => void): this {
    this.#metaListeners.close.add(listener);
    return this;
  }

  onError(listener: (error: unknown) => void): this {
    this.#metaListeners.error.add(listener);
    return this;
  }

  get connected(): boolean {
    return this.#ws?.readyState === WebSocket.OPEN;
  }

  // --- 内部方法 ---

  #createConnection(): void {
    const ws = new WebSocket(this.#connectionUrl());
    this.#ws = ws;

    ws.addEventListener("open", () => {
      this.#reconnectAttempts = 0;

      this.#startHeartbeat();

      for (const fn of this.#metaListeners.open) fn();
    });

    ws.addEventListener("message", (event) => {
      try {
        const msg = JSON.parse(String(event.data)) as {
          action: number;
          status: string;
          detail?: unknown;
          data?: unknown;
        };

        const action = msg.action;
        // 文档中 1102 用 data 而非 detail
        const detail = msg.detail ?? msg.data;

        // 触发具体 action 监听
        const set = this.#listeners.get(action);
        if (set) {
          for (const fn of set) fn(detail);
        }

        // 触发全局监听
        for (const fn of this.#anyListeners) fn(action, detail);
      } catch {
        // 忽略非 JSON 消息（如心跳响应）
      }
    });

    ws.addEventListener("close", (event) => {
      this.#stopHeartbeat();

      for (const fn of this.#metaListeners.close)
        fn(event.code, event.reason);

      if (!this.#closed && this.#autoReconnect) {
        this.#scheduleReconnect();
      }
    });

    ws.addEventListener("error", (event) => {
      for (const fn of this.#metaListeners.error) fn(event);
    });
  }

  #connectionUrl(): string {
    if (!this.#token) return this.#url;

    const url = new URL(this.#url);
    url.searchParams.set("toekn", this.#token);
    return url.toString();
  }

  #startHeartbeat(): void {
    this.#stopHeartbeat();
    this.#heartbeatTimer = setInterval(() => {
      if (this.#ws?.readyState === WebSocket.OPEN) {
        this.#ws.send(JSON.stringify({ action: -1 }));
      }
    }, HEARTBEAT_INTERVAL);
  }

  #stopHeartbeat(): void {
    if (this.#heartbeatTimer) {
      clearInterval(this.#heartbeatTimer);
      this.#heartbeatTimer = null;
    }
  }

  #scheduleReconnect(): void {
    if (this.#reconnectAttempts >= this.#maxReconnects) return;

    const delay = Math.min(
      RECONNECT_BASE_DELAY * 2 ** this.#reconnectAttempts,
      RECONNECT_MAX_DELAY
    );
    this.#reconnectAttempts++;

    this.#reconnectTimer = setTimeout(() => {
      this.#createConnection();
    }, delay);
  }

  #clearReconnectTimer(): void {
    if (this.#reconnectTimer) {
      clearTimeout(this.#reconnectTimer);
      this.#reconnectTimer = null;
    }
  }
}
