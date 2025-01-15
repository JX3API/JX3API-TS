import { JX3APIClient } from '../client';
import { MacroAnalysis, EquipmentBuild, DPSConfig, DPSResult, TalentSimConfig, TalentSimResult } from '../types/tools';
export declare class ToolsService extends JX3APIClient {
    /**
     * 解析宏命令
     * @param macro 宏命令文本
     */
    analyzeMacro(macro: string): Promise<MacroAnalysis>;
    /**
     * 获取推荐配装
     * @param school 门派
     * @param role 职业类型
     * @param type 配装类型
     */
    getEquipmentBuild(school: string, role: string, type: 'pve' | 'pvp'): Promise<EquipmentBuild[]>;
    /**
     * 创建配装方案
     * @param build 配装方案
     */
    createEquipmentBuild(build: Omit<EquipmentBuild, 'id'>): Promise<EquipmentBuild>;
    /**
     * 计算DPS
     * @param config DPS计算配置
     */
    calculateDPS(config: DPSConfig): Promise<DPSResult>;
    /**
     * 获取技能循环建议
     * @param school 门派
     * @param role 职业类型
     */
    getRotationSuggestion(school: string, role: string): Promise<{
        rotation: string[];
        description: string;
        priority: string[];
    }>;
    /**
     * 模拟奇穴效果
     * @param config 奇穴模拟配置
     */
    simulateTalents(config: TalentSimConfig): Promise<TalentSimResult>;
    /**
     * 获取奇穴推荐
     * @param school 门派
     * @param role 职业类型
     * @param type 场景类型
     */
    getTalentSuggestion(school: string, role: string, type: 'pve' | 'pvp'): Promise<Array<{
        talents: number[];
        description: string;
        score: number;
    }>>;
    /**
     * 比较不同奇穴配置
     * @param configs 多个奇穴配置
     */
    compareTalents(configs: TalentSimConfig[]): Promise<{
        [key: string]: TalentSimResult;
    }>;
}
//# sourceMappingURL=tools.d.ts.map