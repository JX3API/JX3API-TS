export interface News {
  id: number;
  type: string;
  title: string;
  url: string;
  date: string;
  content?: string;
}

export interface DailyTask {
  date: string;
  week: string;
  war: string;
  battle: string;
  school: string;
  drawing: string;
  rescue: string;
  reward: string;
  five_lake: string;
  team_task: string;
  competition: string;
}

export interface Calendar {
  date: string;
  week: string;
  events: Array<{
    name: string;
    type: string;
    description: string;
    start_time: string;
    end_time: string;
  }>;
}

export interface Garden {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  properties: {
    comfort?: number;
    view?: number;
    fun?: number;
  };
} 