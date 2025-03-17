import http from 'http';
import express from 'express';

import { ILogger } from '@microsoft/spark.common';
import * as $http from '@microsoft/spark.common/http';

import {
  Activity,
  ActivityParams,
  JsonWebToken,
  ConversationReference,
  IToken,
  Client,
} from '@microsoft/spark.api';

import {
  IStreamer,
  ISender,
  IPluginStartEvent,
  IPluginErrorEvent,
  IPluginActivityResponseEvent,
  Plugin,
  Logger,
  Dependency,
  Event,
} from '../../types';

import pkg from '../../../package.json';
import { Manifest } from '../../manifest';
import { IActivityEvent, IErrorEvent } from '../../events';
import { HttpStream } from './stream';

/**
 * Can send/receive activities via http
 */
@Plugin({
  name: 'http',
  version: pkg.version,
  description: 'the default plugin for sending/receiving activities',
})
export class HttpPlugin implements ISender {
  @Logger()
  readonly logger!: ILogger;

  @Dependency()
  readonly client!: $http.Client;

  @Dependency()
  readonly manifest!: Partial<Manifest>;

  @Dependency({ optional: true })
  readonly botToken?: IToken;

  @Dependency({ optional: true })
  readonly graphToken?: IToken;

  @Event('error')
  readonly $onError!: (event: IErrorEvent) => void;

  @Event('activity')
  readonly $onActivity!: (event: IActivityEvent) => void;

  readonly get: express.Application['get'];
  readonly post: express.Application['post'];
  readonly patch: express.Application['patch'];
  readonly put: express.Application['put'];
  readonly delete: express.Application['delete'];
  readonly route: express.Application['route'];
  readonly use: express.Application['use'];

  get server() {
    return this._server;
  }
  protected _server: http.Server;

  get port() {
    return this._port;
  }
  protected _port?: number;

  protected express: express.Application;
  protected pending: Record<string, express.Response> = {};

  constructor() {
    this.express = express();
    this._server = http.createServer(this.express);
    this.get = this.express.get.bind(this.express);
    this.post = this.express.post.bind(this.express);
    this.patch = this.express.patch.bind(this.express);
    this.put = this.express.put.bind(this.express);
    this.delete = this.express.delete.bind(this.express);
    this.route = this.express.route.bind(this.express);
    this.use = this.express.use.bind(this.express);

    this.express.use('/api*', express.json());
    this.express.post('/api/messages', this.onRequest.bind(this));
  }

  /**
   * serve static files
   * @param path the url path to serve
   * @param dist the dist file path to serve
   */
  static(path: string, dist: string) {
    this.express.use(path, express.static(dist));
    return this;
  }

  async onStart({ port, manifest }: IPluginStartEvent) {
    this._port = port;
    this.express.get('/', (_, res) => {
      res.send(manifest);
    });

    return await new Promise<void>((resolve, reject) => {
      this._server = this.express.listen(port, async (err) => {
        if (err) {
          this.$onError({ error: err });
          reject(err);
          return;
        }

        this.logger.info(`listening on port ${port} 🚀`);
        resolve();
      });
    });
  }

  onStop() {
    this._server.close();
  }

  onError({ error, activity }: IPluginErrorEvent) {
    if (!activity) return;
    const res = this.pending[activity.id];

    if (!res) {
      return;
    }

    if (!res.headersSent) {
      res.status(500).send(error.message);
    }

    delete this.pending[activity.id];
  }

  onActivityResponse({ response, activity }: IPluginActivityResponseEvent) {
    const res = this.pending[activity.id];

    if (!res) {
      return;
    }

    if (!res.headersSent) {
      res.status(response.status || 200).send(JSON.stringify(response.body || null));
    }

    delete this.pending[activity.id];
  }

  async send(activity: ActivityParams, ref: ConversationReference) {
    const api = new Client(
      ref.serviceUrl,
      this.client.clone({
        token: () => this.botToken,
      })
    );

    activity = {
      ...activity,
      from: ref.bot,
      conversation: ref.conversation,
    };

    if (activity.id) {
      const res = await api.conversations
        .activities(ref.conversation.id)
        .update(activity.id, activity);
      return { ...activity, ...res };
    }

    const res = await api.conversations.activities(ref.conversation.id).create(activity);
    return { ...activity, ...res };
  }

  createStream(ref: ConversationReference): IStreamer {
    return new HttpStream(
      new Client(
        ref.serviceUrl,
        this.client.clone({
          token: () => this.botToken,
        })
      ),
      ref
    );
  }

  /**
   * validates an incoming http request
   * @param req the incoming http request
   * @param res the http response
   */
  protected async onRequest(
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    const authorization = req.headers.authorization?.replace('Bearer ', '');

    if (!authorization && process.env.NODE_ENV !== 'local') {
      res.status(401).send('unauthorized');
      return;
    }

    const activity: Activity = req.body;
    const token: IToken = authorization
      ? new JsonWebToken(authorization)
      : {
          appId: '',
          from: 'azure',
          fromId: '',
          serviceUrl: activity.serviceUrl || '',
        };

    this.pending[activity.id] = res;
    this.$onActivity({
      sender: this,
      activity,
      token,
    });
  }
}
