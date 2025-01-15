import { JX3APIClient } from '../client';
import { News, DailyTask, Calendar, Garden } from '../types/news';
export declare class NewsService extends JX3APIClient {
    /**
     * 获取官方新闻
     * @param limit 获取数量限制
     */
    getOfficialNews(limit?: number): Promise<News[]>;
    /**
     * 获取维护公告
     */
    getMaintenanceNews(): Promise<News[]>;
    /**
     * 获取最新活动
     */
    getEvents(): Promise<News[]>;
    /**
     * 获取日常任务
     * @param server 服务器名
     */
    getDailyTasks(server: string): Promise<DailyTask>;
    /**
     * 获取活动日历
     * @param server 服务器名
     */
    getCalendar(server: string): Promise<Calendar>;
    /**
     * 获取家园装饰信息
     * @param name 装饰名称
     */
    getGardenItems(name: string): Promise<Garden[]>;
}
//# sourceMappingURL=news.d.ts.map