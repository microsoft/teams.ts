import type { Function, Schema } from '@microsoft/spark.ai';
import { IMcpClient, McpClientParams } from '@microsoft/spark.ai';
import { Client, ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';

/**
 * A map of Mcp client params keyed off of their corresponding urls
 */
export type McpClientParamsCache = Record<string, McpClientParams[]>;

export type McpClientOptions = ClientOptions & {
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
  readonly cache?: McpClientParamsCache;
};

export class McpClient implements IMcpClient {
  get name() {
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
  protected _cache: McpClientParamsCache;

  constructor(options?: McpClientOptions) {
    const { name, version, cache, ...clientOptions } = options || {};
    this._name = name || 'mcpClient';
    this._version = version || '0.0.0';
    this._cache = cache || {};
    this._clientOptions = clientOptions;
  }

  async buildFunctions(args: { url: string; params?: McpClientParams[] }[]): Promise<Function[]> {
    // First, handle all fetching needs
    const fetchNeeded = args.filter((arg) => !arg.params && !this._cache[arg.url]);

    // Fetch all needed params in parallel
    if (fetchNeeded.length > 0) {
      const tools = await this.getTools(fetchNeeded.map((arg) => arg.url));
      for (const [url, params] of Object.entries(tools)) {
        this._cache[url] = params;
      }
    }

    // Now create all functions
    const allFunctions: Function[] = [];

    for (const { url, params } of args) {
      const resolvedParams = params ?? this._cache[url] ?? [];

      if (params) {
        // Update cache with provided params
        this._cache[url] = params;
      }

      const functions = resolvedParams.map((param) => ({
        name: param.name,
        description: param.description,
        parameters: param.schema || {},
        handler: async (args: any) => {
          const [client, transport] = this.makeMcpClient(url);
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

    return allFunctions;
  }

  async getTools(urls: string[]): Promise<McpClientParamsCache> {
    const toolCallResult = await Promise.all(
      urls.map(async (url) => {
        const tools = await this.fetchTools(url);
        return [url, tools];
      })
    );

    return Object.fromEntries(toolCallResult);
  }

  private async fetchTools(url: string): Promise<McpClientParams[]> {
    const [client, transport] = this.makeMcpClient(url);
    try {
      await client.connect(transport);
      const tools = await client.listTools();
      return tools.tools.map((tool) => ({
        name: tool.name,
        description: tool.description ?? '',
        schema: tool.inputSchema as Schema,
      }));
    } finally {
      await client.close();
    }
  }

  private makeMcpClient(serverUrl: string) {
    const transport = new SSEClientTransport(new URL(serverUrl));

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
