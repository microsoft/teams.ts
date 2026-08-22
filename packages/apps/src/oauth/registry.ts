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
 * Owns the default and additional OAuth flows.
 */
export class OAuthFlowRegistry<TPlugin extends IPlugin = IPlugin> {
  private readonly flows = new Map<string, OAuthFlow<TPlugin>>();
  private readonly addedFlowNames = new Set<string>();

  /**
   * Creates the registry with its implicit default and installs routes for all
   * flows.
   */
  constructor(options: OAuthFlowRegistryOptions<TPlugin>) {
    const defaultFlow = new OAuthFlow<TPlugin>(options.defaultConnectionName);
    this.flows.set(this.normalize(defaultFlow.connectionName), defaultFlow);
    this.registerRoutes(options);
  }

  /**
   * Adds a flow. The first addition of the implicit default replaces its
   * placeholder; subsequent additions of the same name are rejected.
   */
  add(flow: OAuthFlow<TPlugin>): void {
    const normalized = this.normalize(flow.connectionName);
    if (this.addedFlowNames.has(normalized)) {
      throw new Error(
        `An OAuth flow is already registered for connection "${flow.connectionName}".`
      );
    }

    this.flows.set(normalized, flow);
    this.addedFlowNames.add(normalized);
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

  /** Returns every registered flow, including the implicit default. */
  getAll(): OAuthFlow<TPlugin>[] {
    return [...this.flows.values()];
  }

  /**
   * Validates a connection before deprecated context sign-in starts.
   */
  validate(connectionName: string): void {
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
    this.get(connectionName).recordPending(context, supportsSso);
  }

  private registerRoutes(options: OAuthFlowRegistryOptions<TPlugin>): void {
    const handlers = new OauthHandlers<TPlugin>(
      () => this.getAll(),
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
