import type { HttpClient } from "../client.js";
import type {
  RoleDetailParams, RoleDetailData,
  RoleMonsterParams, RoleMonsterData,
} from "../types.js";

export class RoleModule {
  constructor(private readonly http: HttpClient) {}

  /** 角色信息 */
  detail(params: RoleDetailParams) {
    return this.http.request<RoleDetailData>("/data/role/detail", params);
  }

  /** 角色百战 */
  monster(params: RoleMonsterParams) {
    return this.http.request<RoleMonsterData>("/data/role/monster", params);
  }
}
