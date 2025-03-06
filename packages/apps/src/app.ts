import npath from 'path';
import { AxiosError } from 'axios';

import { ILogger, ConsoleLogger } from '@microsoft/spark.common/logging';
import { LocalStorage, IStorage } from '@microsoft/spark.common/storage';
import { EventEmitter, EventHandler } from '@microsoft/spark.common/events';

import * as http from '@microsoft/spark.common/http';
import * as graph from '@microsoft/spark.graph';

import {
  Activity,
  IToken,
  Credentials,
  ConversationReference,
  TokenExchangeInvokeResponse,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  JsonWebToken,
  toActivityParams,
  ConversationAccount,
  TokenExchangeState,
  cardAttachment,
  ActivityLike,
  RemoveMentionsTextOptions,
} from '@microsoft/spark.api';

import pkg from '../package.json';

import * as manifest from './manifest';
import * as middleware from './middleware';
import * as contexts from './contexts';
import { IRoutes } from './routes';
import { Router } from './router';
import {
  IAppActivityBeforeSentEvent,
  IAppActivityErrorEvent,
  IAppActivityReceivedEvent,
  IAppActivitySentEvent,
  IEvents,
} from './events';
import { HttpPlugin } from './plugins';
import { OAuthSettings } from './oauth';
import { AppClient, ApiClient } from './api';
import { signin } from './events/signin';
import { error } from './events/error';
import { IActivityReceivedEvent, IPlugin, RouteHandler, ISenderPlugin } from './types';

/**
 * App initialization options
 */
export type AppOptions = Partial<Credentials> & {
  /**
   * http client or client options used to make api requests
   */
  readonly client?: http.Client | http.ClientOptions | (() => http.Client);

  /**
   * logger instance to use
   */
  readonly logger?: ILogger;

  /**
   * storage instance to use
   */
  readonly storage?: IStorage;

  /**
   * plugins to extend the apps functionality
   */
  readonly plugins?: Array<IPlugin>;

  /**
   * OAuth Settings
   */
  readonly oauth?: OAuthSettings;

  /**
   * The apps manifest
   */
  readonly manifest?: Partial<manifest.Manifest>;

  /**
   * Activity Options
   */
  readonly activity?: AppActivityOptions;
};

export type AppActivityOptions = {
  readonly mentions?: {
    /**
     * Automatically remove `<at>...</at>` mention
     * from inbound activity `text`
     */
    readonly removeText?: boolean | RemoveMentionsTextOptions;
  };
};

export type AppTokens = {
  /**
   * bot token used to send activities
   */
  bot?: IToken;

  /**
   * graph token used to query the graph api
   */
  graph?: IToken;
};

export type ProcessActivityArgs = {
  /**
   * inbound request token
   */
  readonly token: IToken;

  /**
   * inbound request activity payload
   */
  readonly activity: Activity;

  /**
   * the sender plugin to respond with
   */
  readonly sender: ISenderPlugin;

  /**
   * other
   */
  [key: string]: any;
};

/**
 * The orchestrator for receiving/sending activities
 */
export class App {
  readonly api: AppClient;
  readonly log: ILogger;
  readonly http: HttpPlugin;
  readonly client: http.Client;
  readonly storage: IStorage;
  readonly credentials?: Credentials;

  /**
   * the apps id
   */
  get id() {
    return this.tokens.bot?.appId || this.tokens.graph?.appId;
  }

  /**
   * the apps name
   */
  get name() {
    return this.tokens.bot?.appDisplayName || this.tokens.graph?.appDisplayName;
  }

  /**
   * the apps manifest
   */
  get manifest(): Partial<manifest.Manifest> {
    return {
      id: this.id,
      name: {
        short: this.name || '??',
        full: this.name || '??',
        ...this._manifest.name,
      },
      bots: [
        {
          botId: this.id || '??',
          scopes: ['personal'],
        },
      ],
      webApplicationInfo: {
        id: this.credentials?.clientId || '??',
        resource: `api://\${{BOT_DOMAIN}}/${this.credentials?.clientId || '??'}`,
        ...this._manifest.webApplicationInfo,
      },
      ...this._manifest,
    };
  }

  /**
   * the apps auth tokens
   */
  get tokens() {
    return this._tokens;
  }

  protected plugins: Array<IPlugin> = [];
  protected router = new Router();
  protected tenantTokens = new LocalStorage<string>(undefined, { max: 20000 });
  protected events = new EventEmitter<IEvents>();
  protected startedAt?: Date;
  protected port?: number;

  private readonly _userAgent = `spark[apps]/${pkg.version}`;
  private readonly _manifest: Partial<manifest.Manifest>;
  private _tokens: AppTokens = {};

  constructor(readonly options: AppOptions = {}) {
    this.log = this.options.logger || new ConsoleLogger('@spark/app');
    this.storage = this.options.storage || new LocalStorage();
    this._manifest = this.options.manifest || {};

    if (!options.client) {
      this.client = new http.Client({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    } else if (typeof options.client === 'function') {
      this.client = options.client().clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    } else if ('request' in options.client) {
      this.client = options.client.clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    } else {
      this.client = new http.Client({
        ...options.client,
        headers: {
          ...options.client.headers,
          'User-Agent': this._userAgent,
        },
      });
    }

    this.api = new AppClient(
      'https://smba.trafficmanager.net/teams',
      this.client.clone({ token: () => this._tokens.bot }),
      this.client.clone({ token: () => this._tokens.graph })
    );

    const clientId = this.options.clientId || process.env.CLIENT_ID;
    const clientSecret =
      ('clientSecret' in this.options ? this.options.clientSecret : undefined) ||
      process.env.CLIENT_SECRET;
    const tenantId =
      ('tenantId' in this.options ? this.options.tenantId : undefined) || process.env.TENANT_ID;
    const token = 'token' in this.options ? this.options.token : undefined;

    if (clientId && clientSecret) {
      this.credentials = {
        clientId,
        clientSecret,
        tenantId,
      };
    }

    if (clientId && token) {
      this.credentials = {
        clientId,
        tenantId,
        token,
      };
    }

    const plugins = this.options.plugins || [];
    let httpPlugin = plugins.find((p) => p.name === 'http');

    if (!httpPlugin) {
      httpPlugin = new HttpPlugin();
      plugins.unshift(httpPlugin);
    }

    if (!(httpPlugin instanceof HttpPlugin)) {
      throw new Error('http plugin must be of type `HttpPlugin`');
    }

    this.http = httpPlugin;

    for (const plugin of plugins) {
      this.plugin(plugin);
    }

    if (this.options.activity?.mentions?.removeText) {
      const options = this.options.activity?.mentions?.removeText;
      this.use(middleware.removeMentionsText(typeof options === 'boolean' ? {} : options));
    }

    // default event handlers
    this.on('signin.token-exchange', this.onTokenExchange.bind(this));
    this.on('signin.verify-state', this.onVerifyState.bind(this));
    this.event('signin', signin);
    this.event('error', error);
  }

  /**
   * start the app
   * @param port port to listen on
   */
  async start(port?: number | string) {
    this.port = +(port || process.env.PORT || 3000);

    try {
      if (this.credentials) {
        const botResponse = await this.api.bots.token.get(this.credentials);
        const graphResponse = await this.api.bots.token.getGraph(this.credentials);
        this._tokens = {
          bot: new JsonWebToken(botResponse.access_token),
          graph: new JsonWebToken(graphResponse.access_token),
        };
      }

      for (const plugin of this.plugins) {
        if (plugin.onStart) {
          await plugin.onStart(this.port);
        }
      }

      this.events.emit('start', this.log);
      this.startedAt = new Date();
    } catch (err: any) {
      this.events.emit('error', { err, log: this.log });
    }
  }

  /**
   * subscribe to an event
   * @param name event to subscribe to
   * @param cb callback to invoke
   */
  on<Name extends keyof IRoutes>(name: Name, cb: Exclude<IRoutes[Name], undefined>) {
    this.router.on(name, cb);
    return this;
  }

  /**
   * subscribe to a message event for a specific pattern
   * @param pattern pattern to match against message text
   * @param cb callback to invoke
   */
  message(pattern: string | RegExp, cb: Exclude<IRoutes['message'], undefined>) {
    this.router.register<'message'>({
      select: (activity) => {
        if (activity.type !== 'message') {
          return false;
        }

        return new RegExp(pattern).test(activity.text);
      },
      callback: cb,
    });

    return this;
  }

  /**
   * register a middleware
   * @param cb callback to invoke
   */
  use(cb: RouteHandler<contexts.IMiddlewareContext>) {
    this.router.use(cb);
    return this;
  }

  /**
   * subscribe to an event
   * @param name the event to subscribe to
   * @param cb the callback to invoke
   */
  event<Name extends keyof IEvents>(name: Name, cb: EventHandler<IEvents[Name]>) {
    this.events.on(name, cb);
    return this;
  }

  /**
   * add a plugin
   * @param plugin plugin to add
   */
  plugin(plugin: IPlugin) {
    if (this.plugins.some((p) => p.name === plugin.name)) {
      return;
    }

    plugin.onInit(this);
    plugin.on('error', this.onError.bind(this));
    plugin.on('activity.received', (e) =>
      this.onActivityReceived({
        ...e,
        plugin: plugin.name,
      })
    );

    plugin.on('activity.sent', (e) =>
      this.onActivitySent({
        ...e,
        plugin: plugin.name,
      })
    );

    plugin.on('activity.before.sent', (e) =>
      this.onBeforeActivitySent({
        ...e,
        plugin: plugin.name,
      })
    );

    this.plugins.push(plugin);
    return this;
  }

  /**
   * get a plugin
   */
  getPlugin(name: string) {
    return this.plugins.find((p) => p.name === name);
  }

  /**
   * add/update a function that can be called remotely
   * @param name The unique function name
   * @param cb The callback to handle the function
   */
  function<TData>(
    name: string,
    cb: (context: contexts.IFunctionContext<TData>) => any | Promise<any>
  ) {
    const log = this.log.child('functions').child(name);
    this.http.post(
      `/api/functions/${name}`,
      middleware.withClientAuth({
        logger: log,
        ...this.credentials,
      }),
      async (req: middleware.ClientAuthRequest, res) => {
        if (!req.context) {
          throw new Error('expected client context');
        }

        const data = await cb({
          ...req.context,
          log,
          api: this.api,
          data: req.body,
        });

        res.send(data);
      }
    );

    return this;
  }

  /**
   * add/update a static tab.
   * the tab will be hosted at
   * `http://localhost:{{PORT}}/tabs/{{name}}` or `https://{{BOT_DOMAIN}}/tabs/{{name}}`
   * @remark scopes default to `personal`
   * @param name A unique identifier for the entity which the tab displays.
   * @param path The path to the web `dist` folder.
   */
  tab(
    name: string,
    path: string,
    options?: Partial<Omit<manifest.StaticTab, 'contentUrl' | 'entityId'>>
  ) {
    if (!this._manifest.staticTabs) {
      this._manifest.staticTabs = [];
    }

    const i = this._manifest.staticTabs.findIndex((t) => t.entityId === name);
    const tab: manifest.StaticTab = {
      entityId: name,
      contentUrl: `https://\${{BOT_DOMAIN}}/tabs/${name}`,
      scopes: ['personal'],
      ...options,
    };

    if (i > -1) {
      this._manifest.staticTabs[i] = tab;
    } else {
      this._manifest.staticTabs.push(tab);
    }

    this.http.static(`/tabs/${name}`, path);
    this.http.use(`/tabs/${name}*`, async (_, res) => {
      res.sendFile(npath.join(path, 'index.html'));
    });

    return this;
  }

  /**
   * add a configurable tab
   * @remark scopes defaults to `team`
   * @param url The url to use when configuring the tab.
   */
  configTab(url: string, options?: Partial<Omit<manifest.ConfigurableTab, 'configurationUrl'>>) {
    if (!this._manifest.configurableTabs) {
      this._manifest.configurableTabs = [];
    }

    this._manifest.configurableTabs.push({
      configurationUrl: url,
      scopes: ['team'],
      ...options,
    });

    return this;
  }

  /**
   * send an activity proactively
   * @param conversationId the conversation to send to
   * @param activity the activity to send
   */
  async send(conversationId: string, activity: ActivityLike) {
    if (!this.id || !this.name) {
      throw new Error('app not started');
    }

    const ref: ConversationReference = {
      channelId: 'msteams',
      serviceUrl: this.api.serviceUrl,
      bot: {
        id: this.id,
        name: this.name,
        role: 'bot',
      },
      conversation: {
        id: conversationId,
        conversationType: 'personal',
      },
    };

    const res = await this.http.onSend(toActivityParams(activity), ref);
    return res;
  }

  /**
   * activity handler called when an inbound activity is received
   * @param sender the plugin to use for sending activities
   * @param event the received activity event
   */
  async process(sender: ISenderPlugin, event: IActivityReceivedEvent) {
    const { token, activity } = event;

    this.log.debug(
      `activity/${activity.type}${activity.type === 'invoke' ? `/${activity.name}` : ''}`
    );

    let serviceUrl = activity.serviceUrl || token.serviceUrl;

    if (serviceUrl.endsWith('/')) {
      serviceUrl = serviceUrl.slice(0, serviceUrl.length - 1);
    }

    let userToken: string | undefined;
    let appToken =
      this.tenantTokens.get(token.tenantId || 'common') || this._tokens.graph?.toString();

    try {
      const res = await this.api.users.token.get({
        channelId: activity.channelId,
        userId: activity.from.id,
        connectionName: this.options.oauth?.graph || 'graph',
      });

      userToken = res.token;

      if (this.credentials && !appToken) {
        const { access_token } = await this.api.bots.token.getGraph({
          ...this.credentials,
          tenantId: event.token.tenantId,
        });

        appToken = access_token;
        this.tenantTokens.set(token.tenantId || 'common', access_token);
      }
    } catch (err) {
      // noop
    }

    const client = this.client.clone();
    const api = new ApiClient(
      serviceUrl,
      client.clone({ token: () => this.tokens.bot }),
      client.clone({ token: () => appToken }),
      client.clone({ token: () => userToken })
    );

    const ref: ConversationReference = {
      serviceUrl,
      activityId: activity.id,
      bot: activity.recipient,
      channelId: activity.channelId,
      conversation: activity.conversation,
      locale: activity.locale,
      user: activity.from,
    };

    const routes = this.router.select(activity);

    for (let i = this.plugins.length - 1; i > -1; i--) {
      const plugin = this.plugins[i];

      if (plugin.onActivity) {
        routes.unshift(plugin.onActivity.bind(plugin));
      }
    }

    const ctx: contexts.IActivityContext<Activity> = {
      ...event,
      plugin: sender.name,
      sender: undefined,
      api,
      appId: this.id || '',
      log: this.log,
      tokens: this.tokens,
      ref,
      storage: this.storage,
      isSignedIn: !!userToken,
    };

    let i = 0;
    const stream = sender.onStreamOpen ? await sender.onStreamOpen(ref) : undefined;
    const routeCtx: contexts.IMiddlewareContext<Activity> = {
      ...ctx,
      stream: {
        emit(activity) {
          stream?.emit(activity);
        },
        close() {
          stream?.close();
        },
      },
      next: (context) => {
        if (i === routes.length - 1) return;
        i++;
        return routes[i](context || routeCtx);
      },
      send: async (activity) => {
        const res = await sender.onSend(toActivityParams(activity), ref);
        return res;
      },
      reply: async (activity) => {
        activity = toActivityParams(activity);
        activity.replyToId = ctx.activity.id;
        const res = await sender.onSend(activity, ref);
        return res;
      },
      signin: this.onSignIn(ctx, sender),
      signout: this.onSignOut(ctx),
    };

    if (routes.length === 0) {
      return { status: 200 };
    }

    try {
      const res = (await routes[0](routeCtx)) || { status: 200 };
      await stream?.close();
      this.events.emit('activity.response', {
        plugin: sender.name,
        activity,
        ref,
        response: res,
      });
    } catch (err: any) {
      this.onActivityError({ ...routeCtx, err });
      this.events.emit('activity.response', {
        plugin: sender.name,
        activity,
        ref,
        response: { status: 500 },
      });
    }
  }

  protected onSignIn(ctx: contexts.IActivityContext, sender: ISenderPlugin) {
    const { appId, api, ref, activity } = ctx;

    return async (name = 'graph', text = 'Please Sign In...') => {
      const convo = { ...ref };

      try {
        const res = await api.users.token.get({
          channelId: activity.channelId,
          userId: activity.from.id,
          connectionName: name,
        });

        return res.token;
      } catch (err) {
        // noop
      }

      // create new 1:1 conversation with user to do SSO
      // because groupchats don't support it.
      if (activity.conversation.isGroup) {
        const res = await api.conversations.create({
          tenantId: activity.conversation.tenantId,
          isGroup: false,
          bot: { id: activity.recipient.id },
          members: [activity.from],
        });

        await sender.onSend(
          {
            type: 'message',
            text,
          },
          ref
        );

        convo.conversation = { id: res.id } as ConversationAccount;
      }

      const tokenExchangeState: TokenExchangeState = {
        connectionName: name,
        conversation: convo,
        relatesTo: activity.relatesTo,
        msAppId: appId,
      };

      const state = Buffer.from(JSON.stringify(tokenExchangeState)).toString('base64');
      const resource = await api.bots.signIn.getResource({ state });

      await sender.onSend(
        {
          type: 'message',
          inputHint: 'acceptingInput',
          recipient: activity.from,
          attachments: [
            cardAttachment('oauth', {
              text,
              connectionName: name,
              tokenExchangeResource: resource.tokenExchangeResource,
              tokenPostResource: resource.tokenPostResource,
              buttons: [
                {
                  type: 'signin',
                  title: 'Sign In',
                  value: resource.signInLink,
                },
              ],
            }),
          ],
        },
        ref
      );
    };
  }

  protected onSignOut({ activity, api }: contexts.IActivityContext) {
    return async (name = 'graph') => {
      await api.users.token.signOut({
        channelId: activity.channelId,
        userId: activity.from.id,
        connectionName: name,
      });
    };
  }

  protected async onTokenExchange(
    ctx: contexts.IMiddlewareContext<ISignInTokenExchangeInvokeActivity>
  ) {
    const { api, activity, storage } = ctx;
    const key = `auth/${activity.conversation.id}/${activity.from.id}`;

    try {
      await storage.set(key, activity.value.connectionName);
      const token = await api.users.token.exchange({
        channelId: activity.channelId,
        userId: activity.from.id,
        connectionName: activity.value.connectionName,
        exchangeRequest: {
          token: activity.value.token,
        },
      });

      ctx.api.user = new graph.Client(
        this.client.clone({
          token: token.token,
        })
      );

      this.events.emit('signin', { ...ctx, token });
      return { status: 200 };
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status !== 404 && err.status !== 400) {
          this.onActivityError({ ...ctx, err });
        }

        if (err.status === 404) {
          return { status: 404 };
        }
      }

      return {
        status: 412,
        body: {
          id: activity.value.id,
          connectionName: activity.value.connectionName,
          failureDetail: 'unable to exchange token...',
        } as TokenExchangeInvokeResponse,
      };
    }
  }

  protected async onVerifyState(
    ctx: contexts.IMiddlewareContext<ISignInVerifyStateInvokeActivity>
  ) {
    const { plugin, api, activity, storage } = ctx;
    const key = `auth/${activity.conversation.id}/${activity.from.id}`;

    try {
      const connectionName: string | undefined = await storage.get(key);

      if (!connectionName || !activity.value.state) {
        return { status: 404 };
      }

      const token = await api.users.token.get({
        channelId: activity.channelId,
        userId: activity.from.id,
        connectionName,
        code: activity.value.state,
      });

      ctx.api.user = new graph.Client(
        this.client.clone({
          token: token.token,
        })
      );

      await storage.delete(key);
      this.events.emit('signin', { ...ctx, token });
      return { status: 200 };
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status !== 404 && err.status !== 400) {
          this.onActivityError({ ...ctx, err, plugin });
        }
      }

      return { status: 412 };
    }
  }

  ///
  /// Events
  ///

  protected onError(err: any) {
    this.events.emit('error', { err, log: this.log });
  }

  protected onActivityError(event: IAppActivityErrorEvent) {
    this.onError(event.err);
    this.events.emit('activity.error', event);
  }

  protected async onActivityReceived(event: IAppActivityReceivedEvent) {
    this.events.emit('activity.received', event);

    const plugin = this.getPlugin(event.plugin);

    if (!plugin) {
      throw new Error(`plugin "${event.plugin}" not found`);
    }

    if (!plugin.onSend) {
      throw new Error(`plugin "${event.plugin}" cannot send activities`);
    }

    await this.process(plugin as ISenderPlugin, event);
  }

  protected onActivitySent(event: IAppActivitySentEvent) {
    this.events.emit('activity.sent', event);
  }

  protected onBeforeActivitySent(event: IAppActivityBeforeSentEvent) {
    this.events.emit('activity.before.sent', event);
  }
}
