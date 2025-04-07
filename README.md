# JX3API-TS

剑网3 API 的 TypeScript SDK，提供了一套完整的接口封装，让您能够轻松获取游戏数据。

## 接口文档

[剑网3 API 文档](https://jx3api.com/)

## 功能特点

- 🔥 完整的 TypeScript 类型支持
- 🚀 支持 Promise 和异步/await
- 🔌 支持 WebSocket 实时数据

## 安装

```bash
npm install jx3api-ts
# 或者
yarn add jx3api-ts
```

## 快速开始

```typescript
import JX3API, { ClientService } from 'jx3api-ts';

// 使用静态类方式
const clientService = new JX3API.ClientService({
  token: 'your_token', // 可选
  ticket: 'your_ticket', // 可选
});

// 或者直接导入并使用ClientService
const client = new ClientService({
  token: 'your_token', // 可选
  ticket: 'your_ticket', // 可选
});
```

```typescript
// 查询服务器状态
const res = await clientService.getServerStatus({
  server: '梦江南',
});
console.log(res);
```

```typescript
// 获取活动日历
const res = await clientService.getActiveCalendar({
  server: '梦江南',
  num: 1,
});
console.log(res);
```

## Websocket

```typescript
import { JX3WebSocket } from 'jx3api-ts';

// 创建WebSocket实例
const ws = new JX3WebSocket({
  wsURL: 'wss://socket.jx3api.com',
  wstoken: 'your_token', // 可选
  reconnect: {
    enabled: true,
    maxAttempts: 5,
    delay: 3000,
    backoffFactor: 1.5,
  },
});

// 连接WebSocket
ws.connect();

// 监听事件
ws.on('message', (data) => {
  console.log('收到消息:', data);
});
```

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
