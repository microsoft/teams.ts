import {
  Credentials,
  InvokeResponse,
  IToken
} from '@microsoft/teams.api';

import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { IActivityEvent } from '../events';
import { ServiceTokenValidator } from '../middleware/auth/service-token-validator';

import { IHttpAdapter, IRequestHelpers, IRouteConfig } from './adapter';

export type HttpServerOptions = {
  readonly skipAuth?: boolean;
  readonly logger?: ILogger;
};

/**
 * Interface for HTTP server - exposed to plugins
 */
export interface IHttpServer {
  /**
   * Get the underlying adapter
   * Useful for plugins that need adapter-specific features
   */
  readonly adapter: IHttpAdapter;

  /**
   * Register a route handler with the HTTP server
   * Framework-agnostic way to add routes
   */
  registerRouteHandler(config: IRouteConfig): void;

  /**
   * Serve static files from a directory
   * Useful for plugins that need to serve UI assets
   */
  serveStatic(path: string, directory: string): void;
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

  private _adapter: IHttpAdapter;

  /**
   * Get the underlying adapter
   * Useful for plugins that need adapter-specific features
   */
  get adapter(): IHttpAdapter {
    return this._adapter;
  }

  constructor(adapter: IHttpAdapter, options?: HttpServerOptions) {
    this._adapter = adapter;
    this.skipAuth = options?.skipAuth ?? false;
    this.logger = options?.logger ?? new ConsoleLogger('HttpServer');
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

    // Framework-specific initialization (e.g., Next.js prepare)
    if (this._adapter.initialize) {
      await this._adapter.initialize();
    }

    // Register Teams bot endpoint (POST only)
    this._adapter.registerRouteHandler({
      path: '/api/messages',
      handler: async (helpers) => {
        await this.handleActivity(helpers);
      }
    });

    this.initialized = true;
  }

  /**
   * Start the HTTP server
   * Called by App.start()
   */
  async start(port: number | string) {
    const portNumber = typeof port === 'string' ? parseInt(port, 10) : port;
    if (!this._adapter.start) {
      throw new Error(
        'Adapter does not implement start(). ' +
        'Either implement start() in your adapter, or manage server lifecycle manually.'
      );
    }
    await this._adapter.start(portNumber);
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
  registerRouteHandler(config: IRouteConfig) {
    this._adapter.registerRouteHandler(config);
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
   * Handle incoming activity
   * Validates JWT, signals app, sends response
   */
  protected async handleActivity({ extractRequestData, sendResponse }: IRequestHelpers) {
    try {
      // Extract data from request
      const { body, headers } = extractRequestData();
      this.logger.debug('Handling activity', body);

      // Validate JWT if not skipped
      let token: IToken;
      if (!this.skipAuth && this.credentials) {
        // Validate JWT token
        const authHeader = headers['authorization'];
        if (!authHeader) {
          sendResponse({
            status: 401,
            body: { error: 'Unauthorized' }
          });
          return;
        }

        if (!this.serviceTokenValidator) {
          throw new Error('Service token validator not initialized - credentials required');
        }

        try {
          token = await this.serviceTokenValidator.check(authHeader, body);
        } catch (err) {
          this.logger.error('JWT validation failed', err);
          sendResponse({
            status: 401,
            body: { error: 'Unauthorized' }
          });
          return;
        }
      } else {
        // Skip auth - create dummy token
        token = {
          appId: '',
          from: 'azure',
          fromId: '',
          serviceUrl: body.serviceUrl || '',
          isExpired: () => false,
        };
      }

      // Signal app to process activity
      if (!this.onRequest) {
        throw new Error('HttpServer.onRequest callback not set');
      }

      const response = await this.onRequest({
        body,
        token,
      });

      // Send response
      sendResponse({
        status: response.status || 200,
        body: response.body
      });
    } catch (err) {
      this.logger.error('Error processing activity:', err);
      sendResponse({
        status: 500,
        body: { error: 'Internal server error' }
      });
    }
  }

}
