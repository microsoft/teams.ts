import { ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

import type { Schema } from '@microsoft/teams.ai';
import { ILogger } from '@microsoft/teams.common';

export type McpClientToolDetails = {
  name: string;
  description: string;
  schema: Schema;
};

export type PromiseOrValue<T> = T | Promise<T>;
export type ValueOrFactory<T> = T | (() => PromiseOrValue<T>);

export type McpClientPluginParams = {
  availableTools?: McpClientToolDetails[];
  /**
   * optional headers to pass in per request
   */
  headers?: ValueOrFactory<Record<string, string>>;
  /**
   * If the server is not available, it marks it as unavailable
   * and will not try to use it again until the cache is cleared
   * @default true
   */
  skipIfUnavailable?: boolean;

  /**
   * Number of milliseconds to wait before refetching the available tools
   * If the tools are supplied, this has no effect.
   * @default: uses the plugin's `refetchTimeoutMs` value
   */
  refetchTimeoutMs?: number;
};

export type McpClientPluginCachedParams = Pick<McpClientPluginParams, 'availableTools' | 'headers'>;

/**
 * A map of Mcp client params keyed off of their corresponding urls
 */
export type McpClientPluginParamsCache = Record<string, McpClientPluginCachedParams>;

/**
 * A function that creates a transport for the Mcp client
 */
export type CreateTransport = (url: string) => Transport;

export type McpClientPluginOptions = ClientOptions & {
  /**
   * the Mcp client name
   * @default 'mcpClient'
   */
  readonly name?: string;

  /**
   * the Mcp client version
   * @default 0.0.0
   */
  readonly version?: string;

  /**
   * A saved cache of tool params for their corresponding server urls
   * If not provided, the client will fetch the params from the server
   * @default {}
   */
  readonly cache?: McpClientPluginParamsCache;

  /**
   * A function that creates a transport for the Mcp client
   * @default (url) => new SSEClientTransport(url)
   */
  createTransport?: CreateTransport;

  /**
   * Logger instance to use for logging
   * If not provided, a ConsoleLogger will be used
   */
  logger?: ILogger;

  /**
   * Number of milliseconds to wait before refetching the available tools
   * @default: 1 day
   */
  refetchTimeoutMs?: number;
};

export type McpClientPluginUseParams = {
  /**
   * The url of the Mcp server to use
   */
  url: string;

  /**
   * The params to use for the Mcp server
   * If not provided, the client will fetch the params from the server
   * or use the cached params if provided
   */
  params?: McpClientPluginParams;
};
