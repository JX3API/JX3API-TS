import { JX3APIClient } from '../client';
import { RoleInfo, Equipment, Achievement, DungeonRecord } from '../types/role';
export declare class RoleService extends JX3APIClient {
    /**
     * 获取角色基础信息
     * @param server 服务器名
     * @param name 角色名
     */
    getRoleInfo(server: string, name: string): Promise<RoleInfo>;
    /**
     * 获取角色装备信息
     * @param server 服务器名
     * @param name 角色名
     */
    getEquipment(server: string, name: string): Promise<Equipment[]>;
    /**
     * 获取角色成就信息
     * @param server 服务器名
     * @param name 角色名
     * @param category 成就分类
     */
    getAchievements(server: string, name: string, category?: string): Promise<Achievement[]>;
    /**
     * 获取角色副本记录
     * @param server 服务器名
     * @param name 角色名
     * @param dungeon 副本名称
     */
    getDungeonRecords(server: string, name: string, dungeon?: string): Promise<DungeonRecord[]>;
    /**
     * 获取角色装分排行
     * @param server 服务器名
     * @param name 角色名
     */
    getEquipmentRank(server: string, name: string): Promise<{
        rank: number;
        total: number;
        score: number;
    }>;
}
//# sourceMappingURL=role.d.ts.map