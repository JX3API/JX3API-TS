import type { HttpClient } from "../client.js";
import type { ShowRecordsParams, ShowRecordItem } from "../types.js";

export class ShowModule {
  constructor(private readonly http: HttpClient) {}

  /** 烟花记录 */
  records(params: ShowRecordsParams) {
    return this.http.request<ShowRecordItem[]>("/data/show/records", params);
  }
}
