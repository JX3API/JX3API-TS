import type { HttpClient } from "../client.js";
import type { MasterSearchParams, MasterSearchData } from "../types.js";

export class MasterModule {
  constructor(private readonly http: HttpClient) {}

  /** 搜索区服 */
  search(params: MasterSearchParams) {
    return this.http.request<MasterSearchData>("/data/master/search", params);
  }
}
