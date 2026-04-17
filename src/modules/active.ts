import type { HttpClient } from "../client.js";
import type {
  ActiveCalendarParams, ActiveCalendarData,
  ActiveCelebsParams, ActiveCelebsItem,
  ActiveListCalendarParams, ActiveListCalendarData,
  ActiveMonsterParams, ActiveMonsterData,
  ActiveNextEventParams, ActiveNextEventItem,
} from "../types.js";

export class ActiveModule {
  constructor(private readonly http: HttpClient) {}

  /** 活动日历 */
  calendar(params: ActiveCalendarParams = {}) {
    return this.http.request<ActiveCalendarData>("/data/active/calendar", params);
  }

  /** 行侠事件 */
  celebs(params: ActiveCelebsParams) {
    return this.http.request<ActiveCelebsItem[]>("/data/active/celebs", params);
  }

  /** 活动月历 */
  listCalendar(params: ActiveListCalendarParams = {}) {
    return this.http.request<ActiveListCalendarData>("/data/active/list/calendar", params);
  }

  /** 百战首领 */
  monster(params: ActiveMonsterParams = {}) {
    return this.http.request<ActiveMonsterData>("/data/active/monster", params);
  }

  /** 扶摇预测 */
  nextEvent(params: ActiveNextEventParams = {}) {
    return this.http.request<ActiveNextEventItem[]>("/data/active/next/event", params);
  }
}
