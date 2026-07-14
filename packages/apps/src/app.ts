import { AxiosError } from 'axios';

import {
  Activity,
  ActivityLike,
  ApiClientSettings,
  CloudEnvironment,
  ConversationReference,
  cloudFromName,
  InvokeResponse,
  PUBLIC,
  StripMentionsTextOptions,
  toActivityParams,
  TokenCredentials,
} from '@microsoft/teams.api';
import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions,
  ConsoleLogger,
  EventEmitter,
  EventHandler,
  ILogger,
  IStorage,
  LocalStorage
} from '@microsoft/teams.common';

import pkg from '../package.json';

import { ActivitySender } from './activity-sender';
import { ApiClient, GraphClient } from './api';

import { EventManager } from './app.events';
import { OauthHandlers } from './app.oauth';
import { PluginManager } from './app.plugins';
import { ActivityProcessor } from './app.process';
import { Container } from './container';
import { IActivityContext, FunctionContext, IFunctionContext } from './contexts';
import { IActivityEvent } from './events';
import { ExpressAdapter, IHttpServerAdapter } from './http';
import { HttpServer } from './http/http-server';
import * as middleware from './middleware';
import { RemoteFunctionValidator } from './middleware/auth/remote-function-validator';
import { DEFAULT_OAUTH_SETTINGS, OAuthSettings } from './oauth';
import { HttpPlugin } from './plugins';
import { Router } from './router';
import { IRoutes } from './routes';
import { TokenManager } from './token-manager';
import { AppEvents, IPlugin, PluginName, RouteHandler } from './types';
import { PluginAdditionalContext } from './types/app-routing';
import { getBooleanEnvValue } from './utils/env';
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
   * Activity Options
   */
  readonly activity?: AppActivityOptions;

  /**
   * Dangerously allow incoming HTTP requests without Teams service token validation.
   * Uses environment variable DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS if not explicitly provided.
   */
  readonly dangerouslyAllowUnauthenticatedRequests?: boolean;

  /**
   * @deprecated Use dangerouslyAllowUnauthenticatedRequests instead.
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
  readonly api: ApiClient;
  readonly cloud: CloudEnvironment;
  readonly graph: GraphClient;
  readonly log: ILogger;
  readonly server: HttpServer;
  readonly http?: HttpPlugin;
  readonly client: HttpClient;
  readonly storage: IStorage;
  readonly entraTokenValidator?: middleware.JwtValidator;

  /**
   * Graph API base URL derived from the configured cloud's `graphScope`.
   * Undefined when the scope isn't a URL — `GraphClient` then uses its public-cloud default.
   * Shared across every `GraphClient` the app constructs (`app.graph`, `ctx.appGraph`, `ctx.userGraph`)
   * so sovereign customers get consistent routing.
   */
  readonly graphBaseUrl?: string;

  protected readonly tokenManager: TokenManager;

  /**
   * the apps credentials
   */
  get credentials() {
    return this.tokenManager.credentials;
  }

  /**
   * the apps id
   */
  get id() {
    return this.credentials?.clientId;
  }

  get oauth() {
    return {
      ...DEFAULT_OAUTH_SETTINGS,
      ...this.options.oauth,
    };
  }

  protected container = new Container();
  protected pluginManager: PluginManager<TPlugin>;
  protected router = new Router<PluginAdditionalContext<TPlugin>>();
  protected tenantTokens = new LocalStorage<string>({}, { max: 20000 });
  protected events = new EventEmitter<AppEvents<TPlugin>>();
  protected isInitialized = false;
  protected port?: number | string;
  protected activitySender: ActivitySender;

  private eventManager!: EventManager<TPlugin>;
  private activityProcessor!: ActivityProcessor<TPlugin>;
  private oauthHandlers!: OauthHandlers<TPlugin>;

  private readonly _userAgent = `teams.ts[apps]/${pkg.version}`;

  constructor(readonly options: AppOptions<TPlugin> = {}) {
    this.log = this.options.logger || new ConsoleLogger('@teams/app');
    this.storage = this.options.storage || new LocalStorage();

    // Resolve cloud environment from options or CLOUD env var
    const cloudEnvName = typeof process !== 'undefined' ? process.env.CLOUD : undefined;
    this.cloud = this.options.cloud ?? (cloudEnvName ? cloudFromName(cloudEnvName) : PUBLIC);

    if (!options.client) {
      this.client = new HttpClient({
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
      this.client = new HttpClient(options.client).clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    }

    const serviceUrl = (this.options.serviceUrl ?? process.env.SERVICE_URL ??
      'https://smba.trafficmanager.net/teams').replace(/\/+$/, '');
    this.api = new ApiClient(
      serviceUrl,
      this.client.clone({ token: () => this.getBotToken() }),
      this.options.apiClientSettings,
      this.cloud
    );

    // Derive Graph API base URL from the cloud's graphScope (e.g. "https://graph.microsoft.us/.default"
    // -> "https://graph.microsoft.us"). Falls back to the public Graph endpoint inside GraphClient if
    // the scope isn't a URL (custom delegated scope, empty, etc.).
    const graphUrlMatch = /^(https?:\/\/[^/]+)/i.exec((this.cloud.graphScope ?? '').trim());
    this.graphBaseUrl = graphUrlMatch?.[1];
    if (!this.graphBaseUrl && this.cloud.graphScope) {
      this.log.warn(
        `graphScope "${this.cloud.graphScope}" is not a URL; Graph calls will route to the public cloud. ` +
        'Set graphScope to an "https://<host>/.default" value to route to the correct Graph endpoint.'
      );
    }
    this.graph = new GraphClient(
      this.client.clone({ token: () => this.getAppGraphToken() }),
      { baseUrlRoot: this.graphBaseUrl }
    );

    // initialize TokenManager with credentials
    this.tokenManager = new TokenManager({
      clientId: this.options.clientId,
      clientSecret: this.options.clientSecret,
      tenantId: this.options.tenantId,
      token: this.options.token,
      managedIdentityClientId: this.options.managedIdentityClientId,
      cloud: this.cloud,
    }, this.log);

    // initialize ActivitySender for sending activities
    this.activitySender = new ActivitySender(
      this.client.clone({ token: () => this.getBotToken() }),
      this.log
    );

    // initialize the activity pipeline collaborators. App owns these and passes
    // in what they need (rather than them reaching into App via `this`), which
    // keeps the primitives above private.
    this.pluginManager = new PluginManager<TPlugin>({
      container: this.container,
      log: this.log,
      handlers: {
        onError: (event) => this.eventManager.onError(event),
        onActivity: (event) => this.onActivity(event),
        emit: (name, event) => this.events.emit(name as any, event),
      },
    });
    this.eventManager = new EventManager<TPlugin>(this.events, this.pluginManager.plugins);
    this.oauthHandlers = new OauthHandlers<TPlugin>(
      () => this.oauth.defaultConnectionName,
      this.client,
      this.events,
      this.graphBaseUrl
    );
    this.activityProcessor = new ActivityProcessor<TPlugin>({
      router: this.router,
      plugins: this.pluginManager.plugins,
      eventManager: this.eventManager,
      tokenManager: this.tokenManager,
      activitySender: this.activitySender,
      api: this.api,
      client: this.client,
      storage: this.storage,
      log: this.log,
      getId: () => this.id,
      getConnectionName: () => this.oauth.defaultConnectionName,
      apiClientSettings: this.options.apiClientSettings,
      graphBaseUrl: this.graphBaseUrl,
    });

    if (this.credentials?.clientId) {
      this.entraTokenValidator = middleware.createEntraTokenValidator(
        this.credentials.tenantId || 'common',
        this.credentials.clientId,
        { applicationIdUri: this.options.applicationIdUri, loginEndpoint: this.cloud.loginEndpoint, logger: this.log }
      );
    }

    // Determine HTTP server
    const plugins: Array<TPlugin> = this.options.plugins || [];
    const httpPlugin = PluginManager.findHttpPlugin(plugins) as HttpPlugin | undefined;

    // Error if both httpServerAdapter and http plugin are provided
    if (this.options.httpServerAdapter && httpPlugin) {
      throw new Error(
        'Cannot provide both httpServerAdapter option and HttpPlugin in plugins array. ' +
        'Use either:\n' +
        '  - new App({ httpServerAdapter: new ExpressAdapter() }) (recommended)\n' +
        '  - new App({ plugins: [new HttpPlugin()] }) (deprecated)'
      );
    }
    let server: HttpServer;
    let dangerouslyAllowUnauthenticatedRequests = this.options.dangerouslyAllowUnauthenticatedRequests;
    if (dangerouslyAllowUnauthenticatedRequests === undefined && this.options.skipAuth !== undefined) {
      this.log.warn(
        '[DEPRECATED] skipAuth is deprecated. Use dangerouslyAllowUnauthenticatedRequests instead.'
      );
      dangerouslyAllowUnauthenticatedRequests = this.options.skipAuth;
    }
    if (dangerouslyAllowUnauthenticatedRequests === undefined) {
      const unauthenticatedRequestsEnvValue = getBooleanEnvValue('DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS');
      if (unauthenticatedRequestsEnvValue !== undefined) {
        this.log.warn(
          'DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS is set. ' +
          'Unauthenticated request behavior is configured by the environment.'
        );
        dangerouslyAllowUnauthenticatedRequests = unauthenticatedRequestsEnvValue;
      }
    }
    dangerouslyAllowUnauthenticatedRequests ??= false;

    // HttpPlugin in plugins array (backwards compatibility)
    if (httpPlugin) {
      this.log.warn('[DEPRECATED] HttpPlugin in plugins array will be deprecated. Use httpServerAdapter option instead:\n' +
        '  new App({ httpServerAdapter: new ExpressAdapter() })');
      this.http = httpPlugin;
      // Extract internal server and always set this.server
      server = (httpPlugin as any).asServer?.();
      if (!server) {
        throw new Error('HttpPlugin.asServer() returned undefined');
      }
    } else {
      server = new HttpServer(this.options.httpServerAdapter ?? new ExpressAdapter(undefined, {
        logger: this.log,
        onError: (err) => this.eventManager.onError({ error: err })
      }), {
        dangerouslyAllowUnauthenticatedRequests,
        logger: this.log,
        messagingEndpoint: this.options.messagingEndpoint ?? '/api/messages',
      });
    }

    // Always set this.server
    this.server = server;

    // Set callback for handling activities
    server.onRequest = (event) => this.onActivity(event);

    // add injectable items to container
    this.container.register('ILogger', { useValue: this.log });
    this.container.register('IStorage', { useValue: this.storage });

    // Register HTTP server for plugins that need HTTP capabilities
    this.container.register('IHttpServer', { useValue: server });

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
      callback: ctx => this.oauthHandlers.onTokenExchange(ctx),
    });

    this.router.register({
      name: 'signin.verify-state',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/verifyState',
      callback: ctx => this.oauthHandlers.onVerifyState(ctx),
    });

    this.router.register({
      name: 'signin.failure',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/failure',
      callback: ctx => this.oauthHandlers.onSignInFailure(ctx),
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
    await this.pluginManager.init();

    // initialize server
    await this.server.initialize({
      credentials: this.credentials,
      cloud: this.cloud,
    });

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
      await this.pluginManager.start({ port: this.port });
      this.events.emit('start', this.log);

      // Start HTTP server
      await this.server.start(this.port);
    } catch (error: any) {
      await this.stop();
      this.eventManager.onError({ error });
    }
  }

  /**
   * stop the app
   */
  async stop() {
    try {
      // Stop plugins
      await this.pluginManager.stop();

      // Stop HTTP server
      await this.server.stop();
    } catch (error: any) {
      this.eventManager.onError({ error });
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
  on<Name extends keyof IRoutes>(
    name: Name,
    cb: Exclude<IRoutes<PluginAdditionalContext<TPlugin>>[Name], undefined>
  ) {
    this.router.on(name, cb);
    return this;
  }

  /**
   * subscribe to a message event for a specific pattern
   * @param pattern pattern to match against message text
   * @param cb callback to invoke
   */
  message(
    pattern: string | RegExp,
    cb: Exclude<IRoutes<PluginAdditionalContext<TPlugin>>['message'], undefined>
  ) {
    this.router.register<'message'>({
      type: 'user',
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
  use(
    cb: RouteHandler<IActivityContext<Activity, PluginAdditionalContext<TPlugin>>, void | InvokeResponse>
  ) {
    this.router.use(cb);
    return this;
  }

  /**
   * subscribe to an event
   * @param name the event to subscribe to
   * @param cb the callback to invoke
   */
  event<Name extends keyof AppEvents<TPlugin>>(name: Name, cb: EventHandler<AppEvents<TPlugin>[Name]>) {
    this.events.on(name, cb);
    return this;
  }

  /**
   * add a plugin
   * @param plugin plugin to add
   */
  plugin(plugin: TPlugin) {
    this.pluginManager.add(plugin);
    return this;
  }

  /**
   * get a plugin
   */
  getPlugin(name: PluginName): IPlugin | undefined {
    return this.pluginManager.get(name);
  }

  /**
   * add/update a function that can be called remotely
   * @param name The unique function name
   * @param cb The callback to handle the function
   */
  function<TData>(
    name: string,
    cb: (context: IFunctionContext<TData>) => any | Promise<any>
  ): this;
  function<TPluginOverride, TData>(
    name: string,
    cb: (context: IFunctionContext<TData>) => any | Promise<any>
  ): this;
  function<TData>(
    name: string,
    cb: (context: IFunctionContext<TData>) => any | Promise<any>
  ) {
    const log = this.log.child('functions').child(name);

    // Create the remote function validator once
    const validator = this.entraTokenValidator
      ? new RemoteFunctionValidator(this.entraTokenValidator, log)
      : null;

    this.server.registerRoute('POST', `/api/functions/${name}`, async ({ body, headers }) => {
      // Validate JWT token and extract context
      if (!validator) {
        log.debug('unauthorized - no token validator configured');
        return { status: 401, body: 'unauthorized' };
      }

      const context = await validator.check(headers);
      if (!context) {
        return { status: 401, body: 'unauthorized' };
      }

      const ctx = new FunctionContext<TData>({
        ...context,
        log,
        api: this.api,
        appGraph: this.graph,
        data: body as TData,
        activitySender: this.activitySender,
        botId: this.id,
      });

      const data = await cb(ctx);
      return { status: 200, body: data };
    });

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
  tab(name: string, path: string) {
    this.server.serveStatic(`/tabs/${name}`, path);

    return this;
  }

  /**
   * activity handler called when an inbound activity is received
   * @param event the received activity event
   */
  process(event: IActivityEvent): Promise<InvokeResponse> {
    return this.activityProcessor.process(event);
  }

  async onActivity(
    event: IActivityEvent
  ): Promise<InvokeResponse> {
    this.eventManager.onActivity(event);
    return await this.process(event);
  }

  ///
  /// Token
  ///

  protected async getBotToken() {
    if (!this.tokenManager) return;
    return await this.tokenManager.getBotToken();
  }

  protected async getAppGraphToken(tenantId?: string) {
    if (!this.tokenManager) return;
    return await this.tokenManager.getGraphToken(tenantId);
  }
}
