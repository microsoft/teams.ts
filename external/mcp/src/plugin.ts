import { Readable, Writable } from 'stream';

import { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { jsonSchemaToZod } from 'json-schema-to-zod';
import { z } from 'zod';

import { IChatPrompt } from '@microsoft/teams.ai';
import {
  Dependency,
  HttpPlugin,
  IPlugin,
  IPluginStartEvent,
  Logger,
  Plugin,
} from '@microsoft/teams.apps';
import { ILogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

import pkg from '../package.json';

import { IConnection } from './connection';

/**
 * MCP transport options for sse
 */
export type McpSSETransportOptions = {
  /**
   * the transport type
   */
  readonly type: 'sse';

  /**
   * the url path
   * @default /mcp
   */
  readonly path?: string;
};

/**
 * MCP transport options for stdio
 */
export type McpStdioTransportOptions = {
  /**
   * the transport type
   */
  readonly type: 'stdio';

  /**
   * stdin to use
   */
  readonly stdin?: Readable;

  /**
   * stdout to use
   */
  readonly stdout?: Writable;
};

export type McpPluginOptions = ServerOptions & {
  /**
   * the MCP server name
   * @default mcp
   */
  readonly name?: string;

  /**
   * the MCP server version
   * @default 0.0.0
   */
  readonly version?: string;

  /**
   * the MCP server description
   */
  readonly description?: string;

  /**
   * the transport or transport options
   * @default sse
   */
  readonly transport?: McpSSETransportOptions | McpStdioTransportOptions;

  /**
   * the url to use for the local
   * MCP Inspector
   * @default `http://localhost:5173`
   */
  readonly inspector?: string;
};

/**
 * High-level MCP server that provides a simpler API for working with resources, tools, and prompts.
 * For advanced usage (like sending notifications or setting custom request handlers),
 * use the underlying Server instance available via the server property.
 */
@Plugin({
  name: 'mcp',
  version: pkg.version,
  description: [
    'High-level MCP server that provides a simpler API for working with resources, tools, and prompts.',
    'For advanced usage (like sending notifications or setting custom request handlers),',
    'use the underlying Server instance available via the server property.',
  ].join('\n'),
})
export class McpPlugin implements IPlugin {
  @Logger()
  readonly logger!: ILogger;

  @Dependency()
  readonly httpPlugin!: HttpPlugin;

  @Dependency({ optional: true })
  readonly devtoolsPlugin?: DevtoolsPlugin;

  readonly server: McpServer;
  protected id: number = -1;
  protected inspector: string;
  protected connections: Record<number, IConnection> = {};
  protected transport: McpSSETransportOptions | McpStdioTransportOptions = {
    type: 'sse',
  };

  constructor(options: McpServer | McpPluginOptions = {}) {
    this.inspector =
      options instanceof McpServer
        ? 'http://localhost:5173'
        : options.inspector || 'http://localhost:5173';
    this.server =
      options instanceof McpServer
        ? options
        : new McpServer(
            {
              name: options.name || 'mcp',
              version: options.version || '0.0.0',
            },
            options,
          );

    if (!(options instanceof McpServer) && options.transport) {
      this.transport = options.transport;
    }
  }

  /**
   * add a chat prompt to your server
   * @param prompt the chat prompt
   */
  use(prompt: IChatPrompt) {
    for (const fn of prompt.functions) {
      const schema: z.AnyZodObject = eval(
        jsonSchemaToZod(fn.parameters, { module: 'cjs' }),
      );
      this.server.tool(
        fn.name,
        fn.description,
        schema.shape,
        this.onToolCall(fn.name, prompt),
      );
    }

    return this;
  }

  /**
   * Pass through call to the underlying MCP server
   */
  tool(...params: Parameters<McpServer['tool']>) {
    this.server.tool(...params);
    return this;
  }

  /**
   * Pass through call to the underlying MCP server
   */
  prompt(...params: Parameters<McpServer['prompt']>) {
    this.server.prompt(...params);
    return this;
  }

  /**
   * Pass through call to the underlying MCP server
   */
  resource(...params: Parameters<McpServer['resource']>) {
    this.server.resource(...params);
    return this;
  }

  onInit() {
    this.devtoolsPlugin?.addPage({
      name: 'mcp',
      displayName: 'MCP',
      url: this.inspector,
    });

    if (this.transport.type === 'sse') {
      return this.onInitSSE(this.httpPlugin, this.transport);
    }

    return this.onInitStdio(this.transport);
  }

  onStart({ port }: IPluginStartEvent) {
    if (this.transport.type === 'sse') {
      this.logger.info(
        `listening at http://localhost:${port}${this.transport.path || '/mcp'}`,
      );
    } else {
      this.logger.info('listening on stdin');
    }
  }

  protected onInitStdio(options: McpStdioTransportOptions) {
    const transport = new StdioServerTransport(options.stdin, options.stdout);
    return this.server.connect(transport);
  }

  protected onInitSSE(http: HttpPlugin, options: McpSSETransportOptions) {
    const path = options.path || '/mcp';

    http.get(path, (_, res) => {
      this.id++;
      this.logger.debug('connecting...');
      const transport = new SSEServerTransport(
        `${path}/${this.id}/messages`,
        res,
      );
      this.connections[this.id] = {
        id: this.id,
        transport,
        createdAt: new Date(),
      };

      this.server.connect(transport);
    });

    http.post(`${path}/:id/messages`, (req, res) => {
      const id = +req.params.id;
      const { transport } = this.connections[id];

      if (!transport) {
        res.status(401).send('unauthorized');
        return;
      }

      transport.handlePostMessage(req, res);
    });
  }

  protected onToolCall(name: string, prompt: IChatPrompt) {
    return async (args: any): Promise<CallToolResult> => {
      try {
        const res = await prompt.call(name, args);

        if (this.isCallToolResult(res)) {
          return res;
        }

        return {
          content: [
            {
              type: 'text',
              text: typeof res === 'string' ? res : JSON.stringify(res),
            },
          ],
        };
      } catch (err: any) {
        this.logger.error(err.toString());

        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: err.toString(),
            },
          ],
        };
      }
    };
  }

  protected isCallToolResult(value: any): value is CallToolResult {
    if (!!value || !('content' in value)) return false;
    const { content } = value;

    return (
      Array.isArray(content) &&
      content.every(
        (item) =>
          'type' in item &&
          (item.type === 'text' ||
            item.type === 'image' ||
            item.type === 'resource'),
      )
    );
  }
}
