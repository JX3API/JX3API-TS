import { JX3APIClient } from '../client';
import { MasterRecruitment, TeamRecruitment, FireworkRecord, ForumPost, ForumReply } from '../types/social';
export declare class SocialService extends JX3APIClient {
    /**
     * 获取师徒招募信息
     * @param server 服务器名
     * @param type 招募类型
     */
    getMasterRecruitments(server: string, type?: 'master' | 'apprentice'): Promise<MasterRecruitment[]>;
    /**
     * 获取团队招募信息
     * @param server 服务器名
     * @param activity_type 活动类型
     */
    getTeamRecruitments(server: string, activity_type?: string): Promise<TeamRecruitment[]>;
    /**
     * 获取烟花记录
     * @param server 服务器名
     * @param role_name 角色名
     */
    getFireworkRecords(server: string, role_name?: string): Promise<FireworkRecord[]>;
    /**
     * 获取贴���帖子列表
     * @param page 页码
     * @param size 每页数量
     * @param tag 标签筛选
     */
    getForumPosts(page?: number, size?: number, tag?: string): Promise<{
        total: number;
        posts: ForumPost[];
    }>;
    /**
     * 获取帖子详情
     * @param post_id 帖子ID
     */
    getForumPost(post_id: string): Promise<ForumPost>;
    /**
     * 获取帖子回复
     * @param post_id 帖子ID
     * @param page 页码
     * @param size 每页数量
     */
    getForumReplies(post_id: string, page?: number, size?: number): Promise<{
        total: number;
        replies: ForumReply[];
    }>;
    /**
     * 搜索帖子
     * @param keyword 搜索关键词
     * @param page 页码
     * @param size 每页数量
     */
    searchForumPosts(keyword: string, page?: number, size?: number): Promise<{
        total: number;
        posts: ForumPost[];
    }>;
}
//# sourceMappingURL=social.d.ts.map