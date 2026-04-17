import type { HttpClient } from "../client.js";
import type { BattleRecordsParams, BattleRecordItem } from "../types.js";

export class BattleModule {
  constructor(private readonly http: HttpClient) {}

  /** 帮战记录 */
  records(params: BattleRecordsParams) {
    return this.http.request<BattleRecordItem[]>("/data/battle/records", params);
  }
}
