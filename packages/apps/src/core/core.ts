import {
  CloudEnvironment,
  cloudFromName,
  Credentials,
  InvokeResponse,
  PUBLIC,
  TokenCredentials,
} from '@microsoft/teams.api';
import {
  Client as HttpClient,
  ConsoleLogger,
  ILogger,
} from '@microsoft/teams.common';

import { IActivityEvent } from '../events/activity';
import { ExpressAdapter, IHttpServerAdapter } from '../http';
import { HttpServer } from '../http/http-server';
import * as middleware from '../middleware';
import { Authorize, AuthorizationRequest, TokenManager } from '../token-manager';

import { HttpClientSource, resolveHttpClient } from './http-client';

export type CoreActivityHandler = (
  event: IActivityEvent
) => Promise<InvokeResponse>;

export type AuthenticatedClientRequest =
  | {
    readonly kind: 'bot';
    readonly tenantId?: string;
  }
  | {
    readonly kind: 'appGraph';
    readonly tenantId?: string;
  };

interface ICore {
  setActivityHandler(handler: CoreActivityHandler): void;
  getAuthenticatedClient(request: AuthenticatedClientRequest): HttpClient;
  registerRoute: HttpServer['registerRoute'];
  serveStatic: HttpServer['serveStatic'];
  initialize(): Promise<void>;
  startServer(port: number | string): Promise<void>;
  stopServer(): Promise<void>;
}

export type CoreOptions = {
  readonly clientId?: string;
  readonly clientSecret?: string;
  readonly applicationIdUri?: string;
  readonly tenantId?: string;
  readonly token?: TokenCredentials['token'];
  readonly authorize?: Authorize;
  managedIdentityClientId?: 'system' | (string & {});
  readonly client?: HttpClientSource;
  readonly logger?: ILogger;
  readonly httpServerAdapter?: IHttpServerAdapter;
  readonly skipAuth?: boolean;
  readonly messagingEndpoint?: `/${string}`;
  readonly cloud?: CloudEnvironment;
  readonly onError?: (err: Error) => void;
};

export class Core implements ICore {
  readonly cloud: CloudEnvironment;
  readonly server: HttpServer;

  private readonly client: HttpClient;
  private readonly tokenManager: TokenManager;

  get credentials(): Credentials | undefined {
    // Keep credentials available internally for existing App identity surfaces:
    // inbound auth initialization, manifest defaults, and plugin dependency injection.
    return this.tokenManager.credentials;
  }

  constructor(readonly options: CoreOptions = {}) {
    const log = this.options.logger ?? new ConsoleLogger('@teams/core');

    const cloudEnvName = typeof process !== 'undefined' ? process.env.CLOUD : undefined;
    this.cloud = this.options.cloud ?? (cloudEnvName ? cloudFromName(cloudEnvName) : PUBLIC);

    this.client = resolveHttpClient(options.client);

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

  setActivityHandler(handler: CoreActivityHandler): void {
    this.server.onRequest = handler;
  }

  async initialize() {
    await this.server.initialize({
      credentials: this.credentials,
      cloud: this.cloud,
    });
  }

  async startServer(port: number | string) {
    await this.server.start(port);
  }

  async stopServer() {
    await this.server.stop();
  }

  getAuthenticatedClient(request: AuthenticatedClientRequest): HttpClient {
    const tokenRequest = this.resolveTokenRequest(request);
    return this.client.clone({
      token: () => this.getToken(tokenRequest),
    });
  }

  registerRoute: HttpServer['registerRoute'] = (...args) => {
    return this.server.registerRoute(...args);
  };

  serveStatic: HttpServer['serveStatic'] = (...args) => {
    return this.server.serveStatic(...args);
  };

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

  private resolveTokenRequest(request: AuthenticatedClientRequest): AuthorizationRequest {
    if (request.kind === 'bot') {
      return {
        kind: 'bot',
        scope: this.cloud.botScope,
        tenantId: request.tenantId || this.resolveBotTenantId(),
      };
    }

    return {
      kind: 'appGraph',
      scope: this.cloud.graphScope,
      tenantId: this.resolveGraphTenantId(request.tenantId),
    };
  }

  private async getToken(request: AuthorizationRequest): Promise<string | null> {
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
}
