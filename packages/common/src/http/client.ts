import axios, { AxiosHeaders } from 'axios';
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';

import { ConsoleLogger } from '../logging';
import type { ILogger } from '../logging';

import type { Interceptor } from './interceptor';
import type { Token } from './token';


export type ClientOptions = {
  /**
   * The client name
   */
  readonly name?: string;

  /**
   * The authorization token to use
   */
  readonly token?: Token;

  /**
   *: ILogger instance to use
   */
  readonly logger?: ILogger;

  /**
   * The baseUrl to prefix all client requests with
   */
  readonly baseUrl?: string;

  /**
   * Default request timeout (ms)
   */
  readonly timeout?: number;

  /**
   * Default headers
   */
  readonly headers?: RawAxiosRequestHeaders;

  /**
   * Default interceptors to register
   */
  readonly interceptors?: Array<Interceptor>;

  /**
   * Default middleware to register. Middleware runs in insertion order around
   * token resolution, existing interceptors, and the terminal HTTP transport.
   */
  readonly middlewares?: Array<Middleware>;
};

/**
 * Context for a single HTTP middleware invocation.
 *
 * Middleware can inspect the requested method and URL, read or mutate
 * `config`, and use `log` for diagnostics. `extensions` is SDK-local metadata
 * from `config.extensions`; it is never copied into headers, query params, or
 * the request body by the common client.
 */
export type MiddlewareContext<D = any> = {
  /**
   * HTTP method for the request, when provided.
   */
  readonly method?: string;

  /**
   * URL for the request, when provided.
   */
  readonly url?: string;

  /**
   * Mutable request config for this outbound call.
   */
  config: RequestConfig<D>;

  /**
   * SDK-local request metadata.
   */
  readonly extensions?: Record<string, unknown>;

  /**
   * Client logger.
   */
  readonly log: ILogger;
};

/**
 * Calls the next middleware in the chain, or the terminal HTTP transport.
 */
export type MiddlewareNext<R = AxiosResponse> = () => Promise<R>;

/**
 * HTTP middleware that wraps one outbound request.
 *
 * Middleware is registered with `client.use(...)` and runs in insertion order:
 * the first registered middleware is the outermost wrapper.
 */
export type Middleware = {
  invoke<R = AxiosResponse, D = any>(
    context: MiddlewareContext<D>,
    next: MiddlewareNext<R>
  ): Promise<R>;
};

export type RequestConfig<D = any> = AxiosRequestConfig<D> & {
  /**
   * If provided, this token will be used instead of
   * the default token provided in the `ClientOptions`
   */
  token?: Token;

  /**
   * SDK-local request metadata for interceptors. This is not sent over the wire.
   */
  extensions?: Record<string, unknown>;
};

type InterceptorRegistry = {
  readonly requestId?: number;
  readonly responseId?: number;
  readonly interceptor: Interceptor;
};

export class Client {
  token?: Token;
  readonly name: string;

  protected options: ClientOptions;
  protected log: ILogger;
  protected http: AxiosInstance;
  protected seq: number = 0;
  protected _interceptors: Map<number, InterceptorRegistry>;
  protected _middlewares: Map<number, Middleware>;

  constructor(options: ClientOptions = {}) {
    this.options = options;
    this.name = options.name || 'http';
    this.token = options.token;
    this.log = options.logger || new ConsoleLogger(this.name);
    this._interceptors = new Map<number, InterceptorRegistry>();
    this._middlewares = new Map<number, Middleware>();
    this.http = axios.create({
      baseURL: options.baseUrl,
      timeout: options.timeout,
      headers: options.headers,
    });

    for (const interceptor of options.interceptors || []) {
      this.use(interceptor);
    }

    for (const middleware of options.middlewares || []) {
      this.use(middleware);
    }
  }

  get interceptors(): readonly Interceptor[] {
    return Array.from(this._interceptors.values()).map((i) => i.interceptor);
  }

  /**
   * Registered HTTP middleware in execution order.
   */
  get middlewares(): readonly Middleware[] {
    return Array.from(this._middlewares.values());
  }

  async get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: RequestConfig<D>,
  ): Promise<R> {
    return this.invokeMiddleware<T, R, D>({
      method: 'get',
      url,
      config: { ...config, method: 'get', url },
      extensions: config?.extensions,
      log: this.log,
    }, 0, 'method');
  }

  async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: RequestConfig<D>,
  ): Promise<R> {
    return this.invokeMiddleware<T, R, D>({
      method: 'post',
      url,
      config: { ...config, method: 'post', url, data },
      extensions: config?.extensions,
      log: this.log,
    }, 0, 'method');
  }

  async put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: RequestConfig<D>,
  ): Promise<R> {
    return this.invokeMiddleware<T, R, D>({
      method: 'put',
      url,
      config: { ...config, method: 'put', url, data },
      extensions: config?.extensions,
      log: this.log,
    }, 0, 'method');
  }

  async patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: RequestConfig<D>,
  ): Promise<R> {
    return this.invokeMiddleware<T, R, D>({
      method: 'patch',
      url,
      config: { ...config, method: 'patch', url, data },
      extensions: config?.extensions,
      log: this.log,
    }, 0, 'method');
  }

  async delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: RequestConfig<D>,
  ): Promise<R> {
    return this.invokeMiddleware<T, R, D>({
      method: 'delete',
      url,
      config: { ...config, method: 'delete', url },
      extensions: config?.extensions,
      log: this.log,
    }, 0, 'method');
  }

  async request<T = any, R = AxiosResponse<T>, D = any>(
    config: RequestConfig<D>,
  ): Promise<R> {
    return this.invokeMiddleware<T, R, D>({
      method: config.method,
      url: config.url,
      config,
      extensions: config.extensions,
      log: this.log,
    }, 0, 'request');
  }

  /**
   * Register HTTP middleware.
   */
  use(middleware: Middleware): number;

  /**
   * Register an interceptor for request/response/error compatibility.
   */
  use(interceptor: Interceptor): number;

  use(handler: Interceptor | Middleware): number {
    if (isMiddleware(handler)) {
      return this.useMiddleware(handler);
    }

    return this.useInterceptor(handler);
  }

  /**
   * Eject an interceptor
   */
  eject(id: number): void {
    const registry = this._interceptors.get(id);

    if (!registry) {
      this._middlewares.delete(id);
      return;
    }

    if (registry.requestId !== undefined) {
      this.http.interceptors.request.eject(registry.requestId);
    }

    if (registry.responseId !== undefined) {
      this.http.interceptors.response.eject(registry.responseId);
    }

    this._interceptors.delete(id);
  }

  /**
   * Clear (Eject) all interceptors
   */
  clear(): void {
    for (const id of this._interceptors.keys()) {
      this.eject(id);
    }

    this._middlewares.clear();
  }

  /**
   * Create a copy of the client
   */
  clone(options?: ClientOptions): Client {
    const findUA = (h?: RawAxiosRequestHeaders): string | undefined => {
      if (!h) return undefined;
      const key = Object.keys(h).find((k) => k.toLowerCase() === 'user-agent');
      return key ? String(h[key]) : undefined;
    };

    const parentUA = findUA(this.options.headers);
    const childUA = findUA(options?.headers);
    const mergedUA =
      parentUA && childUA ? `${childUA} ${parentUA}` : childUA || parentUA;

    const headers = {
      ...this.options.headers,
      ...options?.headers,
    };

    if (mergedUA) {
      for (const key of Object.keys(headers)) {
        if (key.toLowerCase() === 'user-agent') {
          delete headers[key];
        }
      }

      headers['User-Agent'] = mergedUA;
    }

    return new Client({
      ...this.options,
      ...options,
      headers,
      interceptors: [
        ...Array.from(this._interceptors.values()).map((i) => i.interceptor),
      ],
      middlewares: [
        ...this.middlewares,
      ],
    });
  }

  protected async withConfig(
    config: RequestConfig = {},
  ): Promise<RequestConfig> {
    let token = config.token || this.token;
    const requestHasAuthorization = hasAuthorizationHeader(config.headers);

    if (config.token) {
      delete config.token;
    }

    if (this.options.headers) {
      config.headers = {
        ...this.options.headers,
        ...headersToObject(config.headers),
      };
    }

    if (token && !requestHasAuthorization && !hasAuthorizationHeader(config.headers)) {
      if (!config.headers) {
        config.headers = {};
      }

      if (typeof token === 'function') {
        token = await token(config);
      }

      if (token && typeof token === 'object') {
        token = token.toString();
      }

      if (!token?.toString().trim()) {
        return config;
      }

      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }

  private useMiddleware(middleware: Middleware): number {
    const id = ++this.seq;
    this._middlewares.set(id, middleware);
    return id;
  }

  private async send<T, R, D>(
    config: RequestConfig<D>,
    dispatch: 'method' | 'request',
  ): Promise<R> {
    const resolvedConfig = await this.withConfig(config);
    if (dispatch === 'request') {
      return this.http.request<T, R, D>(resolvedConfig);
    }

    const method = resolvedConfig.method?.toLowerCase();
    const url = resolvedConfig.url;
    if (url === undefined) {
      return this.http.request<T, R, D>(resolvedConfig);
    }

    const transportConfig: RequestConfig<D> = { ...resolvedConfig };
    delete transportConfig.method;
    delete transportConfig.url;

    switch (method) {
      // get/delete carry any request body on `config.data`, so the resolved
      // config is forwarded as-is. (Stripping `data` here previously dropped
      // GET/DELETE request bodies that callers passed through `config`.)
      case 'get':
        return this.http.get<T, R, D>(url, transportConfig);
      case 'delete':
        return this.http.delete<T, R, D>(url, transportConfig);
      // post/put/patch take the body as a positional argument, so remove it
      // from the forwarded config to avoid sending it in two places.
      case 'post': {
        const { data, ...rest } = transportConfig;
        return this.http.post<T, R, D>(url, data, rest);
      }
      case 'put': {
        const { data, ...rest } = transportConfig;
        return this.http.put<T, R, D>(url, data, rest);
      }
      case 'patch': {
        const { data, ...rest } = transportConfig;
        return this.http.patch<T, R, D>(url, data, rest);
      }
      default:
        return this.http.request<T, R, D>(resolvedConfig);
    }
  }

  private useInterceptor(interceptor: Interceptor): number {
    const id = ++this.seq;
    let requestId: number | undefined = undefined;
    let responseId: number | undefined = undefined;

    if (interceptor.request) {
      requestId = this.http.interceptors.request.use(
        /* istanbul ignore next */
        (config) => {
          return interceptor.request!({ config, log: this.log });
        },
        /* istanbul ignore next */
        (error: any) => {
          if (!interceptor.error) return error;
          return interceptor.error({ error, log: this.log });
        },
      );
    }

    if (interceptor.response) {
      responseId = this.http.interceptors.response.use(
        /* istanbul ignore next */
        (res) => {
          return interceptor.response!({ res, log: this.log });
        },
        /* istanbul ignore next */
        (error: any) => {
          if (!interceptor.error) return error;
          return interceptor.error({ error, log: this.log });
        },
      );
    }

    this._interceptors.set(id, {
      requestId,
      responseId,
      interceptor,
    });

    return id;
  }

  private async invokeMiddleware<T, R, D>(
    context: MiddlewareContext<D>,
    index: number,
    dispatch: 'method' | 'request',
  ): Promise<R> {
    const middleware = this.middlewares.at(index);
    if (!middleware) {
      return this.send<T, R, D>(context.config, dispatch);
    }

    return middleware.invoke<R, D>(
      context,
      () => this.invokeMiddleware<T, R, D>(context, index + 1, dispatch)
    );
  }
}

function isMiddleware(handler: Interceptor | Middleware): handler is Middleware {
  return typeof (handler as Middleware).invoke === 'function';
}

function hasAuthorizationHeader(headers: RequestConfig['headers']): boolean {
  if (!headers) {
    return false;
  }

  if (headers instanceof AxiosHeaders) {
    return !!headers.get('Authorization') || !!headers.get('authorization');
  }

  return Object.keys(headers).some((key) => key.toLowerCase() === 'authorization');
}

function headersToObject(headers: RequestConfig['headers']): RawAxiosRequestHeaders | undefined {
  if (!headers) {
    return undefined;
  }

  if (headers instanceof AxiosHeaders) {
    return headers.toJSON() as RawAxiosRequestHeaders;
  }

  return headers as RawAxiosRequestHeaders;
}
