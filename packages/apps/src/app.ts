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
  toActivityParams,
} from '@microsoft/teams.api';
import {
  Client as HttpClient,
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

import type {
  AppGetAgenticIdentityOptions,
  AppOptions,
  AppSendOptions,
} from './app.options';
export type {
  AppActivityOptions,
  AppGetAgenticIdentityOptions,
  AppOptions,
  AppSendOptions,
  AppTelemetryOptions,
} from './app.options';
import { PluginManager } from './app.plugins';
import { ActivityProcessor } from './app.process';
import { Container } from './container';
import { IActivityContext, FunctionContext, IFunctionContext } from './contexts';
import { IActivityEvent } from './events';
import { ExpressAdapter } from './http';
import { HttpServer } from './http/http-server';
import * as middleware from './middleware';
import { RemoteFunctionValidator } from './middleware/auth/remote-function-validator';
import { DEFAULT_OAUTH_SETTINGS, OAuthFlow } from './oauth';
import type { OAuthSignInOptions } from './oauth';
import { OAuthFlowRegistry } from './oauth/registry';
import { HttpPlugin } from './plugins';
import { Router } from './router';
import { IRoutes } from './routes';
import { createStateLoader, TurnStateLoader } from './state';
import { createOAuthStateLoader } from './state/loader';
import { DEFAULT_TENANT_FOR_GRAPH_TOKEN, TokenManager } from './token-manager';
import { AppTokenProvider, IAppTokenProvider } from './token-provider';
import { AppEvents, IPlugin, PluginName, RouteHandler } from './types';
import { PluginAdditionalContext } from './types/app-routing';
import { getBooleanEnvValue } from './utils/env';
import { parseLegacyThreadedConversationId } from './utils/thread';

function isAppSendOptions(value: ActivityLike | DeprecatedInputActivity | AppSendOptions): value is AppSendOptions {
  if (typeof value === 'string') return false;
  return !('type' in value);
}

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
  /**
   * The app's legacy shared storage instance.
   *
   * @deprecated Use `ctx.state` for turn state. Applications that need general
   * persistence should own and use their storage provider directly.
   */
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
  private stateLoader?: TurnStateLoader;

  private eventManager!: EventManager<TPlugin>;
  private activityProcessor!: ActivityProcessor<TPlugin>;
  private readonly oauthFlowRegistry: OAuthFlowRegistry<TPlugin>;

  private readonly _userAgent = `teams.ts[apps]/${pkg.version}`;

  constructor(readonly options: AppOptions<TPlugin> = {}) {
    this.log = this.options.logger || new ConsoleLogger('@teams/app');
    this.storage = this.options.storage || new LocalStorage();
    const hasConfiguredOAuthFlows = (this.options.oauthFlows?.length ?? 0) > 0;
    if (
      hasConfiguredOAuthFlows &&
      this.options.oauth?.defaultConnectionName !== undefined
    ) {
      throw new Error(
        'oauth.defaultConnectionName cannot be combined with registered OAuth flows. ' +
        'Remove defaultConnectionName and name the connection when calling OAuth helpers.'
      );
    }
    this.stateLoader = createStateLoader(
      this.options.state,
      this.log
    );

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
    this.activityProcessor = new ActivityProcessor<TPlugin>({
      router: this.router,
      plugins: this.pluginManager.plugins,
      eventManager: this.eventManager,
      getAppGraphToken: (tenantId) => this.getAppGraphToken(tenantId),
      activitySender: this.activitySender,
      api: this.api,
      client: this.client,
      storage: this.storage,
      getStateLoader: () => this.stateLoader,
      log: this.log,
      getId: () => this.id,
      getConnectionName: () => this.oauth.defaultConnectionName,
      shouldFetchUserToken: () => this.shouldFetchUserToken(),
      validateOAuthConnection: (connectionName, connectionNameProvided) =>
        this.oauthFlowRegistry.validate(connectionName, connectionNameProvided),
      onOAuthSignInInitiated: (context, connectionName, supportsSso) =>
        this.oauthFlowRegistry.recordPending(
          context,
          connectionName,
          supportsSso
        ),
      getOAuthConnectionStatus: context =>
        this.oauthFlowRegistry.getConnectionStatus(context),
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

    this.oauthFlowRegistry = new OAuthFlowRegistry({
      defaultConnectionName: hasConfiguredOAuthFlows
        ? undefined
        : this.oauth.defaultConnectionName,
      router: this.router,
      client: this.client,
      events: this.events,
      graphBaseUrl: this.graphBaseUrl,
    });
    for (const connectionName of this.options.oauthFlows ?? []) {
      this.addOAuthFlow(connectionName);
    }

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
   * A valid legacy `;messageid={rootId}` suffix is translated to the Bot Framework
   * reply endpoint for compatibility. Prefer {@link reply} for new threaded sends.
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

    const legacyThread = parseLegacyThreadedConversationId(conversationId);
    const params = toActivityParams(activity);
    const ref: ConversationReference = {
      channelId: 'msteams',
      serviceUrl: this.api.serviceUrl,
      bot: {
        id: this.id,
        role: 'bot',
      },
      conversation: {
        id: legacyThread?.conversationId ?? conversationId,
      } as ConversationReference['conversation'],
    };
    const senderOptions = options?.agenticIdentity || legacyThread
      ? {
        agenticIdentity: options?.agenticIdentity,
        rootMessageId: legacyThread?.rootMessageId,
      }
      : undefined;

    return senderOptions
      ? this.activitySender.send(params, ref, senderOptions)
      : this.activitySender.send(params, ref);
  }

  /**
   * send an activity proactively as a threaded reply.
   *
   * Uses the Bot Framework reply endpoint to place the activity under
   * the supplied thread root.
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
   * Preserves the compatibility overload that accepts either a flat conversation
   * ID or a legacy threaded conversation ID.
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
      if (!this.id) {
        throw new Error('App has no credentials set up');
      }
      if (!conversationId) {
        throw new Error('conversationId must be a non-empty string');
      }
      if (!messageId || !/^\d+$/.test(messageId) || messageId === '0') {
        throw new Error(
          `Invalid messageId "${messageId}": must be a non-zero numeric value`
        );
      }

      const ref: ConversationReference = {
        channelId: 'msteams',
        serviceUrl: this.api.serviceUrl,
        bot: {
          id: this.id,
          role: 'bot',
        },
        conversation: {
          id: conversationId.split(';')[0],
        } as ConversationReference['conversation'],
      };

      return this.activitySender.send(toActivityParams(activity), ref, {
        agenticIdentity: options?.agenticIdentity,
        rootMessageId: messageId,
      });
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
   * Registers an OAuth flow for one Bot Framework OAuth connection.
   *
   * Connection names are matched case-insensitively. Registering the same
   * connection more than once throws. The first registration removes
   * the implicit legacy default. This method cannot be used when
   * `oauth.defaultConnectionName` was configured.
   *
   * @param connectionName OAuth connection name.
   * @param options Optional card defaults for the flow.
   * @returns The registered flow so callbacks can be chained.
   */
  addOAuthFlow(
    connectionName: string,
    options: OAuthSignInOptions = {}
  ): OAuthFlow<TPlugin> {
    if (this.options.oauth?.defaultConnectionName !== undefined) {
      throw new Error(
        'oauth.defaultConnectionName cannot be combined with registered OAuth flows. ' +
        'Remove defaultConnectionName and name the connection when calling OAuth helpers.'
      );
    }

    const flow = new OAuthFlow<TPlugin>(connectionName, options);
    this.enableOAuthState();
    this.oauthFlowRegistry.add(flow);
    return flow;
  }

  /**
   * Gets the OAuth flow for a connection.
   *
   * The implicit legacy default is available only until the first flow
   * is registered.
   *
   * @param connectionName Connection to resolve.
   * @throws When the connection name is blank or no matching flow is registered.
   */
  getOAuthFlow(connectionName: string): OAuthFlow<TPlugin> {
    return this.oauthFlowRegistry.get(connectionName);
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
   * whether any registered route matches the inbound activity
   *
   * Useful for hosts that embed the app behind their own pipeline (e.g. the
   * Microsoft 365 Extension and need to decide whether to hand a turn
   * to this app or let it fall through, without running the activity.
   * @param activity the inbound activity to test against registered routes
   */
  hasMatchingRoute(activity: Activity): boolean {
    return this.router.select(activity).length > 0;
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
   * Whether deprecated context OAuth fields require an eager token lookup.
   *
   * Registered flows never enable this behavior. An explicit legacy
   * `oauth.fetchUserToken` wins; otherwise lookup is enabled only when the
   * legacy default connection was explicitly configured.
   *
   * @deprecated Registered flows fetch tokens only through `OAuthFlow` methods.
   */
  protected shouldFetchUserToken(): boolean {
    const explicit = this.options.oauth?.fetchUserToken;
    if (explicit !== undefined) {
      return explicit;
    }
    return this.options.oauth?.defaultConnectionName !== undefined;
  }

  private enableOAuthState(): void {
    if (this.options.state === false || this.stateLoader) {
      return;
    }
    this.stateLoader = createOAuthStateLoader(this.log);
  }

}
