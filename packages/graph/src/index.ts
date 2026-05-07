import * as http from '@microsoft/teams.common/http';

import { getInjectedUrl, getInjectedRequestConfig } from './utils/url';

import type { CallOptions, EndpointRequest, SchemaVersion } from './types';

// Build-time constant injected by tsup
declare const __PACKAGE_VERSION__: string;

export { CallOptions, EndpointRequest, SchemaVersion } from './types';

/**
 * Error thrown when a Graph API request fails.
 * Surfaces the response body from the Graph API for easier debugging.
 */
export class GraphError extends Error {
  /** HTTP status code */
  readonly statusCode: number;
  /** Graph API error code (e.g. "Authorization_RequestDenied") */
  readonly code?: string;
  /** The full response body from the Graph API */
  readonly body: unknown;
  /** The underlying error that caused this GraphError (e.g. the Axios error) */
  readonly source?: unknown;

  constructor(statusCode: number, body: unknown, method: string, url: string, source?: unknown) {
    const graphError = body && typeof body === 'object' && 'error' in body
      ? (body as { error: { code?: string; message?: string } }).error
      : undefined;

    const message = graphError?.message
      ? `Graph ${method.toUpperCase()} ${url} failed (${statusCode}): ${graphError.message}`
      : `Graph ${method.toUpperCase()} ${url} failed with status ${statusCode}`;

    super(message);
    this.name = 'GraphError';
    this.statusCode = statusCode;
    this.code = graphError?.code;
    Object.defineProperty(this, 'body', { value: body, enumerable: false, writable: true, configurable: true });
    if (source !== undefined) {
      Object.defineProperty(this, 'source', { value: source, enumerable: false, writable: true, configurable: true });
    }
  }
}

const defaultBaseUrlRoot = 'https://graph.microsoft.com';

type Options = (http.Client | http.ClientOptions) & {
  /** Graph service root. By default, the global commercial URL "https://graph.microsoft.com" is used,
   * but certain tenants may wish to override this to direct Graph API calls to a different cloud instance.
   */
  baseUrlRoot?: string;
};

/** Graph-specific client options. */
type GraphOptions = {
  /** Graph service root override for routing Graph calls to sovereign cloud. */
  baseUrlRoot?: string;
};

/**
 * /
 * Provides an entry point for invoking Microsoft Graph APIs.
 */
export class Client {
  protected baseUrlRoot;
  protected _http: http.Client;
  protected betaHttp?: http.Client;

  /**
   * The underlying HTTP client, pre-configured with Graph base URL and headers.
   * Use for raw Graph API requests not covered by endpoint functions.
   */
  get http(): http.Client {
    return this._http;
  }

  /**
   * Creates a Graph client.
   *
   * @param options - The HTTP client to use; an existing {@link http.Client} will be cloned,
   * or an {@link http.ClientOptions} bag will be used to build a new one.
   * HTTP-level settings like headers, interceptors, and timeouts belong here.
   * @param graphOptions - Graph-specific options. Takes precedence over `options.baseUrlRoot`
   * when both are set.
   *
   * @example
   * // Public cloud (default)
   * new Client({ token });
   *
   * @example
   * // Sovereign cloud (GCCH)
   * new Client(httpClient, { baseUrlRoot: 'https://graph.microsoft.us' });
   */
  constructor(options?: Options, graphOptions?: GraphOptions) {
    this.baseUrlRoot = graphOptions?.baseUrlRoot ?? options?.baseUrlRoot ?? defaultBaseUrlRoot;
    if (!options) {
      this._http = new http.Client({
        baseUrl: `${this.baseUrlRoot}/v1.0`,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${__PACKAGE_VERSION__}`,
        },
      });
    } else if ('request' in options) {
      this._http = options.clone({
        baseUrl: `${this.baseUrlRoot}/v1.0`,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${__PACKAGE_VERSION__}`,
        },
      });
    } else {
      this._http = new http.Client({
        ...options,
        baseUrl: `${this.baseUrlRoot}/v1.0`,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${__PACKAGE_VERSION__}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * Executes a Graph API endpoint function with optional HTTP configuration
   *
   * @param func - The endpoint function to execute
   * @param args - Arguments for the endpoint function, optionally followed by {@link CallConfig}
   * @returns Promise resolving to the endpoint's response data
   *
   * @example
   * ```typescript
   * // Simple call
   * const user = await client.call(endpoints.users.get, 'user-id');
   *
   * // With HTTP configuration
   * const user = await client.call(endpoints.users.get, 'user-id', {
   *   requestConfig: {
   *     timeout: 5000
   *   }
   * });
   * ```
   */
  async call<
    F extends (...args: any[]) => EndpointRequest<any>,
    R = ReturnType<F> extends EndpointRequest<infer T> ? T : never,
  >(func: F, ...args: [...Parameters<F>, CallOptions?]): Promise<R> {
    // Check if last arg is a config object
    const lastArg = args[args.length - 1];
    const hasOptions =
      args.length > func.length &&
      lastArg &&
      typeof lastArg === 'object' &&
      'requestConfig' in lastArg;

    // Extract function arguments
    const funcArgs = hasOptions ? args.slice(0, -1) : args;
    const callOptions = hasOptions ? lastArg as CallOptions : undefined;

    const {
      ver = 'v1.0',
      method,
      path,
      paramDefs = {},
      params = {},
      body,
    } = func(...(funcArgs as any[]));
    const url = getInjectedUrl(path, paramDefs, params);
    const requestConfig = getInjectedRequestConfig(paramDefs, params, callOptions?.requestConfig);
    const httpClient = this.getHttpClient(ver);

    try {
      switch (method) {
        case 'delete':
        case 'get':
          return (await httpClient[method](url, requestConfig)).data as R;
        case 'patch':
        case 'post':
        case 'put':
          return (await httpClient[method](url, body, requestConfig)).data as R;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
    } catch (err) {
      if (err && typeof err === 'object' && 'isAxiosError' in err && 'response' in err && err.response) {
        const { response } = err as { response: { status: number; data: unknown } };
        throw new GraphError(response.status, response.data, method, url, err);
      }
      throw err;
    }
  }

  private getHttpClient(schemaVersion: SchemaVersion): http.Client {
    if (schemaVersion === 'v1.0') {
      return this._http;
    }

    this.betaHttp =
      this.betaHttp ??
      this._http.clone({
        baseUrl: `${this.baseUrlRoot}/beta`,
      });

    return this.betaHttp;
  }
}
