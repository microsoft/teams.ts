import type { Client as HttpClient, EventEmitter } from '@microsoft/teams.common';

import type { IActivityContext } from '../contexts';
import type { Router } from '../router';
import type { AppEvents, IPlugin } from '../types';
import type { PluginAdditionalContext } from '../types/app-routing';

import { OauthHandlers } from './handlers';

import { OAuthFlow } from '.';

type OAuthFlowRegistryOptions<TPlugin extends IPlugin> = {
  readonly defaultConnectionName: string;
  readonly router: Router<PluginAdditionalContext<TPlugin>>;
  readonly client: HttpClient;
  readonly events: EventEmitter<AppEvents<TPlugin>>;
  readonly graphBaseUrl?: string;
};

/**
 * @internal Owns explicit OAuth registrations and the deprecated default flow.
 */
export class OAuthFlowRegistry<TPlugin extends IPlugin = IPlugin> {
  private readonly explicitFlows = new Map<string, OAuthFlow>();
  private readonly legacyFlow: OAuthFlow;

  /**
   * @internal Creates the registry and installs routes for its legacy fallback
   * and all flows registered later.
   */
  constructor(options: OAuthFlowRegistryOptions<TPlugin>) {
    this.legacyFlow = new OAuthFlow(options.defaultConnectionName);
    this.registerRoutes(options);
  }

  /** @internal Adds an explicitly registered flow. */
  add(flow: OAuthFlow): void {
    const normalized = this.normalize(flow.connectionName);
    if (this.explicitFlows.has(normalized)) {
      throw new Error(
        `An OAuth flow is already registered for connection "${flow.connectionName}".`
      );
    }

    this.explicitFlows.set(normalized, flow);
  }

  /**
   * @internal Resolves an explicit flow or the deprecated default fallback.
   */
  get(connectionName: string): OAuthFlow {
    if (!connectionName.trim()) {
      throw new Error('OAuth connection name is required.');
    }

    const normalized = this.normalize(connectionName);
    const flow = this.explicitFlows.get(normalized);
    if (flow) {
      return flow;
    }

    if (this.normalize(this.legacyFlow.connectionName) === normalized) {
      return this.legacyFlow;
    }

    const available = this.getAll()
      .map(item => item.connectionName)
      .join(', ');
    throw new Error(
      `No OAuth flow is registered for connection "${connectionName}". ` +
      `Registered connections: ${available || '(none)'}.`
    );
  }

  /** @internal Returns explicit flows plus any distinct legacy fallback. */
  getAll(): OAuthFlow[] {
    const flows = [...this.explicitFlows.values()];
    if (!this.explicitFlows.has(this.normalize(this.legacyFlow.connectionName))) {
      flows.push(this.legacyFlow);
    }
    return flows;
  }

  /** @internal Returns whether a flow was explicitly registered. */
  isExplicit(flow: OAuthFlow): boolean {
    return this.explicitFlows.get(this.normalize(flow.connectionName)) === flow;
  }

  /**
   * @internal Validates a connection before deprecated context sign-in starts.
   */
  validate(connectionName: string): void {
    this.get(connectionName);
  }

  /**
   * @internal Records pending attribution for a registered or legacy flow.
   */
  recordPending(
    context: IActivityContext,
    connectionName: string,
    supportsSso: boolean
  ): void {
    this.get(connectionName).recordPending(context, supportsSso);
  }

  private registerRoutes(options: OAuthFlowRegistryOptions<TPlugin>): void {
    const handlers = new OauthHandlers<TPlugin>(
      () => this.getAll(),
      flow => this.isExplicit(flow),
      options.client,
      options.events,
      options.graphBaseUrl
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
    return connectionName.toLowerCase();
  }
}
