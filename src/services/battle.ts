import { JX3APIClient } from '../client';
import { ArenaRecord, BattleField, SchoolSkill, Talent, TalentBuild } from '../types/battle';

export class BattleService extends JX3APIClient {
  /**
   * 获取竞技场战绩
   * @param server 服务器名
   * @param name 角色名
   */
  async getArenaRecord(server: string, name: string): Promise<ArenaRecord> {
    return this.get('/data/arena/record', { server, name });
  }

  /**
   * 获取阵营沙盘信息
   * @param server 服务器名
   * @param map_id 地图ID
   */
  async getBattleField(server: string, map_id?: number): Promise<BattleField> {
    return this.get('/data/battle/field', { server, map_id });
  }

  /**
   * 获取门派技能信息
   * @param school 门派名称
   * @param skill_name 技能名称
   */
  async getSchoolSkills(school: string, skill_name?: string): Promise<SchoolSkill[]> {
    return this.get('/data/school/skills', { school, skill_name });
  }

  /**
   * 获取奇穴信息
   * @param school 门派名称
   * @param position 奇穴位置
   */
  async getTalents(school: string, position?: number): Promise<Talent[]> {
    return this.get('/data/school/talents', { school, position });
  }

  /**
   * 获取推荐奇穴配装
   * @param school 门派名称
   * @param type 配装类型
   */
  async getTalentBuilds(school: string, type?: string): Promise<TalentBuild[]> {
    return this.get('/data/school/talent_builds', { school, type });
  }

  /**
   * 搜索奇穴配装方案
   * @param keyword 搜索关键词
   */
  async searchTalentBuilds(keyword: string): Promise<TalentBuild[]> {
    return this.get('/data/school/talent_builds/search', { keyword });
  }
} 