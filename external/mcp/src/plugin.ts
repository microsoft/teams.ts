import { IChatPrompt } from '@microsoft/spark.ai';
import { App, IActivityContext, IPlugin, IPluginEvents } from '@microsoft/spark.apps';
import { ConsoleLogger, EventEmitter, EventHandler, ILogger } from '@microsoft/spark.common';

import { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { z } from 'zod';
import { jsonSchemaToZod } from 'json-schema-to-zod';

import { IConnection } from './connection';

export type MCPPluginOptions = ServerOptions & {
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
   * the http path
   * @default /mcp
   */
  readonly path?: string;
};

/**
 * High-level MCP server that provides a simpler API for working with resources, tools, and prompts.
 * For advanced usage (like sending notifications or setting custom request handlers),
 * use the underlying Server instance available via the server property.
 */
export class MCPPlugin implements IPlugin {
  readonly name: string;
  readonly version: string;

  readonly server: McpServer;
  readonly prompt: McpServer['prompt'];
  readonly tool: McpServer['tool'];
  readonly resource: McpServer['resource'];

  protected log: ILogger;
  protected id: number = -1;
  protected connections: Record<number, IConnection> = {};
  protected readonly events = new EventEmitter<IPluginEvents>();

  constructor(options: McpServer | MCPPluginOptions = {}) {
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

  onInit(app: App) {
    this.log = app.log.child(this.name);

    app.http.get('/mcp', (_, res) => {
      this.id++;
      this.log.debug('connecting...');
      const transport = new SSEServerTransport(`/mcp/${this.id}/messages`, res);
      this.connections[this.id] = {
        id: this.id,
        transport,
        createdAt: new Date(),
      };

      this.server.connect(transport);
    });

    app.http.post('/mcp/:id/messages', (req, res) => {
      const id = +req.params.id;
      const { transport } = this.connections[id];

      if (!transport) {
        res.status(401).send('unauthorized');
        return;
      }

      transport.handlePostMessage(req, res);
    });
  }

  async onStart(port: number = 3000) {
    this.events.emit('start', this.log);
    this.log.info(`listening at http://localhost:${port}/mcp 🚀`);
  }

  on<Name extends keyof IPluginEvents>(name: Name, callback: EventHandler<IPluginEvents[Name]>) {
    this.events.on(name, callback);
  }

  onActivity(_: IActivityContext) {}

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
    return (
      !!value &&
      Array.isArray(value) &&
      value.every(
        (item) =>
          'type' in item &&
          (item.type === 'text' || item.type === 'image' || item.type === 'resource')
      )
    );
  }
}
