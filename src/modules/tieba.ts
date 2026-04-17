import type { HttpClient } from "../client.js";
import type {
  TiebaItemRecordsParams, TiebaItemRecordItem,
  TiebaRandomParams, TiebaRandomItem,
} from "../types.js";

export class TiebaModule {
  constructor(private readonly http: HttpClient) {}

  /** 贴吧物价 */
  itemRecords(params: TiebaItemRecordsParams) {
    return this.http.request<TiebaItemRecordItem[]>("/data/tieba/item/records", params);
  }

  /** 八卦帖子 */
  random(params: TiebaRandomParams) {
    return this.http.request<TiebaRandomItem[]>("/data/tieba/random", params);
  }
}
