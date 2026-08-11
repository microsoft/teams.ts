import { AxiosError } from 'axios';

import {
  Activity,
  ActivityLike,
  AgenticIdentity,
  ApiClientSettings,
  CloudEnvironment,
  ConversationReference,
  DeprecatedInputActivity,
  cloudFromName,
  InvokeResponse,
  PUBLIC,
  SentActivity,
  StripMentionsTextOptions,
  toActivityParams,
  TokenProvider,
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
import {
  type IAgent365BaggageOptions
} from './diagnostics/agent365-baggage';
import { IActivityEvent } from './events';
import { ExpressAdapter, IHttpServerAdapter, IHttpServer } from './http';
import { HttpServer } from './http/http-server';
import * as middleware from './middleware';
import { RemoteFunctionValidator } from './middleware/auth/remote-function-validator';
import { DEFAULT_OAUTH_SETTINGS, OAuthSettings } from './oauth';
import { HttpPlugin } from './plugins';
import { Router } from './router';
import { IRoutes } from './routes';
import { IServer, IServerInitializeDeps } from './server';
import { DEFAULT_TENANT_FOR_GRAPH_TOKEN, TokenManager } from './token-manager';
import { AppTokenProvider, IAppTokenProvider } from './token-provider';
import { AppEvents, IPlugin, PluginName, RouteHandler } from './types';
import { PluginAdditionalContext } from './types/app-routing';
import { getBooleanEnvValue } from './utils/env';
import { toThreadedConversationId } from './utils/thread';

function isAppSendOptions(value: ActivityLike | DeprecatedInputActivity | AppSendOptions): value is AppSendOptions {
  if (typeof value === 'string') return false;
  return !('type' in value);
}

function isHttpServer(server: IServer): server is IHttpServer {
  return (
    typeof (server as Partial<IHttpServer>).registerRoute === 'function' &&
    typeof (server as Partial<IHttpServer>).serveStatic === 'function'
  );
}

/**
 * Options for proactive app sends and replies.
 */
export type AppSendOptions = {
  /**
   * Agentic identity scope to use when acquiring tokens for this send.
   */
  readonly agenticIdentity?: AgenticIdentity;
};

/**
 * Options for creating an Agent 365 operation identity from app configuration.
 */
export type AppGetAgenticIdentityOptions = {
  /**
   * ID of the agentic app represented by this identity, when available/needed.
   * Omit or use `null` for blueprint-level scopes.
   */
  readonly agenticAppId?: string | null;

  /**
   * Entra object ID of the user-backed agentic identity, when the operation
   * acts on behalf of a user. Omit or use `null` for app-backed or
   * blueprint-level scopes.
   */
  readonly agenticUserId?: string | null;

  /**
   * Tenant ID for token acquisition. Defaults to the app's resolved credentials
   * or configured `tenantId`.
   */
  readonly tenantId?: string;

  /**
   * ID of the Agentic App Blueprint that backs the agentic app. Defaults to the
   * app client ID resolved from credentials/configuration.
   */
  readonly agenticAppBlueprintId?: string;
};

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
   * An override to perform token fetching yourself, instead of letting the SDK
   * acquire tokens from `clientSecret` or a managed identity.
   *
   * Pass a function — `(scope, tenantId?) => string` — if the app only ever
   * authenticates as itself, or an object implementing `ITokenProvider` if it
   * also acts with an AgenticIdentity.
   */
  readonly token?: TokenProvider;

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
   * API client settings used for overriding (e.g. oauthUrl).
   * Cloud, tokenProvider, and agenticIdentity are managed internally.
   */
  readonly apiClientSettings?: Pick<ApiClientSettings, 'oauthUrl'>;

  /**
   * Cloud environment for sovereign cloud support.
   * Accepts a CloudEnvironment object or uses CLOUD environment variable.
   * Valid env var values: "Public", "USGov", "USGovDoD", "China".
   * Defaults to PUBLIC (commercial cloud).
   */
  readonly cloud?: CloudEnvironment;

  /**
   * Telemetry settings.
   */
  readonly telemetry?: AppTelemetryOptions;
};

/**
 * Telemetry settings applied across every flow the SDK owns.
 */
export type AppTelemetryOptions = {
  /**
   * Configures the Agent365 baggage the SDK derives from inbound activities.
   *
   * Identifier-only baggage (tenant, conversation, channel, agent, and caller
   * ids) is populated by default; personal-data fields require an explicit
   * `include` entry. Pass `false` to disable the bridge entirely.
   *
   * This covers only the inbound flow. Proactive work should open its own scope
   * with `createAgent365Scope`, which takes the same options.
   */
  readonly agent365?: IAgent365BaggageOptions | false;
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
  readonly server: IServer;
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

  /**
   * the apps credentials
   */
  get credentials() {
    return this.tokenManager.credentials;
  }

  /**
   * The app's token source, for acquiring a token for something the SDK does not
   * call for you, such as an OpenTelemetry exporter.
   */
  get tokenProvider(): IAppTokenProvider {
    return this._tokenProvider;
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

  /**
   * The concrete token machinery: MSAL clients, credential resolution, and the
   * per-grant acquisition logic. Private because {@link App.tokenProvider} is
   * the supported way in.
   */
  private readonly tokenManager: TokenManager;

  private readonly _tokenProvider: AppTokenProvider;

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
      this.client.clone({ token: async () => (await this.getAppGraphToken()) ?? undefined }),
      { baseUrlRoot: this.graphBaseUrl }
    );

    this.tokenManager = new TokenManager({
      clientId: this.options.clientId,
      clientSecret: this.options.clientSecret,
      tenantId: this.options.tenantId,
      token: this.options.token,
      managedIdentityClientId: this.options.managedIdentityClientId,
      cloud: this.cloud,
    }, this.log);
    this._tokenProvider = new AppTokenProvider(this.tokenManager, this.cloud);

    const serviceUrl = (this.options.serviceUrl ?? process.env.SERVICE_URL ??
      'https://smba.trafficmanager.net/teams').replace(/\/+$/, '');
    const settings: Partial<ApiClientSettings> = {
      ...this.options.apiClientSettings,
      cloud: this.cloud,
      tokenProvider: this.tokenProvider,
    };
    this.api = new ApiClient(
      serviceUrl,
      this.client.clone(),
      settings
    );

    // initialize ActivitySender for sending activities
    this.activitySender = new ActivitySender(
      this.log,
      (senderServiceUrl, agenticIdentity) => this.api.clone({
        serviceUrl: senderServiceUrl,
        agenticIdentity,
      }),
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
      getAppGraphToken: (tenantId) => this.getAppGraphToken(tenantId),
      activitySender: this.activitySender,
      api: this.api,
      client: this.client,
      storage: this.storage,
      log: this.log,
      getId: () => this.id,
      getConnectionName: () => this.oauth.defaultConnectionName,
      shouldFetchUserToken: () => this.shouldFetchUserToken(),
      apiClientSettings: this.options.apiClientSettings,
      graphBaseUrl: this.graphBaseUrl,
      agent365Baggage: this.options.telemetry?.agent365,
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
    this.container.register('IServer', { useValue: server });

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
      callback: ctx => this.oauthHandlers.onTokenExchange(ctx) as unknown as Promise<void>,
    });

    this.router.register({
      name: 'signin.verify-state',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/verifyState',
      callback: ctx => this.oauthHandlers.onVerifyState(ctx) as unknown as Promise<void>,
    });

    this.router.register({
      name: 'signin.failure',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/failure',
      callback: ctx => this.oauthHandlers.onSignInFailure(ctx) as unknown as Promise<void>,
    });

    this.event('error', ({ error }: any) => {
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
    const serverDeps: IServerInitializeDeps = {
      credentials: this.credentials,
      cloud: this.cloud,
    };
    await this.server.initialize(serverDeps);

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
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async send(conversationId: string, activity: DeprecatedInputActivity, options?: AppSendOptions): Promise<SentActivity>;
  async send(conversationId: string, activity: ActivityLike, options?: AppSendOptions): Promise<SentActivity>;
  async send(
    conversationId: string,
    activity: ActivityLike | DeprecatedInputActivity,
    options?: AppSendOptions
  ): Promise<SentActivity>;
  async send(
    conversationId: string,
    activity: ActivityLike | DeprecatedInputActivity,
    options?: AppSendOptions
  ) {
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

    const res = await this.activitySender.send(
      params,
      ref,
      options?.agenticIdentity ? { agenticIdentity: options.agenticIdentity } : undefined,
    );
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
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(conversationId: string, messageId: string, activity: DeprecatedInputActivity, options?: AppSendOptions): Promise<any>;
  async reply(conversationId: string, messageId: string, activity: ActivityLike, options?: AppSendOptions): Promise<any>;
  async reply(
    conversationId: string,
    messageId: string,
    activity: ActivityLike | DeprecatedInputActivity,
    options?: AppSendOptions
  ): Promise<any>;
  /**
   * send an activity proactively to a conversation.
   *
   * Sends to the exact conversation ID provided - threaded if
   * it contains `;messageid=`, flat otherwise.
   *
   * @param conversationId the conversation to send to
   * @param activity the activity to send
   */
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(conversationId: string, activity: DeprecatedInputActivity, options?: AppSendOptions): Promise<any>;
  async reply(conversationId: string, activity: ActivityLike, options?: AppSendOptions): Promise<any>;
  async reply(conversationId: string, activity: ActivityLike | DeprecatedInputActivity, options?: AppSendOptions): Promise<any>;
  async reply(
    conversationId: string,
    messageId: string | ActivityLike | DeprecatedInputActivity,
    activity?: ActivityLike | DeprecatedInputActivity | AppSendOptions,
    options?: AppSendOptions
  ) {
    if (typeof messageId === 'string' && activity !== undefined && !isAppSendOptions(activity)) {
      return this.send(toThreadedConversationId(conversationId, messageId), activity, options);
    }

    const opts = activity && isAppSendOptions(activity) ? activity : options;
    return this.send(conversationId, messageId as ActivityLike | DeprecatedInputActivity, opts);
  }

  /**
   * Create an AgenticIdentity for scoped proactive sends and API clients.
   *
   * AgenticIdentity is the SDK operation/request scope for Agent 365. This
   * helper fills the required blueprint and tenant identifiers from app
   * configuration while allowing app/user IDs to be omitted or set to `null`
   * when the operation is not scoped to a concrete agentic app or user.
   *
   * @param options identity fields and optional overrides
   */
  getAgenticIdentity(options: AppGetAgenticIdentityOptions = {}): AgenticIdentity {
    const tenantId = options.tenantId ?? this.credentials?.tenantId ?? this.options.tenantId;
    if (!tenantId) {
      throw new Error('tenantId is required to get an AgenticIdentity');
    }
    const agenticAppBlueprintId = options.agenticAppBlueprintId ?? this.id;
    if (!agenticAppBlueprintId) {
      throw new Error('agenticAppBlueprintId is required to get an AgenticIdentity');
    }

    return {
      agenticAppBlueprintId,
      agenticAppId: options.agenticAppId,
      agenticUserId: options.agenticUserId,
      tenantId,
    };
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

    if (!isHttpServer(this.server)) {
      throw new Error('app.function() requires an HTTP server transport.');
    }

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
    if (!isHttpServer(this.server)) {
      throw new Error('app.tab() requires an HTTP server transport.');
    }

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
    return await this.tokenProvider.getAppToken();
  }

  protected async getAppGraphToken(tenantId?: string) {
    // Graph falls back to the `common` tenant rather than the cloud's login
    // tenant, so the tenant is resolved here instead of letting the provider
    // apply its own default.
    return await this.tokenProvider.getAppToken(
      this.cloud.graphScope,
      tenantId || this.credentials?.tenantId || DEFAULT_TENANT_FOR_GRAPH_TOKEN
    );
  }

  /**
   * whether to eagerly look up the user's OAuth token on every inbound activity.
   * an explicit `oauth.fetchUserToken` wins; otherwise it is auto-detected, enabled
   * only when an OAuth connection is explicitly configured, so apps that never use
   * user OAuth do not pay for a wasted token request on every turn.
   */
  protected shouldFetchUserToken(): boolean {
    const explicit = this.options.oauth?.fetchUserToken;
    if (explicit !== undefined) {
      return explicit;
    }
    return this.options.oauth?.defaultConnectionName !== undefined;
  }
}
