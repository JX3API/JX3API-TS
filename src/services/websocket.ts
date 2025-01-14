import { JX3APIClient } from '../client';
import {
  WSEventType,
  WSMessage,
  WSConfig,
  WSSubscription,
  ServerStatusEvent,
  GoldPriceEvent,
  AuctionItemEvent,
  SystemNoticeEvent
} from '../types/websocket';

declare const WebSocket: {
  prototype: WebSocket;
  new(url: string): WebSocket;
  readonly OPEN: number;
};

export class WebSocketService extends JX3APIClient {
  private ws: WebSocket | null = null;
  private subscriptions: Map<string, WSSubscription[]> = new Map();
  private reconnectAttempts = 0;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;

  private config: Required<WSConfig> = {
    reconnect: true,
    reconnectInterval: 5000,
    maxReconnectAttempts: 5,
    heartbeatInterval: 30000
  };

  /**
   * 连接WebSocket
   * @param config WebSocket配置
   */
  connect(config?: WSConfig): void {
    this.config = { ...this.config, ...config };
    const wsUrl = `${this.client.defaults.baseURL?.replace('http', 'ws')}/ws`;
    
    this.ws = new WebSocket(wsUrl);
    this.setupWebSocket();
    this.startHeartbeat();
  }

  /**
   * 断开WebSocket连接
   */
  disconnect(): void {
    this.stopHeartbeat();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.subscriptions.clear();
  }

  /**
   * 订阅事件
   * @param subscription 订阅配置
   */
  subscribe<T>(subscription: WSSubscription<T>): void {
    const { event } = subscription;
    if (!this.subscriptions.has(event)) {
      this.subscriptions.set(event, []);
    }
    this.subscriptions.get(event)?.push(subscription);

    this.sendMessage({
      type: 'subscribe',
      event,
      filter: subscription.filter
    });
  }

  /**
   * 取消订阅事件
   * @param event 事件类型
   * @param callback 回调函数
   */
  unsubscribe<T>(event: WSEventType, callback: (data: T) => void): void {
    const subs = this.subscriptions.get(event);
    if (subs) {
      const index = subs.findIndex(sub => sub.callback === callback);
      if (index !== -1) {
        subs.splice(index, 1);
      }
    }

    this.sendMessage({
      type: 'unsubscribe',
      event
    });
  }

  private setupWebSocket(): void {
    if (!this.ws) return;

    this.ws.onopen = () => {
      this.reconnectAttempts = 0;
      
      // 重新订阅之前的事件
      this.subscriptions.forEach((subs, event) => {
        subs.forEach(sub => {
          this.sendMessage({
            type: 'subscribe',
            event,
            filter: sub.filter
          });
        });
      });
    };

    this.ws.onclose = () => {
      this.stopHeartbeat();

      if (this.config.reconnect && this.reconnectAttempts < this.config.maxReconnectAttempts) {
        setTimeout(() => {
          this.reconnectAttempts++;
          this.connect(this.config);
        }, this.config.reconnectInterval);
      }
    };

    this.ws.onmessage = (event) => {
      try {
        const message: WSMessage = JSON.parse(event.data);
        const subscribers = this.subscriptions.get(message.type) || [];

        subscribers.forEach(sub => {
          if (this.matchFilter(message.data, sub.filter)) {
            sub.callback(message.data);
          }
        });
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };
  }

  private startHeartbeat(): void {
    this.heartbeatTimer = setInterval(() => {
      this.sendMessage({ type: 'ping' });
    }, this.config.heartbeatInterval);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private sendMessage(data: any): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }

  private matchFilter(data: any, filter?: WSSubscription['filter']): boolean {
    if (!filter) return true;

    if (filter.server && data.server !== filter.server) {
      return false;
    }

    if (filter.item_id && data.item?.id !== filter.item_id) {
      return false;
    }

    if (filter.price_range) {
      const price = data.price || data.unit_price;
      if (price < filter.price_range.min || price > filter.price_range.max) {
        return false;
      }
    }

    return true;
  }
} 