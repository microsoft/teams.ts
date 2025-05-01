import { Client, ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';

import { ChatPromptPlugin, Function, Schema } from '@microsoft/teams.ai';

import {
  CreateTransport,
  McpClientPluginOptions,
  McpClientPluginParams,
  McpClientPluginParamsCache,
  McpClientPluginUseParams,
  McpClientToolDetails,
  ValueOrFactory,
} from './mcp-client-types';
import { buildSSEClientTransport } from './mcp-transport.js';

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

  private readonly _mcpServerUrlsByParams: Record<string, McpClientPluginParams | undefined> = {};

  private createTransport: CreateTransport | null;

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
    this.createTransport = createTransport ?? null;
  }

  onUsePlugin(args: { url: string; params?: McpClientPluginParams }) {
    this._mcpServerUrlsByParams[args.url] = args.params;
  }

  async onBuildFunctions(incomingFunctions: Function[]): Promise<Function[]> {
    // First, handle all fetching needs
    const fetchNeeded = Object.entries(this._mcpServerUrlsByParams)
      .map(([url, params]) => {
        const paramsToFetch =
          params?.availableTools ?? this._cache[url]?.availableTools ?? undefined;
        if (paramsToFetch == null) {
          return { url, ...params };
        }
        return null;
      })
      .filter((res): res is NonNullable<typeof res> => res != null);

    // Fetch all needed params in parallel
    if (fetchNeeded.length > 0) {
      const tools = await this.getTools(fetchNeeded);
      for (const [url, params] of Object.entries(tools)) {
        this._cache[url] = {
          ...this._cache[url],
          availableTools: params,
        };
      }
    }

    // Now create all functions
    const allFunctions: Function[] = [];

    for (const [url, params] of Object.entries(this._mcpServerUrlsByParams)) {
      const resolvedParams = params ?? this._cache[url];
      const paramsWithOtherArgs =
        resolvedParams?.availableTools?.map((serverDetail) => {
          const { availableTools, ...otherParams } = resolvedParams;
          return {
            ...serverDetail,
            otherParams,
          };
        }) ?? [];

      const functions = paramsWithOtherArgs.map((param) => ({
        name: param.name,
        description: param.description,
        parameters: param.schema || {},
        handler: async (args: any) => {
          const [client, transport] = await this.makeMcpClientPlugin(
            url,
            param.otherParams.headers
          );
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

  async getTools(
    params: ({ url: string } & Pick<McpClientPluginParams, 'headers'>)[]
  ): Promise<Record<string, McpClientToolDetails[]>> {
    const toolCallResult = await Promise.all(
      params.map(async ({ url, headers }) => {
        const tools = await this.fetchTools(url, headers);
        return [url, tools];
      })
    );

    return Object.fromEntries(toolCallResult);
  }

  private async fetchTools(
    url: string,
    headers?: ValueOrFactory<Record<string, string>>
  ): Promise<McpClientToolDetails[]> {
    const [client, transport] = await this.makeMcpClientPlugin(url, headers);
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

  private async makeMcpClientPlugin(
    serverUrl: string,
    headers: ValueOrFactory<Record<string, string>> | undefined
  ) {
    const transport = this.createTransport
      ? this.createTransport(serverUrl)
      : await buildSSEClientTransport(serverUrl, headers);

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
