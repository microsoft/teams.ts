import http from 'http';
import express from 'express';

import {
  Activity,
  ActivityParams,
  JsonWebToken,
  ConversationReference,
  Client,
  IToken,
} from '@microsoft/spark.api';
import { ConsoleLogger, ILogger, EventEmitter, EventHandler } from '@microsoft/spark.common';

import { IAppActivityErrorEvent, IAppActivityResponseEvent } from '../../events';
import { IPlugin, IPluginEvents, IStreamer, IStreamerPlugin } from '../../types';
import { App } from '../../app';

import { HttpStream } from './stream';

/**
 * Can send/receive activities via http
 */
export class HttpPlugin implements IPlugin, IStreamerPlugin {
  readonly name = 'http';

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

  protected app?: App;
  protected log: ILogger;
  protected express: express.Application;
  protected events: EventEmitter<IPluginEvents>;
  protected pending: Record<string, express.Response> = {};

  constructor() {
    this.log = new ConsoleLogger('@spark/app/http');
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
    this.events = new EventEmitter();
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

  on<Name extends keyof IPluginEvents>(name: Name, callback: EventHandler<IPluginEvents[Name]>) {
    this.events.on(name, callback);
  }

  onInit(app: App) {
    this.app = app;
    this.log = app.log.child('http');
    app.event('activity.error', this.onActivityError.bind(this));
    app.event('activity.response', this.onActivityResponse.bind(this));
  }

  /**
   * start listening
   * @param port port to listen on
   */
  async onStart(port = 3000) {
    if (!this.app) {
      throw new Error('plugin not registered');
    }

    this._port = port;
    this.express.get('/', (_, res) => {
      res.send(this.app?.manifest);
    });

    return await new Promise<void>((resolve, reject) => {
      this.express.on('error', (err) => {
        this.events.emit('error', err);
        reject(err);
      });

      this._server = this.express.listen(port, async () => {
        this.events.emit('start', this.log);
        this.log.info(`listening on port ${port} 🚀`);
        resolve();
      });
    });
  }

  async onSend(activity: ActivityParams, ref: ConversationReference) {
    const api = new Client(
      ref.serviceUrl,
      this.app?.http.clone({
        token: () => this.app?.tokens.bot,
      })
    );

    activity = {
      ...activity,
      from: ref.bot,
      conversation: ref.conversation,
    };

    if (activity.id && !activity.channelData?.streamId) {
      const res = await api.conversations
        .activities(ref.conversation.id)
        .update(activity.id, activity);
      return { ...activity, ...res };
    }

    this.events.emit('activity.before.sent', {
      activity,
      ref,
    });

    const res = await api.conversations.activities(ref.conversation.id).create(activity);

    this.events.emit('activity.sent', {
      activity: { ...activity, ...res },
      ref,
    });

    return { ...activity, ...res };
  }

  onStreamOpen(ref: ConversationReference): IStreamer {
    return new HttpStream((activity) => this.onSend(activity, ref));
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
    if (!this.app) {
      throw new Error('plugin not registered');
    }

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
          serviceUrl: activity.serviceUrl || 'https://smba.trafficmanager.net/teams',
        };

    this.pending[activity.id] = res;
    this.events.emit('activity.received', {
      activity,
      token,
    });
  }

  protected onActivityError({ err, activity }: IAppActivityErrorEvent) {
    const res = this.pending[activity.id];

    if (!res) {
      return;
    }

    res.status(500).send(err.message);
    delete this.pending[activity.id];
  }

  protected onActivityResponse({ response, activity }: IAppActivityResponseEvent) {
    const res = this.pending[activity.id];

    if (!res) {
      return;
    }

    res.status(response.status || 200).send(JSON.stringify(response.body || null));
    delete this.pending[activity.id];
  }
}
