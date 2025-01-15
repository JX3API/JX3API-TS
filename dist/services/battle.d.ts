import { JX3APIClient } from '../client';
import { ArenaRecord, BattleField, SchoolSkill, Talent, TalentBuild } from '../types/battle';
export declare class BattleService extends JX3APIClient {
    /**
     * 获取竞技场战绩
     * @param server 服务器名
     * @param name 角色名
     */
    getArenaRecord(server: string, name: string): Promise<ArenaRecord>;
    /**
     * 获取阵营沙盘信息
     * @param server 服务器名
     * @param map_id 地图ID
     */
    getBattleField(server: string, map_id?: number): Promise<BattleField>;
    /**
     * 获取门派技能信息
     * @param school 门派名称
     * @param skill_name 技能名称
     */
    getSchoolSkills(school: string, skill_name?: string): Promise<SchoolSkill[]>;
    /**
     * 获取奇穴信息
     * @param school 门派名称
     * @param position 奇穴位置
     */
    getTalents(school: string, position?: number): Promise<Talent[]>;
    /**
     * 获取推荐奇穴配装
     * @param school 门派名称
     * @param type 配装类型
     */
    getTalentBuilds(school: string, type?: string): Promise<TalentBuild[]>;
    /**
     * 搜索奇穴配装方案
     * @param keyword 搜索关键词
     */
    searchTalentBuilds(keyword: string): Promise<TalentBuild[]>;
}
//# sourceMappingURL=battle.d.ts.map