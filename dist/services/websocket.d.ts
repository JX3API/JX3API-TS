import { JX3APIClient } from '../client';
import { WSEventType, WSConfig, WSSubscription } from '../types/websocket';
export declare class WebSocketService extends JX3APIClient {
    private ws;
    private subscriptions;
    private reconnectAttempts;
    private heartbeatTimer;
    private config;
    /**
     * 连接WebSocket
     * @param config WebSocket配置
     */
    connect(config?: WSConfig): void;
    /**
     * 断开WebSocket连接
     */
    disconnect(): void;
    /**
     * 订阅事件
     * @param subscription 订阅配置
     */
    subscribe<T>(subscription: WSSubscription<T>): void;
    /**
     * 取消订阅事件
     * @param event 事件类型
     * @param callback 回调函数
     */
    unsubscribe<T>(event: WSEventType, callback: (data: T) => void): void;
    private setupWebSocket;
    private startHeartbeat;
    private stopHeartbeat;
    private sendMessage;
    private matchFilter;
}
//# sourceMappingURL=websocket.d.ts.map