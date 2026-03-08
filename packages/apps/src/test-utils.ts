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
  return new App({
    ...options,
    httpServerAdapter: options?.httpServerAdapter ?? new TestAdapter()
  });
}
