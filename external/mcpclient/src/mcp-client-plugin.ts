import { Client, ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

import type { ChatPromptPlugin, Function, Schema } from '@microsoft/teams.ai';

export type McpClientPluginParams = {
  name: string;
  description: string;
  schema: Schema;
};

/**
 * A map of Mcp client params keyed off of their corresponding urls
 */
export type McpClientPluginParamsCache = Record<string, McpClientPluginParams[]>;

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
  params?: McpClientPluginParams[];
};

export class McpClientPlugin implements ChatPromptPlugin<'mcpClient', McpClientPluginUseParams> {
  readonly name = 'mcpClient';

  // This collides with the name of the plugin, so we use a different
  // variable name
  get mcpClientName() {
    return this._name;
  }
  protected readonly _name: string;

  get version() {
    return this._version;
  }
  protected readonly _version: string;

  get clientOptions() {
    return this._clientOptions;
  }
  protected _clientOptions: ClientOptions;

  get cache() {
    return this._cache;
  }
  protected _cache: McpClientPluginParamsCache;

  private readonly _mcpServerUrlsByParams: Record<string, McpClientPluginParams[] | undefined> = {};

  private createTransport: CreateTransport;

  constructor(options?: McpClientPluginOptions) {
    const {
      name: mcpClientName,
      version,
      cache,
      createTransport,
      ...clientOptions
    } = options || {};
    this._name = mcpClientName || 'mcpClient';
    this._version = version || '0.0.0';
    this._cache = cache || {};
    this._clientOptions = clientOptions;
    this.createTransport =
      createTransport ?? ((url: string) => new SSEClientTransport(new URL(url)));
  }

  onUsePlugin(args: { url: string; params?: McpClientPluginParams[] }) {
    this._mcpServerUrlsByParams[args.url] = args.params;
  }

  async onBuildFunctions(incomingFunctions: Function[]): Promise<Function[]> {
    // First, handle all fetching needs
    const fetchNeeded = Object.entries(this._mcpServerUrlsByParams)
      .map(([url, params]) => {
        const paramsToFetch = params ?? this._cache[url] ?? undefined;
        if (paramsToFetch == null) {
          return url;
        }
        return null;
      })
      .filter((url): url is string => url != null);

    // Fetch all needed params in parallel
    if (fetchNeeded.length > 0) {
      const tools = await this.getTools(fetchNeeded);
      for (const [url, params] of Object.entries(tools)) {
        this._cache[url] = params;
      }
    }

    // Now create all functions
    const allFunctions: Function[] = [];

    for (const [url, params] of Object.entries(this._mcpServerUrlsByParams)) {
      const resolvedParams = params ?? this._cache[url] ?? [];

      const functions = resolvedParams.map((param) => ({
        name: param.name,
        description: param.description,
        parameters: param.schema || {},
        handler: async (args: any) => {
          const [client, transport] = this.makeMcpClientPlugin(url);
          try {
            await client.connect(transport);
            const result = await client.callTool({
              name: param.name,
              arguments: args,
            });
            return result.content;
          } finally {
            await client.close();
          }
        },
      }));

      allFunctions.push(...functions);
    }

    return incomingFunctions.concat(allFunctions);
  }

  async getTools(urls: string[]): Promise<McpClientPluginParamsCache> {
    const toolCallResult = await Promise.all(
      urls.map(async (url) => {
        const tools = await this.fetchTools(url);
        return [url, tools];
      })
    );

    return Object.fromEntries(toolCallResult);
  }

  private async fetchTools(url: string): Promise<McpClientPluginParams[]> {
    const [client, transport] = this.makeMcpClientPlugin(url);
    try {
      await client.connect(transport);
      const tools = await client.listTools();
      return tools.tools.map((tool) => ({
        name: tool.name,
        description: tool.description ?? '',
        schema: tool.inputSchema as Schema,
      }));
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      await client.close();
    }
  }

  private makeMcpClientPlugin(serverUrl: string) {
    const transport = this.createTransport(serverUrl);

    const client = new Client(
      {
        name: this._name,
        version: this._version,
      },
      this._clientOptions
    );

    return [client, transport] as const;
  }
}
