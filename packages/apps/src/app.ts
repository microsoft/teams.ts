import { AxiosError } from 'axios';

import {
  ActivityLike,
  ApiClientSettings,
  ChannelID,
  CloudEnvironment,
  ConversationReference,
  InvokeResponse,
  StripMentionsTextOptions,
  toActivityParams,
  TokenCredentials,
} from '@microsoft/teams.api';
import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions,
  ConsoleLogger,
  EventEmitter,
  ILogger,
  IStorage,
  LocalStorage
} from '@microsoft/teams.common';

import { ActivitySender } from './activity-sender';
import { ApiClient, GraphClient } from './api';

import { configTab, func, tab } from './app.embed';
import {
  event,
  onActivityResponse,
  onActivitySent,
  onError,
} from './app.events';
import {
  onSignInFailure,
  onTokenExchange,
  onVerifyState,
} from './app.oauth';
import { getMetadata, getPlugin, inject, plugin } from './app.plugins';
import { $process } from './app.process';
import { message, on, use } from './app.routing';
import { Container } from './container';
import { Core } from './core';
import { IActivityEvent } from './events';
import { IHttpServerAdapter } from './http';
import { HttpServer } from './http/http-server';
import * as manifest from './manifest';
import * as middleware from './middleware';
import { DEFAULT_OAUTH_SETTINGS, OAuthSettings } from './oauth';
import { HttpPlugin } from './plugins';
import { Router } from './router';
import { Authorize, TokenManager } from './token-manager';
import { IPlugin, AppEvents } from './types';
import { PluginAdditionalContext } from './types/app-routing';
import { toThreadedConversationId } from './utils/thread';

/**
 * App initialization options
 */
export type AppOptions<TPlugin extends IPlugin> = {
  /**
   * client id - Your application's client identifier
   * Uses environment variable CLIENT_ID if not explicitly provided
   */
  readonly clientId?: string;

  /**
   * client secret - Your application's secret to be able to send messages
   * as your bot.
   * Uses environment variable CLIENT_SECRET if not explicitly provided
   * If not available, uses ManagedIdentity to authenticate
   */
  readonly clientSecret?: string;

  /**
   * Application ID URI from the Azure portal. Used for user authentication.
   * Matches webApplicationInfo.resource in the app manifest.
   */
  readonly applicationIdUri?: string;

  /**
   * tenantId - The tenantId where your app is registered
   * Uses environment variable TENANT_ID if not explicitly provided
   * If your app has MultiTenant auth enabled (this value should not be provided).
   * (Note: That MultiTenant auth has been deprecated, so only legacy apps will have this
   * value enabled)
   */
  readonly tenantId?: string;

  /**
   * token - An override to perform token fetching.
   */
  readonly token?: TokenCredentials['token'];

  /**
   * authorize - A partial override for outbound bot/app token resolution.
   * The request is a discriminated union by auth kind. Return a token string
   * to handle the request, null to handle with no token, or undefined to use
   * the default TokenManager behavior.
   */
  readonly authorize?: Authorize;

  /**
   * managed identity client id - A managed identity client id.
   * Uses environment variable MANAGED_IDENTITY_CLIENT_ID if not explicitly provided
   * If:
   *   - Same as client id, uses User Managed Identity for auth
   *   - "system", uses System Managed Identity in a Federated Identity Credentials
   *   - Different from client id or system, uses UMI in a Federated Identity Credentials
   */
  managedIdentityClientId?: 'system' | (string & {});

  /**
   * http client or client options used to make api requests
   */
  readonly client?: HttpClient | HttpClientOptions | (() => HttpClient);

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
   * HTTP server adapter for handling bot requests
   */
  readonly httpServerAdapter?: IHttpServerAdapter;

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
   * URL path for the Teams messaging endpoint
   * @default '/api/messages'
   */
  readonly messagingEndpoint?: `/${string}`;

  /**
   * Base Service URL for BotBackend
   * Uses environment variable SERVICE_URL  if not provided
   * and defaults to https://smba.trafficmanager.net/teams
   */
  readonly serviceUrl?: string;

  /**
   * API client settings used for overriding.
   */
  readonly apiClientSettings?: ApiClientSettings;

  /**
   * Cloud environment for sovereign cloud support.
   * Accepts a CloudEnvironment object or uses CLOUD environment variable.
   * Valid env var values: "Public", "USGov", "USGovDoD", "China".
   * Defaults to PUBLIC (commercial cloud).
   */
  readonly cloud?: CloudEnvironment;
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

/**
 * The orchestrator for receiving/sending activities
 */
export class App<TPlugin extends IPlugin = IPlugin> {
  private readonly core: Core;
  readonly log: ILogger;
  readonly http?: HttpPlugin;
  readonly storage: IStorage;
  readonly entraTokenValidator?: middleware.JwtValidator;

  get api(): ApiClient {
    return this.core.api;
  }

  get graph(): GraphClient {
    return this.core.graph;
  }

  get cloud(): CloudEnvironment {
    return this.core.cloud;
  }

  get server(): HttpServer {
    return this.core.server;
  }

  get client(): HttpClient {
    return this.core.client;
  }

  get tokenManager(): TokenManager {
    return this.core.tokenManager;
  }

  /**
   * Graph API base URL derived from the configured cloud's `graphScope`.
   * Undefined when the scope isn't a URL — `GraphClient` then uses its public-cloud default.
   * Shared across every `GraphClient` the app constructs (`app.graph`, `ctx.appGraph`, `ctx.userGraph`)
   * so sovereign customers get consistent routing.
   */
  get graphBaseUrl(): string | undefined {
    return this.core.graphBaseUrl;
  }

  /**
   * the apps credentials
   */
  get credentials() {
    return this.core.credentials;
  }

  /**
   * the apps id
   */
  get id() {
    return this.credentials?.clientId;
  }

  /**
   * the apps name
   * @deprecated Name will be removed in the near future. Please remove dependencies from it.
   */
  get name() {
    return this._manifest.name?.full;
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
        short: this._manifest.name?.short || '??',
        full: this._manifest.name?.full || '??',
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

  protected container = new Container();
  protected plugins: Array<TPlugin> = [];
  protected router = new Router<PluginAdditionalContext<TPlugin>>();
  protected tenantTokens = new LocalStorage<string>({}, { max: 20000 });
  protected events = new EventEmitter<AppEvents<TPlugin>>();
  protected isInitialized = false;
  protected port?: number | string;
  protected activitySender: ActivitySender;

  constructor(readonly options: AppOptions<TPlugin> = {}) {
    this.log = this.options.logger || new ConsoleLogger('@teams/app');
    this.storage = this.options.storage || new LocalStorage();
    this._manifest = this.options.manifest || {};

    const plugins: Array<TPlugin> = this.options.plugins || [];
    const httpPlugin = plugins.find((p) => {
      const meta = getMetadata(p);
      return meta.name === 'http';
    }) as HttpPlugin | undefined;

    if (this.options.httpServerAdapter && httpPlugin) {
      throw new Error(
        'Cannot provide both httpServerAdapter option and HttpPlugin in plugins array. ' +
        'Use either:\n' +
        '  - new App({ httpServerAdapter: new ExpressAdapter() }) (recommended)\n' +
        '  - new App({ plugins: [new HttpPlugin()] }) (deprecated)'
      );
    }

    let httpServer: HttpServer | undefined;

    if (httpPlugin) {
      this.log.warn('[DEPRECATED] HttpPlugin in plugins array will be deprecated. Use httpServerAdapter option instead:\n' +
        '  new App({ httpServerAdapter: new ExpressAdapter() })');
      this.http = httpPlugin;
      httpServer = (httpPlugin as any).asServer?.();
      if (!httpServer) {
        throw new Error('HttpPlugin.asServer() returned undefined');
      }
    }

    this.core = new Core({
      clientId: this.options.clientId,
      clientSecret: this.options.clientSecret,
      applicationIdUri: this.options.applicationIdUri,
      tenantId: this.options.tenantId,
      token: this.options.token,
      authorize: this.options.authorize,
      managedIdentityClientId: this.options.managedIdentityClientId,
      client: this.options.client,
      logger: this.log,
      httpServerAdapter: this.options.httpServerAdapter,
      httpServer,
      skipAuth: this.options.skipAuth,
      messagingEndpoint: this.options.messagingEndpoint,
      serviceUrl: this.options.serviceUrl,
      apiClientSettings: this.options.apiClientSettings,
      cloud: this.options.cloud,
      onError: (err) => this.onError({ error: err }),
    });

    this.entraTokenValidator = this.core.createEntraTokenValidator();
    this.core.setActivityHandler((event) => this.onActivity(event));

    // initialize ActivitySender for sending activities
    this.activitySender = new ActivitySender(
      (serviceUrl) => this.core.getApiClient(serviceUrl),
      this.log
    );

    // add injectable items to container
    this.container.register('id', { useValue: this.id });
    this.container.register('name', { useValue: this.name });
    this.container.register('manifest', { useValue: this.manifest });
    this.container.register('credentials', { useValue: this.credentials });
    this.container.register('botToken', { useValue: () => this.getBotToken() });
    this.container.register('ILogger', { useValue: this.log });
    this.container.register('IStorage', { useValue: this.storage });
    this.container.register('IHttpServerAdapter', { useValue: this.core.server.adapter });
    this.container.register('IHttpServer', { useValue: this.core.server });

    // Register all plugins (including HttpPlugin if using old way)
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

    this.router.register({
      name: 'signin.failure',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/failure',
      callback: ctx => this.onSignInFailure(ctx),
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
   * initialize the app.
   */
  async initialize() {
    if (this.isInitialized) {
      return;
    }

    // initialize plugins
    for (const plugin of this.plugins) {
      this.inject(plugin);

      if (plugin.onInit) {
        await plugin.onInit();
      }
    }

    // initialize Core
    await this.core.initialize();

    this.isInitialized = true;
  }

  /**
   * start the server after initialization
   * @param port port to listen on
   */
  async start(port?: number | string) {
    this.port = port || process.env.PORT || 3978;

    try {
      await this.initialize();

      // Start plugins
      for (const plugin of this.plugins) {
        if (plugin.onStart) {
          await plugin.onStart({ port: this.port });
        }
      }
      this.events.emit('start', this.log);

      // Start Core
      await this.core.start(this.port);
    } catch (error: any) {
      await this.stop();
      this.onError({ error });
    }
  }

  /**
   * stop the app
   */
  async stop() {
    try {
      // Stop plugins
      for (const plugin of this.plugins) {
        if (plugin.onStop) {
          await plugin.onStop();
        }
      }

      // Stop Core
      await this.core.stop();
    } catch (error: any) {
      this.onError({ error });
    }
  }

  /**
   * send an activity proactively to a conversation.
   *
   * Sends to the exact conversation ID provided. For channel threads,
   * the conversation ID must include `;messageid=` - use {@link toThreadedConversationId}
   * to construct it, or use {@link reply} which handles this automatically.
   *
   * @param conversationId the conversation to send to
   * @param activity the activity to send
   */
  async send(conversationId: string, activity: ActivityLike) {
    if (!this.id) {
      throw new Error('App has no credentials set up');
    }

    const params = toActivityParams(activity);

    const ref: ConversationReference = {
      channelId: 'msteams',
      serviceUrl: this.api.serviceUrl,
      bot: {
        id: this.id,
        name: this.name || this.id,
        role: 'bot',
      },
      conversation: {
        id: conversationId,
      } as ConversationReference['conversation'],
    };

    const res = await this.activitySender.send(params, ref);
    return res;
  }

  /**
   * send an activity proactively as a threaded reply.
   *
   * Constructs a threaded conversation ID from the conversation ID
   * and message ID via {@link toThreadedConversationId}, then sends
   * to that thread. The service determines whether threading is
   * supported for the given conversation type.
   *
   * @param conversationId the conversation ID
   * @param messageId the thread root message ID
   * @param activity the activity to send
   */
  async reply(conversationId: string, messageId: string, activity: ActivityLike): Promise<any>;
  /**
   * send an activity proactively to a conversation.
   *
   * Sends to the exact conversation ID provided - threaded if
   * it contains `;messageid=`, flat otherwise.
   *
   * @param conversationId the conversation to send to
   * @param activity the activity to send
   */
  async reply(conversationId: string, activity: ActivityLike): Promise<any>;
  async reply(conversationId: string, messageId: string | ActivityLike, activity?: ActivityLike) {
    if (typeof messageId === 'string' && activity !== undefined) {
      return this.send(toThreadedConversationId(conversationId, messageId), activity);
    }

    return this.send(conversationId, messageId as ActivityLike);
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
  protected onSignInFailure = onSignInFailure; // eslint-disable-line @typescript-eslint/member-ordering

  ///
  /// Events
  ///

  protected inject = inject; // eslint-disable-line @typescript-eslint/member-ordering
  protected onError = onError; // eslint-disable-line @typescript-eslint/member-ordering
  protected onActivitySent = onActivitySent; // eslint-disable-line @typescript-eslint/member-ordering
  protected onActivityResponse = onActivityResponse; // eslint-disable-line @typescript-eslint/member-ordering

  async onActivity(
    event: IActivityEvent
  ): Promise<InvokeResponse> {
    this.events.emit('activity', event);
    return await this.process(event);
  }

  ///
  /// Token
  ///

  protected async getBotToken() {
    return (await this.core.getBotToken()) ?? null;
  }

  protected async getUserToken(
    channelId: ChannelID,
    userId: string
  ) {
    return await this.core.getUserToken(channelId, userId, this.oauth.defaultConnectionName);
  }

  protected async getAppGraphToken(tenantId?: string) {
    return (await this.core.getAppGraphToken(tenantId)) ?? null;
  }
}
