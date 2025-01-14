// WebSocket事件类型
export type WSEventType = 
  | 'server_status'      // 服务器状态
  | 'gold_price'         // 金价变动
  | 'auction_item'       // 交易行物品
  | 'system_notice'      // 系统公告
  | 'battle_field'       // 战场状态
  | 'team_recruit'      // 团队招募
  | 'black_market';      // 黑市物品

// WebSocket消息
export interface WSMessage<T = any> {
  type: WSEventType;
  data: T;
  time: string;
}

// WebSocket配置
export interface WSConfig {
  reconnect?: boolean;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
  heartbeatInterval?: number;
}

// WebSocket订阅配置
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

// 服务器状态事件
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

// 金价变动事件
export interface GoldPriceEvent {
  server: string;
  price: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

// 交易行物品事件
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

// 系统公告事件
export interface SystemNoticeEvent {
  id: string;
  type: 'info' | 'warning' | 'error';
  title: string;
  content: string;
  server?: string;
  expire_time?: string;
} 