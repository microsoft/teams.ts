import type { Schema } from '@microsoft/teams.ai';
import { ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

export type McpClientToolDetails = {
  name: string;
  description: string;
  schema: Schema;
};

export type PromiseOrValue<T> = T | Promise<T>;
export type ValueOrFactory<T> = T | (() => PromiseOrValue<T>);

type McpClientPluginParams = {
  availableTools?: McpClientToolDetails[];
  /**
   * optional headers to pass in per request
   */
  headers?: ValueOrFactory<Record<string, string>>;

  /**
   * an optional function to call on a successful response
   * @param response the response from the server
   * @returns a value to be treated as a successful response
   *
   * Use this to intercept successful responses and override them
   */
  onSuccess?: (response: unknown) => PromiseOrValue<any>;

  /**
   * an optional function to call on an error response.
   * If the function returns a value, it will override the error
   * and be treated as a successful response
   * If it throws, it'll be treated as an error
   *
   * Use this to intercept errors and handle them in a custom way
   * @param error the error from the server
   * @returns a successful response override
   */
  onError?: (error: any) => PromiseOrValue<any>;
};

/**
 * A map of Mcp client params keyed off of their corresponding urls
 */
export type McpClientPluginParamsCache = Record<string, McpClientPluginParams>;

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
};

export interface McpClientPluginUseParams {
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
}

export { McpClientPluginParams };
