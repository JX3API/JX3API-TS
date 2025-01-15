import { JX3APIClient } from '../client';
import { ServerStatus, ServerCheck, ServerMaster } from '../types/server';
export declare class ServerService extends JX3APIClient {
    /**
     * 查看服务器状态
     */
    getServerStatus(server: string): Promise<ServerStatus>;
    /**
     * 检查服务器是否维护
     */
    checkServer(server?: string): Promise<ServerCheck>;
    /**
     * 搜索区服信息
     */
    getServerMaster(name: string): Promise<ServerMaster>;
}
//# sourceMappingURL=server.d.ts.map