# JX3API-TS

剑网3 API 的 TypeScript SDK，提供了一套完整的接口封装，让您能够轻松获取游戏数据。

## 项目介绍

JX3API-TS 是一个用于访问剑网3游戏相关数据的 API 客户端，基于 TypeScript 开发，提供了完整的类型定义和接口封装，使开发者能够轻松获取和处理游戏数据。

## 功能特点

- 🔥 完整的 TypeScript 类型支持，提供智能代码提示
- 🚀 支持 Promise 和异步/await，简化异步操作
- 🔌 支持 WebSocket 实时数据订阅
- 📦 模块化设计，按需引入
- 🛡️ 强类型定义，减少运行时错误

## 安装

```bash
npm install jx3api-ts
# 或者
yarn add jx3api-ts
# 或者
pnpm add jx3api-ts
```

## 快速开始

### HTTP API 使用

```typescript
import JX3API from 'jx3api-ts';

// 方式一：使用静态类方式
const clientService = new JX3API.JX3api({
  token: 'your_token', // 可选
  ticket: 'your_ticket', // 可选
});

// 查询服务器状态示例
const serverStatus = await clientService.getServerStatus({
  server: '梦江南',
});
console.log(serverStatus);

// 获取活动日历示例
const calendar = await clientService.getActiveCalendar({
  server: '梦江南',
  num: 1,
});
console.log(calendar);
```

### WebSocket 使用

```typescript
import JX3API from 'jx3api-ts';

// 创建WebSocket实例
const ws = new JX3API.JX3ws({
  wsUrl: 'wss://socket.jx3api.com',
  wstoken: 'your_token',
});

// 监听事件
ws.on('1001', 'key', (data) => {
  console.log('收到世界事件:', data);
});
// 取消监听
ws.off('1001', 'key');
```
### tips 
- key必须保证为唯一值，用于取消该处理函数
## API 文档

完整的 API 文档请访问：[剑网3 API 文档](https://jx3api.com/)

### 主要模块

- **ClientService**: 提供 HTTP API 接口调用
  - 服务器相关：服务器状态、维护检查等
  - 角色相关：角色信息、属性、成就等
  - 活动相关：活动日历、名人堂等
  - 交易相关：拍卖行记录、交易行情等
  - 更多接口请参考官方文档

- **JX3WebSocket**: 提供 WebSocket 实时数据订阅
  - 世界事件通知
  - 服务器状态变更
  - 更多事件类型请参考官方文档


## 开发环境要求

- Node.js >= v22.12.0
- TypeScript >= 5.7.2

## 开发相关

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 代码检查
npm run lint
```
## 许可证

MIT License
