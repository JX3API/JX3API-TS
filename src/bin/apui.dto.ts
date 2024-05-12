export namespace ApiDto {
  export type Servers =
    | "幽月轮"
    | "斗转星移"
    | "剑胆琴心"
    | "乾坤一掷"
    | "唯我独尊"
    | "梦江南"
    | "绝代天骄"
    | "蝶恋花"
    | "龙争虎斗"
    | "长安城"
    | "天鹅坪"
    | "破阵子"
    | "青梅煮酒"
    | "飞龙在天";

  export type Camp = "浩气盟" | "恶人谷";
  export type active_calendar = {
    code: number;
    msg: string;
    data: {
      date: string;
      week: string;
      war: string;
      battle: string;
      orecar: string;
      school: string;
      rescue: string;
      luck: string[];
      card: string[];
      team: string[];
    };
    time: number;
  };

  interface LuckData {
    date: string;
    day: string;
    week: string;
    war: string;
    battle: string;
    orecar: string;
    school: string;
    rescue: string;
    luck: string[];
    card: string[];
  }

  type TodayData = {
    date: string;
    week: string;
    year: string;
    month: string;
    day: string;
  };

  export type active_list_calendar = {
    code: number;
    msg: string;
    data: {
      today: TodayData;
      data: LuckData[];
    };
    time: number;
  };
  type EventData = {
    map_name: string;
    event: string;
    site: string;
    desc: string;
    icon: string;
    time: string;
  };
  export type active_celebrity = {
    code: number;
    msg: string;
    data: EventData[];
    time: number;
  };

  interface QuestionData {
    id: number;
    question: string;
    answer: string;
    correctness: number;
    index: number;
    pinyin: string;
  }

  export type exam_answer = {
    code: number;
    msg: string;
    data: QuestionData[];
    time: number;
  };

  interface FlowerData {
    name: string;
    color: string;
    price: number;
    line: string[];
  }

  export type home_flower = {
    code: number;
    msg: string;
    data: {
      [key: string]: FlowerData[];
    };
    time: number;
  };

  export type home_furniture = {
    code: number;
    msg: string;
    data: {
      id: number;
      name: string;
      type: number;
      color: number;
      source: string;
      architecture: number;
      limit: number;
      quality: number;
      view: number;
      practical: number;
      hard: number;
      geomantic: number;
      interesting: number;
      produce: any; // 如果需要具体类型，请替换为实际类型
      image: string;
      tip: string;
    };
    time: number;
  };

  interface DecorationData {
    id: number;
    name: string;
    type: number;
    color: number;
    source: string;
    architecture: number;
    limit: number;
    quality: number;
    view: number;
    practical: number;
    hard: number;
    geomantic: number;
    interesting: number;
    produce: string | null;
    image: string;
    tip: string;
  }

  export type home_travel = {
    code: number;
    msg: string;
    data: DecorationData[];
    time: number;
  };

  interface NewsData {
    id: number;
    value: number;
    type: string;
    title: string;
    date: string;
    url: string;
  }

  export type news_allnews = {
    code: number;
    msg: string;
    data: NewsData[];
    time: number;
  };

  interface AnnouncementData {
    id: number;
    value: number;
    type: string;
    title: string;
    date: string;
    url: string;
  }

  export type news_announce = {
    code: number;
    msg: string;
    data: AnnouncementData[];
    time: number;
  };
  interface ItemData {
    id: number;
    class: string;
    name: string;
    toxic: string;
    attribute: string;
    status: number;
    datetime: string;
  }

  export type school_toxic = {
    code: number;
    msg: string;
    data: ItemData[];
    time: number;
  };

  interface ServerData {
    id: string;
    zone: string;
    type: string;
    name: string;
    column: string;
    center: string;
    duowan: {
      浩气盟: number[];
      恶人谷: number[];
    };
    abbreviation: string[];
    subordinate: string[];
  }
  export type server_master = {
    code: number;
    msg: string;
    data: ServerData;
    time: number;
  };

  interface ApiResponse {
    code: number;
    msg: string;
    data: ServerData;
    time: number;
  }

  export type server_check = {
    code: number;
    msg: string;
    data: {
      id: number;
      zone: string;
      server: Servers;
      status: number;
      time: number;
    };
    time: number;
  };

  export type server_status = {
    code: number;
    msg: string;
    data: {
      zone: string;
      server: string;
      status: string;
    };
    time: number;
  };
}
