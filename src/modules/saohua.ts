import type { HttpClient } from "../client.js";
import type { SaohuaData } from "../types.js";

export class SaohuaModule {
  constructor(private readonly http: HttpClient) {}

  /** 世界骚话 */
  random() {
    return this.http.request<SaohuaData>("/data/saohua/random");
  }

  /** 舔狗日记 */
  content() {
    return this.http.request<SaohuaData>("/data/saohua/content");
  }
}
