# Changelog

All notable changes to this project will be documented in this file.

## [3.1.8]

- 修复 随机名片接口，参数非必填

## [3.1.7]

- 新增 随机名片接口，支持按照体型，门派查询

## [3.1.6]

- 修复 `status.check` 的返回值类型推导：当 `type = 1` 时返回 `StatusCheckData`，当 `type = 0` 或未传时返回 `ServerStatus`
- 将 `StatusCheckParams.type` 从宽泛的 `number` 收窄为 `0 | 1`

## [3.1.5]

- 修复 `StatusCheckData` 类型，使其匹配服务器状态接口实际返回结构哦

## [3.1.3]

- 修复 `MechCalculatorData` 类型，使其匹配副本解密接口的实际返回结构

## [3.1.2]

- 修复 `MasterSearchData` 类型，使其匹配区服搜索接口的实际返回结构

## [3.1.1]

- 调整 HTTP Client 行为：当 API 响应 `code !== 200` 时直接返回 JSON，不再抛出 `JX3ApiError`

## [3.1.0]

- 新增 CommonJS 构建产物，支持 `require("jx3api-ts")`
- 为主入口和子入口增加 `require` 条件导出
- 保留现有 ESM 构建和 `import` 条件导出

## [3.0.1]

- 新增多入口导出：`jx3api-ts/types`、`jx3api-ts/client`、`jx3api-ts/socket`

## [3.0.0]

- 全面重构项目，使用纯 TypeScript 编译（tsc），移除 Rollup 打包
- Node.js 最低版本要求提升至 22.0.0

## [2.2.0]

- 重构 WebSocket 事件为原生包实现

## [2.1.0]

- 添加缺失的 API 接口

## [2.0.0]

- README 更新，WebSocket 事件补全
- 添加 ESLint 支持
- 新增 WebSocket 功能
- Node.js 最低版本要求调整为 18

## [1.3.0]

- 更新接口到最新版本

## [1.2.3]

- 添加配置
- Bug 修复

## [1.2.1]

- 修改打包方式
- 添加 JSDoc 注释

## [1.2.0]

- 修改 Rollup 配置

## [1.1.0]

- 修改 `.npmignore`
- 修复 exports 规则
- 添加发布脚本

## [1.0.0]

- 项目初始化
- 代码重构
- 添加注释
