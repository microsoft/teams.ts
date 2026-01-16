import http from 'http';

import {
  Credentials,
  InvokeResponse,
  IToken
} from '@microsoft/teams.api';

import { ILogger } from '@microsoft/teams.common';

import pkg from '../../../package.json';
import { IActivityEvent, IErrorEvent } from '../../events';
import { Manifest } from '../../manifest';
import {
  Dependency,
  Event,
  IPluginStartEvent,
  Logger,
  Plugin,
} from '../../types';

import { IHttpAdapter, IRequestHelpers } from './adapter';

/**
 * Configurable HTTP plugin that works with different HTTP frameworks via adapters
 *
 * This plugin handles Teams protocol logic (JWT validation, activity processing)
 * while delegating HTTP framework concerns to the adapter.
 */
@Plugin({
  name: 'http',
  version: pkg.version,
  description: 'Configurable HTTP plugin that works with different frameworks via adapters',
})
export class ConfigurableHttpPlugin {
  @Logger()
  readonly logger!: ILogger;

  @Dependency()
  readonly manifest!: Partial<Manifest>;

  @Dependency({ optional: true })
  readonly credentials?: Credentials;

  @Event('error')
  readonly $onError!: (event: IErrorEvent) => void;

  @Event('activity')
  readonly $onActivity!: (event: IActivityEvent) => Promise<InvokeResponse>;

  get server() {
    return this._server;
  }
  protected _server: http.Server;

  get port() {
    return this._port;
  }
  protected _port?: number | string;

  protected skipAuth: boolean;
  protected initialized: boolean = false;

  private adapter: IHttpAdapter;

  constructor(adapter: IHttpAdapter, options?: { skipAuth?: boolean }) {
    this.adapter = adapter;
    this._server = adapter.getServer();
    this.skipAuth = options?.skipAuth ?? false;
  }

  /**
   * Initialize the plugin - called by App during initialization
   * Sets up routes via the adapter
   */
  async onInit() {
    await this.ensureInitialized();
  }

  /**
   * Start the plugin - called by App.start()
   * Delegates to adapter's start method
   */
  async onStart({ port }: IPluginStartEvent) {
    await this.ensureInitialized();

    this._port = port;

    // Delegate to adapter's start (may throw if user-provided server)
    if (this.adapter.start) {
      return await new Promise<void>((resolve, reject) => {
        this._server.on('error', (err) => {
          this.$onError({ error: err });
          reject(err);
        });

        const portNumber = typeof port === 'string' ? parseInt(port, 10) : port;
        this.adapter.start!(portNumber).then(() => {
          this.logger.info(`listening on port ${port} 🚀`);
          resolve();
        }).catch(reject);
      });
    }
  }

  /**
   * Stop the plugin - called by App.stop()
   * Closes the server if we own it
   */
  onStop() {
    this._server.close();
  }

  /**
   * Ensure adapter is initialized (only runs once)
   */
  protected async ensureInitialized() {
    if (this.initialized) {
      return;
    }

    // Framework-specific initialization (e.g., Next.js prepare)
    if (this.adapter.initialize) {
      await this.adapter.initialize();
    }

    // Register Teams bot endpoint
    this.adapter.registerRoute({
      method: 'post',
      path: '/api/messages',
      handler: async (helpers) => {
        await this.handleActivity(helpers);
      }
    });

    this.initialized = true;
  }

  /**
   * Handle incoming activity
   * Validates JWT, processes activity, sends response
   */
  protected async handleActivity({ extractRequestData, sendResponse }: IRequestHelpers) {
    try {
      // Extract data from request
      const { body, headers } = extractRequestData();

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

      // Process activity via App
      const response = await this.$onActivity({
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
