import * as http from '@microsoft/teams.common/http';

import { getInjectedUrl } from './utils/url';

import type { CallOptions, EndpointRequest } from './types';

// Build-time constant injected by tsup
declare const __PACKAGE_VERSION__: string;

export { CallOptions, EndpointRequest } from './types';

/**
 * /
 * Provides an entry point for invoking Microsoft Graph APIs.
 */
export class Client {
  protected baseUrl = '/';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${__PACKAGE_VERSION__}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${__PACKAGE_VERSION__}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
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

    const requestConfig = hasOptions
      ? (lastArg as CallOptions).requestConfig
      : undefined;

    const {
      method,
      path,
      paramDefs = [],
      params,
      body,
    } = func(...(funcArgs as any[]));
    const url = getInjectedUrl(path, paramDefs, params || {});

    switch (method) {
      case 'delete':
      case 'get':
        return (await this.http[method](url, requestConfig)).data as R;
      case 'patch':
      case 'post':
      case 'put':
        return (await this.http[method](url, body, requestConfig)).data as R;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }
}
