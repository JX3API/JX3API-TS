import { JX3APIClient } from '../common/axiosClient';
import {
  ActiveCalendar,
  ActiveCalendarParams,
  ActiveListCalendar,
  ActiveListCalendarParams,
  ActiveCelebs,
  ActiveCelebsParams,
  ExamAnswer,
  ExamAnswerParams,
  HomeFlower,
  HomeFlowerParams,
  HomeFurniture,
  HomeFurnitureParams,
  HomeTravel,
  HomeTravelParams,
  NewsItem,
  NewsParams,
  ServerMaster,
  ServerMasterParams,
  NewsAnnounce,
  NewsAnnounceParams,
  SkillRecord,
  ServerCheck,
  ServerCheckParams,
  ServerStatus,
  ServerStatusParams,
  ActiveMonster,
  FireworksCollect,
  FireworksCollectParams,
  FireworksRecord,
  FireworksRecordParams,
  AuctionRecord,
  AuctionRecordParams,
  DiluRecord,
  DiluRecordParams,
  FireworksStatistical,
  FireworksStatisticalParams,
  FraudDetailed,
  FraudDetailedParams,
  LuckStatistical,
  LuckStatisticalParams,
  LuckRecent,
  LuckRecentParams,
  LuckAdventure,
  LuckAdventureParams,
  LuckUnfinished,
  LuckUnfinishedParams,
  RankServerStatistical,
  RankServerStatisticalParams,
  RankStatistical,
  RankStatisticalParams,
  MemberStudent,
  MemberStudentParams,
  MemberRecruit,
  MemberRecruitParams,
  MemberTeacher,
  MemberTeacherParams,
  TeamCdList,
  TeamCdListParams,
  SaveRoleDetailed,
  SaveRoleDetailedParams,
  RewardServerStatistical,
  RewardServerStatisticalParams,
  RewardStatistical,
  RewardStatisticalParams,
  RoleDetailed,
  RoleDetailedParams,
  SchoolForce,
  SchoolForceParams,
  RoleMonster,
  RoleMonsterParams,
  RoleAchievement,
  RoleAchievementParams,
  RoleAttribute,
  RoleAttributeParams,
  SchoolMatrix,
  SchoolMatrixParams,
  ServerSand,
  ServerSandParams,
  ServerAntivice,
  ServerEvent,
  SchoolSeniority,
  SchoolSeniorityParams,
  SchoolSkill,
  SchoolSkillParams,
  ServerLeader,
  ShowCache,
  ShowCacheParams,
  ShowRandom,
  ShowRandomParams,
  ShowCard,
  ShowCardParams,
  TiebaItemRecord,
  TiebaItemRecordsParams,
  TradeDemon,
  TradeDemonParams,
  TuilanAchievement,
  TuilanAchievementParams,
  IdiomSolitaire,
  IdiomSolitaireParams,
  MixedChat,
  MixedChatParams,
  TiebaRandom,
  TiebaRandomParams,
  KugouMusic,
  KugouMusicParams,
  NeteaseMusic,
  NeteaseMusicParams,
  TencentMusic,
  TencentMusicParams,
  SaohuaRandom,
  SaohuaContent,
  SoundConverter,
  SoundConverterParams,
} from '../types/resType';

export class ClientService extends JX3APIClient {
  /**
   * 获取活动日历
   * @param params.server 服务器名（可选）
   * @param params.num 日期偏移值：0-当天，1-明天，2-后天（可选）
   */
  async getActiveCalendar(
    params?: ActiveCalendarParams,
  ): Promise<ActiveCalendar> {
    return this.get('/data/active/calendar', params);
  }

  /**
   * 获取活动列表日历
   * @param params.num 预测时间范围，返回指定日期的月历，默认15天
   */
  async getActiveListCalendar(
    params?: ActiveListCalendarParams,
  ): Promise<ActiveListCalendar> {
    return this.get('/data/active/list/calendar', params);
  }

  /**
   * 获取名人堂活动
   * @param params.name 目标名称：楚天社、云从社、披风会
   */
  async getActiveCelebs(params: ActiveCelebsParams): Promise<ActiveCelebs[]> {
    return this.get('/data/active/celebs', params);
  }

  /**
   * 获取科举答案
   * @param params.subject 科举题目内容，支持模糊查询和拼音首字母
   * @param params.limit 限制返回数量，默认10，范围1-20
   */
  async getExamAnswer(params: ExamAnswerParams): Promise<ExamAnswer[]> {
    return this.get('/data/exam/answer', params);
  }

  /**
   * 获取家园花卉信息
   * @param params.server 服务器名
   * @param params.name 花卉名称（可选）
   * @param params.map 地图名称（可选）
   */
  async getHomeFlower(params: HomeFlowerParams): Promise<HomeFlower> {
    return this.get('/data/home/flower', params);
  }

  /**
   * 获取家园装饰信息
   * @param params.name 装饰名称
   */
  async getHomeFurniture(params: HomeFurnitureParams): Promise<HomeFurniture> {
    return this.get('/data/home/furniture', params);
  }

  /**
   * 获取家园游历信息
   * @param params.name 地图名称
   */
  async getHomeTravel(params: HomeTravelParams): Promise<HomeTravel[]> {
    return this.get('/data/home/travel', params);
  }

  /**
   * 获取新闻公告
   * @param params.limit 限制返回的新闻条数，默认10，范围1-50（可选）
   */
  async getAllNews(params?: NewsParams): Promise<NewsItem[]> {
    return this.get('/data/news/allnews', params);
  }

  /**
   * 获取服务器信息
   * @param params.name 服务器名称或简称
   */
  async getServerMaster(params: ServerMasterParams): Promise<ServerMaster> {
    return this.get('/data/server/master', params);
  }

  /**
   * 获取维护公告
   * @param params.limit 限制返回的公告条数，默认10，范围1-50（可选）
   */
  async getNewsAnnounce(params?: NewsAnnounceParams): Promise<NewsAnnounce[]> {
    return this.get('/data/news/announce', params);
  }

  /**
   * 获取技改记录
   */
  async getSkillRecords(): Promise<SkillRecord[]> {
    return this.get('/data/skills/records');
  }

  /**
   * 开服检查
   * @param params.server 服务器名称（可选，不传则返回所有服务器状态）
   */
  async getServerCheck(params?: ServerCheckParams): Promise<ServerCheck> {
    return this.get('/data/server/check', params);
  }

  /**
   * 获取服务器状态
   * @param params.server 服务器名称
   */
  async getServerStatus(params: ServerStatusParams): Promise<ServerStatus> {
    return this.get('/data/server/status', params);
  }

  /**
   * 获取本周百战异闻录刷新的首领以及它们的特殊效果
   */
  async getActiveMonster(): Promise<ActiveMonster> {
    return this.get('/data/active/monster');
  }

  /**
   * 获取烟花统计
   * @param params.server 服务器名
   * @param params.num 统计时间范围（天数），默认7天，范围1-30（可选）
   */
  async getFireworksCollect(
    params: FireworksCollectParams,
  ): Promise<FireworksCollect[]> {
    return this.get('/data/fireworks/collect', params);
  }

  /**
   * 获取烟花记录
   * @param params.server 服务器名
   * @param params.name 角色名
   */
  async getFireworksRecords(
    params: FireworksRecordParams,
  ): Promise<FireworksRecord[]> {
    return this.get('/data/fireworks/records', params);
  }

  /**
   * 获取拍卖记录
   * @param params.server 服务器名
   * @param params.name 物品名称（可选）
   * @param params.limit 返回记录数量限制，默认50，范围1-100（可选）
   */
  async getAuctionRecords(
    params: AuctionRecordParams,
  ): Promise<AuctionRecord[]> {
    return this.get('/data/auction/records', params);
  }

  /**
   * 获取的卢记录
   * @param params.server 服务器名（可选）
   */
  async getDiluRecords(params: DiluRecordParams): Promise<DiluRecord[]> {
    return this.get('/data/dilu/records', params);
  }

  /**
   * 获取烟花汇总
   * @param params.server 服务器名
   * @param params.name 烟花名称
   * @param params.limit 返回记录数量限制，默认20，范围1-50（可选）
   */
  async getFireworksStatistical(
    params: FireworksStatisticalParams,
  ): Promise<FireworksStatistical[]> {
    return this.get('/data/fireworks/statistical', params);
  }

  /**
   * 获取骗子查询
   * @param params.uid QQ号
   */
  async getFraudDetailed(params: FraudDetailedParams): Promise<FraudDetailed> {
    return this.get('/data/fraud/detailed', params);
  }

  /**
   * 获取奇遇统计
   * @param params.server 服务器名
   * @param params.name 奇遇名称
   * @param params.limit 返回记录数量限制，默认50，范围1-50（可选）
   */
  async getLuckStatistical(
    params: LuckStatisticalParams,
  ): Promise<LuckStatistical[]> {
    return this.get('/data/luck/statistical', params);
  }

  /**
   * 获取近期奇遇
   * @param params.server 服务器名
   */
  async getLuckRecent(params: LuckRecentParams): Promise<LuckRecent[]> {
    return this.get('/data/luck/recent', params);
  }

  /**
   * 获取奇遇记录
   * @param params.server 服务器名
   * @param params.name 角色名
   * @param params.ticket 推栏标识（可选）
   */
  async getLuckAdventure(
    params: LuckAdventureParams,
  ): Promise<LuckAdventure[]> {
    return this.get('/data/luck/adventure', params);
  }

  /**
   * 获取未完成奇遇
   * @param params.server 服务器名
   * @param params.name 角色名
   * @param params.ticket 推栏标识（可选）
   */
  async getLuckUnfinished(
    params: LuckUnfinishedParams,
  ): Promise<LuckUnfinished[]> {
    return this.get('/data/luck/unfinished', params);
  }

  /**
   * 获取服务器排行榜统计
   * @param params.table 榜单类型：个人、帮会、阵营、试炼
   * @param params.name 榜单名称
   */
  async getRankServerStatistical(
    params: RankServerStatisticalParams,
  ): Promise<RankServerStatistical[]> {
    return this.get('/data/rank/server/statistical', params);
  }

  /**
   * 获取区服排行榜统计
   * @param params.server 服务器名
   * @param params.table 榜单类型：个人、帮会、阵营、试炼
   * @param params.name 榜单名称
   */
  async getRankStatistical(
    params: RankStatisticalParams,
  ): Promise<RankStatistical[]> {
    return this.get('/data/rank/statistical', params);
  }

  /**
   * 获取师徒系统-徒弟信息
   * @param params.server 服务器名
   * @param params.keyword 关键字（可选）
   */
  async getMemberStudent(params: MemberStudentParams): Promise<MemberStudent> {
    return this.get('/data/member/student', params);
  }

  /**
   * 获取团队招募信息
   * @param params.server 服务器名
   * @param params.keyword 关键字（可选）
   * @param params.table 数据记录范围：1-本服+跨服，2-仅本服，3-仅跨服（可选）
   */
  async getMemberRecruit(params: MemberRecruitParams): Promise<MemberRecruit> {
    return this.get('/data/member/recruit', params);
  }

  /**
   * 获取师徒系统-师傅信息
   * @param params.server 服务器名
   * @param params.keyword 关键字（可选）
   */
  async getMemberTeacher(params: MemberTeacherParams): Promise<MemberTeacher> {
    return this.get('/data/member/teacher', params);
  }

  /**
   * 获取角色副本进度
   * @param params.server 服务器名
   * @param params.name 角色名称
   * @param params.ticket 推栏标识
   */
  async getTeamCdList(params: TeamCdListParams): Promise<TeamCdList> {
    return this.get('/data/role/teamCdList', params);
  }

  /**
   * 保存或更新角色的详细信息。
   * @param params.server 服务器名
   * @param params.roleid 角色ID
   * @param params.ticket 推栏标识
   */
  async saveRoleDetailed(
    params: SaveRoleDetailedParams,
  ): Promise<SaveRoleDetailed> {
    return this.get('/save/role/detailed', params);
  }

  /**
   * 获取全服物品掉落统计
   * @param params.name 物品名称
   * @param params.limit 返回记录数量限制，默认30，范围1-100（可选）
   */
  async getRewardServerStatistical(
    params: RewardServerStatisticalParams,
  ): Promise<RewardServerStatistical[]> {
    return this.get('/data/reward/server/statistical', params);
  }

  /**
   * 获取区服物品掉落统计
   * @param params.server 服务器名
   * @param params.name 物品名称
   * @param params.limit 返回记录数量限制，默认20，范围1-100（可选）
   */
  async getRewardStatistical(
    params: RewardStatisticalParams,
  ): Promise<RewardStatistical[]> {
    return this.get('/data/reward/statistical', params);
  }

  /**
   * 获取角色详情
   * @param params.server 服务器名
   * @param params.name 角色名称
   * @param params.ticket 推栏标识
   */
  async getRoleDetailed(params: RoleDetailedParams): Promise<RoleDetailed> {
    return this.get('/data/role/detailed', params);
  }

  /**
   * 获取心法奇穴信息
   * @param params.name 心法名称
   * @param params.ticket 推栏标识
   */
  async getSchoolForce(params: SchoolForceParams): Promise<SchoolForce[]> {
    return this.get('/data/school/force', params);
  }

  /**
   * 获取角色精力信息
   * @param params.server 服务器名
   * @param params.name 角色名
   */
  async getRoleMonster(params: RoleMonsterParams): Promise<RoleMonster> {
    return this.get('/data/role/monster', params);
  }

  /**
   * 获取角色成就信息
   * @param params.server 服务器名
   * @param params.role 角色名
   * @param params.name 成就名称
   * @param params.ticket 推栏标识
   */
  async getRoleAchievement(
    params: RoleAchievementParams,
  ): Promise<RoleAchievement> {
    return this.get('/data/role/achievement', params);
  }

  /**
   * 获取角色属性信息
   * @param params.server 服务器名
   * @param params.name 角色名
   * @param params.ticket 推栏标识
   */
  async getRoleAttribute(params: RoleAttributeParams): Promise<RoleAttribute> {
    return this.get('/data/role/attribute', params);
  }

  /**
   * 获取心法阵眼信息
   * @param params.name 心法名称
   * @param params.ticket 推栏标识
   */
  async getSchoolMatrix(params: SchoolMatrixParams): Promise<SchoolMatrix> {
    return this.get('/data/school/matrix', params);
  }

  /**
   * 获取服务器沙盘信息
   * @param params.server 服务器名称
   */
  async getServerSand(params: ServerSandParams): Promise<ServerSand> {
    return this.get('/data/server/sand', params);
  }

  /**
   * 获取诛恶事件
   */
  async getServerAntivice(): Promise<ServerAntivice[]> {
    return this.get('/data/server/antivice');
  }

  /**
   * 获取跨服阵营事件
   */
  async getServerEvent(): Promise<ServerEvent[]> {
    return this.get('/data/server/event');
  }

  /**
   * 获取心法资历排行
   * @param params.school 心法名称
   * @param params.ticket 推栏标识
   */
  async getSchoolSeniority(
    params: SchoolSeniorityParams,
  ): Promise<SchoolSeniority[]> {
    return this.get('/data/school/seniority', params);
  }

  /**
   * 获取心法技能信息
   * @param params.name 心法名称
   * @param params.ticket 推栏标识
   */
  async getSchoolSkills(params: SchoolSkillParams): Promise<SchoolSkill[]> {
    return this.get('/data/school/skills', params);
  }

  /**
   * 获取服务器关隘首领
   */
  async getServerLeader(): Promise<ServerLeader[]> {
    return this.get('/data/server/leader');
  }

  /**
   * 获取名片墙缓存
   * @param params.server 服务器名称
   * @param params.name 角色名称
   */
  async getShowCache(params: ShowCacheParams): Promise<ShowCache> {
    return this.get('/data/show/cache', params);
  }

  /**
   * 获取随机名片
   * @param params.server 服务器名称（可选）
   * @param params.body 角色体型（可选）
   * @param params.force 门派名称（可选）
   */
  async getShowRandom(params: ShowRandomParams): Promise<ShowRandom> {
    return this.get('/data/show/random', params);
  }

  /**
   * 获取名片墙信息
   * @param params.server 服务器名称
   * @param params.name 角色名称
   */
  async getShowCard(params: ShowCardParams): Promise<ShowCard> {
    return this.get('/data/show/card', params);
  }

  /**
   * 获取贴吧物价记录
   * @param params.server 服务器名称（可选）
   * @param params.name 物品名称
   * @param params.limit 返回记录数量限制，默认10，范围1-50（可选）
   */
  async getTiebaItemRecords(
    params: TiebaItemRecordsParams,
  ): Promise<TiebaItemRecord[]> {
    return this.get('/data/tieba/item/records', params);
  }

  /**
   * 获取金价比例信息
   * @param params.server 服务器名称（可选）
   * @param params.limit 返回数量，默认10，范围1-100（可选）
   */
  async getTradeDemon(params: TradeDemonParams): Promise<TradeDemon[]> {
    return this.get('/data/trade/demon', params);
  }

  /**
   * 获取推栏成就信息
   * @param params.server 目标服务器名称，用于查询该服务器的角色数据
   * @param params.name 角色名称，用于查找指定角色的资历分布信息
   * @param params.class 资历主分类，1：江湖行，2：独步江湖，3：江湖行+独步江湖
   * @param params.subclass 资历子分类
   * @param params.ticket 推栏标识
   */
  async getTuilanAchievement(
    params: TuilanAchievementParams,
  ): Promise<TuilanAchievement> {
    return this.get('/data/tuilan/achievement', params);
  }

  /**
   * 成语接龙
   * @param params.name 输入的四字成语，用于进行成语接龙
   */
  async getIdiomSolitaire(
    params: IdiomSolitaireParams,
  ): Promise<IdiomSolitaire> {
    return this.get('/data/idiom/solitaire', params);
  }

  /**
   * 智能聊天
   * @param params.name 机器人的名称，返回结果中的回答会使用该名称
   * @param params.text 输入的对话内容
   */
  async getMixedChat(params: MixedChatParams): Promise<MixedChat> {
    return this.get('/data/mixed/chat', params);
  }

  /**
   * 获取贴吧随机帖子
   * @param params.class 帖子分类：818、616、鬼网三、鬼网3、树洞、记录、教程、街拍、故事、避雷、吐槽、提问
   * @param params.server 区服名称，用于查询指定区服的帖子记录，默认值为 - 表示全区服（可选）
   * @param params.limit 查询结果数量的限制，默认值为 10（可选）
   */
  async getTiebaRandom(params: TiebaRandomParams): Promise<TiebaRandom[]> {
    return this.get('/data/tieba/random', params);
  }

  /**
   * 获取酷狗音乐搜索结果
   * @param params.name 歌曲名称，用于搜索酷狗音乐的相关内容
   */
  async getKugouMusic(params: KugouMusicParams): Promise<KugouMusic[]> {
    return this.get('/data/music/kugou', params);
  }

  /**
   * 获取网易云音乐搜索结果
   * @param params.name 歌曲名称，用于搜索网易云音乐的相关内容
   */
  async getNeteaseMusic(params: NeteaseMusicParams): Promise<NeteaseMusic[]> {
    return this.get('/data/music/netease', params);
  }

  /**
   * 获取腾讯音乐搜索结果
   * @param params.name 歌曲名称，用于搜索腾讯音乐的相关内容
   */
  async getTencentMusic(params: TencentMusicParams): Promise<TencentMusic[]> {
    return this.get('/data/music/tencent', params);
  }

  /**
   * 获取随机骚话
   */
  async getSaohuaRandom(): Promise<SaohuaRandom> {
    return this.get('/data/saohua/random');
  }

  /**
   * 获取舔狗日记
   */
  async getSaohuaContent(): Promise<SaohuaContent> {
    return this.get('/data/saohua/content');
  }

  /**
   * 语音转换
   * @param params.appkey 阿里云应用标识
   * @param params.access 阿里云 Access Key
   * @param params.secret 阿里云 Secret Key
   * @param params.voice 发音人名称，默认值：Aitong
   * @param params.format 音频格式，支持 PCM、WAV 和 MP3，默认值：MP3
   * @param params.sample_rate 音频采样率，支持 8000 和 16000，默认值：16000
   * @param params.volume 音量大小，范围为 0 到 100，默认值：50
   * @param params.speech_rate 语速调节，范围为 -500 到 500，默认值：0
   * @param params.pitch_rate 音调调节，范围为 -500 到 500，默认值：0
   * @param params.text 待合成的文本内容
   */
  async getSoundConverter(
    params: SoundConverterParams,
  ): Promise<SoundConverter> {
    return this.get('/data/sound/converter', params);
  }
}
