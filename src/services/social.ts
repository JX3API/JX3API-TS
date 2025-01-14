import { JX3APIClient } from '../client';
import { 
  MasterRecruitment, 
  TeamRecruitment, 
  FireworkRecord, 
  ForumPost,
  ForumReply 
} from '../types/social';

export class SocialService extends JX3APIClient {
  /**
   * 获取师徒招募信息
   * @param server 服务器名
   * @param type 招募类型
   */
  async getMasterRecruitments(
    server: string,
    type?: 'master' | 'apprentice'
  ): Promise<MasterRecruitment[]> {
    return this.get('/data/social/master/recruit', { server, type });
  }

  /**
   * 获取团队招募信息
   * @param server 服务器名
   * @param activity_type 活动类型
   */
  async getTeamRecruitments(
    server: string,
    activity_type?: string
  ): Promise<TeamRecruitment[]> {
    return this.get('/data/social/team/recruit', { server, activity_type });
  }

  /**
   * 获取烟花记录
   * @param server 服务器名
   * @param role_name 角色名
   */
  async getFireworkRecords(
    server: string,
    role_name?: string
  ): Promise<FireworkRecord[]> {
    return this.get('/data/social/firework/record', { server, role_name });
  }

  /**
   * 获取贴���帖子列表
   * @param page 页码
   * @param size 每页数量
   * @param tag 标签筛选
   */
  async getForumPosts(
    page: number = 1,
    size: number = 20,
    tag?: string
  ): Promise<{
    total: number;
    posts: ForumPost[];
  }> {
    return this.get('/data/social/forum/posts', { page, size, tag });
  }

  /**
   * 获取帖子详情
   * @param post_id 帖子ID
   */
  async getForumPost(post_id: string): Promise<ForumPost> {
    return this.get('/data/social/forum/post', { post_id });
  }

  /**
   * 获取帖子回复
   * @param post_id 帖子ID
   * @param page 页码
   * @param size 每页数量
   */
  async getForumReplies(
    post_id: string,
    page: number = 1,
    size: number = 20
  ): Promise<{
    total: number;
    replies: ForumReply[];
  }> {
    return this.get('/data/social/forum/replies', { post_id, page, size });
  }

  /**
   * 搜索帖子
   * @param keyword 搜索关键词
   * @param page 页码
   * @param size 每页数量
   */
  async searchForumPosts(
    keyword: string,
    page: number = 1,
    size: number = 20
  ): Promise<{
    total: number;
    posts: ForumPost[];
  }> {
    return this.get('/data/social/forum/search', { keyword, page, size });
  }
} 