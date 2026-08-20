/**
 * Test utilities for creating Apps in test environments
 */

import { App, AppOptions } from './app';
import { HttpMethod, IHttpServerAdapter, HttpRouteHandler } from './http/adapter';
import { IPlugin } from './types';

/**
 * Mock HTTP adapter for testing
 * Provides no-op implementations for all methods
 */
export class TestAdapter implements IHttpServerAdapter {
  registerRoute(_method: HttpMethod, _path: string, _handler: HttpRouteHandler): void {
    // No-op for tests
  }

  serveStatic(_path: string, _directory: string): void {
    // No-op for tests
  }

  async start(_port: number): Promise<void> {
    // No-op for tests
  }

  async stop(): Promise<void> {
    // No-op for tests
  }
}

/**
 * Creates an App instance configured for testing
 * Automatically uses TestAdapter if no httpServerAdapter is provided
 *
 * @param options App configuration options
 * @returns App instance with TestAdapter
 *
 * @example
 * const app = createTestApp({
 *   clientId: 'test-client-id',
 *   clientSecret: 'test-client-secret'
 * });
 */
export function createTestApp<TPlugin extends IPlugin = IPlugin>(
  options?: AppOptions<TPlugin>
): App<TPlugin> {
  // Socket Mode manages its own inbound transport. When the experimental HTTP
  // fallback is active (the default), the app still stands up an HTTP messaging
  // endpoint alongside the socket, so inject a no-op TestAdapter for it (unless
  // the caller supplied one). For socket-only mode (fallbackToHttp === false)
  // there is no HTTP transport, so a supplied adapter would be rejected — don't
  // inject one.
  if (options?.wsConnect) {
    const socketOnly =
      options.wsConnect !== true && options.wsConnect.fallbackToHttp === false;
    if (socketOnly) {
      return new App({ ...options });
    }
    return new App({
      ...options,
      httpServerAdapter: options.httpServerAdapter ?? new TestAdapter(),
    });
  }

  return new App({
    ...options,
    httpServerAdapter: options?.httpServerAdapter ?? new TestAdapter()
  });
}
