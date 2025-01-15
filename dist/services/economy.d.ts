import { JX3APIClient } from '../client';
import { GoldPrice, ItemInfo, ItemPrice, BlackMarketRecord, AuctionItem } from '../types/economy';
export declare class EconomyService extends JX3APIClient {
    /**
     * 获取服务器金价信息
     * @param server 服务器名
     */
    getGoldPrice(server: string): Promise<GoldPrice>;
    /**
     * 获取物品基础信息
     * @param item_name 物品名称
     */
    getItemInfo(item_name: string): Promise<ItemInfo>;
    /**
     * 获取物品价格信息
     * @param server 服务器名
     * @param item_name 物品名称
     */
    getItemPrice(server: string, item_name: string): Promise<ItemPrice>;
    /**
     * 获取黑市交易记录
     * @param server 服务器名
     * @param item_name 物品名称
     * @param status 交易状态
     */
    getBlackMarketRecords(server: string, item_name?: string, status?: 'selling' | 'sold' | 'expired'): Promise<BlackMarketRecord[]>;
    /**
     * 搜索拍卖行物品
     * @param server 服务器名
     * @param keyword 搜索关键词
     * @param type 物品类型
     * @param quality 物品品质
     */
    searchAuctionItems(server: string, keyword: string, type?: string, quality?: string): Promise<AuctionItem[]>;
    /**
     * 获取物品历史价格趋势
     * @param server 服务器名
     * @param item_name 物品名称
     * @param days 统计天数
     */
    getItemPriceTrend(server: string, item_name: string, days?: number): Promise<Array<{
        time: string;
        price: number;
        volume: number;
    }>>;
    /**
     * 获取服务器金价趋势
     * @param server 服务器名
     * @param days 统计天数
     */
    getGoldPriceTrend(server: string, days?: number): Promise<Array<{
        time: string;
        stock_price: number;
        platform_price: number;
    }>>;
}
//# sourceMappingURL=economy.d.ts.map