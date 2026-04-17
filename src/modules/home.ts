import type { HttpClient } from "../client.js";
import type {
  HomeFlowerParams, HomeFlowerData,
  HomeFurnitureParams, HomeFurnitureItem,
  HomeTravelParams, HomeTravelItem,
} from "../types.js";

export class HomeModule {
  constructor(private readonly http: HttpClient) {}

  /** 家园鲜花 */
  flower(params: HomeFlowerParams) {
    return this.http.request<HomeFlowerData>("/data/home/flower", params);
  }

  /** 家园装饰 */
  furniture(params: HomeFurnitureParams) {
    return this.http.request<HomeFurnitureItem[]>("/data/home/furniture", params);
  }

  /** 器物图谱 */
  travel(params: HomeTravelParams) {
    return this.http.request<HomeTravelItem[]>("/data/home/travel", params);
  }
}
