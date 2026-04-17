import type { HttpClient } from "../client.js";
import type { SteedRecordsParams, SteedRecordItem } from "../types.js";

export class SteedModule {
  constructor(private readonly http: HttpClient) {}

  /** 的卢记录 */
  records(params: SteedRecordsParams = {}) {
    return this.http.request<SteedRecordItem[]>("/data/steed/records", params);
  }
}
