import type { HttpClient } from "../client.js";
import type { NewsAllnewsParams, NewsAnnounceParams, NewsItem } from "../types.js";

export class NewsModule {
  constructor(private readonly http: HttpClient) {}

  /** 新闻资讯 */
  allnews(params: NewsAllnewsParams = {}) {
    return this.http.request<NewsItem[]>("/data/news/allnews", params);
  }

  /** 维护公告 */
  announce(params: NewsAnnounceParams = {}) {
    return this.http.request<NewsItem[]>("/data/news/announce", params);
  }
}
