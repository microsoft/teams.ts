import type { TokenStatus } from '@microsoft/teams.api';
import type { Client as HttpClient, EventEmitter } from '@microsoft/teams.common';

import type { IActivityContext } from '../contexts';
import {
  APP_OAUTH_ALL_CONNECTIONS,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from '../diagnostics/constants';
import type { Router } from '../router';
import type { AppEvents, IPlugin } from '../types';
import type { PluginAdditionalContext } from '../types/app-routing';

import { OauthHandlers } from './handlers';
import { traceOAuthOperation } from './telemetry';

import { OAuthFlow } from '.';

type OAuthFlowRegistryOptions<TPlugin extends IPlugin> = {
  readonly defaultConnectionName?: string;
  readonly router: Router<PluginAdditionalContext<TPlugin>>;
  readonly client: HttpClient;
  readonly events: EventEmitter<AppEvents<TPlugin>>;
  readonly graphBaseUrl?: string;
};

/**
 * Owns either the legacy default OAuth flow or registered flows.
 */
export class OAuthFlowRegistry<TPlugin extends IPlugin = IPlugin> {
  private readonly flows = new Map<string, OAuthFlow<TPlugin>>();
  private usesRegisteredFlows: boolean;

  /**
   * Creates the registry and installs routes for all flows.
   *
   * Omitting `defaultConnectionName` starts the registry in registered-flow mode.
   */
  constructor(options: OAuthFlowRegistryOptions<TPlugin>) {
    this.usesRegisteredFlows = options.defaultConnectionName === undefined;
    if (options.defaultConnectionName !== undefined) {
      const defaultFlow = new OAuthFlow<TPlugin>(options.defaultConnectionName);
      this.flows.set(this.normalize(defaultFlow.connectionName), defaultFlow);
    }
    this.registerRoutes(options);
  }

  /**
   * Adds a flow. The first registration removes the legacy
   * implicit flow; subsequent additions of the same name are rejected.
   */
  add(flow: OAuthFlow<TPlugin>): void {
    if (!this.usesRegisteredFlows) {
      this.flows.clear();
      this.usesRegisteredFlows = true;
    }

    const normalized = this.normalize(flow.connectionName);
    if (this.flows.has(normalized)) {
      throw new Error(
        `An OAuth flow is already registered for connection "${flow.connectionName}".`
      );
    }

    this.flows.set(normalized, flow);
  }

  /**
   * Resolves a flow by connection name.
   */
  get(connectionName: string): OAuthFlow<TPlugin> {
    if (!connectionName.trim()) {
      throw new Error('OAuth connection name is required.');
    }

    const normalized = this.normalize(connectionName);
    const flow = this.flows.get(normalized);
    if (flow) {
      return flow;
    }

    const available = this.getAll()
      .map(item => item.connectionName)
      .join(', ');
    throw new Error(
      `No OAuth flow is registered for connection "${connectionName}". ` +
      `Registered connections: ${available || '(none)'}.`
    );
  }

  /** Returns every flow in the active legacy or registered-flow mode. */
  getAll(): OAuthFlow<TPlugin>[] {
    return [...this.flows.values()];
  }

  /**
   * Gets and corrects token-service status for every registered connection.
   *
   * Silent SSO can leave the status endpoint stale, so disconnected or omitted
   * flows are checked directly for a cached token.
   */
  async getConnectionStatus(context: IActivityContext): Promise<TokenStatus[]> {
    const flows = this.getAll();
    if (flows.length === 0) {
      throw new Error(
        'No OAuth flow is registered. Call addOAuthFlow(connectionName) on the App first.'
      );
    }

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      APP_OAUTH_ALL_CONNECTIONS,
      APP_OAUTH_OPERATION.connectionStatus,
      async (_span, telemetry) => {
        const statuses = await context.api.users.getTokenStatus({
          channelId: context.activity.channelId,
          userId: context.activity.from.id,
          includeFilter: '',
        });
        const results = statuses.map(status => ({ ...status }));

        for (const flow of flows) {
          const existing = results.find(
            status =>
              this.normalize(status.connectionName) ===
              this.normalize(flow.connectionName)
          );
          if (existing?.hasToken) {
            continue;
          }

          const token = await flow.getToken(context);
          if (!token) {
            continue;
          }

          if (existing) {
            existing.hasToken = true;
          } else {
            results.push({
              channelId: context.activity.channelId,
              connectionName: flow.connectionName,
              hasToken: true,
              serviceProviderDisplayName: '',
            });
          }
        }

        telemetry.result = APP_OAUTH_RESULT.success;
        return results;
      }
    );
  }

  /**
   * Validates a connection before a deprecated context OAuth helper runs.
   */
  validate(connectionName: string, connectionNameProvided: boolean): void {
    if (!this.usesRegisteredFlows) {
      return;
    }

    if (!connectionNameProvided) {
      throw new Error(
        'OAuth connection name is required when OAuth flows are registered.'
      );
    }

    this.get(connectionName);
  }

  /**
   * Records pending attribution for a flow.
   */
  recordPending(
    context: IActivityContext,
    connectionName: string,
    supportsSso: boolean
  ): void {
    if (!this.usesRegisteredFlows) {
      return;
    }

    this.get(connectionName).recordPending(context, supportsSso);
  }

  private registerRoutes(options: OAuthFlowRegistryOptions<TPlugin>): void {
    const handlers = new OauthHandlers<TPlugin>(
      () => this.getAll(),
      options.client,
      options.events,
      options.graphBaseUrl,
      () => this.usesRegisteredFlows
    );

    options.router.register({
      name: 'signin.token-exchange',
      type: 'system',
      select: activity =>
        activity.type === 'invoke' && activity.name === 'signin/tokenExchange',
      callback: ctx =>
        handlers.onTokenExchange(ctx) as unknown as Promise<void>,
    });

    options.router.register({
      name: 'signin.verify-state',
      type: 'system',
      select: activity =>
        activity.type === 'invoke' && activity.name === 'signin/verifyState',
      callback: ctx =>
        handlers.onVerifyState(ctx) as unknown as Promise<void>,
    });

    options.router.register({
      name: 'signin.failure',
      type: 'system',
      select: activity =>
        activity.type === 'invoke' && activity.name === 'signin/failure',
      callback: ctx =>
        handlers.onSignInFailure(ctx) as unknown as Promise<void>,
    });
  }

  private normalize(connectionName: string): string {
    return connectionName.trim().toLowerCase();
  }
}
