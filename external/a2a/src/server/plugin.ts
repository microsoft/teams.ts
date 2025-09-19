import { randomUUID } from 'node:crypto';

import { AgentCard, Message, Task, AGENT_CARD_PATH } from '@a2a-js/sdk';
import {
  A2ARequestHandler,
  AgentExecutor,
  DefaultRequestHandler,
  ExecutionEventBus,
  InMemoryTaskStore,
  RequestContext,
  TaskStore,
} from '@a2a-js/sdk/server';
import { A2AExpressApp } from '@a2a-js/sdk/server/express';
import express, { RequestHandler } from 'express';

import {
  Dependency,
  EmitPluginEvent,
  Event,
  HttpPlugin,
  IPlugin,
  Logger,
  Plugin,
} from '@microsoft/teams.apps';
import { ILogger } from '@microsoft/teams.common';

interface IA2APluginOptions {
  /**
   * The agent card to be used for the A2A plugin.
   */
  agentCard: AgentCard;

  /**
   * Path to the A2A server
   * @default '/a2a'
   */
  path?: `/${string}`;

  /**
   * Path to the agent card
   * @default '/a2a/.well-known/agent-card.json'
   */
  agentCardPath?: string;

  /**
   * taskStore which stores the tasks that are sent to the agent
   * or that the agent sends. If not provided, the App's storage will be used.
   */
  taskStore?: TaskStore;

  /**
   * For a completely custom executor, you may provide your own executor that will
   * get executed whenever the a2a agent is InMemoryTaskStore
   */
  agentExecutor?: AgentExecutor;
}

export type Respond = (message: string | Message | Task) => Promise<void>;
export type A2AEvents = {
  'a2a:message': {
    requestContext: RequestContext;
    respond: Respond;
    publishUpdate: ExecutionEventBus['publish'];
  };
};

@Plugin({
  name: 'a2a',
  description: 'A2A Server Plugin',
  version: '0.3.0',
})
export class A2APlugin implements IPlugin {
  @Logger()
  public readonly log!: ILogger;

  @Event('custom')
  protected readonly emit!: EmitPluginEvent<A2AEvents>;

  @Dependency()
  protected readonly _httpPlugin!: HttpPlugin;
  __eventType!: A2AEvents;

  public readonly card: AgentCard;
  public readonly path: string;
  public readonly agentCardPath: string;
  public readonly taskStore: TaskStore;
  public readonly customExecutor?: AgentExecutor;
  private readonly middlewares: RequestHandler[] = [];

  constructor(options: IA2APluginOptions) {
    this.card = options.agentCard;
    if (options.path) {
      this.path = options.path.startsWith('/')
        ? options.path
        : `/${options.path}`;
    } else {
      this.path = '/a2a';
    }
    this.agentCardPath = options.agentCardPath ?? AGENT_CARD_PATH;
    this.taskStore = options.taskStore ?? new InMemoryTaskStore();
    this.customExecutor = options.agentExecutor;
  }

  use(middleware: RequestHandler): void {
    this.middlewares.push(middleware);
  }
  onInit() {
    const a2aExpressApp = new A2AExpressApp(this._setupRequestHandler());
    const expressApp = express();

    // Combine logging middleware with custom middlewares
    const allMiddlewares = [
      this._createLoggingMiddleware(),
      ...this.middlewares,
    ];

    a2aExpressApp.setupRoutes(
      expressApp,
      this.path,
      allMiddlewares,
      this.agentCardPath,
    );
    this.log.info(`A2A agent set up at ${this.path}/${this.agentCardPath}`);
    this.log.info(`A2A agent listening at ${this.path}`);
    this._httpPlugin.use(expressApp);
  }

  _createLoggingMiddleware(): RequestHandler {
    return (req, _res, next) => {
      let logMessage = `A2A Request: ${req.method} ${req.url}`;

      if (req.method === 'POST' && req.body) {
        logMessage += ` - Body: ${JSON.stringify(req.body)}`;
      }

      this.log.debug(logMessage);
      next();
    };
  }

  _setupExecutor() {
    const executor: AgentExecutor = {
      execute: async (requestContext, eventBus) => {
        const ctx: A2AEvents['a2a:message'] = {
          requestContext,
          respond: async (message) => {
            let responseMessage: Message | Task;
            if (typeof message === 'string') {
              responseMessage = {
                kind: 'message',
                messageId: randomUUID(),
                role: 'agent',
                parts: [{ kind: 'text', text: message }],
                // Associate the response with the incoming request's context.
                contextId: requestContext.contextId,
              };
            } else {
              responseMessage = message;
            }
            eventBus.publish(responseMessage);
            eventBus.finished();
          },
          publishUpdate: eventBus.publish.bind(eventBus),
        };
        this.emit('a2a:message', ctx);
      },
      cancelTask: async () => {},
    };
    return executor;
  }

  _setupRequestHandler(): A2ARequestHandler {
    return new DefaultRequestHandler(
      this.card,
      this.taskStore,
      this.customExecutor ?? this._setupExecutor(),
    );
  }
}
