/**
 * @module JX3API
 * @description JX3API 是一个用于访问剑网3游戏相关数据的 API 客户端
 */

import { ClientService } from './services/client';

// import { WebSocketService } from './services/websocket';

/**
 * JX3API 客户端类
 * @class JX3API
 * @description 用于访问剑网3游戏相关数据的 API 客户端
 * @property {ClientService} client - 接口相关服务
 * @property {WebSocketService} ws - WebSocket 相关接口服务
 * @param {Object} options - 配置选项
 * @param {string} [options.token] - API 访问令牌
 * @param {string} [options.ticket] - 用户票据
 * @param {string} [options.baseURL] - API 基础 URL
 */
export default class JX3API {

  /** 接口相关服务 */
  public readonly client: ClientService;

  /** WebSocket 相关接口服务 */
  // public readonly ws: WebSocketService;

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
    this.client = new ClientService(options);
    // this.ws = new WebSocketService(options);
  }
}

export * from './types';
