import type { HttpClient } from "../client.js";
import type { SoundConverterParams, SoundConverterData } from "../types.js";

export class SoundModule {
  constructor(private readonly http: HttpClient) {}

  /** 阿里语音 */
  converter(params: SoundConverterParams) {
    return this.http.request<SoundConverterData>("/data/sound/converter", params);
  }
}
