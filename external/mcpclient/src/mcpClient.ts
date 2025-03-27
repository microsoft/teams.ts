import type { Function, Schema } from '@microsoft/spark.ai';
import { MCPClientParams } from '@microsoft/spark.ai';
import { Client, ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import {
    CallToolRequest,
    CallToolResultSchema,
    Implementation as ClientDetails,
    CompatibilityCallToolResultSchema,
} from '@modelcontextprotocol/sdk/types.js';

export type MCPClientParamsMap = Record<string, MCPClientParams[]>;

export type MCPClientArgs = CallToolRequest['params'];

export type MCPCLientResult =
  | typeof CallToolResultSchema
  | typeof CompatibilityCallToolResultSchema;

export interface IMCPClient {
  buildFunctions(
    args: {
      url: string;
      params?: MCPClientParams[];
    }[]
  ): Promise<Function[]>;
}

export class MCPClient implements IMCPClient {
  private _cache: MCPClientParamsMap;

  constructor(
    public readonly clientInfo: ClientDetails,
    public readonly clientOptions?: ClientOptions,
    cache: MCPClientParamsMap = {}
  ) {
    this._cache = cache;
  }

  get cache() {
    return this._cache;
  }

  async buildFunctions(args: { url: string; params?: MCPClientParams[] }[]): Promise<Function[]> {
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
          const [client, transport] = this.makeMCPClient(url);
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

  async getTools(urls: string[]): Promise<MCPClientParamsMap> {
    const toolCallResult = await Promise.all(
      urls.map((url) => {
        const tools = this.fetchTools(url);
        return [url, tools];
      })
    );

    return Object.fromEntries(toolCallResult);
  }

  private async fetchTools(url: string): Promise<MCPClientParams[]> {
    const [client, transport] = this.makeMCPClient(url);
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

  private makeMCPClient(serverUrl: string) {
    const transport = new SSEClientTransport(new URL(`${serverUrl}/sse`));

    const client = new Client(this.clientInfo, this.clientOptions);

    return [client, transport] as const;
  }
}
