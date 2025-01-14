import { ServerService } from './services/server';
import { NewsService } from './services/news';
import { RoleService } from './services/role';
import { BattleService } from './services/battle';
import { SocialService } from './services/social';
import { EconomyService } from './services/economy';
import { EntertainmentService } from './services/entertainment';
import { ToolsService } from './services/tools';
import { StatisticsService } from './services/statistics';
import { WebSocketService } from './services/websocket';

export class JX3API {
  public readonly server: ServerService;
  public readonly news: NewsService;
  public readonly role: RoleService;
  public readonly battle: BattleService;
  public readonly social: SocialService;
  public readonly economy: EconomyService;
  public readonly entertainment: EntertainmentService;
  public readonly tools: ToolsService;
  public readonly statistics: StatisticsService;
  public readonly ws: WebSocketService;

  constructor(options: {
    token?: string;
    ticket?: string;
    baseURL?: string;
  }) {
    this.server = new ServerService(options);
    this.news = new NewsService(options);
    this.role = new RoleService(options);
    this.battle = new BattleService(options);
    this.social = new SocialService(options);
    this.economy = new EconomyService(options);
    this.entertainment = new EntertainmentService(options);
    this.tools = new ToolsService(options);
    this.statistics = new StatisticsService(options);
    this.ws = new WebSocketService(options);
  }
}

export * from './types';
