import { EventEmitter } from 'events';

interface WebSocketClientOptions {
  url: string;
  heartbeatInterval?: number;
  reconnectInterval?: number;
}

class WebSocketClient extends EventEmitter {
  private url: string;
  private ws: WebSocket | null = null;
  private heartbeatInterval: number;
  private reconnectInterval: number;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private reconnectTimer: NodeJS.Timeout | null = null;

  constructor(options: WebSocketClientOptions) {
    super();
    this.url = options.url;
    this.heartbeatInterval = options.heartbeatInterval || 30000; // default 30 seconds
    this.reconnectInterval = options.reconnectInterval || 5000; // default 5 seconds
    this.connect();
  }

  private connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.emit('open');
      this.startHeartbeat();
    };

    this.ws.onmessage = (event) => {
      this.emit('message', event.data);
    };

    this.ws.onclose = () => {
      this.emit('close');
      this.stopHeartbeat();
      this.reconnect();
    };

    this.ws.onerror = (error) => {
      this.emit('error', error);
    };
  }

  private startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send('ping');
      }
    }, this.heartbeatInterval);
  }

  private stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private reconnect() {
    if (this.reconnectTimer) return;
    this.reconnectTimer = setTimeout(() => {
      this.connect();
      this.reconnectTimer = null;
    }, this.reconnectInterval);
  }

  public send(data: string) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    }
  }

  public close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

export default WebSocketClient;
