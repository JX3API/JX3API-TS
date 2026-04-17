import type { HttpClient } from "../client.js";
import type {
  SchoolMatrixParams, SchoolMatrixData,
  SchoolSeniorityParams, SchoolSeniorityItem,
  SchoolSkillsParams, SchoolSkillItem,
  SchoolTalentParams, SchoolTalentItem,
} from "../types.js";

export class SchoolModule {
  constructor(private readonly http: HttpClient) {}

  /** 心法阵眼 */
  matrix(params: SchoolMatrixParams) {
    return this.http.request<SchoolMatrixData>("/data/school/matrix", params);
  }

  /** 资历排行 */
  seniority(params: SchoolSeniorityParams = {}) {
    return this.http.request<SchoolSeniorityItem[]>("/data/school/seniority", params);
  }

  /** 技能详情 */
  skills(params: SchoolSkillsParams) {
    return this.http.request<SchoolSkillItem[]>("/data/school/skills", params);
  }

  /** 奇穴详情 */
  talent(params: SchoolTalentParams) {
    return this.http.request<SchoolTalentItem[]>("/data/school/talent", params);
  }
}
