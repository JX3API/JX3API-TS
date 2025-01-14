// 宏命令类型
export interface MacroCommand {
  type: 'cast' | 'target' | 'use' | 'wait' | 'condition';
  skill?: string;
  item?: string;
  target?: string;
  time?: number;
  condition?: string;
}

// 宏解析结果
export interface MacroAnalysis {
  commands: MacroCommand[];
  cast_sequence: string[];
  items_required: string[];
  estimated_time: number;
  warnings: string[];
}

// 装备配置
export interface EquipmentBuild {
  id: string;
  name: string;
  school: string;
  role: string;
  author: string;
  update_time: string;
  description: string;
  equipment: {
    [position: string]: {
      id: number;
      name: string;
      enchant?: {
        id: number;
        name: string;
        level: number;
      };
      embed?: Array<{
        id: number;
        name: string;
        level: number;
      }>;
      strength: number;
    };
  };
  attributes: {
    [key: string]: number;
  };
  score: number;
}

// DPS计算配置
export interface DPSConfig {
  school: string;
  role: string;
  target: {
    level: number;
    defense: number;
    resistance: number;
  };
  buffs: string[];
  debuffs: string[];
  talents: number[];
  equipment: EquipmentBuild;
  rotation: string[];
}

// DPS计算结果
export interface DPSResult {
  total_damage: number;
  dps: number;
  duration: number;
  skill_damage: {
    [skill: string]: {
      damage: number;
      count: number;
      crit_rate: number;
      percentage: number;
    };
  };
  attributes: {
    [key: string]: number;
  };
  buffs_uptime: {
    [buff: string]: number;
  };
}

// 奇穴配置
export interface TalentSimConfig {
  school: string;
  talents: number[];
  target_attributes: string[];
  equipment?: EquipmentBuild;
}

// 奇穴模拟结果
export interface TalentSimResult {
  attributes: {
    [key: string]: {
      base: number;
      bonus: number;
      final: number;
    };
  };
  skill_effects: {
    [skill: string]: {
      damage_bonus: number;
      cooldown_reduction: number;
      additional_effects: string[];
    };
  };
  overall_score: number;
} 