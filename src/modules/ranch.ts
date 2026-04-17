import type { HttpClient } from "../client.js";
import type { RanchRecordsParams, RanchRecordsData } from "../types.js";

export class RanchModule {
  constructor(private readonly http: HttpClient) {}

  /** 马场刷新 */
  records(params: RanchRecordsParams) {
    return this.http.request<RanchRecordsData>("/data/ranch/records", params);
  }
}
