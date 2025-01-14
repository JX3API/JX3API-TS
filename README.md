# JX3API-TS

剑网3 API 的 TypeScript SDK，提供了一套完整的接口封装，让您能够轻松获取游戏数据。

## 接口文档

[剑网3 API 文档](https://jx3api.com/)

## 功能特点

- 🔥 完整的 TypeScript 类型支持
- 🚀 支持 Promise 和异步/await
- 🛡️ 内置错误处理和重试机制
- 📦 模块化设计，按需引入
- 🔌 支持 WebSocket 实时数据

## 主要功能

- 服务器状态查询
- 新闻公告获取
- 角色信息查询
- 战斗数据统计
- 社交系统对接
- 经济系统查询
- 娱乐功能支持
- 实用工具集合
- 统计数据分析
- WebSocket 实时推送

## 安装

```bash
npm install jx3api-ts
# 或者
yarn add jx3api-ts
```

## 快速开始

```typescript
import { JX3API } from 'jx3api-ts';

// 创建实例
const api = new JX3API({
  token: 'your_token',  // 可选
  ticket: 'your_ticket' // 可选
});

// 查询服务器状态
async function checkServer() {
  try {
    const status = await api.server.getServerStatus('梦江南');
    console.log(status);
  } catch (error) {
    console.error('查询失败:', error);
  }
}

// 获取日常任务
async function getDailyTasks() {
  try {
    const tasks = await api.news.getDailyTasks('梦江南');
    console.log(tasks);
  } catch (error) {
    console.error('获取失败:', error);
  }
}

// 使用 WebSocket 订阅实时数据
api.ws.connect();
api.ws.subscribe({
  event: 'server_status',
  callback: (data) => console.log('服务器状态更新:', data),
  filter: { server: '梦江南' }
});
```

## 使用示例

### 查询角色信息

```typescript
const roleInfo = await api.role.getRoleInfo('梦江南', '剑胆琴心');
console.log(roleInfo);
```

### 获取金价信息

```typescript
const goldPrice = await api.economy.getGoldPrice('梦江南');
console.log(goldPrice);
```

### 获取团队招募信息

```typescript
const teams = await api.social.getTeamRecruitments('梦江南', '25人副本');
console.log(teams);
```

## 环境要求

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