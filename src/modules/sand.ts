import type { HttpClient } from "../client.js";
import type { SandRecordsParams, SandRecordsData } from "../types.js";

export class SandModule {
  constructor(private readonly http: HttpClient) {}

  /** 阵营沙盘 */
  records(params: SandRecordsParams) {
    return this.http.request<SandRecordsData>("/data/sand/records", params);
  }
}
