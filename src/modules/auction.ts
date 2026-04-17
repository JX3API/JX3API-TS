import type { HttpClient } from "../client.js";
import type { AuctionRecordsParams, AuctionRecordItem } from "../types.js";

export class AuctionModule {
  constructor(private readonly http: HttpClient) {}

  /** 阵营拍卖记录 */
  records(params: AuctionRecordsParams) {
    return this.http.request<AuctionRecordItem[]>("/data/auction/records", params);
  }
}
