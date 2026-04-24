/**
 * JX3 API SDK
 *
 * @example
 * ```ts
 * import { JX3API } from "jx3api-ts";
 *
 * const api = new JX3API({ token: "YOUR_TOKEN", ticket: "YOUR_TICKET" });
 *
 * // HTTP API
 * const role = await api.role.detail({ server: "唯我独尊", name: "夜温言" });
 * console.log(role.data);
 *
 * // WebSocket
 * const ws = api.socket();
 * ws.on(1001, (detail) => console.log("奇遇:", detail));
 * ```
 */

import { HttpClient, JX3ApiError } from "./client.js";
import type { ClientOptions, ApiResponse } from "./client.js";
import { JX3Socket } from "./socket.js";
import type { SocketOptions } from "./socket.js";

import { ActiveModule } from "./modules/active.js";
import { ArenaModule } from "./modules/arena.js";
import { AuctionModule } from "./modules/auction.js";
import { BattleModule } from "./modules/battle.js";
import { CardModule } from "./modules/card.js";
import { ChituModule } from "./modules/chitu.js";
import { DuowanModule } from "./modules/duowan.js";
import { EventModule } from "./modules/event.js";
import { ExamModule } from "./modules/exam.js";
import { FenxianModule } from "./modules/fenxian.js";
import { FraudModule } from "./modules/fraud.js";
import { HomeModule } from "./modules/home.js";
import { MasterModule } from "./modules/master.js";
import { MechModule } from "./modules/mech.js";
import { MentorModule } from "./modules/mentor.js";
import { MineModule } from "./modules/mine.js";
import { NewsModule } from "./modules/news.js";
import { RanchModule } from "./modules/ranch.js";
import { RankModule } from "./modules/rank.js";
import { RecruitModule } from "./modules/recruit.js";
import { RewardModule } from "./modules/reward.js";
import { RoleModule } from "./modules/role.js";
import { SandModule } from "./modules/sand.js";
import { SaohuaModule } from "./modules/saohua.js";
import { SchoolModule } from "./modules/school.js";
import { ShowModule } from "./modules/show.js";
import { SkillModule } from "./modules/skill.js";
import { SmiteModule } from "./modules/smite.js";
import { SoundModule } from "./modules/sound.js";
import { StatusModule } from "./modules/status.js";
import { SteedModule } from "./modules/steed.js";
import { TiebaModule } from "./modules/tieba.js";
import { TradeModule } from "./modules/trade.js";

export class JX3API {
  readonly #http: HttpClient;

  /** 活动相关 */
  readonly active: ActiveModule;
  /** 名剑相关 */
  readonly arena: ArenaModule;
  /** 阵营拍卖 */
  readonly auction: AuctionModule;
  /** 帮战记录 */
  readonly battle: BattleModule;
  /** 名片相关 */
  readonly card: CardModule;
  /** 赤兔相关 */
  readonly chitu: ChituModule;
  /** 统战歪歪 */
  readonly duowan: DuowanModule;
  /** 奇遇相关 */
  readonly event: EventModule;
  /** 科举答题 */
  readonly exam: ExamModule;
  /** 阵营事件 */
  readonly fenxian: FenxianModule;
  /** 骗子查询 */
  readonly fraud: FraudModule;
  /** 家园相关 */
  readonly home: HomeModule;
  /** 区服搜索 */
  readonly master: MasterModule;
  /** 副本解密 */
  readonly mech: MechModule;
  /** 师徒系统 */
  readonly mentor: MentorModule;
  /** 关隘首领 */
  readonly mine: MineModule;
  /** 新闻公告 */
  readonly news: NewsModule;
  /** 马场刷新 */
  readonly ranch: RanchModule;
  /** 排行榜 */
  readonly rank: RankModule;
  /** 团队招募 */
  readonly recruit: RecruitModule;
  /** 掉落统计 */
  readonly reward: RewardModule;
  /** 角色相关 */
  readonly role: RoleModule;
  /** 阵营沙盘 */
  readonly sand: SandModule;
  /** 骚话 */
  readonly saohua: SaohuaModule;
  /** 门派相关 */
  readonly school: SchoolModule;
  /** 烟花记录 */
  readonly show: ShowModule;
  /** 技改记录 */
  readonly skill: SkillModule;
  /** 诛恶事件 */
  readonly smite: SmiteModule;
  /** 语音合成 */
  readonly sound: SoundModule;
  /** 开服状态 */
  readonly status: StatusModule;
  /** 的卢记录 */
  readonly steed: SteedModule;
  /** 贴吧相关 */
  readonly tieba: TiebaModule;
  /** 交易相关 */
  readonly trade: TradeModule;

  constructor(options: ClientOptions = {}) {
    this.#http = new HttpClient(options);

    this.active = new ActiveModule(this.#http);
    this.arena = new ArenaModule(this.#http);
    this.auction = new AuctionModule(this.#http);
    this.battle = new BattleModule(this.#http);
    this.card = new CardModule(this.#http);
    this.chitu = new ChituModule(this.#http);
    this.duowan = new DuowanModule(this.#http);
    this.event = new EventModule(this.#http);
    this.exam = new ExamModule(this.#http);
    this.fenxian = new FenxianModule(this.#http);
    this.fraud = new FraudModule(this.#http);
    this.home = new HomeModule(this.#http);
    this.master = new MasterModule(this.#http);
    this.mech = new MechModule(this.#http);
    this.mentor = new MentorModule(this.#http);
    this.mine = new MineModule(this.#http);
    this.news = new NewsModule(this.#http);
    this.ranch = new RanchModule(this.#http);
    this.rank = new RankModule(this.#http);
    this.recruit = new RecruitModule(this.#http);
    this.reward = new RewardModule(this.#http);
    this.role = new RoleModule(this.#http);
    this.sand = new SandModule(this.#http);
    this.saohua = new SaohuaModule(this.#http);
    this.school = new SchoolModule(this.#http);
    this.show = new ShowModule(this.#http);
    this.skill = new SkillModule(this.#http);
    this.smite = new SmiteModule(this.#http);
    this.sound = new SoundModule(this.#http);
    this.status = new StatusModule(this.#http);
    this.steed = new SteedModule(this.#http);
    this.tieba = new TiebaModule(this.#http);
    this.trade = new TradeModule(this.#http);
  }

  /** 创建 WebSocket 客户端并自动连接 */
  socket(options: Omit<SocketOptions, "token"> = {}): JX3Socket {
    const ws = new JX3Socket({
      ...options,
      token: this.#http.token,
    });
    return ws.connect();
  }
}

// Re-export everything
export { HttpClient, JX3ApiError } from "./client.js";
export type { ClientOptions, ApiResponse } from "./client.js";
export { JX3Socket } from "./socket.js";
export type { SocketOptions } from "./socket.js";
export * from "./types.js";
