import type { HttpClient } from "../client.js";
import type { MechCalculatorData } from "../types.js";

export class MechModule {
  constructor(private readonly http: HttpClient) {}

  /** 副本解密 */
  calculator() {
    return this.http.request<MechCalculatorData>("/data/mech/calculator");
  }
}
