import { AxiosInstance } from 'axios';
export declare class JX3APIClient {
    protected client: AxiosInstance;
    private token?;
    private ticket?;
    constructor(options: {
        token?: string;
        ticket?: string;
        baseURL?: string;
    });
    protected get<T>(endpoint: string, params?: Record<string, any>): Promise<T>;
    protected post<T>(endpoint: string, data?: Record<string, any>): Promise<T>;
}
//# sourceMappingURL=client.d.ts.map