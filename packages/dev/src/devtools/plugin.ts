import http from 'http';
import path from 'path';

import express from 'express';
import io from 'socket.io';
import * as uuid from 'uuid';

import { ActivityParams, ConversationReference } from '@microsoft/spark.api';
import { EventEmitter, ConsoleLogger, ILogger } from '@microsoft/spark.common';
import {
  HttpPlugin,
  IPluginActivityEvent,
  IPluginActivityResponseEvent,
  IPluginActivitySentEvent,
  IPluginEvents,
  IPluginInitEvent,
  IPluginStartEvent,
  ISender,
  IStreamer,
} from '@microsoft/spark.apps';

import { router } from './routes';
import { ActivityEvent, IEvent } from './event';

type ResolveRejctPromise<T = any> = {
  readonly resolve: (value: T) => void;
  readonly reject: (err: any) => void;
};

export class DevtoolsPlugin implements ISender {
  readonly name = 'devtools';
  readonly dependencies = ['http'];
  readonly events = new EventEmitter<IPluginEvents>();

  protected log: ILogger;
  protected http: http.Server;
  protected express: express.Application;
  protected io: io.Server;
  protected sockets = new Map<string, io.Socket>();
  protected httpPlugin = new HttpPlugin();
  protected pending: Record<string, ResolveRejctPromise> = {};

  constructor() {
    this.log = new ConsoleLogger('@spark/app/devtools');
    this.express = express();
    this.http = http.createServer(this.express);
    this.io = new io.Server(this.http, { path: '/devtools/sockets' });
    this.io.on('connection', this.onConnection.bind(this));

    try {
      const dist = path.join(__dirname, '..', 'devtools-web');
      this.express.use('/devtools', express.static(dist));
      this.express.get('/devtools/*', (_, res) => {
        res.sendFile(path.join(dist, 'index.html'));
      });
    } catch (err) {
      this.log.warn(
        'failed to load devtools, please ensure you have installed `@microsoft/spark.devtools`'
      );
      this.log.warn(err);
    }
  }

  onInit({ logger, plugins }: IPluginInitEvent) {
    const [http] = plugins;

    if (!(http instanceof HttpPlugin)) {
      throw new Error(`expected http plugin, found ${http.name}`);
    }

    this.httpPlugin = http;
    this.log = logger.child('devtools');
  }

  /**
   * start listening
   * @param port port to listen on
   */
  async onStart({ port }: IPluginStartEvent) {
    port += 1;

    this.express.use(
      router({
        port,
        log: this.log,
        process: (token, activity) => {
          return new Promise((resolve, reject) => {
            this.pending[activity.id] = { resolve, reject };
            this.events.emit('activity', {
              sender: this.httpPlugin,
              token,
              activity,
            });
          });
        },
      })
    );

    return await new Promise<void>((resolve, reject) => {
      this.http.on('error', (error) => {
        this.events.emit('error', { error });
        return reject(error);
      });

      this.http.listen(port, async () => {
        this.log.info(`available at http://localhost:${port}/devtools`);
        resolve();
      });
    });
  }

  async send(activity: ActivityParams, ref: ConversationReference) {
    return await this.httpPlugin.send(activity, ref);
  }

  createStream(ref: ConversationReference): IStreamer {
    return this.httpPlugin.createStream(ref);
  }

  onActivity({ activity, conversation }: IPluginActivityEvent) {
    this.emitActivity({
      id: uuid.v4(),
      type: 'activity.received',
      chat: conversation,
      body: activity,
      sentAt: new Date(),
    });
  }

  onActivitySent({ activity, conversation }: IPluginActivitySentEvent) {
    this.emitActivity({
      id: uuid.v4(),
      type: 'activity.sent',
      chat: conversation,
      body: activity as any,
      sentAt: new Date(),
    });
  }

  onActivityResponse({ activity, response }: IPluginActivityResponseEvent) {
    const promise = this.pending[activity.id];

    if (!promise) return;

    promise.resolve(response);
    delete this.pending[activity.id];
  }

  protected onConnection(socket: io.Socket) {
    this.sockets.set(socket.id, socket);

    socket.on('disconnect', () => {
      this.sockets.delete(socket.id);
    });
  }

  protected emit(event: IEvent) {
    for (const socket of this.sockets.values()) {
      socket.emit(event.type, event);
    }
  }

  protected emitActivity(event: ActivityEvent) {
    for (const socket of this.sockets.values()) {
      socket.emit('activity', event);
      socket.emit(event.type, event);
    }
  }
}
