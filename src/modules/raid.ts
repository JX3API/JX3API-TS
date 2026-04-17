import type { HttpClient } from "../client.js";
import type { RaidRecordsParams, RaidRecordsData } from "../types.js";

export class RaidModule {
  constructor(private readonly http: HttpClient) {}

  /** 副本记录 */
  records(params: RaidRecordsParams) {
    return this.http.request<RaidRecordsData>("/data/raid/records", params);
  }
}
