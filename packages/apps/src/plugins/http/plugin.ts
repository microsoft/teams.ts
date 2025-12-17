import http from 'http';

import cors from 'cors';
import express from 'express';

import {
  Activity,
  ActivityParams,
  Client,
  ConversationReference,
  Credentials,
  InvokeResponse,
  IToken
} from '@microsoft/teams.api';

import { ILogger } from '@microsoft/teams.common';
import * as $http from '@microsoft/teams.common/http';

import pkg from '../../../package.json';
import { IActivityEvent, IErrorEvent } from '../../events';
import { Manifest } from '../../manifest';
import { JwtValidatedRequest, withJwtValidation } from '../../middleware/jwt-validation-middleware';
import {
  Dependency,
  Event,
  IPluginStartEvent,
  ISender,
  IStreamer,
  Logger,
  Plugin,
} from '../../types';


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
  readonly credentials?: Credentials;

  @Dependency({ optional: true })
  readonly botToken?: () => IToken;

  @Event('error')
  readonly $onError!: (event: IErrorEvent) => void;

  @Event('activity')
  readonly $onActivity!: (event: IActivityEvent) => Promise<InvokeResponse>;

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
  protected _port?: number | string;

  protected express: express.Application;
  protected skipAuth: boolean;

  constructor(server?: http.Server, options?: { skipAuth?: boolean }) {
    this.skipAuth = options?.skipAuth ?? false;
    this.express = express();
    this._server = server || http.createServer();
    this._server.on('request', this.express);
    this.get = this.express.get.bind(this.express);
    this.post = this.express.post.bind(this.express);
    this.patch = this.express.patch.bind(this.express);
    this.put = this.express.put.bind(this.express);
    this.delete = this.express.delete.bind(this.express);
    this.route = this.express.route.bind(this.express);
    this.use = this.express.use.bind(this.express);

    this.express.use(cors());
    this.express.use('/api*', express.json());
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

  onInit() {
    const messageHandlers = [this.onRequest.bind(this)];
    if (!this.skipAuth) {
      // Setup /api/messages route with JWT validation middleware
      const jwtMiddleware = withJwtValidation({
        credentials: this.credentials,
        logger: this.logger
      });
      messageHandlers.unshift(jwtMiddleware);
    }
    this.express.post('/api/messages', ...messageHandlers);
  }

  async onStart({ port }: IPluginStartEvent) {
    this._port = port;

    this.express.get('/', (_, res) => {
      res.send(this.manifest);
    });

    return await new Promise<void>((resolve, reject) => {
      this._server.on('error', (err) => {
        this.$onError({ error: err });
        reject(err);
      });

      this._server.listen(port, () => {
        this.logger.info(`listening on port ${port} 🚀`);
        resolve();
      });
    });
  }

  onStop() {
    this._server.close();
  }

  async send(activity: ActivityParams, ref: ConversationReference) {
    const api = new Client(
      ref.serviceUrl,
      this.client.clone({
        token: this.botToken,
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
          token: this.botToken,
        })
      ),
      ref,
      this.logger
    );
  }
  /**
   * validates an incoming http request
   * @param req the incoming http request
   * @param res the http response
   */
  protected async onRequest(
    req: JwtValidatedRequest,
    res: express.Response,
    _next: express.NextFunction
  ) {
    const activity: Activity = req.body;
    let token: IToken | undefined;
    if (req.validatedToken) {
      token = req.validatedToken;
    } else {
      token = {
        appId: '',
        from: 'azure',
        fromId: '',
        serviceUrl: activity.serviceUrl || '',
        isExpired: () => false,
      };
    }

    const response = await this.$onActivity({
      sender: this,
      activity,
      token,
    });

    res.status(response.status || 200).send(response.body);
  }
}
