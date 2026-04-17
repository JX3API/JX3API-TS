import type { HttpClient } from "../client.js";
import type { SkillReworkItem } from "../types.js";

export class SkillModule {
  constructor(private readonly http: HttpClient) {}

  /** 技改记录 */
  rework() {
    return this.http.request<SkillReworkItem[]>("/data/skill/rework");
  }
}
