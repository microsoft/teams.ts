import http from 'http';
import path from 'path';

import express from 'express';
import io from 'socket.io';
import * as uuid from 'uuid';

import { ActivityParams, ConversationReference, IToken } from '@microsoft/spark.api';
import { ILogger } from '@microsoft/spark.common';
import {
  HttpPlugin,
  Logger,
  IPluginActivityEvent,
  IPluginActivityResponseEvent,
  IPluginActivitySentEvent,
  IPluginStartEvent,
  ISender,
  IStreamer,
  Plugin,
  Dependency,
  Event,
  IErrorEvent,
  IActivityEvent,
} from '@microsoft/spark.apps';

import pkg from '../package.json';

import { router } from './routes';
import { ActivityEvent, IEvent } from './event';
import { Page } from './types';

type ResolveRejctPromise<T = any> = {
  readonly resolve: (value: T) => void;
  readonly reject: (err: any) => void;
};

@Plugin({
  name: 'devtools',
  version: pkg.version,
  description: ['a set of tools to make development', 'of teams apps faster and simpler'].join(
    '\n'
  ),
})
export class DevtoolsPlugin implements ISender {
  @Logger()
  readonly log!: ILogger;

  @Dependency({ optional: true })
  readonly id?: IToken;

  @Dependency({ optional: true })
  readonly name?: IToken;

  @Dependency()
  readonly httpPlugin!: HttpPlugin;

  @Event('error')
  readonly $onError!: (event: IErrorEvent) => void;

  @Event('activity')
  readonly $onActivity!: (event: IActivityEvent) => void;

  protected http: http.Server;
  protected express: express.Application;
  protected io: io.Server;
  protected sockets = new Map<string, io.Socket>();
  protected pending: Record<string, ResolveRejctPromise> = {};
  protected pages: Array<Page> = [];

  constructor() {
    const dist = path.join(__dirname, 'devtools-web');
    this.express = express();
    this.http = http.createServer(this.express);
    this.io = new io.Server(this.http, { path: '/devtools/sockets' });
    this.io.on('connection', this.onSocketConnection.bind(this));
    this.express.use('/devtools', express.static(dist));
    this.express.get('/devtools/*', (_, res) => {
      res.sendFile(path.join(dist, 'index.html'));
    });
  }

  /**
   * add a custom page to the devtools
   * @param page the page to add
   */
  addPage(page: Page) {
    this.pages.push(page);
    return this;
  }

  onStart({ port }: IPluginStartEvent) {
    port += 1;

    this.express.use(
      router({
        port,
        log: this.log,
        process: (token, activity) => {
          return new Promise((resolve, reject) => {
            this.pending[activity.id] = { resolve, reject };
            this.$onActivity({
              sender: this.httpPlugin,
              token,
              activity,
            });
          });
        },
      })
    );

    return new Promise<void>((resolve, reject) => {
      this.http.on('error', (error) => {
        this.$onError({ error });
        return reject(error);
      });

      this.http.listen(port, async () => {
        this.log.info(`available at http://localhost:${port}/devtools`);
        resolve();
      });
    });
  }

  onActivity({ activity, conversation }: IPluginActivityEvent) {
    this.emitActivityToSockets({
      id: uuid.v4(),
      type: 'activity.received',
      chat: conversation,
      body: activity,
      sentAt: new Date(),
    });
  }

  onActivitySent({ activity, conversation }: IPluginActivitySentEvent) {
    this.emitActivityToSockets({
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

  async send(activity: ActivityParams, ref: ConversationReference) {
    return await this.httpPlugin.send(activity, ref);
  }

  createStream(ref: ConversationReference): IStreamer {
    return this.httpPlugin.createStream(ref);
  }

  protected onSocketConnection(socket: io.Socket) {
    this.sockets.set(socket.id, socket);
    socket.emit('metadata', {
      id: uuid.v4(),
      type: 'metadata',
      body: {
        id: this.id?.toString(),
        name: this.name?.toString(),
        pages: this.pages
      },
      sentAt: new Date(),
    });

    socket.on('disconnect', () => {
      this.sockets.delete(socket.id);
    });
  }

  protected emitToSockets(event: IEvent) {
    for (const socket of this.sockets.values()) {
      socket.emit(event.type, event);
    }
  }

  protected emitActivityToSockets(event: ActivityEvent) {
    for (const socket of this.sockets.values()) {
      socket.emit('activity', event);
      socket.emit(event.type, event);
    }
  }
}
