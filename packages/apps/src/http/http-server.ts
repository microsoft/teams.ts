import {
  Credentials,
  InvokeResponse,
  IToken
} from '@microsoft/teams.api';

import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { IActivityEvent, ICoreActivity } from '../events';
import { ServiceTokenValidator } from '../middleware/auth/service-token-validator';

import { HttpMethod, IHttpServerAdapter, IHttpServerRequest, IHttpServerResponse, HttpRouteHandler } from './adapter';

type AuthResult =
  | { success: true; token: IToken }
  | { success: false; error: string };

export type HttpServerOptions = {
  readonly skipAuth?: boolean;
  readonly logger?: ILogger;
  /**
   * URL path for the Teams messaging endpoint
   */
  readonly messagingEndpoint: string;
};

/**
 * Public interface for HttpServer, exposed via DI for plugins
 */
export interface IHttpServer {
  handleRequest(request: IHttpServerRequest): Promise<IHttpServerResponse>;
  readonly adapter: IHttpServerAdapter;
  readonly messagingEndpoint: string;
}

/**
 * Configurable HTTP server for receiving Teams activities
 */
export class HttpServer implements IHttpServer {
  /**
   * Callback invoked when a valid activity request arrives
   * App should set this to process activities
   */
  onRequest?: (event: IActivityEvent) => Promise<InvokeResponse>;

  protected logger: ILogger;
  protected credentials?: Credentials;
  protected skipAuth: boolean;
  protected initialized: boolean = false;
  protected serviceTokenValidator?: ServiceTokenValidator;

  private _adapter: IHttpServerAdapter;
  private _messagingEndpoint: string;

  /**
   * Get the underlying adapter
   * Useful for plugins that need adapter-specific features
   */
  get adapter(): IHttpServerAdapter {
    return this._adapter;
  }

  /**
   * Get the messaging endpoint path
   */
  get messagingEndpoint(): string {
    return this._messagingEndpoint;
  }

  constructor(adapter: IHttpServerAdapter, options: HttpServerOptions) {
    this._adapter = adapter;
    this.skipAuth = options.skipAuth ?? false;
    this.logger = options.logger ?? new ConsoleLogger('HttpServer');
    this._messagingEndpoint = options.messagingEndpoint;
  }

  /**
   * Initialize the server with dependencies (registers routes, prepares adapter)
   * Can be called multiple times - only initializes once
   * Called by App.initialize()
   */
  async initialize(deps: {
    credentials?: Credentials;
  }) {
    if (this.initialized) {
      this.logger.debug('HttpServer already initialized, skipping');
      return;
    }

    this.credentials = deps.credentials;

    // Initialize service token validator if credentials provided and auth not skipped
    if (this.credentials && !this.skipAuth) {
      this.serviceTokenValidator = new ServiceTokenValidator(
        this.credentials.clientId,
        this.credentials.tenantId,
        undefined, // serviceUrl will be validated from activity body
        this.logger
      );
    }

    // Register Teams bot endpoint (POST only)
    this._adapter.registerRoute('POST', this._messagingEndpoint, async (request) => {
      return this.handleRequest(request);
    });

    this.initialized = true;
  }

  /**
   * Start the HTTP server
   * Called by App.start()
   */
  async start(port: number | string) {
    if (!this._adapter.start) {
      throw new Error(
        'Adapter does not implement start(). ' +
        'Either implement start() in your adapter, or manage server lifecycle manually.'
      );
    }
    await this._adapter.start(port);
  }

  /**
   * Stop the HTTP server
   * Called by App.stop() if implemented
   */
  async stop() {
    if (!this._adapter.stop) {
      this.logger.warn('Adapter does not implement stop(). Skipping server shutdown.');
      return;
    }
    await this._adapter.stop();
  }

  /**
   * Register a route handler with the adapter
   * Used by app.function() and other app methods
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler) {
    this._adapter.registerRoute(method, path, handler);
  }

  /**
   * Serve static files from a directory
   * Used by app.tab() and other app methods
   */
  serveStatic(path: string, directory: string) {
    if (this._adapter.serveStatic) {
      this._adapter.serveStatic(path, directory);
    }
  }

  /**
   * Handle incoming activity request
   * Validates JWT, dispatches to app, returns response
   */
  async handleRequest(request: IHttpServerRequest): Promise<IHttpServerResponse> {
    try {
      const body = request.body as ICoreActivity;
      this.logger.debug('Handling activity', body);

      const auth = await this.authorize(request.headers, body);
      if (!auth.success) {
        return { status: 401, body: { error: auth.error } };
      }

      if (!this.onRequest) {
        throw new Error('HttpServer.onRequest callback not set');
      }

      const response = await this.onRequest({ body, token: auth.token });
      return { status: response.status || 200, body: response.body };
    } catch (err) {
      this.logger.error('Error processing activity:', err);
      return { status: 500, body: { error: 'Internal server error' } };
    }
  }

  /**
   * Authorize the request by validating the JWT token.
   */
  protected async authorize(
    headers: Record<string, string | string[]>,
    body: ICoreActivity
  ): Promise<AuthResult> {
    if (this.skipAuth || !this.credentials) {
      return {
        success: true,
        token: {
          appId: '',
          from: 'azure',
          fromId: '',
          serviceUrl: body.serviceUrl || '',
          isExpired: () => false,
        },
      };
    }

    const raw = headers['authorization'];
    const authHeader = Array.isArray(raw) ? raw[0] : raw;
    if (!authHeader) {
      return { success: false, error: 'Missing authorization header' };
    }

    if (!this.serviceTokenValidator) {
      throw new Error('Service token validator not initialized - credentials required');
    }

    try {
      const token = await this.serviceTokenValidator.check(authHeader, body);
      return { success: true, token };
    } catch (err) {
      this.logger.error('JWT validation failed', err);
      return { success: false, error: 'JWT validation failed' };
    }
  }

}
