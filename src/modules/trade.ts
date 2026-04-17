import type { HttpClient } from "../client.js";
import type {
  TradeDemonParams, TradeDemonItem,
  TradeItemSearchParams, TradeItemSearchItem,
  TradeItemRecordsParams, TradeItemRecordsData,
  TradeRecordsParams, TradeRecordsData,
} from "../types.js";

export class TradeModule {
  constructor(private readonly http: HttpClient) {}

  /** 金币价格 */
  demon(params: TradeDemonParams = {}) {
    return this.http.request<TradeDemonItem[]>("/data/trade/demon", params);
  }

  /** 搜索物品 */
  itemSearch(params: TradeItemSearchParams) {
    return this.http.request<TradeItemSearchItem[]>("/data/trade/item/search", params);
  }

  /** 物品价格 */
  itemRecords(params: TradeItemRecordsParams) {
    return this.http.request<TradeItemRecordsData>("/data/trade/item/records", params);
  }

  /** 黑市物价 */
  records(params: TradeRecordsParams) {
    return this.http.request<TradeRecordsData>("/data/trade/records", params);
  }
}
