// 金价信息
export interface GoldPrice {
  server: string;
  time: string;
  stock: {
    price: number;
    trend: 'up' | 'down' | 'stable';
    change: number;
  };
  platform: {
    price: number;
    trend: 'up' | 'down' | 'stable';
    change: number;
  };
  history: Array<{
    time: string;
    stock_price: number;
    platform_price: number;
  }>;
}

// 物品基础信息
export interface ItemInfo {
  id: number;
  name: string;
  icon: string;
  quality: string;
  level: number;
  type: string;
  subtype: string;
  description: string;
  bind_type: string;
  price: number;
  stack_max: number;
  can_trade: boolean;
  attributes?: Array<{
    name: string;
    value: number;
  }>;
}

// 物品价格信息
export interface ItemPrice {
  server: string;
  item_id: number;
  name: string;
  current_price: number;
  average_price: number;
  lowest_price: number;
  highest_price: number;
  volume: number;
  update_time: string;
  history: Array<{
    time: string;
    price: number;
    volume: number;
  }>;
}

// 黑市交易记录
export interface BlackMarketRecord {
  id: string;
  server: string;
  item: {
    id: number;
    name: string;
    quality: string;
    icon: string;
  };
  price: number;
  seller: {
    role_id: string;
    name: string;
    server: string;
  };
  buyer?: {
    role_id: string;
    name: string;
    server: string;
  };
  status: 'selling' | 'sold' | 'expired';
  create_time: string;
  expire_time: string;
  sold_time?: string;
}

// 拍卖行物品
export interface AuctionItem {
  id: string;
  server: string;
  item: ItemInfo;
  price: number;
  unit_price: number;
  count: number;
  seller: {
    role_id: string;
    name: string;
    camp: string;
  };
  create_time: string;
  expire_time: string;
  status: 'selling' | 'sold' | 'expired';
} 