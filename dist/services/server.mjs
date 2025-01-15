import{JX3APIClient as e}from"../client.mjs";class r extends e{async getServerStatus(e){return this.get("/data/server/status",{server:e})}async checkServer(e){return this.get("/data/server/check",e?{server:e}:void 0)}async getServerMaster(e){return this.get("/data/server/master",{name:e})}}export{r as ServerService};
//# sourceMappingURL=server.mjs.map
