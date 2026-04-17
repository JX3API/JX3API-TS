import type { HttpClient } from "../client.js";
import type {
  ArenaAwesomeParams, ArenaAwesomeItem,
  ArenaRecentParams, ArenaRecentData,
  ArenaSchoolsParams, ArenaSchoolsItem,
} from "../types.js";

export class ArenaModule {
  constructor(private readonly http: HttpClient) {}

  /** 名剑排行 */
  awesome(params: ArenaAwesomeParams = {}) {
    return this.http.request<ArenaAwesomeItem[]>("/data/arena/awesome", params);
  }

  /** 名剑战绩 */
  recent(params: ArenaRecentParams) {
    return this.http.request<ArenaRecentData>("/data/arena/recent", params);
  }

  /** 名剑统计 */
  schools(params: ArenaSchoolsParams = {}) {
    return this.http.request<ArenaSchoolsItem[]>("/data/arena/schools", params);
  }
}
