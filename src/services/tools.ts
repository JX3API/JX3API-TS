import { JX3APIClient } from '../client';
import {
  MacroAnalysis,
  EquipmentBuild,
  DPSConfig,
  DPSResult,
  TalentSimConfig,
  TalentSimResult
} from '../types/tools';

export class ToolsService extends JX3APIClient {
  /**
   * 解析宏命令
   * @param macro 宏命令文本
   */
  async analyzeMacro(macro: string): Promise<MacroAnalysis> {
    return this.post('/tools/macro/analyze', { macro });
  }

  /**
   * 获取推荐配装
   * @param school 门派
   * @param role 职业类型
   * @param type 配装类型
   */
  async getEquipmentBuild(
    school: string,
    role: string,
    type: 'pve' | 'pvp'
  ): Promise<EquipmentBuild[]> {
    return this.get('/tools/equipment/builds', { school, role, type });
  }

  /**
   * 创建配装方案
   * @param build 配装方案
   */
  async createEquipmentBuild(build: Omit<EquipmentBuild, 'id'>): Promise<EquipmentBuild> {
    return this.post('/tools/equipment/builds', build);
  }

  /**
   * 计算DPS
   * @param config DPS计算配置
   */
  async calculateDPS(config: DPSConfig): Promise<DPSResult> {
    return this.post('/tools/dps/calculate', config);
  }

  /**
   * 获取技能循环建议
   * @param school 门派
   * @param role 职业类型
   */
  async getRotationSuggestion(
    school: string,
    role: string
  ): Promise<{
    rotation: string[];
    description: string;
    priority: string[];
  }> {
    return this.get('/tools/dps/rotation', { school, role });
  }

  /**
   * 模拟奇穴效果
   * @param config 奇穴模拟配置
   */
  async simulateTalents(config: TalentSimConfig): Promise<TalentSimResult> {
    return this.post('/tools/talents/simulate', config);
  }

  /**
   * 获取奇穴推荐
   * @param school 门派
   * @param role 职业类型
   * @param type 场景类型
   */
  async getTalentSuggestion(
    school: string,
    role: string,
    type: 'pve' | 'pvp'
  ): Promise<Array<{
    talents: number[];
    description: string;
    score: number;
  }>> {
    return this.get('/tools/talents/suggestion', { school, role, type });
  }

  /**
   * 比较不同奇穴配置
   * @param configs 多个奇穴配置
   */
  async compareTalents(configs: TalentSimConfig[]): Promise<{
    [key: string]: TalentSimResult;
  }> {
    return this.post('/tools/talents/compare', { configs });
  }
} 