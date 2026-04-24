import type { ApiResponse, HttpClient } from "../client.js";
import type { StatusCheckData, StatusCheckParams, ServerStatus } from "../types.js";

export class StatusModule {
  constructor(private readonly http: HttpClient) {}

  /** 开服状态 */
  check(params: { server: string; type: 1 }): Promise<ApiResponse<StatusCheckData>>;
  check(params: { server: string; type?: 0 }): Promise<ApiResponse<ServerStatus>>;
  check(params: StatusCheckParams): Promise<ApiResponse<StatusCheckData | ServerStatus>> {
    return this.http.request<StatusCheckData | ServerStatus>("/data/status/check", params);
  }
}
