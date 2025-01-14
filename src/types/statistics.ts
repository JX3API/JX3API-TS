// 服务器人口统计
export interface ServerPopulation {
  server: string;
  total: number;
  active: number;
  new_players: number;
  peak_online: number;
  distribution: {
    by_level: {
      [level: string]: number;
    };
    by_camp: {
      [camp: string]: number;
    };
    by_school: {
      [school: string]: number;
    };
  };
  trend: Array<{
    time: string;
    online: number;
    active: number;
  }>;
}

// 门派分布统计
export interface SchoolDistribution {
  school: string;
  total_count: number;
  percentage: number;
  roles: {
    [role: string]: {
      count: number;
      percentage: number;
      average_score: number;
      average_achievement: number;
    };
  };
  level_distribution: {
    [level: string]: number;
  };
  gear_score: {
    average: number;
    distribution: {
      [range: string]: number;
    };
  };
}

// 装分排行信息
export interface GearScoreRanking {
  server: string;
  school?: string;
  role?: string;
  total_players: number;
  rankings: Array<{
    rank: number;
    role_id: string;
    name: string;
    school: string;
    score: number;
    equipment: {
      [position: string]: {
        name: string;
        score: number;
      };
    };
  }>;
}

// 成就排行信息
export interface AchievementRanking {
  server: string;
  total_players: number;
  rankings: Array<{
    rank: number;
    role_id: string;
    name: string;
    school: string;
    total_points: number;
    achievement_count: number;
    recent_achievements: Array<{
      id: number;
      name: string;
      points: number;
      time: string;
    }>;
  }>;
}

// 统计数据过滤器
export interface StatisticsFilter {
  server?: string;
  school?: string;
  role?: string;
  level_range?: {
    min: number;
    max: number;
  };
  time_range?: {
    start: string;
    end: string;
  };
} 