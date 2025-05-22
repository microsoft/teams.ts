import { Client, ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';

import { ChatPromptPlugin, Function, Schema } from '@microsoft/teams.ai';

import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import {
  CreateTransport,
  McpClientPluginCachedValue,
  McpClientPluginOptions,
  McpClientPluginParams,
  McpClientPluginUseParams,
  McpClientToolDetails,
  ValueOrFactory,
} from './mcp-client-types';
import { buildSSEClientTransport } from './mcp-transport';

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
  protected _cache: Record<string, McpClientPluginCachedValue & { lastAttemptedFetch?: number }>;

  get log() {
    return this._log;
  }
  protected readonly _log: ILogger;

  get refetchTimeoutMs() {
    return this._refetchTimeoutMs;
  }
  protected _refetchTimeoutMs: number;

  private readonly _mcpServerUrlsByParams: Record<string, McpClientPluginParams | undefined> = {};

  private createTransport: CreateTransport | null;

  constructor(options?: McpClientPluginOptions) {
    const {
      name: mcpClientName,
      version,
      cache,
      createTransport,
      logger,
      refetchTimeoutMs,
      ...clientOptions
    } = options || {};
    this._name = mcpClientName || 'mcpClient';
    this._version = version || '0.0.0';
    if (cache != null) {
      this._cache = {};
      for (const [url, params] of Object.entries(cache)) {
        this._cache[url] = {
          ...params,
          lastAttemptedFetch: Date.now(),
        };
      }
    } else {
      this._cache = {};
    }
    this._clientOptions = clientOptions;
    this.createTransport = createTransport ?? null;
    this._log = logger?.child(this._name) || new ConsoleLogger(this._name);
    this._refetchTimeoutMs = refetchTimeoutMs || 24 * 60 * 60 * 1000; // 1 day
  }

  onUsePlugin(args: { url: string; params?: McpClientPluginParams }) {
    this._mcpServerUrlsByParams[args.url] = args.params;
    if (args.params?.availableTools && args.params.availableTools.length > 0) {
      this._cache[args.url] = {
        ...this._cache[args.url],
        // If the tools are being supplied, we assume they are up to date
        lastAttemptedFetch: Date.now(),
        availableTools: args.params.availableTools,
      };
    }
  }

  async onBuildFunctions(incomingFunctions: Function[]): Promise<Function[]> {
    await this.fetchToolsIfNeeded();

    // Now create all functions
    const allFunctions: Function[] = [];

    for (const [url, params] of Object.entries(this._mcpServerUrlsByParams)) {
      const availableTools = this._cache[url]?.availableTools;
      if (!availableTools) {
        // If we don't have any tools, we can't create any functions
        continue;
      }

      const functions = availableTools.map((availableTool) => ({
        name: availableTool.name,
        description: availableTool.description,
        parameters: availableTool.schema || {},
        handler: async (args: any) => {
          const [client, transport] = await this.makeMcpClient(url, params?.headers);
          try {
            await client.connect(transport);
            const result = await client.callTool({
              name: availableTool.name,
              arguments: args,
            });

            return result.content;
          } catch (e) {
            this.log.error(`Error calling tool ${availableTool.name} on ${url}:`, e);
          } finally {
            await client.close();
          }
        },
      }));

      allFunctions.push(...functions);
    }

    return incomingFunctions.concat(allFunctions);
  }

  private async fetchToolsIfNeeded() {
    // First, handle all fetching needs
    const fetchNeededObjects = Object.entries(this._mcpServerUrlsByParams)
      .map(([url, params]) => {
        // If availableTools are being supplied, then we use them
        // and don't need to fetch anything
        if (params?.availableTools) {
          return null;
        }

        const cachedParams = this._cache[url];
        if (cachedParams?.availableTools == null || cachedParams.availableTools.length === 0) {
          // If we don't have a cached value, we need to fetch
          return { url, ...params };
        }

        const maxAge = params?.refetchTimeoutMs ?? this.refetchTimeoutMs;
        if (
          !cachedParams.lastAttemptedFetch ||
          Date.now() - cachedParams.lastAttemptedFetch > maxAge
        ) {
          // If we have a cached value and it's still valid, we don't need to fetch
          return { url, ...params };
        }

        return null;
      })
      .filter((res): res is NonNullable<typeof res> => res != null);

    // Fetch all needed params in parallel
    if (fetchNeededObjects.length > 0) {
      const allFetchedTools = await this.getTools(fetchNeededObjects);
      for (const [url, tools] of Object.entries(allFetchedTools)) {
        this._cache[url] = {
          ...this._cache[url],
          lastAttemptedFetch: tools === 'unavailable' ? undefined : Date.now(),
          availableTools: tools === 'unavailable' ? undefined : tools,
        };
        if (tools === 'unavailable') {
          this.log.warn(`Tools unavailable for URL: ${url}`);
        } else {
          this.log.debug(`Cached ${tools.length} tools for URL: ${url}`);
        }
      }
    }
  }

  private async getTools(
    params: ({ url: string } & Pick<McpClientPluginParams, 'headers' | 'skipIfUnavailable'>)[]
  ): Promise<Record<string, McpClientToolDetails[] | 'unavailable'>> {
    const toolCallResult = await Promise.all(
      params.map(async ({ url, headers, skipIfUnavailable }) => {
        const tools = await this.fetchTools(url, headers, skipIfUnavailable);
        return [url, tools];
      })
    );

    return Object.fromEntries(toolCallResult);
  }

  private async fetchTools(
    url: string,
    headers?: ValueOrFactory<Record<string, string>>,
    skipIfUnavailable?: boolean
  ): Promise<McpClientToolDetails[] | 'unavailable'> {
    const [client, transport] = await this.makeMcpClient(url, headers);
    try {
      await client.connect(transport);
      const listToolsResult = await client.listTools();
      this.log.debug(`Successfully discovered ${listToolsResult.tools.length} tools from ${url}`);
      this.log.debug('Tools discovered:', JSON.stringify(listToolsResult.tools, null, 2));
      return listToolsResult.tools.map((tool) => ({
        name: tool.name,
        description: tool.description ?? '',
        schema: tool.inputSchema as Schema,
      }));
    } catch (e) {
      this.log.error(`Error fetching tools from ${url}:`, e);
      if (skipIfUnavailable || skipIfUnavailable == null) {
        return 'unavailable';
      }
      throw e;
    } finally {
      await client.close();
    }
  }

  private async makeMcpClient(
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
