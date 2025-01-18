// 活动日历
export interface ActiveCalendar {
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
}

export interface ActiveCalendarParams {
  server?: string;
  num?: number;
}

// 活动列表日历
export interface ActiveListCalendar {
  today: {
    date: string;
    week: string;
    year: string;
    month: string;
    day: string;
  };
  data: Array<{
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
  }>;
}

export interface ActiveListCalendarParams {
  num?: number;
}

// 名人堂活动
export interface ActiveCelebs {
  map_name: string;
  event: string;
  site: string;
  desc: string;
  icon: string;
  time: string;
}

export interface ActiveCelebsParams {
  name: "楚天社" | "云从社" | "披风会";
}

// 科举答案查询
export interface ExamAnswer {
  id: number;
  question: string;
  answer: string;
  correctness: number;
  index: number;
  pinyin: string;
}

export interface ExamAnswerParams {
  subject: string;
  limit?: number;
}

// 家园花卉查询
export interface HomeFlower {
  [mapName: string]: Array<{
    name: string;
    color: string;
    price: number;
    line: string[];
  }>;
}

export interface HomeFlowerParams {
  server: string;
  name?: string;
  map?: string;
}

// 家园装饰查询
export interface HomeFurniture {
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

export interface HomeFurnitureParams {
  name: string;
}

// 家园游历查询
export interface HomeTravel {
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
  produce: string;
  image: string;
  tip: string;
}

export interface HomeTravelParams {
  name: string;
}

// 新闻公告
export interface NewsItem {
  id: number;
  token: number;
  class: string;
  title: string;
  date: string;
  url: string;
}

export interface NewsParams {
  limit?: number;
}

// 服务器信息查询
export interface ServerMaster {
  id: string;
  zone: string;
  name: string;
  column: string;
  duowan: {
    [key: string]: number[];
  };
  abbreviation: string[];
  subordinate: string[];
}

export interface ServerMasterParams {
  name: string;
}

// 维护公告
export interface NewsAnnounce {
  id: number;
  token: number;
  class: string;
  title: string;
  date: string;
  url: string;
}

export interface NewsAnnounceParams {
  limit?: number;
}

// 技能记录查询
export interface SkillRecord {
  id: string;
  title: string;
  url: string;
  time: string;
}

// 开服检查
export interface ServerCheck {
  id: number;
  zone: string;
  server: string;
  status: number;
  time: number;
}

export interface ServerCheckParams {
  server?: string;
}

// 服务器状态
export interface ServerStatus {
  zone: string;
  server: string;
  status: string;
}

export interface ServerStatusParams {
  server: string;
}

// 本周百战异闻录
export interface ActiveMonster {
  start: number;
  end: number;
  data: Array<{
    level: number;
    name: string;
    skill: string[];
    data: {
      id: number;
      name: string;
      list: string[];
      desc: string;
      time: number;
    };
  }>;
}

// 烟花统计
export interface FireworksCollect {
  zone: string;
  server: string;
  sender: string;
  receive: string;
  name: string;
  count: number;
  time: number;
}

export interface FireworksCollectParams {
  server: string;
  num?: number;
}

// 烟花记录
export interface FireworksRecord {
  id: number;
  zone: string;
  server: string;
  name: string;
  map_name: string;
  sender: string;
  receive: string;
  status: number;
  time: number;
}

export interface FireworksRecordParams {
  server: string;
  name: string;
}

// 拍卖记录
export interface AuctionRecord {
  id: number;
  zone: string;
  server: string;
  role_name: string;
  camp_name: string;
  name: string;
  amount: string;
  time: number;
}

export interface AuctionRecordParams {
  server: string;
  name?: string;
  limit?: number;
}

// 的卢记录
export interface DiluRecord {
  id: number;
  zone: string;
  server: string;
  name: string;
  level: number;
  map_name: string;
  refresh_time: number;
  capture_role_name: string;
  capture_camp_name: string;
  capture_time: number;
  auction_role_name: string;
  auction_camp_name: string;
  auction_time: number;
  auction_amount: string;
  start_time: number;
  end_time: number;
}

export interface DiluRecordParams {
  server?: string;
}

// 烟花汇总
export interface FireworksStatistical {
  id: number;
  zone: string;
  server: string;
  name: string;
  map_name: string;
  sender: string;
  receive: string;
  mode: number;
  status: number;
  time: number;
}

export interface FireworksStatisticalParams {
  server: string;
  name: string;
  limit?: number;
}

// 诈骗记录查询
export interface FraudDetailed {
  records: Array<{
    server: string;
    tieba: string;
    data: Array<{
      title: string;
      tid: number;
      text: string;
      time: number;
    }>;
  }>;
}

export interface FraudDetailedParams {
  uid: number;
}

// 奇遇统计查询
export interface LuckStatistical {
  id: number;
  zone: string;
  server: string;
  name: string;
  event: string;
  status: number;
  time: number;
}

export interface LuckStatisticalParams {
  server: string;
  name: string;
  limit?: number;
}

// 近期奇遇查询
export interface LuckRecent {
  id: number;
  zone: string;
  server: string;
  name: string;
  event: string;
  status: number;
  time: number;
}

export interface LuckRecentParams {
  server: string;
}

// 奇遇记录查询
export interface LuckAdventure {
  zone: string;
  server: string;
  name: string;
  event: string;
  level: number;
  status: number;
  time: number;
}

export interface LuckAdventureParams {
  server: string;
  name: string;
  ticket?: string;
}

// 未完成奇遇查询
export interface LuckUnfinished {
  name: string;
  type: string;
  level: number;
}

export interface LuckUnfinishedParams {
  server: string;
  name: string;
  ticket?: string;
}

// 服务器排行榜统计
export interface RankServerStatistical {
  id: number;
  class: string;
  zone: string;
  server: string;
  school: string;
  name: string;
  rank: number;
  level: number;
  camp_name: string;
  tong_name: string;
  score: number;
  datetime: string;
}

export interface RankServerStatisticalParams {
  table: "个人" | "帮会" | "阵营" | "试炼";
  name: string;
}

// 区服排行榜统计
export interface RankStatistical {
  id: number;
  class: string;
  zone: string;
  server: string;
  school: string;
  name: string;
  index: number;
  level: number;
  camp_name: string;
  tong_name: string;
  score: number;
  datetime: string;
}

export interface RankStatisticalParams {
  server: string;
  table: "个人" | "帮会" | "阵营" | "试炼";
  name: string;
}

// 师徒系统-徒弟信息
export interface MemberStudent {
  zone: string;
  server: string;
  data: Array<{
    roleId: number;
    roleName: string;
    roleLevel: number;
    campName: string;
    tongName: string;
    tongMasterName: string;
    bodyId: number;
    bodyName: string;
    forceId: number;
    forceName: string;
    comment: string;
    time: number;
  }>;
}

export interface MemberStudentParams {
  server: string;
  keyword?: string;
}

// 团队招募信息
export interface MemberRecruit {
  zone: string;
  server: string;
  time: number;
  data: Array<{
    crossServer: boolean;
    activityId: number;
    activity: string;
    level: number;
    leader: string;
    pushId: number;
    roomID: string;
    roleId: number;
    createTime: number;
    number: number;
    maxNumber: number;
    label: string[];
    content: string;
  }>;
}

export interface MemberRecruitParams {
  server: string;
  keyword?: string;
  table?: 1 | 2 | 3;
}

// 师徒系统-师傅信息
export interface MemberTeacher {
  zone: string;
  server: string;
  data: Array<{
    roleId: number;
    roleName: string;
    roleLevel: number;
    campName: string;
    tongName: string;
    tongMasterName: string;
    bodyId: number;
    bodyName: string;
    forceId: number;
    forceName: string;
    comment: string;
    time: number;
  }>;
}

export interface MemberTeacherParams {
  server: string;
  keyword?: string;
}

// 角色副本进度
export interface TeamCdList {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  forceName: string;
  forceId: string;
  bodyName: string;
  bodyId: string;
  tongName: string | null;
  tongId: string | null;
  campName: string;
  campId: string;
  personName: string;
  personId: string;
  personAvatar: string;
  data: Array<{
    mapIcon: string;
    mapId: string;
    mapName: string;
    mapType: string;
    bossCount: number;
    bossFinished: number;
    bossProgress: Array<{
      finished: boolean;
      icon: string;
      index: string;
      name: string;
      progressId: string;
    }>;
  }>;
}

export interface TeamCdListParams {
  server: string;
  name: string;
  ticket: string;
}

// 保存角色详情
export interface SaveRoleDetailed {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  forceName: string;
  forceId: string;
  bodyName: string;
  bodyId: string;
  tongName: string | null;
  tongId: string | null;
  campName: string;
  campId: string;
  personName: string;
  personId: string;
  personAvatar: string;
}

export interface SaveRoleDetailedParams {
  server: string;
  roleid: string;
  ticket: string;
}

// 全服物品掉落统计
export interface RewardServerStatistical {
  id: number;
  zone: string;
  server: string;
  name: string;
  role_name: string;
  map_name: string;
  source: number;
  time: number;
}

export interface RewardServerStatisticalParams {
  name: string;
  limit?: number;
}

// 区服物品掉落统计
export interface RewardStatistical {
  id: number;
  zone: string;
  server: string;
  name: string;
  role_name: string;
  map_name: string;
  source: number;
  time: number;
}

export interface RewardStatisticalParams {
  server: string;
  name: string;
  limit?: number;
}

// 角色详情查询
export interface RoleDetailed {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  forceName: string;
  forceId: string;
  bodyName: string;
  bodyId: string;
  tongName: string | null;
  tongId: string | null;
  campName: string;
  campId: string;
  personName: string;
  personId: string;
  personAvatar: string;
}

export interface RoleDetailedParams {
  server: string;
  name: string;
  ticket: string;
}

// 心法奇穴
export interface SchoolForce {
  level: number;
  data: Array<{
    name: string;
    class: number;
    desc: string;
    icon: string;
    kind: string;
    subKind: string;
  }>;
}

export interface SchoolForceParams {
  name: string;
  ticket: string;
}

// 角色精力
export interface RoleMonster {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  gameEnergy: string;
  gameStamina: string;
  skillCount: string;
  skillList: Array<{
    bDeprecated: boolean;
    dwInSkillID: number;
    dwOutSkillID: number;
    nColor: number;
    nCost: number;
    nLevel: number;
    szBossName: string;
    szSkillName: string;
    szType: string;
  }>;
  updateTime: number;
}

export interface RoleMonsterParams {
  server: string;
  name: string;
}

// 角色成就
export interface RoleAchievement {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  forceName: string;
  forceId: string;
  bodyName: string;
  bodyId: string;
  tongName: string | null;
  tongId: string | null;
  campName: string;
  campId: string;
  personName: string;
  personId: string;
  personAvatar: string;
  data: Array<{
    id: number;
    icon: string;
    likes: number;
    name: string;
    class: string;
    subClass: string;
    desc: string;
    detail: string;
    maps: string[];
    isFinished: boolean;
    isFav: boolean;
    type: string;
    currentValue: number;
    triggerValue: number;
    subset: any[];
    rewardItem: any;
    rewardPoint: number;
    rewardPrefix: string;
    rewardSuffix: string;
  }>;
}

export interface RoleAchievementParams {
  server: string;
  role: string;
  name: string;
  ticket: string;
}

// 角色属性
export interface RoleAttribute {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  forceName: string;
  forceId: string;
  bodyName: string;
  bodyId: string;
  tongName: string | null;
  tongId: string | null;
  campName: string;
  campId: string;
  personName: string;
  personId: string;
  personAvatar: string;
  kungfuName: string;
  kungfuId: string;
  equipList: Array<{
    name: string;
    class: string;
    icon: string;
    kind: string;
    subKind: string;
    quality: string;
    strengthLevel: string;
    maxStrengthLevel: string;
    color: string;
    desc: string;
    source: string | null;
    fiveStone?: Array<{
      name: string;
      level: string;
      max: string;
      min: string;
      icon: string;
      kind: string;
      subKind: string;
      desc: string;
      percent: boolean;
    }>;
    modifyType: Array<{
      name: string;
      max: string;
      min: string;
      desc: string;
      percent: boolean;
    }>;
    permanentEnchant?: Array<{
      id: string;
      name: string;
      level: string;
      icon: string;
      attributes: Array<{
        max: string;
        min: string;
        attrib: Array<{
          desc: string;
        }>;
      }>;
    }>;
  }>;
  qixueList: Array<{
    name: string;
    level: number;
    icon: string;
    kind: string;
    subKind: string;
    desc: string;
  }>;
  panelList: {
    score: number;
    panel: Array<{
      name: string;
      percent: boolean;
      value: number;
    }>;
  };
}

export interface RoleAttributeParams {
  server: string;
  name: string;
  ticket: string;
}

// 心法阵眼
export interface SchoolMatrix {
  name: string;
  skillName: string;
  descs: Array<{
    desc: string;
    level: number;
    name: string;
  }>;
}

export interface SchoolMatrixParams {
  name: string;
  ticket: string;
}

// 服务器沙盘
export interface ServerSand {
  zone: string;
  server: string;
  reset: number;
  update: number;
  data: Array<{
    tongId: number;
    tongName: string;
    castleId: number;
    castleName: string;
    masterId: number;
    masterName: string;
    campId: number;
    campName: string;
  }>;
}

export interface ServerSandParams {
  server: string;
}

// 诛恶事件
export interface ServerAntivice {
  id: number;
  zone: string;
  server: string;
  map_name: string;
  time: number;
}



// 跨服阵营事件
export interface ServerEvent {
  id: number;
  camp_name: string;
  fenxian_zone_name: string;
  fenxian_server_name: string;
  friend_zone_name: string;
  friend_server_name: string;
  role_name: string;
  set_time: number;
}

// 心法资历
export interface SchoolSeniority {
  Value: number;
  avatarUrl: string;
  forceIcon: string;
  forceId: number;
  gameVersion: number;
  nickName: string;
  personId: string;
  personNum: number;
  roleId: number;
  roleName: string;
  serverName: string;
  zoneName: string;
  zoneServerName: string;
  forceName: string;
}

export interface SchoolSeniorityParams {
  school: string;
  ticket: string;
}

// 心法技能
export interface SchoolSkill {
  class: string;
  data: Array<{
    name: string;
    simpleDesc: string;
    desc: string;
    specialDesc: string;
    interval: string;
    consumption: string;
    distance: string;
    icon: string;
    kind: string;
    subKind: string;
    releaseType: string;
    weapon: string;
  }>;
  time: number;
}

export interface SchoolSkillParams {
  name: string;
  ticket: string;
}

// 服务器首领
export interface ServerLeader {
  server: string;
  data: Array<{
    id: number;
    zone: string;
    server: string;
    leader: string;
    camp_name: string;
    castle: string;
    status: number;
    str_status: string;
    start_time: number;
    end_time: number;
  }>;
}

// 名片墙缓存
export interface ShowCache {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showAvatar: string;
}

export interface ShowCacheParams {
  server: string;
  name: string;
}

// 随机名片
export interface ShowRandom {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showAvatar: string;
  showStatus: number;
}

export interface ShowRandomParams {
  server?: string;
  body?: string;
  force?: string;
}

// 名片墙信息
export interface ShowCard {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showAvatar: string;
  cacheTime: number;
}

export interface ShowCardParams {
  server: string;
  name: string;
}

// 贴吧物价记录
export interface TiebaItemRecord {
  id: number;
  zone: string;
  server: string;
  name: string;
  url: number;
  context: string;
  reply: number;
  floor: number;
  time: number;
}

export interface TiebaItemRecordsParams {
  server?: string;
  name: string;
  limit?: number;
}

// 金价比例信息
export interface TradeDemon {
  id: number;
  zone: string;
  server: string;
  tieba: string;
  wanbaolou: string;
  dd373: string;
  uu898: string;
  "5173": string;
  "7881": string;
  time: number;
  date: string;
}

export interface TradeDemonParams {
  server?: string;
  limit?: number;
}

// 推栏成就查询
export interface TuilanAchievement {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalRoleId: string;
  forceName: string;
  forceId: string;
  bodyName: string;
  bodyId: string;
  tongName: string | null;
  tongId: string | null;
  campName: string;
  campId: string;
  personName: string;
  personId: string;
  personAvatar: string;
  data: {
    total: {
      [key: string]: {
        pieces: {
          total: number;
          speed: number;
        };
        seniority: {
          total: number;
          speed: number;
        };
      };
    };
    dungeons: {
      [key: string]: {
        [key: string]: {
          pieces: {
            total: number;
            speed: number;
          };
          seniority: {
            total: number;
            speed: number;
          };
        };
      };
    };
    maps: {
      [key: string]: {
        pieces: {
          total: number;
          speed: number;
        };
        seniority: {
          total: number;
          speed: number;
        };
      };
    };
    score: number;
    totalScore: number;
  };
}

export interface TuilanAchievementParams {
  server: string;
  name: string;
  class: 1 | 2 | 3;
  subclass: "杂闻" | "武学" | "修为" | "装备" | "技艺" | "阅读" | "任务" | "足迹" | "战斗" | "声望" | "秘境" | "帮会" | "阵营" | "节日" | "活动" | "风雨江湖路" | "家园" | "剑侠录";
  ticket: string;
}

// 成语接龙
export interface IdiomSolitaire {
  question: {
    id: number;
    name: string;
    tone: string;
    pinyin: string;
    abbreviation: string;
    first: string;
    last: string;
    derivation: string;
    example: string;
    explanation: string;
  };
  answer: {
    id: number;
    name: string;
    tone: string;
    pinyin: string;
    abbreviation: string;
    first: string;
    last: string;
    derivation: string;
    example: string;
    explanation: string;
  };
}

export interface IdiomSolitaireParams {
  name: string;
}

// 智能聊天
export interface MixedChat {
  id: number;
  answer: string;
}

export interface MixedChatParams {
  name: string;
  text: string;
}

// 贴吧随机帖子
export interface TiebaRandom {
  id: number;
  class: string;
  zone: string;
  server: string;
  name: string;
  title: string;
  url: number;
  date: string;
}

export interface TiebaRandomParams {
  class: "818" | "616" | "鬼网三" | "鬼网3" | "树洞" | "记录" | "教程" | "街拍" | "故事" | "避雷" | "吐槽" | "提问";
  server?: string;
  limit?: number;
}

// 酷狗音乐搜索
export interface KugouMusic {
  SongName: string;
  AlbumID: string;
  FileHash: string;
  SQFileHash: string;
  HQFileHash: string;
  MvHash: string;
  Audioid: number;
  SingerName: string;
  PlayUrl: string;
  Img: string;
}

export interface KugouMusicParams {
  name: string;
}

// 网易云音乐搜索
export interface NeteaseMusic {
  id: number;
  name: string;
  singer: string;
}

export interface NeteaseMusicParams {
  name: string;
}

// 腾讯音乐搜索
export interface TencentMusic {
  id: string;
  name: string;
  singer: string;
}

export interface TencentMusicParams {
  name: string;
}

// 随机骚话
export interface SaohuaRandom {
  id: number;
  text: string;
}

// 舔狗日记
export interface SaohuaContent {
  id: number;
  text: string;
}

// 语音转换
export interface SoundConverter {
  text: string;
  token: string;
  url: string;
}

export interface SoundConverterParams {
  appkey: string;
  access: string;
  secret: string;
  voice?: string;
  format?: 'PCM' | 'WAV' | 'MP3';
  sample_rate?: 8000 | 16000;
  volume?: number;
  speech_rate?: number;
  pitch_rate?: number;
  text: string;
}

