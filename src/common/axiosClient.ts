import axios, { AxiosInstance } from 'axios';

export class JX3APIClient {
  protected client: AxiosInstance;
  private token?: string;
  private ticket?: string;

  constructor(options: { token?: string; ticket?: string; baseURL?: string }) {
    const { token, ticket, baseURL = 'https://www.jx3api.com' } = options;

    this.token = token;
    this.ticket = ticket;

    this.client = axios.create({
      baseURL,
      headers: token ? { token } : {},
    });

    // 响应拦截器处理错误
    this.client.interceptors.response.use(
      (response) => {
        const { code, msg, data } = response.data;
        if (code !== 200) {
          throw new Error(`API Error: ${msg}`);
        }
        return data;
      },
      (error) => {
        throw error;
      },
    );
  }

  protected async get<T>(
    endpoint: string,
    params?: Record<string, any>,
  ): Promise<T> {
    const response = await this.client.get(endpoint, {
      params: { ...params, ticket: this.ticket },
    });
    return response as T;
  }

  protected async post<T>(
    endpoint: string,
    data?: Record<string, any>,
  ): Promise<T> {
    const response = await this.client.post(endpoint, {
      ...data,
      ticket: this.ticket,
    });
    return response as T;
  }
}
