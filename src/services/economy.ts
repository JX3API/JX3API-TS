import { JX3APIClient } from '../client';
import { 
  GoldPrice, 
  ItemInfo, 
  ItemPrice, 
  BlackMarketRecord,
  AuctionItem 
} from '../types/economy';

export class EconomyService extends JX3APIClient {
  /**
   * 获取服务器金价信息
   * @param server 服务器名
   */
  async getGoldPrice(server: string): Promise<GoldPrice> {
    return this.get('/data/economy/gold/price', { server });
  }

  /**
   * 获取物品基础信息
   * @param item_name 物品名称
   */
  async getItemInfo(item_name: string): Promise<ItemInfo> {
    return this.get('/data/item/info', { item_name });
  }

  /**
   * 获取物品价格信息
   * @param server 服务器名
   * @param item_name 物品名称
   */
  async getItemPrice(server: string, item_name: string): Promise<ItemPrice> {
    return this.get('/data/item/price', { server, item_name });
  }

  /**
   * 获取黑市交易记录
   * @param server 服务器名
   * @param item_name 物品名称
   * @param status 交易状态
   */
  async getBlackMarketRecords(
    server: string,
    item_name?: string,
    status?: 'selling' | 'sold' | 'expired'
  ): Promise<BlackMarketRecord[]> {
    return this.get('/data/trade/black_market', { server, item_name, status });
  }

  /**
   * 搜索拍卖行物品
   * @param server 服务器名
   * @param keyword 搜索关键词
   * @param type 物品类型
   * @param quality 物品品质
   */
  async searchAuctionItems(
    server: string,
    keyword: string,
    type?: string,
    quality?: string
  ): Promise<AuctionItem[]> {
    return this.get('/data/trade/auction/search', { 
      server, 
      keyword,
      type,
      quality 
    });
  }

  /**
   * 获取物品历史价格趋势
   * @param server 服务器名
   * @param item_name 物品名称
   * @param days 统计天数
   */
  async getItemPriceTrend(
    server: string,
    item_name: string,
    days: number = 30
  ): Promise<Array<{
    time: string;
    price: number;
    volume: number;
  }>> {
    return this.get('/data/item/price/trend', { server, item_name, days });
  }

  /**
   * 获取服务器金价趋势
   * @param server 服务器名
   * @param days 统计天数
   */
  async getGoldPriceTrend(
    server: string,
    days: number = 30
  ): Promise<Array<{
    time: string;
    stock_price: number;
    platform_price: number;
  }>> {
    return this.get('/data/economy/gold/trend', { server, days });
  }
} 