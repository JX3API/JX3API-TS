import WebSocketClient from '../common/wsClient';
import { WsEvent } from '../types/eventType';
type Options = {
  wsUrl: string;
  wstoken: string;
};

class JX3ws {
  public wsClient: WebSocketClient;
  eventHandler: Partial<
    Record<keyof WsEvent, Array<{ key: string; callback: any }>>
  > = {};

  constructor(options: Options) {
    this.init(options);
  }

  init = (options: Options) => {
    this.wsClient = new WebSocketClient({
      url: `${options.wsUrl}?token=${options.wstoken}`,
      heartbeatInterval: 30000,
      reconnectInterval: 5000,
    });
    this.wsClient.on('message', (data) => {
      try {
        const event = JSON.parse(data) as WsEvent[keyof WsEvent];
        this.eventHandler[event.action]?.forEach((item) => {
          item.callback(event);
        });
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });
  };

  on = <T extends keyof WsEvent>(
    event: T,
    key: string,
    callback: (data: WsEvent[T]) => void,
  ) => {
    if (!this.eventHandler[event]) {
      this.eventHandler[event] = [];
    }
    this.eventHandler[event]!.push({ key, callback });
  };

  off = (event: keyof WsEvent, key: string) => {
    if (this.eventHandler[event]) {
      this.eventHandler[event] = this.eventHandler[event]!.filter(
        (item) => item.key !== key,
      );
    }
  };
}
export default JX3ws;
