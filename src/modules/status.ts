import type { HttpClient } from "../client.js";
import type { StatusCheckParams, StatusCheckData } from "../types.js";

export class StatusModule {
  constructor(private readonly http: HttpClient) {}

  /** 开服状态 */
  check(params: StatusCheckParams) {
    return this.http.request<StatusCheckData>("/data/status/check", params);
  }
}
