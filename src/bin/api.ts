import { RequestOptions, RequestHttp } from "../utils/request";
import { ApiDto } from "./apui.dto";
/**
 * 创建一个新的 api 实例。
 *
 * @param {Object} options - 请求的选项。
 * @param {string} options.token - jx3api的token。
 * @param {string} options.ticket - 推栏ticket。
 * @param {string} [options.url="https://www.jx3api.com"] - 请求的 URL。默认为 "https://www.jx3api.com"。
 */
export class api {
  private requestHttp: RequestHttp;
  static instance: api;
  constructor(options: RequestOptions) {
    this.requestHttp = new RequestHttp(options);
    this.server_check("梦江南").then((res) => {
      res.data.server;
    });
  }
  //单例实现
  static create(options: RequestOptions) {
    if (!api.instance) {
      api.instance = new api(options);
    }
    return api.instance;
  }

  /**
   * 活动日历
   *
   * 今天、明天、后天、日常任务。
   * 只有星期三、星期五、星期六、星期日 才有美人画图，星期三、星期五 才有世界首领，若非活动时间不返回相关键与值。
   *
   * @param {ApiDto.Servers|string} [server] - 区服名称，查找该区服的记录。
   * @param {number} [num=0] - 预测时间，预测指定时间的日常，默认值为0（即当天），1为明天，以此类推。
   * @returns {ApiDto.active_calendar} - 包含今天、明天、后天、日常任务的对象。
   */
  active_calendar(server?: ApiDto.Servers | string, num: number = 0) {
    return this.requestHttp.post<ApiDto.active_calendar>("/data/active/calendar", {
      server: server,
      num: num,
    });
  }

  /**
   * 活动月历
   *
   * 预测每天的日常任务。
   * 只有星期三、星期五、星期六、星期日 才有美人画图，星期三、星期五 才有世界首领，若非活动时间不返回相关键与值。
   *
   * @param {number} [num=15] - 预测时间，预测指定时间范围内的活动，默认值为15（即当天），1为明天，以此类推。
   * @returns {ApiDto.active_list_calendar} - 包含预测每天的日常任务的对象。
   */
  active_list_calendar(num: number = 15) {
    return this.requestHttp.post<ApiDto.active_list_calendar>("/data/active/list/calendar", {
      num: num,
    });
  }

  /**
   * 行侠事件
   *
   * 当前时间的楚天社/云从社进度。
   *
   * @param {number} [season=2] - 第几赛季，用于返回楚天社或云从社的判断条件，可选值：1-3。
   * @returns {Promise<ApiDto.active_celebrity>} - 包含当前时间的楚天社/云从社进度的数组。
   */
  active_celebrity(season: number = 2): Promise<Array<ApiDto.active_celebrity>> {
    return this.requestHttp.post<Array<ApiDto.active_celebrity>>("/data/active/celebrity", {
      season: season,
    });
  }

  /**
   * 科举试题
   *
   * 科举答案。
   *
   * @param {string} match - 科举试题，支持首字母，支持模糊查询。
   * @param {number} [limit=10] - 设置返回的数量，默认值为10。
   * @returns {Promise<ApiDto.exam_answer>} - 包含科举试题答案的数组。
   */
  exam_answer(match: string, limit: number = 10): Promise<Array<ApiDto.exam_answer>> {
    return this.requestHttp.post<Array<ApiDto.exam_answer>>("/data/exam/answer", {
      match: match,
      limit: limit,
    });
  }

  /**
   * 鲜花价格
   *
   * 家园鲜花最高价格线路。
   *
   * @param {ApiDto.Servers|string} server - 区服名称，查找该区服的记录。
   * @param {string|null} [name=null] - 鲜花名称，查找该鲜花的记录。
   * @param {string|null} [map=null] - 地图名称，查找该地图的记录。
   * @returns {Promise<ApiDto.home_flower>} - 鲜花价格。
   */
  home_flower(server: ApiDto.Servers | string, name: string | null = null, map: string | null = null): Promise<ApiDto.home_flower> {
    return this.requestHttp.post<ApiDto.home_flower>("/data/home/flower", {
      server: server,
      name: name,
      map: map,
    });
  }

  /**
   * 家园装饰
   *
   * 装饰详情。
   *
   * @param {string} name - 装饰名称，查找该装饰的详细记录。
   * @returns {Promise<ApiDto.home_furniture>} - 装饰详情。
   */
  home_furniture(name: string): Promise<ApiDto.home_furniture> {
    return this.requestHttp.post<ApiDto.home_furniture>("/data/home/furniture", {
      name: name,
    });
  }

  /**
   * 器物图谱
   *
   * 器物谱地图产出装饰。
   *
   * @param {string} name - 地图名称，查找该地图的家具。
   * @returns {Promise<ApiDto.home_travel>} - 地图产出装饰。
   */
  home_travel(name: string): Promise<ApiDto.home_travel> {
    return this.requestHttp.post<ApiDto.home_travel>("/data/home/travel", {
      name: name,
    });
  }

  /**
   * 新闻资讯
   *
   * 官方最新公告及新闻。
   *
   * @param {number} [limit=10] - 单页数量，设置返回的数量，默认值为10。
   * @returns {Promise<ApiDto.news_allnews>} - 官方最新公告及新闻。
   */
  news_allnews(limit: number = 10): Promise<ApiDto.news_allnews> {
    return this.requestHttp.post<ApiDto.news_allnews>("/data/news/allnews", {
      limit: limit,
    });
  }

  /**
   * 维护公告
   *
   * 官方最新维护公告及新闻。
   *
   * @param {number} [limit=10] - 单页数量，设置返回的数量，默认值为10。
   * @returns {Promise<ApiDto.news_announce>} - 官方最新维护公告及新闻。
   */
  news_announce(limit: number = 10): Promise<ApiDto.news_announce> {
    return this.requestHttp.post<ApiDto.news_announce>("/data/news/announce", {
      limit: limit,
    });
  }

  /**
   * 小药清单
   *
   * 推荐的小药清单。
   *
   * @param {string} name - 心法名称，查找该心法的记录。
   * @returns {Promise<ApiDto.school_toxic>} - 推荐的小药清单。
   */
  school_toxic(name: string): Promise<ApiDto.school_toxic> {
    return this.requestHttp.post<ApiDto.school_toxic>("/data/school/toxic", {
      name: name,
    });
  }

  /**
   * 搜索区服
   *
   * 简称搜索主次服务器。
   *
   * @param {ApiDto.Servers|string} name - 区服名称，查找该区服的记录。
   * @returns {Promise<ApiDto.server_master>} - 主次服务器信息。
   */
  server_master(name: ApiDto.Servers | string): Promise<ApiDto.server_master> {
    return this.requestHttp.post<ApiDto.server_master>("/data/server/master", {
      name: name,
    });
  }

  /**
   * 开服检查
   *
   * 服务器当前状态 [ 已开服/维护中 ]。
   * 未输入区服名称或输入错误区服名称时，将返回全部区服的状态数据，可用于开服监控(支持轮询请求)。
   * 刷新频率: 30 秒。
   *
   * @param {ApiDto.Servers | string} [server] - 区服名称，查找该区服的记录。
   * @returns {Promise<ApiDto.server_check>} - 服务器当前状态 [ 维护/正常/繁忙/爆满 ]。
   */
  server_check(server?: ApiDto.Servers | string): Promise<ApiDto.server_check> {
    return this.requestHttp.post<ApiDto.server_check>("/data/server/check", {
      server: server,
    });
  }

  /**
   * 查看状态
   *
   * 服务器当前状态 [ 维护/正常/繁忙/爆满 ]。
   *
   * @param {ApiDto.Servers | string} server - 区服名称，查找该区服的记录。
   * @returns {Promise<ApiDto.server_status>} - 服务器当前状态 [ 维护/正常/繁忙/爆满 ]。
   */
  server_status(server: string): Promise<ApiDto.server_status> {
    return this.requestHttp.post<ApiDto.server_status>("/data/server/status", {
      server: server,
    });
  }
}
