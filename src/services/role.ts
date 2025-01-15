import { JX3APIClient } from '../client';
import { RoleInfo, Equipment, Achievement, DungeonRecord } from '../types/role';

export class RoleService extends JX3APIClient {
  /**
   * 获取角色基础信息
   * @param server 服务器名
   * @param name 角色名
   */
  async getRoleInfo(server: string, name: string): Promise<RoleInfo> {
    return this.get('/data/role/detailed', { server, name });
  }

  /**
   * 获取角色装备信息
   * @param server 服务器名
   * @param name 角色名
   */
  async getEquipment(server: string, name: string): Promise<Equipment[]> {
    return this.get('/data/role/attribute', { server, name });
  }

  /**
   * 获取角色成就信息
   * @param server 服务器名
   * @param name 角色名
   * @param category 成就分类
   */
  async getAchievements(
    server: string,
    name: string,
    category?: string
  ): Promise<Achievement[]> {
    return this.get('/data/role/achievement', { server, name, category });
  }

  /**
   * 获取角色副本记录
   * @param server 服务器名
   * @param name 角色名
   * @param dungeon 副本名称
   */
  async getDungeonRecords(
    server: string,
    name: string,
    dungeon?: string
  ): Promise<DungeonRecord[]> {
    return this.get('/data/role/dungeon', { server, name, dungeon });
  }

  /**
   * 获取角色装分排行
   * @param server 服务器名
   * @param name 角色名
   */
  async getEquipmentRank(server: string, name: string): Promise<{
    rank: number;
    total: number;
    score: number;
  }> {
    return this.get('/data/role/equipment/rank', { server, name });
  }
} 