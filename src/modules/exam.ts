import type { HttpClient } from "../client.js";
import type { ExamSearchParams, ExamSearchItem } from "../types.js";

export class ExamModule {
  constructor(private readonly http: HttpClient) {}

  /** 科举答题 */
  search(params: ExamSearchParams = {}) {
    return this.http.request<ExamSearchItem[]>("/data/exam/search", params);
  }
}
