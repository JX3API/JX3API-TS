import type { HttpClient } from "../client.js";
import type { MentorSearchParams, MentorSearchData } from "../types.js";

export class MentorModule {
  constructor(private readonly http: HttpClient) {}

  /** 师徒系统 */
  search(params: MentorSearchParams) {
    return this.http.request<MentorSearchData>("/data/mentor/search", params);
  }
}
