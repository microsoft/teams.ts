import { URL } from 'node:url';
import express from 'express';
import jwt from 'jsonwebtoken';

import {
  Dependency,
  Event,
  HttpPlugin,
  IActivityEvent,
  ISender,
  IStreamer,
  IStreamerEvents,
  Logger,
  Plugin,
  Storage,
} from '@microsoft/spark.apps';
import {
  Activity,
  ActivityParams,
  ConversationReference,
  JsonWebToken,
} from '@microsoft/spark.api';
import { EventEmitter, EventHandler, ILogger, IStorage } from '@microsoft/spark.common';

import pkg from '../package.json';

import * as schema from './schema';
import * as middleware from './middleware';

import { A2AError } from './error';
import { TaskContext, TaskStoreItem } from './types';
import { Router, TaskEvents } from './router';
import { SSEStreamResponse } from './sse-stream-response';
import { activityToMessage, messageToActivity } from './utils';

export type A2AOptions = {
  /**
   * the endpoint path of the agent
   */
  readonly path?: string;
};

/**
 * the A2A plugin
 */
@Plugin({
  name: 'a2a',
  version: pkg.version,
  description: 'an open standard for connecting agents',
})
export class A2APlugin implements ISender {
  @Logger()
  readonly logger!: ILogger;

  @Storage()
  readonly storage!: IStorage<string | number, TaskStoreItem>;

  @Dependency({ optional: true })
  readonly id?: string;

  @Dependency({ optional: true })
  readonly name?: string;

  @Dependency()
  readonly httpPlugin!: HttpPlugin;

  @Event('activity')
  readonly $onActivity!: (event: IActivityEvent) => void;

  get card() {
    return this._card;
  }
  protected _card: schema.AgentCard;

  protected get _path() {
    return new URL(this._card.url).pathname;
  }

  private readonly _router = new Router();

  constructor(options: schema.AgentCard) {
    this._card = options;
  }

  on<Event extends keyof TaskEvents>(event: Event, handler: EventHandler<TaskContext>) {
    this._router.on(event, handler);
    return this;
  }

  onInit() {
    this.httpPlugin.get('/.well-known/agent.json', (_req, res) => {
      res.json(this.card);
    });

    this.httpPlugin.post(
      this._path,
      express.json(),
      middleware.isTaskRequest(),
      this.onTaskRequest.bind(this)
    );
  }

  onStart() {
    this.logger.info(`listening at ${this.card.url}`);
  }

  async send(activity: ActivityParams, ref: ConversationReference) {
    let task: schema.Task = ref['a2a.task'];
    const res: express.Response = ref['a2a.response'];

    activity = {
      ...activity,
      from: ref.bot,
      conversation: ref.conversation,
    };

    task = {
      ...task,
      ...activity.channelData?.ada?.task,
      status: {
        ...task.status,
        ...activity.channelData?.ada?.task?.status,
        message: activityToMessage(activity as Activity),
        timestamp: new Date().toISOString(),
      },
    };

    res.json({
      jsonrpc: '2.0',
      id: ref['a2a.request.id'],
      result: task,
    });

    return { id: task.id, ...activity };
  }

  createStream(ref: ConversationReference): IStreamer {
    if (!ref['a2a.streaming']) {
      return {
        events: new EventEmitter<IStreamerEvents>(),
        emit: () => {},
        close: () => {},
      };
    }

    return new SSEStreamResponse(ref);
  }

  protected async onTaskRequest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const request: schema.A2ARequest = req.body;

    try {
      switch (request.method) {
        case 'tasks/send':
          return this.onTaskSendRequest(request, res);
        case 'tasks/sendSubscribe':
          return this.onTaskSendRequest(request, res);
        case 'tasks/get':
          return this.onTaskGetRequest(request, res);
        case 'tasks/cancel':
          return this.onTaskCancelRequest(request, res);
        default:
          throw A2AError.methodNotFound(request.method);
      }
    } catch (err) {
      if (err instanceof A2AError) {
        err.taskId = request.id || undefined;
      } else {
        err = A2AError.internalError('internal error', err);
      }

      next(err);
    }
  }

  protected async onTaskSendRequest(
    req: schema.SendTaskRequest | schema.SendTaskStreamingRequest,
    res: express.Response
  ) {
    let item = await this.storage.get(req.id!);

    if (!item) {
      item = {
        task: {
          id: req.params.id,
          sessionId: req.params.sessionId,
          status: {
            state: 'submitted',
            timestamp: new Date().toISOString(),
          },
          metadata: req.params.metadata,
        },
        history: [],
      };

      this.logger.debug(`task '${req.params.id}' created`);
    }

    item.history.push(req.params.message);

    if (
      item.task.status.state === 'completed' ||
      item.task.status.state === 'failed' ||
      item.task.status.state === 'canceled'
    ) {
      item.task.status.state = 'submitted';
      item.task.status.timestamp = new Date().toISOString();
    } else if (item.task.status.state === 'input-required') {
      item.task.status.state = 'working';
    } else if (item.task.status.state === 'working') {
      this.logger.warn(`task '${req.params.id}' is already being processed`);
    }

    await this.storage.set(req.params.id, item);

    try {
      const routes = this._router.select(item.task);
      const context: TaskContext = {
        task: item.task,
        cancelled: false,
        message: req.params.message,
        history: item.history,
      };

      for (const route of routes) {
        await route(context);
      }

      if (!req.params.message) return;

      const token = new JsonWebToken(jwt.sign({ serviceurl: req.params.id }, 'secret'));
      const activity = messageToActivity(req.params.id, req.params.message);
      activity.channelData = {
        ...activity.channelData,
        a2a: {
          request: { id: req.id },
          task: item.task,
          history: item.history,
          streaming: req.method === 'tasks/sendSubscribe',
        },
      };

      const ref: ConversationReference = {
        serviceUrl: activity.serviceUrl || token.serviceUrl,
        activityId: activity.id,
        bot: activity.recipient,
        channelId: activity.channelId,
        conversation: activity.conversation,
        locale: activity.locale,
        user: activity.from,
        'a2a.response': res,
        'a2a.request.id': req.id,
        'a2a.task': item.task,
        'a2a.history': item.history,
        'a2a.streaming': req.method === 'tasks/sendSubscribe',
      };

      this.$onActivity({ sender: this, token, activity, ref });
    } catch (err) {
      this.logger.error(err);
    }
  }

  protected async onTaskGetRequest(_req: schema.GetTaskRequest, _res: express.Response) {}

  protected async onTaskCancelRequest(_req: schema.CancelTaskRequest, _res: express.Response) {}
}
