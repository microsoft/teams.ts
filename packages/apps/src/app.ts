import { AxiosError } from 'axios';

import {
  ActivityLike,
  ApiClientSettings,
  ChannelID,
  ConversationReference,
  Credentials,
  IToken,
  JsonWebToken,
  StripMentionsTextOptions,
  toActivityParams
} from '@microsoft/teams.api';
import { EventEmitter } from '@microsoft/teams.common/events';
import * as http from '@microsoft/teams.common/http';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common/logging';
import { IStorage, LocalStorage } from '@microsoft/teams.common/storage';

import pkg from '../package.json';

import { ApiClient, GraphClient } from './api';

import { configTab, func, tab } from './app.embed';
import {
  event,
  onActivity,
  onActivityResponse,
  onActivitySent,
  onError,
} from './app.events';
import {
  onTokenExchange,
  onVerifyState
} from './app.oauth';
import { getMetadata, getPlugin, inject, plugin } from './app.plugins';
import { $process } from './app.process';
import { message, on, use } from './app.routing';
import { Container } from './container';
import * as manifest from './manifest';
import * as middleware from './middleware';
import { DEFAULT_OAUTH_SETTINGS, OAuthSettings } from './oauth';
import { HttpPlugin } from './plugins';
import { Router } from './router';
import { AppEvents, IPlugin } from './types';
import { PluginAdditionalContext } from './types/app-routing';

/**
 * App initialization options
 */
export type AppOptions<TPlugin extends IPlugin> = Partial<Credentials> & {
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
  readonly plugins?: Array<TPlugin>;

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

  /**
   * Skip authentication for HTTP requests
   */
  readonly skipAuth?: boolean;
  
  /**
   * API client settings used for overriding.
   */
  readonly apiClientSettings?: ApiClientSettings
};

export type AppActivityOptions = {
  readonly mentions?: {
    /**
     * Automatically remove `<at>...</at>` mention
     * from inbound activity `text`
     */
    readonly stripText?: boolean | StripMentionsTextOptions;
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

/**
 * The orchestrator for receiving/sending activities
 */
export class App<TPlugin extends IPlugin = IPlugin> {
  readonly api: ApiClient;
  readonly graph: GraphClient;
  readonly log: ILogger;
  readonly http: HttpPlugin;
  readonly client: http.Client;
  readonly storage: IStorage;
  readonly credentials?: Credentials;
  readonly entraTokenValidator?: middleware.JwtValidator;

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

  get oauth() {
    return {
      ...DEFAULT_OAUTH_SETTINGS,
      ...this.options.oauth,
    };
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
        resource: `api://\${{BOT_DOMAIN}}/${this.credentials?.clientId || '??'
          }`,
        ...this._manifest.webApplicationInfo,
      },
      ...this._manifest,
    };
  }
  protected readonly _manifest: Partial<manifest.Manifest>;

  /**
   * the apps auth tokens
   */
  get tokens(): AppTokens {
    return this._tokens;
  }
  protected _tokens: AppTokens = {};

  protected container = new Container();
  protected plugins: Array<TPlugin> = [];
  protected router = new Router<PluginAdditionalContext<TPlugin>>();
  protected tenantTokens = new LocalStorage<string>({}, { max: 20000 });
  protected events = new EventEmitter<AppEvents<TPlugin>>();
  protected startedAt?: Date;
  protected port?: number | string;

  private readonly _userAgent = `teams.ts[apps]/${pkg.version}`;

  constructor(readonly options: AppOptions<TPlugin> = {}) {
    this.log = this.options.logger || new ConsoleLogger('@teams/app');
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

    this.api = new ApiClient(
      'https://smba.trafficmanager.net/teams',
      this.client.clone({ token: () => this._tokens.bot }),
      this.options.apiClientSettings
    );

    this.graph = new GraphClient(
      this.client.clone({ token: () => this._tokens.graph })
    );

    // initialize credentials
    const clientId = this.options.clientId || process.env.CLIENT_ID;
    const clientSecret =
      ('clientSecret' in this.options
        ? this.options.clientSecret
        : undefined) || process.env.CLIENT_SECRET;
    const tenantId =
      ('tenantId' in this.options ? this.options.tenantId : undefined) ||
      process.env.TENANT_ID;
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

    if (clientId) {
      this.entraTokenValidator = middleware.createEntraTokenValidator(
        tenantId || 'common',
        clientId,
        { logger: this.log, }
      );
    }

    // add/validate plugins
    const plugins: Array<TPlugin> = this.options.plugins || [];
    let httpPlugin = plugins.find((p) => {
      const meta = getMetadata(p);
      return meta.name === 'http';
    }) as HttpPlugin | undefined;

    if (!httpPlugin) {
      httpPlugin = new HttpPlugin(undefined, { skipAuth: this.options.skipAuth });
      // Casting to any here because a default HttpPlugin is not assignable to TPlugin
      // without a silly level of indirection.
      plugins.unshift(httpPlugin as any);
    } else if (this.options.skipAuth) {
      this.log.warn('skipAuth option has no effect when a custom HTTP plugin is provided. Configure authentication on the plugin directly.');
    }

    this.http = httpPlugin;

    // add injectable items to container
    this.container.register('id', { useValue: this.id });
    this.container.register('name', { useValue: this.name });
    this.container.register('manifest', { useValue: this.manifest });
    this.container.register('credentials', { useValue: this.credentials });
    this.container.register('botToken', { useValue: () => this.tokens.bot });
    this.container.register('graphToken', {
      useValue: () => this.tokens.graph,
    });
    this.container.register('ILogger', { useValue: this.log });
    this.container.register('IStorage', { useValue: this.storage });
    this.container.register(this.client.constructor.name, {
      useFactory: () => this.client,
    });

    for (const plugin of plugins) {
      this.plugin(plugin);
    }

    if (this.options.activity?.mentions?.stripText) {
      const options = this.options.activity?.mentions?.stripText;
      this.use(
        middleware.stripMentionsText(
          typeof options === 'boolean' ? {} : options
        )
      );
    }

    // default event handlers
    this.router.register({
      name: 'signin.token-exchange',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/tokenExchange',
      callback: ctx => this.onTokenExchange(ctx),
    });

    this.router.register({
      name: 'signin.verify-state',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/verifyState',
      callback: ctx => this.onVerifyState(ctx),
    });

    this.event('error', ({ error }) => {
      this.log.error(error.message);

      if (error instanceof AxiosError) {
        this.log.error(error.request.path);
        this.log.error(error.response?.data);
      }
    });
  }

  /**
   * start the app
   * @param port port to listen on
   */
  async start(port?: number | string) {
    this.port = port || process.env.PORT || 3978;

    try {
      await this.refreshTokens(true);

      // initialize plugins
      for (const plugin of this.plugins) {
        // inject dependencies
        this.inject(plugin);

        if (plugin.onInit) {
          plugin.onInit();
        }
      }

      // start plugins
      for (const plugin of this.plugins) {
        if (plugin.onStart) {
          await plugin.onStart({ port: this.port });
        }
      }

      this.events.emit('start', this.log);
      this.startedAt = new Date();
    } catch (error: any) {
      this.onError({ error });
    }
  }

  /**
   * stop the app
   */
  async stop() {
    try {
      for (const plugin of this.plugins) {
        if (plugin.onStop) {
          await plugin.onStop();
        }
      }
    } catch (error: any) {
      this.onError({ error });
    }
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

    const res = await this.http.send(toActivityParams(activity), ref);
    return res;
  }

  /**
   * subscribe to an event
   * @param name event to subscribe to
   * @param cb callback to invoke
   */
  on = on; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * subscribe to a message event for a specific pattern
   * @param pattern pattern to match against message text
   * @param cb callback to invoke
   */
  message = message; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * register a middleware
   * @param cb callback to invoke
   */
  use = use; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * subscribe to an event
   * @param name the event to subscribe to
   * @param cb the callback to invoke
   */
  event = event; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * add a plugin
   * @param plugin plugin to add
   */
  plugin = plugin; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * get a plugin
   */
  getPlugin = getPlugin; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * add/update a function that can be called remotely
   * @param name The unique function name
   * @param cb The callback to handle the function
   */
  function = func; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * add/update a static tab.
   * the tab will be hosted at
   * `http://localhost:{{PORT}}/tabs/{{name}}` or `https://{{BOT_DOMAIN}}/tabs/{{name}}`
   * @remark scopes default to `personal`
   * @param name A unique identifier for the entity which the tab displays.
   * @param path The path to the web `dist` folder.
   */
  tab = tab; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * add a configurable tab
   * @remark scopes defaults to `team`
   * @param url The url to use when configuring the tab.
   */
  configTab = configTab; // eslint-disable-line @typescript-eslint/member-ordering

  /**
   * activity handler called when an inbound activity is received
   * @param sender the plugin to use for sending activities
   * @param event the received activity event
   */
  process = $process; // eslint-disable-line @typescript-eslint/member-ordering

  ///
  /// OAuth
  ///

  protected onTokenExchange = onTokenExchange; // eslint-disable-line @typescript-eslint/member-ordering
  protected onVerifyState = onVerifyState; // eslint-disable-line @typescript-eslint/member-ordering

  ///
  /// Events
  ///

  protected inject = inject; // eslint-disable-line @typescript-eslint/member-ordering
  protected onError = onError; // eslint-disable-line @typescript-eslint/member-ordering
  protected onActivity = onActivity; // eslint-disable-line @typescript-eslint/member-ordering
  protected onActivitySent = onActivitySent; // eslint-disable-line @typescript-eslint/member-ordering
  protected onActivityResponse = onActivityResponse; // eslint-disable-line @typescript-eslint/member-ordering

  ///
  /// Token
  ///

  /**
   * Refresh the tokens for the app
   */
  protected async refreshTokens(force = false) {
    return Promise.all([
      this.refreshBotToken(force),
      this.refreshGraphToken(force),
    ]);
  }

  protected async refreshBotToken(force = false) {
    if (!this.credentials) return;
    if (!this.tokens.bot?.isExpired() && !force) return;
    if (this.tokens.bot) {
      this.log.debug('refreshing bot token');
    }

    const botResponse = await this.api.bots.token.get(this.credentials);
    this._tokens.bot = new JsonWebToken(botResponse.access_token);
  }

  protected async refreshGraphToken(force = false) {
    if (!this.credentials) return;
    if (!this.tokens.graph?.isExpired() && !force) return;
    if (this.tokens.graph) {
      this.log.debug('refreshing graph token');
    }

    const graphResponse = await this.api.bots.token.getGraph(this.credentials);
    this._tokens.graph = new JsonWebToken(graphResponse.access_token);
  }

  protected async getUserToken(
    channelId: ChannelID,
    userId: string
  ) {
    const res = await this.api.users.token.get({
      channelId,
      userId,
      connectionName: this.oauth.defaultConnectionName,
    });

    return res.token;
  }

  protected async getOrRefreshTenantToken(tenantId: string) {
    let appToken =
      this.tenantTokens.get(tenantId);
    if (this.credentials && !this.tenantTokens.get(tenantId)) {
      const { access_token } = await this.api.bots.token.getGraph({
        ...this.credentials,
        tenantId: tenantId,
      });

      this.log.debug(`refreshing tenant token for ${tenantId}`);

      appToken = access_token;
      this.tenantTokens.set(tenantId, access_token);
    }

    return appToken;
  }
}
