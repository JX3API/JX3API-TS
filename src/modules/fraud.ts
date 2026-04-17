import type { HttpClient } from "../client.js";
import type { FraudDetailParams, FraudDetailItem } from "../types.js";

export class FraudModule {
  constructor(private readonly http: HttpClient) {}

  /** 骗子查询 */
  detail(params: FraudDetailParams) {
    return this.http.request<FraudDetailItem[]>("/data/fraud/detail", params);
  }
}
