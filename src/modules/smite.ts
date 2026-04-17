import type { HttpClient } from "../client.js";
import type { SmiteRecordsParams, SmiteRecordItem } from "../types.js";

export class SmiteModule {
  constructor(private readonly http: HttpClient) {}

  /** 诛恶事件 */
  records(params: SmiteRecordsParams = {}) {
    return this.http.request<SmiteRecordItem[]>("/data/smite/records", params);
  }
}
