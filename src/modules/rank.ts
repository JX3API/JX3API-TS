import type { HttpClient } from "../client.js";
import type {
  RankStatisticsParams, RankStatisticsData,
  RankTrialsParams, RankTrialsData,
} from "../types.js";

export class RankModule {
  constructor(private readonly http: HttpClient) {}

  /** 本服榜单 */
  statistics(params: RankStatisticsParams) {
    return this.http.request<RankStatisticsData>("/data/rank/statistics", params);
  }

  /** 试炼排行 */
  trials(params: RankTrialsParams) {
    return this.http.request<RankTrialsData>("/data/rank/trials", params);
  }
}
