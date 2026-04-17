import type { HttpClient } from "../client.js";
import type {
  CardRecordParams, CardRecordData,
  CardRecordsParams, CardRecordsItem,
  CardCachedParams, CardCachedData,
} from "../types.js";

export class CardModule {
  constructor(private readonly http: HttpClient) {}

  /** 角色名片 */
  record(params: CardRecordParams) {
    return this.http.request<CardRecordData>("/data/card/record", params);
  }

  /** 所有名片 */
  records(params: CardRecordsParams) {
    return this.http.request<CardRecordsItem[]>("/data/card/records", params);
  }

  /** 缓存名片 */
  cached(params: CardCachedParams) {
    return this.http.request<CardCachedData>("/data/card/cached", params);
  }
}
