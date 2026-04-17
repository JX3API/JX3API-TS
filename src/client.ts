/**
 * JX3 API SDK - HTTP Client
 */

/** API 统一响应结构 */
export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
  time: number;
}

/** SDK 配置 */
export interface ClientOptions {
  /** API Token */
  token?: string;
  /** 推栏 Ticket */
  ticket?: string;
  /** 基础 URL，默认 https://www.jx3api.com */
  baseUrl?: string;
  /** 请求超时时间（毫秒），默认 30000 */
  timeout?: number;
}

export class HttpClient {
  readonly #token: string;
  readonly #ticket: string;
  readonly #baseUrl: string;
  readonly #timeout: number;

  constructor(options: ClientOptions = {}) {
    this.#token = options.token ?? "";
    this.#ticket = options.ticket ?? "";
    this.#baseUrl = (options.baseUrl ?? "https://www.jx3api.com").replace(
      /\/$/,
      ""
    );
    this.#timeout = options.timeout ?? 30_000;
  }

  get token() {
    return this.#token;
  }

  get ticket() {
    return this.#ticket;
  }

  get baseUrl() {
    return this.#baseUrl;
  }

  async request<T>(
    path: string,
    params: Record<string, unknown> | object = {}
  ): Promise<ApiResponse<T>> {
    // 自动注入 token/ticket（仅当参数中未显式设置且实例有值时）
    const body: Record<string, unknown> = { ...params } as Record<string, unknown>;
    if (this.#token && !("token" in body)) {
      body.token = this.#token;
    }
    if (this.#ticket && !("ticket" in body)) {
      body.ticket = this.#ticket;
    }

    const url = `${this.#baseUrl}${path}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.#timeout);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const json = (await res.json()) as ApiResponse<T>;

      if (json.code !== 200) {
        throw new JX3ApiError(json.code, json.msg, path);
      }

      return json;
    } finally {
      clearTimeout(timer);
    }
  }
}

export class JX3ApiError extends Error {
  constructor(
    public readonly code: number,
    public readonly msg: string,
    public readonly path: string
  ) {
    super(`JX3 API Error [${code}] on ${path}: ${msg}`);
    this.name = "JX3ApiError";
  }
}
