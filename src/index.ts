/**
 * @module JX3API
 * @description JX3API 是一个用于访问剑网3游戏相关数据的 API 客户端
 */

import { ClientService } from './services/JX3api';
// import { JX3WebSocket } from './services/websocket';

export {
  ClientService,
  // JX3WebSocket,
};
export default class JX3API {
  public static readonly ClientService = ClientService;
  // public static readonly JX3WebSocket = JX3WebSocket;
}

export * from './types';
