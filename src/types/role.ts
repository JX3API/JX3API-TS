// 基础角色信息
export interface RoleInfo {
  server: string;
  name: string;
  zone: string;
  body_type: string;
  camp: string;
  school: string;
  level: number;
  prestige: number;
  experience: number;
  role_id: string;
  force: number;
  equipment_score: number;
}

// 装备信息
export interface Equipment {
  name: string;
  quality: string;
  strength: number;
  position: string;
  icon: string;
  score: number;
  attributes: Array<{
    name: string;
    value: number;
  }>;
  enchant?: {
    name: string;
    level: number;
    attributes: Array<{
      name: string;
      value: number;
    }>;
  };
}

// 成就信息
export interface Achievement {
  id: number;
  name: string;
  desc: string;
  type: string;
  point: number;
  complete_time: string;
  state: number;
  progress?: {
    current: number;
    total: number;
  };
}

// 副本记录
export interface DungeonRecord {
  name: string;
  type: string;
  difficulty: string;
  boss_count: number;
  complete_count: number;
  first_complete_time?: string;
  recent_complete_time?: string;
  history_best_time?: string;
  bosses: Array<{
    name: string;
    complete_count: number;
    first_complete_time?: string;
    recent_complete_time?: string;
    history_best_time?: string;
  }>;
} 