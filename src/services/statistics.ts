import { JX3APIClient } from '../client';
import {
  ServerPopulation,
  SchoolDistribution,
  GearScoreRanking,
  AchievementRanking,
  StatisticsFilter
} from '../types/statistics';

export class StatisticsService extends JX3APIClient {
  /**
   * 获取服务器人口统计
   * @param server 服务器名
   * @param filter 过滤条件
   */
  async getServerPopulation(
    server: string,
    filter?: Omit<StatisticsFilter, 'server'>
  ): Promise<ServerPopulation> {
    return this.get('/statistics/server/population', { server, ...filter });
  }

  /**
   * 获取门派分布统计
   * @param server 服务器名
   * @param school 门派名称
   */
  async getSchoolDistribution(
    server: string,
    school?: string
  ): Promise<SchoolDistribution[]> {
    return this.get('/statistics/school/distribution', { server, school });
  }

  /**
   * 获取装分排行榜
   * @param filter 过滤条件
   * @param page 页码
   * @param size 每页数量
   */
  async getGearScoreRanking(
    filter: StatisticsFilter,
    page: number = 1,
    size: number = 20
  ): Promise<GearScoreRanking> {
    return this.get('/statistics/ranking/gear_score', {
      ...filter,
      page,
      size
    });
  }

  /**
   * 获取成就排行榜
   * @param filter 过滤条件
   * @param page 页码
   * @param size 每页数量
   */
  async getAchievementRanking(
    filter: StatisticsFilter,
    page: number = 1,
    size: number = 20
  ): Promise<AchievementRanking> {
    return this.get('/statistics/ranking/achievement', {
      ...filter,
      page,
      size
    });
  }

  /**
   * 获取服务器活跃度趋势
   * @param server 服务器名
   * @param days 统计天数
   */
  async getServerActivityTrend(
    server: string,
    days: number = 30
  ): Promise<Array<{
    time: string;
    online: number;
    active: number;
    new_players: number;
  }>> {
    return this.get('/statistics/server/activity/trend', { server, days });
  }

  /**
   * 获取门派流行度趋势
   * @param school 门派名称
   * @param days 统计天数
   */
  async getSchoolPopularityTrend(
    school: string,
    days: number = 30
  ): Promise<Array<{
    time: string;
    total_count: number;
    new_players: number;
    average_score: number;
  }>> {
    return this.get('/statistics/school/popularity/trend', { school, days });
  }
} 