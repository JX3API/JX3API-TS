/**
 * @module JX3API
 * @description JX3API 是一个用于访问剑网3游戏相关数据的 API 客户端
 */

import { JX3api } from './services/JX3api';
import { JX3ws } from './services/JX3ws';
export default class JX3API {
  public static readonly JX3api = JX3api;
  public static readonly JX3ws = JX3ws;
}
export * from './types';
