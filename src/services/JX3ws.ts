import WebSocketClient from '../common/wsClient';
type Options = {
  wsUrl: string;
  wstoken: string;
};
class JX3ws {
  public static wsClient: WebSocketClient;

  constructor(options: Options) {}
  init(options: Options) {
    if (JX3ws.wsClient) {
      return JX3ws.wsClient;
    } else {
      JX3ws.wsClient = new WebSocketClient({
        url: `${options.wsUrl}?token=${options.wstoken}`,
        heartbeatInterval: 30000,
        reconnectInterval: 5000,
      });
      return JX3ws.wsClient;
    }
  }
}
export default JX3ws;
