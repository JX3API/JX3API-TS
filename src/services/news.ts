import { JX3APIClient } from '../client';
import { News, DailyTask, Calendar, Garden } from '../types/news';

export class NewsService extends JX3APIClient {
  /**
   * 获取官方新闻
   * @param limit 获取数量限制
   */
  async getOfficialNews(limit?: number): Promise<News[]> {
    return this.get('/data/news/official', { limit });
  }

  /**
   * 获取维护公告
   */
  async getMaintenanceNews(): Promise<News[]> {
    return this.get('/data/news/maintenance');
  }

  /**
   * 获取最新活动
   */
  async getEvents(): Promise<News[]> {
    return this.get('/data/news/event');
  }

  /**
   * 获取日常任务
   * @param server 服务器名
   */
  async getDailyTasks(server: string): Promise<DailyTask> {
    return this.get('/data/daily/task', { server });
  }

  /**
   * 获取活动日历
   * @param server 服务器名
   */
  async getCalendar(server: string): Promise<Calendar> {
    return this.get('/data/calendar/active', { server });
  }

  /**
   * 获取家园装饰信息
   * @param name 装饰名称
   */
  async getGardenItems(name: string): Promise<Garden[]> {
    return this.get('/data/garden/items', { name });
  }
} 