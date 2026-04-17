import type { HttpClient } from "../client.js";
import type { FenxianRecordItem } from "../types.js";

export class FenxianModule {
  constructor(private readonly http: HttpClient) {}

  /** 阵营事件 */
  records() {
    return this.http.request<FenxianRecordItem[]>("/data/fenxian/records");
  }
}
