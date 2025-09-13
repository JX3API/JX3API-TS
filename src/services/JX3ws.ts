import WebSocketClient from '../common/wsClient';
import { EventEmitter } from 'events';

type Options = {
  wsUrl: string;
  wstoken: string;
};
type WSEvent = {
  action: string;
  data: any;
};
export class JX3ws extends EventEmitter {
  private wsClient: WebSocketClient | null = null;
  constructor(options: Options) {
    super();
    this.init(options);
  }

  private init = (options: Options) => {
    this.wsClient = new WebSocketClient({
      url: `${options.wsUrl}?token=${options.wstoken}`,
      heartbeatInterval: 30000,
      reconnectInterval: 5000,
    });
    this.wsClient.on('message', (data) => {
      try {
        const event = JSON.parse(data) as WSEvent;
        this.emit('message', event);
        this.emit(event.action, event);
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });
  };

  public static Create(options: Options) {
    return new JX3ws(options);
  }
  public clear() {
    this.wsClient?.close();
    this.wsClient = null;
    this.removeAllListeners();
  }
}
