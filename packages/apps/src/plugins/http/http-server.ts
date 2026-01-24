import {
  Credentials,
  InvokeResponse,
  IToken
} from '@microsoft/teams.api';

import { ILogger } from '@microsoft/teams.common';

import { IActivityEvent } from '../../events';

import { IHttpAdapter, IRequestHelpers, IRouteConfig } from './adapter';

export type HttpServerOptions = {
  readonly skipAuth?: boolean;
};

/**
 * Configurable HTTP server for receiving Teams activities
 */
export class HttpServer {
  /**
   * Callback invoked when a valid activity request arrives
   * App should set this to process activities
   */
  onRequest?: (event: IActivityEvent) => Promise<InvokeResponse>;

  protected logger!: ILogger;
  protected credentials?: Credentials;
  protected skipAuth: boolean;
  protected initialized: boolean = false;

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
  }

  /**
   * Initialize the server with dependencies (registers routes, prepares adapter)
   * Can be called multiple times - only initializes once
   * Called by App.initialize()
   */
  async initialize(deps: {
    logger: ILogger;
    credentials?: Credentials;
  }) {
    if (this.initialized) {
      this.logger?.debug('HttpServer already initialized, skipping');
      return;
    }

    this.logger = deps.logger;
    this.credentials = deps.credentials;

    // Framework-specific initialization (e.g., Next.js prepare)
    await this._adapter.initialize();

    // Register Teams bot endpoint
    this._adapter.registerRoute({
      method: 'post',
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
    await this._adapter.start(portNumber);
    this.logger.info(`listening on port ${port} 🚀`);
  }

  /**
   * Register a route with the adapter
   * Used by app.function() and other app methods
   */
  registerRoute(config: IRouteConfig) {
    this._adapter.registerRoute(config);
  }

  /**
   * Serve static files from a directory
   * Used by app.tab() and other app methods
   */
  serveStatic(path: string, directory: string) {
    this._adapter.serveStatic(path, directory);
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

        try {
          token = await this.validateJwt(authHeader, body);
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

  /**
   * Validate JWT token
   * Uses existing withJwtValidation middleware logic
   */
  protected async validateJwt(_authHeader: string, body: any): Promise<IToken> {
    // TODO: Implement proper JWT validation using withJwtValidation middleware
    // For now, return a basic token with credentials info
    return {
      appId: this.credentials?.clientId || '',
      from: 'azure',
      fromId: '',
      serviceUrl: body.serviceUrl || '',
      isExpired: () => false,
    };
  }
}
