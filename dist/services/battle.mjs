import{JX3APIClient as t}from"../client.mjs";class e extends t{async getArenaRecord(t,e){return this.get("/data/arena/record",{server:t,name:e})}async getBattleField(t,e){return this.get("/data/battle/field",{server:t,map_id:e})}async getSchoolSkills(t,e){return this.get("/data/school/skills",{school:t,skill_name:e})}async getTalents(t,e){return this.get("/data/school/talents",{school:t,position:e})}async getTalentBuilds(t,e){return this.get("/data/school/talent_builds",{school:t,type:e})}async searchTalentBuilds(t){return this.get("/data/school/talent_builds/search",{keyword:t})}}export{e as BattleService};
//# sourceMappingURL=battle.mjs.map
