/**
 * @module JX3API
 * @description JX3API 是一个用于访问剑网3游戏相关数据的 API 客户端
 */

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

/**
 * JX3API 客户端类
 * @class JX3API
 */
export class JX3API {
  /** 服务器相关接口服务 */
  public readonly server: ServerService;
  /** 新闻资讯相关接口服务 */
  public readonly news: NewsService;
  /** 角色相关接口服务 */
  public readonly role: RoleService;
  /** 战斗相关接口服务 */
  public readonly battle: BattleService;
  /** 社交相关接口服务 */
  public readonly social: SocialService;
  /** 经济相关接口服务 */
  public readonly economy: EconomyService;
  /** 娱乐相关接口服务 */
  public readonly entertainment: EntertainmentService;
  /** 工具相关接口服务 */
  public readonly tools: ToolsService;
  /** 统计相关接口服务 */
  public readonly statistics: StatisticsService;
  /** WebSocket 相关接口服务 */
  public readonly ws: WebSocketService;

  /**
   * 创建一个新的 JX3API 实例
   * @param {Object} options - 配置选项
   * @param {string} [options.token] - API 访问令牌
   * @param {string} [options.ticket] - 用户票据
   * @param {string} [options.baseURL] - API 基础 URL
   */
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
