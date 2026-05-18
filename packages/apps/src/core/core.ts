import {
  ApiClientSettings,
  ChannelID,
  CloudEnvironment,
  cloudFromName,
  Credentials,
  InvokeResponse,
  JsonWebToken,
  PUBLIC,
  TokenCredentials,
} from '@microsoft/teams.api';
import { Client as GraphClient } from '@microsoft/teams.graph';
import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions,
  ConsoleLogger,
  ILogger,
} from '@microsoft/teams.common';

import pkg from '../../package.json';

import { ApiClient } from '../api';
import { IActivityEvent } from '../events';
import { ExpressAdapter, IHttpServerAdapter } from '../http';
import { HttpServer } from '../http/http-server';
import * as middleware from '../middleware';
import { Authorize, AuthorizationRequest, TokenManager } from '../token-manager';

export type CoreActivityHandler = (
  event: IActivityEvent
) => Promise<InvokeResponse>;

export type CoreOptions = {
  readonly clientId?: string;
  readonly clientSecret?: string;
  readonly applicationIdUri?: string;
  readonly tenantId?: string;
  readonly token?: TokenCredentials['token'];
  readonly authorize?: Authorize;
  managedIdentityClientId?: 'system' | (string & {});
  readonly client?: HttpClient | HttpClientOptions | (() => HttpClient);
  readonly logger?: ILogger;
  readonly httpServerAdapter?: IHttpServerAdapter;
  readonly httpServer?: HttpServer;
  readonly skipAuth?: boolean;
  readonly messagingEndpoint?: `/${string}`;
  readonly serviceUrl?: string;
  readonly apiClientSettings?: ApiClientSettings;
  readonly cloud?: CloudEnvironment;
  readonly onError?: (err: Error) => void;
};

export class Core {
  readonly api: ApiClient;
  readonly client: HttpClient;
  readonly cloud: CloudEnvironment;
  readonly graph: GraphClient;
  readonly graphBaseUrl?: string;
  readonly server: HttpServer;
  readonly tokenManager: TokenManager;

  private readonly _userAgent = `teams.ts[apps]/${pkg.version}`;
  private readonly serviceUrl: string;

  get credentials(): Credentials | undefined {
    // Keep credentials available internally for existing App identity surfaces:
    // inbound auth initialization, manifest defaults, and plugin dependency injection.
    return this.tokenManager.credentials;
  }

  constructor(readonly options: CoreOptions = {}) {
    const log = this.options.logger ?? new ConsoleLogger('@teams/core');

    const cloudEnvName = typeof process !== 'undefined' ? process.env.CLOUD : undefined;
    this.cloud = this.options.cloud ?? (cloudEnvName ? cloudFromName(cloudEnvName) : PUBLIC);

    this.client = this.createHttpClient(options);

    this.tokenManager = new TokenManager({
      clientId: this.options.clientId,
      clientSecret: this.options.clientSecret,
      tenantId: this.options.tenantId,
      // Preserve the legacy token(scope, tenantId) factory as the default
      // authorizer fallback when options.authorize returns undefined.
      token: this.options.token,
      managedIdentityClientId: this.options.managedIdentityClientId,
      cloud: this.cloud,
    }, log);

    this.serviceUrl = (this.options.serviceUrl ?? process.env.SERVICE_URL ??
      'https://smba.trafficmanager.net/teams').replace(/\/+$/, '');

    this.api = this.getApiClient(this.serviceUrl);

    const graphUrlMatch = /^(https?:\/\/[^/]+)/i.exec((this.cloud.graphScope ?? '').trim());
    this.graphBaseUrl = graphUrlMatch?.[1];
    if (!this.graphBaseUrl && this.cloud.graphScope) {
      log.warn(
        `graphScope "${this.cloud.graphScope}" is not a URL; Graph calls will route to the public cloud. ` +
        'Set graphScope to an "https://<host>/.default" value to route to the correct Graph endpoint.'
      );
    }

    this.graph = this.getAppGraphClient();

    if (this.options.httpServer) {
      this.server = this.options.httpServer;
    } else {
      const httpAdapter = this.options.httpServerAdapter ?? new ExpressAdapter(undefined, {
        logger: log,
        onError: (err) => this.options.onError?.(err),
      });
      this.server = new HttpServer(httpAdapter, {
        skipAuth: this.options.skipAuth,
        logger: log,
        messagingEndpoint: this.options.messagingEndpoint ?? '/api/messages',
      });
    }
  }

  registerRoute: IHttpServerAdapter['registerRoute'] = (...args) => {
    return this.server.adapter.registerRoute(...args);
  };

  serveStatic: NonNullable<IHttpServerAdapter['serveStatic']> = (...args) => {
    return this.server.adapter.serveStatic?.(...args);
  };

  setActivityHandler(handler: CoreActivityHandler): void {
    this.server.onRequest = handler;
  }

  async initialize() {
    await this.server.initialize({
      credentials: this.credentials,
      cloud: this.cloud,
    });
  }

  async start(port: number | string) {
    await this.server.start(port);
  }

  async stop() {
    await this.server.stop();
  }

  getApiClient(serviceUrl = this.serviceUrl): ApiClient {
    return new ApiClient(
      serviceUrl,
      this.client.clone({
        token: () => this.authorize({
          kind: 'bot',
          scope: this.cloud.botScope,
          tenantId: this.resolveBotTenantId(),
        }),
      }),
      this.options.apiClientSettings,
      this.cloud
    );
  }

  getAppGraphClient(tenantId?: string): GraphClient {
    return new GraphClient(
      this.client.clone({
        token: () => this.authorize({
          kind: 'appGraph',
          scope: this.cloud.graphScope,
          tenantId: this.resolveGraphTenantId(tenantId),
        }),
      }),
      { baseUrlRoot: this.graphBaseUrl }
    );
  }

  createUserGraphClient(userToken?: string): GraphClient {
    return new GraphClient(
      this.client.clone({ token: () => userToken }),
      { baseUrlRoot: this.graphBaseUrl }
    );
  }

  async getBotToken() {
    const token = await this.authorize({
      kind: 'bot',
      scope: this.cloud.botScope,
      tenantId: this.resolveBotTenantId(),
    });

    return token ? new JsonWebToken(token) : null;
  }

  async getAppGraphToken(tenantId?: string) {
    const token = await this.authorize({
      kind: 'appGraph',
      scope: this.cloud.graphScope,
      tenantId: this.resolveGraphTenantId(tenantId),
    });

    return token ? new JsonWebToken(token) : null;
  }

  private async authorize(request: AuthorizationRequest): Promise<string | null> {
    const custom = await this.options.authorize?.(request);
    if (custom !== undefined) {
      return custom;
    }

    return await this.tokenManager.authorize(request);
  }

  private resolveBotTenantId() {
    return this.credentials?.tenantId || this.cloud.loginTenant;
  }

  private resolveGraphTenantId(tenantId?: string) {
    return tenantId || this.credentials?.tenantId || 'common';
  }

  // User delegated auth is intentionally not part of Core's authorize seam yet.
  // App owns the OAuth/user-token flow for now because that model is still subject to change.
  async getUserToken(
    channelId: ChannelID,
    userId: string,
    connectionName: string
  ) {
    const res = await this.api.users.token.get({
      channelId,
      userId,
      connectionName,
    });

    return res.token;
  }

  createEntraTokenValidator() {
    if (!this.credentials?.clientId) return undefined;

    return middleware.createEntraTokenValidator(
      this.credentials.tenantId || 'common',
      this.credentials.clientId,
      {
        applicationIdUri: this.options.applicationIdUri,
        loginEndpoint: this.cloud.loginEndpoint,
        logger: this.options.logger,
      }
    );
  }

  private createHttpClient(options: CoreOptions): HttpClient {
    if (!options.client) {
      return new HttpClient({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    }

    if (typeof options.client === 'function') {
      return options.client().clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    }

    if ('request' in options.client) {
      return options.client.clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    }

    return new HttpClient(options.client).clone({
      headers: {
        'User-Agent': this._userAgent,
      },
    });
  }
}
