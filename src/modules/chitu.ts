import type { HttpClient } from "../client.js";
import type {
  ChituRecordsParams, ChituRecordItem,
  ChituWeekRecordsParams, ChituWeekRecordItem,
} from "../types.js";

export class ChituModule {
  constructor(private readonly http: HttpClient) {}

  /** 本日赤兔 */
  records(params: ChituRecordsParams = {}) {
    return this.http.request<ChituRecordItem[]>("/data/chitu/records", params);
  }

  /** 本周赤兔 */
  weekRecords(params: ChituWeekRecordsParams = {}) {
    return this.http.request<ChituWeekRecordItem[]>("/data/chitu/week/records", params);
  }
}
