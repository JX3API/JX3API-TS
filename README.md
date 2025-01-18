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
import  JX3API  from 'jx3api-ts';

// 创建实例
const jx3 = new JX3API({
  token: 'your_token',  // 可选
  ticket: 'your_ticket' // 可选
});
```
```typescript
// 查询服务器状态
const res = await jx3.client.getServerStatus({
    server: '梦江南',
});
console.log(res);
```
```typescript
// 获取活动日历
const res = await jx3.client.getActiveCalendar({
    server: '梦江南',
    num: 1,
});
console.log(res);
```
## Websocket
正在开发中，敬请期待
## 开发环境要求

- Node.js >= 14.0.0
- TypeScript >= 4.5.0

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