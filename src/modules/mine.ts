import type { HttpClient } from "../client.js";
import type { MineCartParams, MineCartItem } from "../types.js";

export class MineModule {
  constructor(private readonly http: HttpClient) {}

  /** 关隘首领 */
  cart(params: MineCartParams = {}) {
    return this.http.request<MineCartItem[]>("/data/mine/cart", params);
  }
}
