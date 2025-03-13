import { Readable, Writable } from 'stream';

import { IChatPrompt } from '@microsoft/spark.ai';
import { App, IActivityContext, IPlugin, IPluginEvents } from '@microsoft/spark.apps';
import { ConsoleLogger, EventEmitter, EventHandler, ILogger } from '@microsoft/spark.common';

import { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { z } from 'zod';
import { jsonSchemaToZod } from 'json-schema-to-zod';

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
   * the transport or transport options
   * @default sse
   */
  readonly transport?: McpSSETransportOptions | McpStdioTransportOptions;
};

/**
 * High-level MCP server that provides a simpler API for working with resources, tools, and prompts.
 * For advanced usage (like sending notifications or setting custom request handlers),
 * use the underlying Server instance available via the server property.
 */
export class McpPlugin implements IPlugin {
  readonly name: string;
  readonly version: string;

  readonly server: McpServer;
  readonly prompt: McpServer['prompt'];
  readonly tool: McpServer['tool'];
  readonly resource: McpServer['resource'];

  protected log: ILogger;
  protected id: number = -1;
  protected connections: Record<number, IConnection> = {};
  protected events = new EventEmitter<IPluginEvents>();
  protected transport: McpSSETransportOptions | McpStdioTransportOptions = { type: 'sse' };

  constructor(options: McpServer | McpPluginOptions = {}) {
    this.log = new ConsoleLogger('@spark/mcp');
    this.name =
      options instanceof McpServer ? 'mcp' : `mcp${options.name ? `.${options.name}` : ''}`;
    this.version = options instanceof McpServer ? '0.0.0' : options.version || '0.0.0';
    this.server =
      options instanceof McpServer
        ? options
        : new McpServer(
            {
              name: this.name,
              version: this.version,
            },
            options
          );

    if (!(options instanceof McpServer) && options.transport) {
      this.transport = options.transport;
    }

    this.prompt = this.server.prompt.bind(this.server);
    this.tool = this.server.tool.bind(this.server);
    this.resource = this.server.resource.bind(this.server);
  }

  use(prompt: IChatPrompt) {
    for (const fn of prompt.functions) {
      const schema: z.AnyZodObject = eval(jsonSchemaToZod(fn.parameters, { module: 'cjs' }));
      this.server.tool(fn.name, fn.description, schema.shape, this.onToolCall(fn.name, prompt));
    }

    return this;
  }

  async onInit(app: App) {
    this.log = app.log.child(this.name);

    if (this.transport.type === 'sse') {
      return this.onInitSSE(app, this.transport);
    }

    await this.onInitStdio(app, this.transport);
  }

  async onStart(port: number = 3000) {
    this.events.emit('start', this.log);

    if (this.transport.type === 'sse') {
      this.log.info(`listening at http://localhost:${port}${this.transport.path || '/mcp'}`);
    } else {
      this.log.info('listening on stdin');
    }
  }

  on<Name extends keyof IPluginEvents>(name: Name, callback: EventHandler<IPluginEvents[Name]>) {
    this.events.on(name, callback);
  }

  onActivity(_: IActivityContext) {}

  protected onInitStdio(_: App, options: McpStdioTransportOptions) {
    const transport = new StdioServerTransport(options.stdin, options.stdout);
    return this.server.connect(transport);
  }

  protected onInitSSE(app: App, options: McpSSETransportOptions) {
    const path = options.path || '/mcp';

    app.http.get(path, (_, res) => {
      this.id++;
      this.log.debug('connecting...');
      const transport = new SSEServerTransport(`${path}/${this.id}/messages`, res);
      this.connections[this.id] = {
        id: this.id,
        transport,
        createdAt: new Date(),
      };

      this.server.connect(transport);
    });

    app.http.post(`${path}/:id/messages`, (req, res) => {
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
        this.log.error(err.toString());

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
          (item.type === 'text' || item.type === 'image' || item.type === 'resource')
      )
    );
  }
}
