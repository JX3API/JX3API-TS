import type { HttpClient } from "../client.js";
import type {
  EventCollectParams, EventCollectItem,
  EventRecentParams, EventRecentItem,
  EventRecordsParams, EventRecordItem,
  EventStatisticsParams, EventStatisticsItem,
  EventUnfinishedParams, EventUnfinishedItem,
} from "../types.js";

export class EventModule {
  constructor(private readonly http: HttpClient) {}

  /** 奇遇汇总 */
  collect(params: EventCollectParams) {
    return this.http.request<EventCollectItem[]>("/data/event/collect", params);
  }

  /** 近期奇遇 */
  recent(params: EventRecentParams) {
    return this.http.request<EventRecentItem[]>("/data/event/recent", params);
  }

  /** 角色奇遇 */
  records(params: EventRecordsParams) {
    return this.http.request<EventRecordItem[]>("/data/event/records", params);
  }

  /** 奇遇统计 */
  statistics(params: EventStatisticsParams) {
    return this.http.request<EventStatisticsItem[]>("/data/event/statistics", params);
  }

  /** 未做奇遇 */
  unfinished(params: EventUnfinishedParams) {
    return this.http.request<EventUnfinishedItem[]>("/data/event/unfinished", params);
  }
}
