import http from 'http';
import path from 'path';

import express from 'express';

import * as uuid from 'uuid';

import { WebSocket, WebSocketServer } from 'ws';

import { InvokeResponse, IToken } from '@microsoft/teams.api';
import {
  Logger,
  IPluginActivityEvent,
  IPluginActivityResponseEvent,
  IPluginActivitySentEvent,
  IPluginStartEvent,
  Plugin,
  Dependency,
  Event,
  IErrorEvent,
  IActivityEvent,
} from '@microsoft/teams.apps';
import { ILogger, String } from '@microsoft/teams.common';

import pkg from '../package.json';

import { ActivityEvent, IEvent } from './event';
import { router } from './routes';
import { Page } from './types';

type ResolveRejctPromise<T = any> = {
  readonly resolve: (value: T) => void;
  readonly reject: (err: any) => void;
};

export type DevtoolsPluginOptions = {
  readonly customPort?: number;
};

@Plugin({
  name: 'devtools',
  version: pkg.version,
  description: ['a set of tools to make development', 'of teams apps faster and simpler'].join(
    '\n'
  ),
})
export class DevtoolsPlugin {
  @Logger()
  readonly log!: ILogger;

  @Dependency({ optional: true })
  readonly id?: IToken;

  @Dependency({ optional: true })
  readonly name?: IToken;

  @Event('error')
  readonly $onError!: (event: IErrorEvent) => void;

  @Event('activity')
  readonly $onActivity!: (event: IActivityEvent) => Promise<InvokeResponse>;

  protected http: http.Server;
  protected express: express.Application;
  protected ws: WebSocketServer;
  protected sockets = new Map<string, WebSocket>();
  protected pending: Record<string, ResolveRejctPromise> = {};
  protected pages: Array<Page> = [];

  constructor(readonly options: DevtoolsPluginOptions = {}) {
    const dist = path.join(__dirname, 'devtools-web');
    this.express = express();
    this.http = http.createServer(this.express);
    this.ws = new WebSocketServer({ server: this.http, path: '/devtools/sockets' });
    this.ws.on('connection', this.onSocketConnection.bind(this));
    this.express.use('/devtools', express.static(dist));
    // Catch-all route for SPA - must come after static middleware
    this.express.get('/devtools/*splat', (_, res) => {
      res.sendFile(path.join(dist, 'index.html'));
    });
    this.options = options;
  }

  /**
   * add a custom page to the devtools
   * @param page the page to add
   */
  addPage(page: Page) {
    this.pages.push(page);
    return this;
  }

  onInit() {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(
        'Devtools plugin cannot be used in production environments (NODE_ENV=production). ' +
        'Remove the devtools plugin from your app configuration.'
      );
    }

    this.log.warn(
      new String()
        .bold(
          new String().yellow(
            '⚠️  Devtools are not secure and should not be used production environments ⚠️'
          )
        )
        .toString()
    );
  }

  onStart({ port }: IPluginStartEvent) {
    const numericPort = this.options.customPort ?? (
      typeof port === 'string' ? parseInt(port, 10) + 1 : port + 1);

    this.express.use(
      router({
        port: numericPort,
        log: this.log,
        process: (token, activity) => {
          return new Promise((resolve, reject) => {
            this.pending[activity.id] = { resolve, reject };
            this.$onActivity({
              token,
              body: activity,
            }).catch((err) => {
              this.log.error('Error processing activity:', err);
              reject(err);
              delete this.pending[activity.id];
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

      this.http.listen(numericPort, async () => {
        this.log.info(`available at http://localhost:${numericPort}/devtools`);
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

  protected onSocketConnection(socket: WebSocket) {
    const id = uuid.v4();
    this.sockets.set(id, socket);

    socket.send(
      JSON.stringify({
        id: uuid.v4(),
        type: 'metadata',
        body: {
          id: this.id?.toString(),
          pages: this.pages,
        },
        sentAt: new Date(),
      })
    );

    socket.on('disconnect', () => {
      this.sockets.delete(id);
    });
  }

  protected emitToSockets(event: IEvent) {
    for (const socket of this.sockets.values()) {
      socket.send(JSON.stringify(event));
    }
  }

  protected emitActivityToSockets(event: ActivityEvent) {
    for (const socket of this.sockets.values()) {
      socket.send(JSON.stringify(event));
    }
  }
}
