import type { HttpClient } from "../client.js";
import type { RewardStatisticsParams, RewardStatisticsItem } from "../types.js";

export class RewardModule {
  constructor(private readonly http: HttpClient) {}

  /** 掉落统计 */
  statistics(params: RewardStatisticsParams) {
    return this.http.request<RewardStatisticsItem[]>("/data/reward/statistics", params);
  }
}
