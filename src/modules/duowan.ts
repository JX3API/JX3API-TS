import type { HttpClient } from "../client.js";
import type { DuowanStatisticsParams, DuowanStatisticsItem } from "../types.js";

export class DuowanModule {
  constructor(private readonly http: HttpClient) {}

  /** 统战歪歪 */
  statistics(params: DuowanStatisticsParams = {}) {
    return this.http.request<DuowanStatisticsItem[]>("/data/duowan/statistics", params);
  }
}
