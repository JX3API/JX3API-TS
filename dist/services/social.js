import{JX3APIClient as e}from"../client.js";class t extends e{async getMasterRecruitments(e,t){return this.get("/data/social/master/recruit",{server:e,type:t})}async getTeamRecruitments(e,t){return this.get("/data/social/team/recruit",{server:e,activity_type:t})}async getFireworkRecords(e,t){return this.get("/data/social/firework/record",{server:e,role_name:t})}async getForumPosts(e=1,t=20,r){return this.get("/data/social/forum/posts",{page:e,size:t,tag:r})}async getForumPost(e){return this.get("/data/social/forum/post",{post_id:e})}async getForumReplies(e,t=1,r=20){return this.get("/data/social/forum/replies",{post_id:e,page:t,size:r})}async searchForumPosts(e,t=1,r=20){return this.get("/data/social/forum/search",{keyword:e,page:t,size:r})}}export{t as SocialService};
//# sourceMappingURL=social.js.map
