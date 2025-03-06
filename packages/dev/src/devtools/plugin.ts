import http from 'http';
import path from 'path';

import express from 'express';
import io from 'socket.io';
import * as uuid from 'uuid';

import { ActivityParams, ConversationReference } from '@microsoft/spark.api';
import { EventEmitter, EventHandler, ConsoleLogger, ILogger } from '@microsoft/spark.common';
import {
  App,
  IAppActivityReceivedEvent,
  IAppActivityResponseEvent,
  IAppActivitySentEvent,
  HttpPlugin,
  HttpStream,
  IPlugin,
  IPluginEvents,
  IStreamer,
} from '@microsoft/spark.apps';

import { router } from './routes';
import { ActivityEvent, IEvent } from './event';

interface ResolveRejctPromise<T = any> {
  readonly resolve: (value: T) => void;
  readonly reject: (err: any) => void;
}

export class DevtoolsPlugin implements IPlugin {
  readonly name = 'devtools';

  protected log: ILogger;
  protected http: http.Server;
  protected express: express.Application;
  protected io: io.Server;
  protected sockets = new Map<string, io.Socket>();
  protected httpPlugin = new HttpPlugin();
  protected events = new EventEmitter<IPluginEvents>();
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

  on<Name extends keyof IPluginEvents>(name: Name, callback: EventHandler<IPluginEvents[Name]>) {
    this.events.on(name, callback);
  }

  onInit(app: App) {
    app.event('activity.response', this.onActivityResponse.bind(this));
    app.event('activity.received', this.onActivityReceived.bind(this));
    app.event('activity.sent', this.onActivitySent.bind(this));

    this.httpPlugin = app.http;
    this.log = app.log.child('devtools');
  }

  /**
   * start listening
   * @param port port to listen on
   */
  async onStart(port = 3000) {
    port += 1;
    this.express.use(
      router({
        port,
        log: this.log,
        process: (token, activity) => {
          return new Promise((resolve, reject) => {
            this.pending[activity.id] = { resolve, reject };
            this.events.emit('activity.received', {
              token,
              activity,
            });
          });
        },
      })
    );

    return await new Promise<void>((resolve, reject) => {
      this.http.on('error', (err) => {
        reject(err);
      });

      this.http.listen(port, async () => {
        this.log.info(`available at http://localhost:${port}/devtools`);
        resolve();
      });
    });
  }

  async onSend(activity: ActivityParams, ref: ConversationReference) {
    const res = await this.httpPlugin.onSend(activity, ref);
    return res;
  }

  onStreamOpen(ref: ConversationReference): IStreamer {
    return new HttpStream((activity) => {
      return this.onSend(activity, ref);
    });
  }

  protected onActivityReceived({ activity }: IAppActivityReceivedEvent) {
    this.sendActivity({
      id: uuid.v4(),
      type: 'activity.received',
      chat: activity.conversation,
      body: activity,
      sentAt: new Date(),
    });
  }

  protected onActivitySent({ activity, ref }: IAppActivitySentEvent) {
    this.sendActivity({
      id: uuid.v4(),
      type: 'activity.sent',
      chat: ref.conversation,
      body: activity as any,
      sentAt: new Date(),
    });
  }

  protected onActivityResponse({ activity, response }: IAppActivityResponseEvent) {
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

  protected send(event: IEvent) {
    for (const socket of this.sockets.values()) {
      socket.emit(event.type, event);
    }
  }

  protected sendActivity(event: ActivityEvent) {
    for (const socket of this.sockets.values()) {
      socket.emit('activity', event);
      socket.emit(event.type, event);
    }
  }
}
