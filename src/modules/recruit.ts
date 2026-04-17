import type { HttpClient } from "../client.js";
import type { RecruitSearchParams, RecruitSearchData } from "../types.js";

export class RecruitModule {
  constructor(private readonly http: HttpClient) {}

  /** 团队招募 */
  search(params: RecruitSearchParams) {
    return this.http.request<RecruitSearchData>("/data/recruit/search", params);
  }
}
