/**
 * JX3 API SDK - 完整类型定义
 */

// ============================================================
// HTTP API 请求参数类型
// ============================================================

// --- active ---
export interface ActiveCalendarParams {
  server?: string;
  num?: number;
}

export interface ActiveCelebsParams {
  name: string;
}

export interface ActiveListCalendarParams {
  num?: number;
}

export interface ActiveMonsterParams {
  token?: string;
}

export interface ActiveNextEventParams {
  server?: string;
  token?: string;
}

// --- arena ---
export interface ArenaAwesomeParams {
  mode?: number;
  limit?: number;
  ticket?: string;
  token?: string;
}

export interface ArenaRecentParams {
  server: string;
  name: string;
  mode?: number;
  ticket?: string;
  token?: string;
}

export interface ArenaSchoolsParams {
  mode?: number;
  ticket?: string;
  token?: string;
}

// --- auction ---
export interface AuctionRecordsParams {
  server: string;
  name?: string;
  limit?: number;
  token?: string;
}

// --- battle ---
export interface BattleRecordsParams {
  server: string;
  token?: string;
}

// --- card ---
export interface CardRecordParams {
  server: string;
  name: string;
  token?: string;
}

export interface CardRecordsParams {
  server: string;
  name: string;
  token?: string;
}

export interface CardCachedParams {
  server: string;
  name: string;
  token?: string;
}
export interface CardRandomParams {
  server?: string;
  body?: string;
  force?: string;
}

// --- chitu ---
export interface ChituRecordsParams {
  token?: string;
}

export interface ChituWeekRecordsParams {
  token?: string;
}

// --- duowan ---
export interface DuowanStatisticsParams {
  server?: string;
  token?: string;
}

// --- event ---
export interface EventCollectParams {
  server: string;
  num?: number;
  token?: string;
}

export interface EventRecentParams {
  server: string;
  token?: string;
}

export interface EventRecordsParams {
  server: string;
  name: string;
  token?: string;
}

export interface EventStatisticsParams {
  server?: string;
  name: string;
  limit?: number;
  token?: string;
}

export interface EventUnfinishedParams {
  server: string;
  name: string;
  token?: string;
}

// --- exam ---
export interface ExamSearchParams {
  subject?: string;
  limit?: number;
}

// --- fraud ---
export interface FraudDetailParams {
  uid: number | string;
  token?: string;
}

// --- home ---
export interface HomeFlowerParams {
  server: string;
  name?: string;
  map?: string;
}

export interface HomeFurnitureParams {
  name: string;
}

export interface HomeTravelParams {
  name: string;
}

// --- master ---
export interface MasterSearchParams {
  name: string;
}

// --- mech ---
// mech.calculator 无参数

// --- mentor ---
export interface MentorSearchParams {
  type: number;
  server: string;
  keyword?: string;
  token?: string;
}

// --- mine ---
export interface MineCartParams {
  token?: string;
}

// --- news ---
export interface NewsAllnewsParams {
  limit?: number;
}

export interface NewsAnnounceParams {
  limit?: number;
}

// --- ranch ---
export interface RanchRecordsParams {
  server: string;
  token?: string;
}

// --- rank ---
export interface RankStatisticsParams {
  server?: string;
  name: string;
  token?: string;
}

export interface RankTrialsParams {
  server?: string;
  name: string;
  token?: string;
}

// --- recruit ---
export interface RecruitSearchParams {
  server: string;
  keyword?: string;
  type?: number;
  token?: string;
}

// --- reward ---
export interface RewardStatisticsParams {
  server?: string;
  name: string;
  limit?: number;
  token?: string;
}

// --- role ---
export interface RoleDetailParams {
  server: string;
  name: string;
  token?: string;
}

export interface RoleMonsterParams {
  server: string;
  name: string;
  token?: string;
}

// --- sand ---
export interface SandRecordsParams {
  server: string;
}

// --- saohua ---
// saohua.random 无参数
// saohua.content 无参数

// --- school ---
export interface SchoolMatrixParams {
  name: string;
  ticket?: string;
  token?: string;
}

export interface SchoolSeniorityParams {
  server?: string;
  school?: string;
  ticket?: string;
  token?: string;
}

export interface SchoolSkillsParams {
  name: string;
  ticket?: string;
  token?: string;
}

export interface SchoolTalentParams {
  name: string;
  ticket?: string;
  token?: string;
}

// --- show ---
export interface ShowRecordsParams {
  server: string;
  name: string;
  token?: string;
}

// --- skill ---
// skill.rework 无参数

// --- smite ---
export interface SmiteRecordsParams {
  token?: string;
}

// --- sound ---
export interface SoundConverterParams {
  appkey: string;
  access: string;
  secret: string;
  voice?: string;
  format?: string;
  sample_rate?: number;
  volume?: number;
  speech_rate?: number;
  pitch_rate?: number;
  text: string;
}

// --- status ---
export interface StatusCheckParams {
  type?: 0 | 1;
  server: string;
}

// --- steed ---
export interface SteedRecordsParams {
  server?: string;
  token?: string;
}

// --- tieba ---
export interface TiebaItemRecordsParams {
  server?: string;
  name: string;
  limit?: number;
  token?: string;
}

export interface TiebaRandomParams {
  tags: string;
  server?: string;
  limit?: number;
  token?: string;
}

// --- trade ---
export interface TradeDemonParams {
  server?: string;
  limit?: number;
  token?: string;
}

export interface TradeItemSearchParams {
  name: string;
  token?: string;
}

export interface TradeItemRecordsParams {
  server?: string;
  name: string;
  token?: string;
}

export interface TradeRecordsParams {
  server?: string;
  name: string;
  token?: string;
}

// ============================================================
// HTTP API 响应 data 类型
// ============================================================

// --- active ---
export interface ActiveCalendarData {
  date: string;
  week: string;
  war: string;
  battle: string;
  orecar: string;
  school: string;
  rescue: string;
  luck: string[];
  card: string[];
  draw: string;
  team: string[];
}

export interface ActiveCelebsItem {
  map: string;
  stage: string;
  site: string;
  desc: string;
  icon: string;
  time: string;
}

export interface ActiveListCalendarData {
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

export interface ActiveMonsterData {
  week: string;
  start: number;
  end: number;
  boss: string;
  list: Array<{
    index: number;
    name: string;
    skill: string[];
    data: {
      name: string;
      list: unknown[];
      desc: string;
    };
  }>;
}

export interface ActiveNextEventItem {
  zone: string;
  server: string;
  status: number;
  time: number;
}

// --- arena ---
export interface ArenaAwesomeItem {
  zoneName: string;
  serverName: string;
  roleName: string;
  forceName: string;
  avatarUrl: string;
  rankNum: string;
  score: string;
  upNum: string;
  winRate: string;
}

export interface ArenaRecentData {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalId: string;
  forceName: string;
  forceId: number;
  bodyName: string;
  bodyId: number;
  tongName: string;
  tongId: number;
  campName: string;
  campId: string;
  performance: {
    "5v5": unknown[];
    "3v3": ArenaPerformanceMode;
    "2v2": ArenaPerformanceMode;
  };
  history: ArenaHistoryItem[];
}

export interface ArenaPerformanceMode {
  mmr: number;
  grade: number;
  ranking: string;
  winCount: number;
  totalCount: number;
  mvpCount: number;
  pvpType: string;
  winRate: number;
}

export interface ArenaHistoryItem {
  zone: string;
  server: string;
  avgGrade: number;
  totalMmr: number;
  mmr: number;
  kungfu: string;
  pvpType: number;
  won: boolean;
  mvp: boolean;
  startTime: number;
  endTime: number;
}

export interface ArenaSchoolsItem {
  name: string;
  this: number;
  last: number;
}

// --- auction ---
export interface AuctionRecordItem {
  id: number;
  zone: string;
  server: string;
  map_name: string;
  role_name: string;
  item_name: string;
  item_amount: string;
  time: number;
}

// --- battle ---
export interface BattleRecordItem {
  zoneName: string;
  serverName: string;
  declaringTongName: string;
  acceptingTongName: string;
  startTime: number;
  matchDuration: number;
  endTime: number;
}

// --- card ---
export interface CardRecordData {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showIndex: number;
  showAvatar: string;
  cacheTime: number;
}

export interface CardRecordsItem {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showIndex: number;
  showActive: boolean;
  showAvatar: string;
  saveTime: number;
}

export interface CardCachedData {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showAvatar: string;
}

export interface CardRandomData {
  zoneName: string;
  serverName: string;
  roleName: string;
  showHash: string;
  showAvatar: string;
  showStatus: number;
}

// --- chitu ---
export interface ChituRecordItem {
  id: number;
  server: string;
  map_name: string;
  horse: string;
  send: number;
  date: string;
}

export interface ChituWeekRecordItem {
  server: string;
  map_name: string;
  horse: string;
  date: string;
}

// --- duowan ---
export interface DuowanStatisticsItem {
  server: string;
  data: Array<{
    sid: number;
    logoUrl: string;
    users: number;
    snick: string;
    limit: number;
    logo: number;
    asid: number;
    esid: string;
    campName: string;
  }>;
}

// --- event ---
export interface EventCollectItem {
  zone: string;
  server: string;
  event: string;
  count: number;
  data: Array<{
    id: number;
    name: string;
    time: number;
  }>;
}

export interface EventRecentItem {
  id: number;
  zone: string;
  server: string;
  name: string;
  event: string;
  source: number;
  status: number;
  time: number;
}

export interface EventRecordItem {
  zone: string;
  server: string;
  name: string;
  event: string;
  level: number;
  status: number;
  time: number;
}

export interface EventStatisticsItem {
  id: number;
  zone: string;
  server: string;
  name: string;
  event: string;
  source: number;
  status: number;
  time: number;
}

export interface EventUnfinishedItem {
  name: string;
  type: string;
  level: number;
}

// --- exam ---
export interface ExamSearchItem {
  id: number;
  question: string;
  answer: string;
  correctness: number;
  index: number;
  pinyin: string;
}

// --- fenxian ---
export interface FenxianRecordItem {
  id: number;
  camp_name: string;
  fenxian_name: string;
  friend_name: string;
  role_name: string;
  seize_time: number;
}

// --- fraud ---
export interface FraudDetailItem {
  server: string;
  tieba: string;
  data: Array<{
    title: string;
    url: string;
    tid: number;
    text: string;
    time: number;
  }>;
}

// --- home ---
export interface HomeFlowerItem {
  name: string;
  color: string;
  price: number;
  line: string[];
}

/** data 结构为 Record<地图名, HomeFlowerItem[]> */
export type HomeFlowerData = Record<string, HomeFlowerItem[]>;

export interface HomeFurnitureItem {
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

export type HomeTravelItem = HomeFurnitureItem;

// --- master ---
export interface MasterSearchData {
  id: string;
  center: string;
  zone: string;
  name: string;
  event: number;
  voice: Record<string, number[]>;
  alias: string[];
  slave: string[];
}

// --- mech ---
export interface MechCalculatorNode {
  node: string;
  data: string;
}

export interface MechCalculatorData {
  curr: MechCalculatorNode;
  next: MechCalculatorNode;
  time: string;
  cdtn: string;
}

// --- mentor ---
export interface MentorSearchData {
  zone: string;
  server: string;
  type: number;
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
  }>;
  time: number;
}

// --- mine ---
export interface MineCartItem {
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

// --- news ---
export interface NewsItem {
  id: number;
  catid: string;
  type: string;
  title: string;
  date: string;
  url: string;
}

// --- ranch ---
export interface RanchRecordsData {
  zone: string;
  server: string;
  data: Record<string, string[]>;
  note: string;
}

// --- rank ---
export interface RankStatisticsData {
  id: number;
  zone: string;
  server: string;
  name: string;
  data: Array<{
    max_count: number;
    now_count: number;
    tong_name: string;
    castle_name: string;
    master_name: string;
    total_score: number;
  }>;
  time: number;
}

export interface RankTrialsData {
  id: number;
  zone: string;
  server: string;
  name: string;
  data: Array<{
    max_level: number;
    role_name: string;
    equip_score: number;
    total_score: number;
  }>;
  time: number;
}

// --- recruit ---
export interface RecruitSearchData {
  zone: string;
  server: string;
  type: number;
  data: Array<{
    activity: string;
    leader: string;
    content: string;
    crossServer: boolean;
    activityId: number;
    level: number;
    pushId: number;
    roomID: string;
    roleId: number;
    createTime: number;
    number: number;
    maxNumber: number;
    label: unknown[];
  }>;
  time: number;
}

// --- reward ---
export interface RewardStatisticsItem {
  id: number;
  zone: string;
  server: string;
  map_name: string;
  role_name: string;
  item_name: string;
  item_amount: string;
  time: number;
}

// --- role ---
export interface RoleDetailData {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: string;
  globalId: string;
  forceName: string;
  forceId: number;
  bodyName: string;
  bodyId: number;
  tongName: string;
  tongId: number;
  campName: string;
  campId: number;
}

export interface RoleMonsterData {
  zone: string;
  server: string;
  role_name: string;
  role_id: string;
  global_id: string;
  skill_stamina: number;
  skill_energy: number;
  skill_count: number;
  skill_list: Array<{
    skill_cost: number;
    skill_name: string;
    leader_name: string;
    skill_color: number;
    skill_level: number;
    is_deprecated: boolean;
  }>;
  update_time: number;
}

// --- sand ---
export interface SandRecordsData {
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

// --- saohua ---
export interface SaohuaData {
  id: number;
  text: string;
}

// --- school ---
export interface SchoolMatrixData {
  name: string;
  skillName: string;
  data: Array<{
    desc: string;
    level: number;
    name: string;
  }>;
}

export interface SchoolSeniorityItem {
  zoneName: string;
  serverName: string;
  roleName: string;
  roleId: number;
  forceName: string;
  forceId: number;
  forceIcon: string;
  avatarUrl: string;
  seniority: number;
}

export interface SchoolSkillItem {
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
}

export interface SchoolTalentItem {
  level: number;
  data: Array<{
    name: string;
    class: number;
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
}

// --- show ---
export interface ShowRecordItem {
  id: number;
  zone: string;
  server: string;
  map_name: string;
  sender: string;
  receiver: string;
  firework: string;
  matched: number;
  status: number;
  time: number;
}

// --- skill ---
export interface SkillReworkItem {
  id: string;
  title: string;
  url: string;
  time: string;
}

// --- smite ---
export interface SmiteRecordItem {
  id: number;
  zone: string;
  server: string;
  map_name: string;
  time: number;
}

// --- sound ---
export interface SoundConverterData {
  text: string;
  token: string;
  url: string;
}

// --- status ---

export interface StatusCheckData {
  zone: string;
  server: string;
  status: 0 | 1;
}

export interface ServerStatus {
  zone: string;
  server: string;
  status: "维护" | "正常" | "繁忙" | "爆满";
}

// --- steed ---
export interface SteedRecordItem {
  id: number;
  zone: string;
  server: string;
  map_name: string;
  refresh_time: number;
  capture_role_name: string;
  capture_camp_name: string;
  capture_time: number;
  auction_role_name: string;
  auction_camp_name: string;
  auction_time: number;
  auction_amount: string;
}

// --- tieba ---
export interface TiebaItemRecordItem {
  id: number;
  zone: string;
  server: string;
  name: string;
  url: number;
  context: string;
  reply: number;
  token: string;
  floor: number;
  time: number;
}

export interface TiebaRandomItem {
  id: number;
  tags: string;
  zone: string;
  server: string;
  name: string;
  title: string;
  url: number;
  date: string;
}

// --- trade ---
export interface TradeDemonItem {
  zone: string;
  server: string;
  tieba: string;
  wanbaolou: string;
  dd373: string;
  date: string;
}

export interface TradeItemSearchItem {
  class: string;
  subclass: string;
  name: string;
  alias: string;
  wblalias: string;
  value: string;
  desc: string;
  date: string;
  view: string;
}

export interface TradeItemRecordEntry {
  id: string;
  index: number;
  zone: string;
  server: string;
  value: number;
  sale: number;
  token: string;
  date: string;
  source: number;
  status: number;
}

export interface TradeItemRecordsData {
  class: string;
  subclass: string;
  name: string;
  alias: string;
  value: string;
  desc: string;
  date: string;
  view: string;
  list: TradeItemRecordEntry[][];
}

export type TradeRecordsData = TradeItemRecordsData;

// ============================================================
// WebSocket 事件类型
// ============================================================

export interface SocketMessage<A extends number = number, D = unknown> {
  action: A;
  status: string;
  detail: D;
}

// 1001 - 奇遇报时
export interface Socket1001Detail {
  zone: string;
  server: string;
  name: string;
  event: string;
  level: number;
  time: number;
}

// 1002 - 刷马
export interface Socket1002Detail {
  zone: string;
  server: string;
  map_name: string;
  time: number;
}

// 1003 - 抓马
export interface Socket1003Detail {
  zone: string;
  server: string;
  name: string;
  map_name: string;
  horse: string;
  level: string;
  time: number;
}

// 1004 - 扶摇预告
export interface Socket1004Detail {
  zone: string;
  server: string;
  time: number;
}

// 1005 - 扶摇开启
export interface Socket1005Detail {
  zone: string;
  server: string;
  time: number;
}

// 1006 - 扶摇点名
export interface Socket1006Detail {
  zone: string;
  server: string;
  name: string[];
  time: number;
}

// 1007 - 烟花报时
export interface Socket1007Detail {
  zone: string;
  server: string;
  sender: string;
  receiver: string;
  firework: string;
  map_name: string;
  time: number;
}

// 1008 - 的卢预告
export interface Socket1008Detail {
  zone: string;
  server: string;
  name: string;
  map_name: string;
  time: number;
}

// 1009 - 的卢刷新
export interface Socket1009Detail {
  zone: string;
  server: string;
  name: string;
  map_name: string;
  refresh_time: number;
}

// 1010 - 的卢捕获
export interface Socket1010Detail {
  zone: string;
  server: string;
  name: string;
  map_name: string;
  capture_role_name: string;
  capture_camp_name: string;
  capture_time: number;
}

// 1011 - 的卢拍卖
export interface Socket1011Detail {
  zone: string;
  server: string;
  name: string;
  auction_role_name: string;
  auction_camp_name: string;
  auction_amount: string;
  auction_time: number;
}

// 1012 - 玄晶报时
export interface Socket1012Detail {
  zone: string;
  server: string;
  role_name: string;
  map_name: string;
  item_name: string;
  time: number;
}

// 1013 - 阵营拍卖
export interface Socket1013Detail {
  zone: string;
  server: string;
  role_name: string;
  camp_name: string;
  item_name: string;
  item_amount: string;
  time: number;
}

// 1014 - 诛恶事件
export interface Socket1014Detail {
  zone: string;
  server: string;
  map_name: string;
  time: number;
}

// 1015 - 追魂点名
export interface Socket1015Detail {
  zone: string;
  server: string;
  role_server: string;
  role_name: string;
  time: number;
}

// 1016 - 阵营祭天预告
export interface Socket1016Detail {
  zone: string;
  server: string;
  time: number;
}

// 1017 - 阵营祭天终点
export interface Socket1017Detail {
  zone: string;
  server: string;
  camp_name: string;
  tong_name: string;
  role_name: string;
  castle_name: string;
  time: number;
}

// 1101 - 领地宣战开始
export interface Socket1101Detail {
  zone: string;
  server: string;
  battlefield_type: string;
  declaring_tong_name: string;
  accepting_tong_name: string;
  battlefield_tong_name: string;
  start_time: number;
}

// 1102 - 领地宣战结束（注意文档中用的 data 而非 detail）
export interface Socket1102Detail {
  zone: string;
  server: string;
  battlefield_type: string;
  declaring_tong_name: string;
  accepting_tong_name: string;
  battlefield_tong_name: string;
  victory_tong_name: string;
  victory_score: string;
  end_time: number;
}

// 1108 - 帮会野外宣战开始
export interface Socket1108Detail {
  zone: string;
  server: string;
  battlefield_type: string;
  declaring_tong_name: string;
  accepting_tong_name: string;
  duration_hours: string;
  start_time: number;
}

// 1109 - 帮会野外宣战结束
export interface Socket1109Detail {
  zone: string;
  server: string;
  battlefield_type: string;
  declaring_tong_name: string;
  accepting_tong_name: string;
  end_time: number;
}

// 1111 - 抢占粮仓
export interface Socket1111Detail {
  zone: string;
  server: string;
  castle_name: string;
  camp_name: string;
  time: number;
}

// 1112 - 大旗重置
export interface Socket1112Detail {
  zone: string;
  server: string;
  castle_name: string;
  time: number;
}

// 1113 - 大旗被夺
export interface Socket1113Detail {
  zone: string;
  server: string;
  camp_name: string;
  map_name: string;
  castle_name: string;
  time: number;
}

// 1114 - 据点占领（有帮会）
export interface Socket1114Detail {
  zone: string;
  server: string;
  camp_name: string;
  tong_name: string;
  castle_name: string;
  time: number;
}

// 1115 - 据点占领（无帮会）
export interface Socket1115Detail {
  zone: string;
  server: string;
  camp_name: string;
  castle_name: string;
  time: number;
}

// 1116/1117/1118 - 贡献排行
export interface Socket1116Detail {
  zone: string;
  server: string;
  camp_name: string;
  tong_name: string[];
  time: number;
}
export type Socket1117Detail = Socket1116Detail;
export type Socket1118Detail = Socket1116Detail;

// 1119 - 攻防拍卖
export interface Socket1119Detail {
  zone: string;
  server: string;
  camp_name: string;
  role_name: string;
  item_name: string;
  item_amount: string;
  time: number;
}

// 1120 - 拍卖分红（小攻防）
export interface Socket1120Detail {
  zone: string;
  server: string;
  camp_name: string;
  tong_name: string[];
  split_amount: string;
  time: number;
}

// 1121 - 拍卖分红（大攻防）
export interface Socket1121Detail {
  zone: string;
  server: string;
  camp_name: string;
  tong_name: string[];
  split_amount: string;
  time: number;
}

// 1122 - 拍卖分红（大攻防 + 指挥帮会）
export interface Socket1122Detail {
  zone: string;
  server: string;
  camp_name: string;
  chief_tong_name: string;
  tong_name: string[];
  split_amount: string;
  time: number;
}

// 2001 - 开服报时
export interface Socket2001Detail {
  zone: string;
  server: string;
  status: number;
  time: number;
}

// 2002 - 新闻资讯
export interface Socket2002Detail {
  type: string;
  title: string;
  url: string;
  date: string;
}

// 2003 - 游戏更新
export interface Socket2003Detail {
  now_version: string;
  new_version: string;
  package_num: number;
  package_size: string;
}

// 2004 - 八卦速报
export interface Socket2004Detail {
  tags: string;
  server: string;
  name: string;
  title: string;
  url: string;
  date: string;
}

// 2005 - 关隘首领
export interface Socket2005Detail {
  server: string;
  castle: string;
  start: number;
}

// 2006 - 云丛预告
export interface Socket2006Detail {
  name: string;
  site: string;
  desc: string;
  time: number;
}

/** Socket 事件 action → detail 类型映射 */
export interface SocketEventMap {
  1001: Socket1001Detail;
  1002: Socket1002Detail;
  1003: Socket1003Detail;
  1004: Socket1004Detail;
  1005: Socket1005Detail;
  1006: Socket1006Detail;
  1007: Socket1007Detail;
  1008: Socket1008Detail;
  1009: Socket1009Detail;
  1010: Socket1010Detail;
  1011: Socket1011Detail;
  1012: Socket1012Detail;
  1013: Socket1013Detail;
  1014: Socket1014Detail;
  1015: Socket1015Detail;
  1016: Socket1016Detail;
  1017: Socket1017Detail;
  1101: Socket1101Detail;
  1102: Socket1102Detail;
  1108: Socket1108Detail;
  1109: Socket1109Detail;
  1111: Socket1111Detail;
  1112: Socket1112Detail;
  1113: Socket1113Detail;
  1114: Socket1114Detail;
  1115: Socket1115Detail;
  1116: Socket1116Detail;
  1117: Socket1117Detail;
  1118: Socket1118Detail;
  1119: Socket1119Detail;
  1120: Socket1120Detail;
  1121: Socket1121Detail;
  1122: Socket1122Detail;
  2001: Socket2001Detail;
  2002: Socket2002Detail;
  2003: Socket2003Detail;
  2004: Socket2004Detail;
  2005: Socket2005Detail;
  2006: Socket2006Detail;
}

export type SocketAction = keyof SocketEventMap;
