# jx3api-ts

Type-safe Node.js SDK for [JX3 API](https://www.jx3api.com)，覆盖全部 HTTP 接口和 WebSocket 实时事件。

- **零运行时依赖** — 仅使用 Node.js 22+ 原生 `fetch` 和 `WebSocket`
- **完整类型定义** — 80+ HTTP API 请求/响应类型 + 38 种 WebSocket 事件类型
- **ESM Only** — `target: ES2024`，`module: NodeNext`
- **Token/Ticket 自动注入** — 构造时传入一次，所有请求自动携带

## 安装

```bash
npm install jx3api-ts
```

> 要求 Node.js >= 22.0.0

## 快速上手

```ts
import { JX3API } from "jx3api-ts";

const api = new JX3API({
  token: "YOUR_TOKEN",   // API 令牌
  ticket: "YOUR_TICKET", // 推栏 Ticket（可选）
});
```

### HTTP API

```ts
// 查询角色信息
const role = await api.role.detail({ server: "唯我独尊", name: "夜温言" });
console.log(role.data.forceName); // "万花"

// 活动日历
const calendar = await api.active.calendar({ server: "长安城" });
console.log(calendar.data.war);

// 开服状态
const status = await api.status.check({ server: "长安城" });
console.log(status.data.status); // "爆满"

// 骚话
const saohua = await api.saohua.random();
console.log(saohua.data.text);
```

### WebSocket 实时事件

```ts
const ws = api.socket();

// 奇遇报时
ws.on(1001, (detail) => {
  console.log(`${detail.name} 触发了 ${detail.event}`);
});

// 开服报时
ws.on(2001, (detail) => {
  console.log(`${detail.server} ${detail.status === 1 ? "开服" : "维护"}`);
});

// 监听所有事件
ws.onAny((action, detail) => {
  console.log(`[${action}]`, detail);
});

// 连接状态
ws.onOpen(() => console.log("已连接"));
ws.onClose((code, reason) => console.log("断开", code, reason));

// 关闭连接
ws.close();
```

WebSocket 内置心跳保活（30s 间隔）和指数退避自动重连。可通过配置关闭：

```ts
const ws = api.socket({ autoReconnect: false });
```

## 配置项

### `JX3API` 构造参数

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `token` | `string` | `""` | API 令牌 |
| `ticket` | `string` | `""` | 推栏 Ticket |
| `baseUrl` | `string` | `"https://www.jx3api.com"` | API 基础地址 |
| `timeout` | `number` | `30000` | 请求超时（毫秒） |

### `socket()` 参数

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `url` | `string` | `"wss://socket.jx3api.com"` | WebSocket 地址 |
| `autoReconnect` | `boolean` | `true` | 自动重连 |
| `maxReconnects` | `number` | `Infinity` | 最大重连次数 |

## 完整 API 列表

### 免费接口 (`USER`)

| 方法 | 说明 |
|---|---|
| `api.active.calendar()` | 活动日历 |
| `api.active.listCalendar()` | 活动月历 |
| `api.active.celebs()` | 行侠事件 |
| `api.exam.search()` | 科举答题 |
| `api.home.flower()` | 家园鲜花 |
| `api.home.furniture()` | 家园装饰 |
| `api.home.travel()` | 器物图谱 |
| `api.news.allnews()` | 新闻资讯 |
| `api.news.announce()` | 维护公告 |
| `api.master.search()` | 搜索区服 |
| `api.status.check()` | 开服状态 |
| `api.skill.rework()` | 技改记录 |
| `api.saohua.random()` | 世界骚话 |
| `api.saohua.content()` | 舔狗日记 |

### 会员接口 (`VIP1` / `VIP2`)

| 方法 | 说明 |
|---|---|
| `api.active.monster()` | 百战首领 |
| `api.active.nextEvent()` | 扶摇预测 |
| `api.auction.records()` | 阵营拍卖 |
| `api.steed.records()` | 的卢记录 |
| `api.show.records()` | 烟花记录 |
| `api.fraud.detail()` | 骗子查询 |
| `api.event.records()` | 角色奇遇 |
| `api.event.unfinished()` | 未做奇遇 |
| `api.event.recent()` | 近期奇遇 |
| `api.event.statistics()` | 奇遇统计 |
| `api.event.collect()` | 奇遇汇总 |
| `api.arena.recent()` | 名剑战绩 |
| `api.arena.awesome()` | 名剑排行 |
| `api.arena.schools()` | 名剑统计 |
| `api.recruit.search()` | 团队招募 |
| `api.mentor.search()` | 师徒系统 |
| `api.rank.statistics()` | 本服榜单 |
| `api.rank.trials()` | 试炼排行 |
| `api.reward.statistics()` | 掉落统计 |
| `api.role.detail()` | 角色信息 |
| `api.role.monster()` | 角色百战 |
| `api.card.record()` | 角色名片 |
| `api.card.records()` | 所有名片 |
| `api.card.cached()` | 缓存名片 |
| `api.raid.records()` | 副本记录 |
| `api.school.matrix()` | 心法阵眼 |
| `api.school.talent()` | 奇穴详情 |
| `api.school.skills()` | 技能详情 |
| `api.school.seniority()` | 资历排行 |
| `api.sand.records()` | 阵营沙盘 |
| `api.fenxian.records()` | 阵营事件 |
| `api.smite.records()` | 诛恶事件 |
| `api.mine.cart()` | 关隘首领 |
| `api.chitu.records()` | 本日赤兔 |
| `api.chitu.weekRecords()` | 本周赤兔 |
| `api.ranch.records()` | 马场刷新 |
| `api.tieba.itemRecords()` | 贴吧物价 |
| `api.trade.demon()` | 金币价格 |
| `api.trade.records()` | 黑市物价 |
| `api.trade.itemSearch()` | 搜索物品 |
| `api.trade.itemRecords()` | 物品价格 |
| `api.battle.records()` | 帮战记录 |
| `api.mech.calculator()` | 副本解密 |
| `api.duowan.statistics()` | 统战歪歪 |
| `api.tieba.random()` | 八卦帖子 |
| `api.sound.converter()` | 阿里语音 |

### WebSocket 事件

| Action | 说明 |
|---|---|
| `1001` | 奇遇报时 |
| `1002` | 刷马事件 |
| `1003` | 抓马事件 |
| `1004` | 扶摇预告 |
| `1005` | 扶摇开启 |
| `1006` | 扶摇点名 |
| `1007` | 烟花报时 |
| `1008` | 的卢预告 |
| `1009` | 的卢刷新 |
| `1010` | 的卢捕获 |
| `1011` | 的卢拍卖 |
| `1012` | 玄晶报时 |
| `1013` | 阵营拍卖 |
| `1014` | 诛恶事件 |
| `1015` | 追魂点名 |
| `1016` | 阵营祭天预告 |
| `1017` | 阵营祭天终点 |
| `1101` | 领地宣战开始 |
| `1102` | 领地宣战结束 |
| `1108` | 帮会野外宣战开始 |
| `1109` | 帮会野外宣战结束 |
| `1111` | 抢占粮仓 |
| `1112` | 大旗重置 |
| `1113` | 大旗被夺 |
| `1114` | 据点占领（有帮会） |
| `1115` | 据点占领（无帮会） |
| `1116`~`1118` | 贡献排行 |
| `1119` | 攻防拍卖 |
| `1120` | 拍卖分红（小攻防） |
| `1121` | 拍卖分红（大攻防） |
| `1122` | 拍卖分红（大攻防+指挥） |
| `2001` | 开服报时 |
| `2002` | 新闻资讯 |
| `2003` | 游戏更新 |
| `2004` | 八卦速报 |
| `2005` | 关隘首领 |
| `2006` | 云丛预告 |

## 错误处理

```ts
import { JX3ApiError } from "jx3api-ts";

try {
  await api.role.detail({ server: "不存在", name: "test" });
} catch (err) {
  if (err instanceof JX3ApiError) {
    console.log(err.code); // API 错误码
    console.log(err.msg);  // 错误信息
    console.log(err.path); // 请求路径
  }
}
```

## License

[MIT](LICENSE)
