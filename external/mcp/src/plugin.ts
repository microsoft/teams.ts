import { ChatPrompt } from '@microsoft/spark.ai';
import { App, IActivityContext, IPlugin, IPluginEvents } from '@microsoft/spark.apps';
import { ConsoleLogger, EventEmitter, EventHandler, ILogger } from '@microsoft/spark.common';

import { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { Implementation, CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { z } from 'zod';
import { jsonSchemaToZod } from 'json-schema-to-zod';

import { IConnection } from './connection';

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

  constructor(serverInfo: Implementation | McpServer, options: ServerOptions = {}) {
    this.log = new ConsoleLogger('@spark/mcp');
    this.name = serverInfo instanceof McpServer ? 'mcp' : `mcp.${serverInfo.name}`;
    this.version = serverInfo instanceof McpServer ? '0.0.0' : serverInfo.version;
    this.server = serverInfo instanceof McpServer ? serverInfo : new McpServer(serverInfo, options);
    this.prompt = this.server.prompt.bind(this.server);
    this.tool = this.server.tool.bind(this.server);
    this.resource = this.server.resource.bind(this.server);
  }

  use(prompt: ChatPrompt) {
    for (const fn of prompt.functions) {
      const schema: z.AnyZodObject = eval(jsonSchemaToZod(fn.parameters, { module: 'cjs' }));
      this.server.tool(
        fn.name,
        fn.description,
        schema.shape,
        async (args: any): Promise<CallToolResult> => {
          try {
            const res = await prompt.call(fn.name, args);

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
        }
      );
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
}
