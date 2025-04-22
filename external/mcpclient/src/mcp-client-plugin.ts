import type { ChatPromptPlugin, Function, Schema } from '@microsoft/teams.ai';
import { Client, ClientOptions } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

type McpClientToolDetails = {
  name: string;
  description: string;
  schema: Schema;
};

type PromiseOrValue<T> = T | Promise<T>;
type ValueOrFactory<T> = T | (() => PromiseOrValue<T>);

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
          params?.availableTools ?? this._cache[url].availableTools ?? undefined;
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

  async getTools(urls: string[]): Promise<Record<string, McpClientToolDetails[]>> {
    const toolCallResult = await Promise.all(
      urls.map(async (url) => {
        const tools = await this.fetchTools(url);
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
    let transport: Transport;
    if (this.createTransport != null) {
      transport = this.createTransport(serverUrl);
    } else {
      transport = await buildSSEClientTransport(serverUrl, headers);
    }

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

const buildSSEClientTransport = async (
  url: string,
  headers: ValueOrFactory<Record<string, string>> | undefined
): Promise<SSEClientTransport> => {
  const resolvedHeaders = typeof headers === 'function' ? await headers() : headers;
  // We need to include headers like this because of
  // https://github.com/modelcontextprotocol/typescript-sdk/issues/118
  return new SSEClientTransport(new URL(url), {
    requestInit: {
      headers: {
        ...resolvedHeaders,
      },
    },
    eventSourceInit: {
      fetch(input: Request | URL | string, init?: RequestInit) {
        const headers = new Headers({
          ...resolvedHeaders,
          ...init?.headers,
        });
        return fetch(input, {
          ...init,
          headers,
        });
      },
    },
  });
};
