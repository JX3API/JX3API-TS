export type WSEventType = 'server_status' | 'gold_price' | 'auction_item' | 'system_notice' | 'battle_field' | 'team_recruit' | 'black_market';
export interface WSMessage<T = any> {
    type: WSEventType;
    data: T;
    time: string;
}
export interface WSConfig {
    reconnect?: boolean;
    reconnectInterval?: number;
    maxReconnectAttempts?: number;
    heartbeatInterval?: number;
}
export interface WSSubscription<T = any> {
    event: WSEventType;
    callback: (data: T) => void;
    filter?: {
        server?: string;
        item_id?: number;
        price_range?: {
            min: number;
            max: number;
        };
    };
}
export interface ServerStatusEvent {
    server: string;
    status: 'online' | 'offline' | 'maintenance';
    population: number;
    queue_length?: number;
    maintenance_info?: {
        start_time: string;
        end_time: string;
        description: string;
    };
}
export interface GoldPriceEvent {
    server: string;
    price: number;
    change: number;
    trend: 'up' | 'down' | 'stable';
}
export interface AuctionItemEvent {
    server: string;
    item: {
        id: number;
        name: string;
        quality: string;
    };
    price: number;
    unit_price: number;
    count: number;
    seller: string;
    remaining_time: number;
}
export interface SystemNoticeEvent {
    id: string;
    type: 'info' | 'warning' | 'error';
    title: string;
    content: string;
    server?: string;
    expire_time?: string;
}
//# sourceMappingURL=websocket.d.ts.map