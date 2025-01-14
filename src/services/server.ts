import { JX3APIClient } from '../client';
import { ServerStatus, ServerCheck, ServerMaster } from '../types/server';

export class ServerService extends JX3APIClient {
  /**
   * 查看服务器状态
   */
  async getServerStatus(server: string): Promise<ServerStatus> {
    return this.get('/data/server/status', { server });
  }

  /**
   * 检查服务器是否维护
   */
  async checkServer(server?: string): Promise<ServerCheck> {
    return this.get('/data/server/check', server ? { server } : undefined);
  }

  /**
   * 搜索区服信息
   */
  async getServerMaster(name: string): Promise<ServerMaster> {
    return this.get('/data/server/master', { name });
  }
}