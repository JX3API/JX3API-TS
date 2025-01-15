import { JX3APIClient } from '../client';
import { ServerPopulation, SchoolDistribution, GearScoreRanking, AchievementRanking, StatisticsFilter } from '../types/statistics';
export declare class StatisticsService extends JX3APIClient {
    /**
     * 获取服务器人口统计
     * @param server 服务器名
     * @param filter 过滤条件
     */
    getServerPopulation(server: string, filter?: Omit<StatisticsFilter, 'server'>): Promise<ServerPopulation>;
    /**
     * 获取门派分布统计
     * @param server 服务器名
     * @param school 门派名称
     */
    getSchoolDistribution(server: string, school?: string): Promise<SchoolDistribution[]>;
    /**
     * 获取装分排行榜
     * @param filter 过滤条件
     * @param page 页码
     * @param size 每页数量
     */
    getGearScoreRanking(filter: StatisticsFilter, page?: number, size?: number): Promise<GearScoreRanking>;
    /**
     * 获取成就排行榜
     * @param filter 过滤条件
     * @param page 页码
     * @param size 每页数量
     */
    getAchievementRanking(filter: StatisticsFilter, page?: number, size?: number): Promise<AchievementRanking>;
    /**
     * 获取服务器活跃度趋势
     * @param server 服务器名
     * @param days 统计天数
     */
    getServerActivityTrend(server: string, days?: number): Promise<Array<{
        time: string;
        online: number;
        active: number;
        new_players: number;
    }>>;
    /**
     * 获取门派流行度趋势
     * @param school 门派名称
     * @param days 统计天数
     */
    getSchoolPopularityTrend(school: string, days?: number): Promise<Array<{
        time: string;
        total_count: number;
        new_players: number;
        average_score: number;
    }>>;
}
//# sourceMappingURL=statistics.d.ts.map