import type { AuthProvider, TurnContext } from '@microsoft/agents-hosting';
import type { ITokenProvider, TokenProviderResult } from '@microsoft/teams.api';

import { _agentSdkContextStore } from './context';
import type { AgentSdkConnections } from './install';

const DEFAULT_SUFFIX = '/.default';
const AGENTIC_ROUTING_KEY = 'agentic';

type AgentsAuthProvider = AuthProvider & {
  getAccessToken(resourceUrl: string): string | Promise<string>;
};

type AgenticCapableProvider = AuthProvider & {
  getAgenticUserToken?: (
    tenantId: string,
    agentAppInstanceId: string,
    upn: string,
    scopes: string[]
  ) => string | Promise<string>;
};

/**
 * A teams.ts {@link ITokenProvider} backed by the host Agents SDK connections,
 * so teams.ts mints outbound tokens using the host app's identity.
 */
export type TeamsSdkTokenProvider = ITokenProvider;

/**
 * Build a teams.ts token provider that delegates to the host Agents SDK
 * connection manager.
 *
 * For each requested scope it selects the connection appropriate to the active
 * turn (per-request identity when a turn is in flight, otherwise the default
 * connection) and returns that provider's access token — so the bridge never
 * holds its own credential. Also supports agentic user tokens when the
 * underlying MSAL provider exposes them.
 *
 * @param connectionManager the host app's connection manager
 */
export function createAgentSdkTokenProvider(
  connectionManager: AgentSdkConnections
): TeamsSdkTokenProvider {
  return {
    async getAppToken(scope: string): Promise<TokenProviderResult> {
      const resourceUrl = scope.endsWith(DEFAULT_SUFFIX)
        ? scope.slice(0, -DEFAULT_SUFFIX.length)
        : scope;

      const provider = selectProvider(connectionManager, resourceUrl) as AgentsAuthProvider;
      return await provider.getAccessToken(resourceUrl);
    },

    async getAgenticUserToken(
      scope: string,
      agenticAppId: string,
      agenticUserId: string,
      tenantId?: string
    ): Promise<TokenProviderResult> {
      const provider = selectProvider(connectionManager, AGENTIC_ROUTING_KEY) as AgenticCapableProvider;
      if (typeof provider.getAgenticUserToken !== 'function') {
        throw new Error(
          'Agents SDK connection does not expose getAgenticUserToken; an agentic-capable MSAL provider is required.'
        );
      }

      return await provider.getAgenticUserToken(tenantId ?? '', agenticAppId, agenticUserId, [scope]);
    },
  };
}

function selectProvider(
  connectionManager: AgentSdkConnections,
  serviceUrl: string
): AuthProvider {
  const context = _agentSdkContextStore.getStore();
  if (!context) {
    return connectionManager.getDefaultConnection();
  }

  try {
    const identity = getTurnIdentity(context);
    if (!identity) {
      return connectionManager.getDefaultConnection();
    }

    const targetUrl = serviceUrl || context.activity.serviceUrl || '';
    if (!targetUrl) {
      return connectionManager.getDefaultConnection();
    }

    return connectionManager.getTokenProvider(identity, targetUrl);
  } catch {
    return connectionManager.getDefaultConnection();
  }
}

function getTurnIdentity(context: TurnContext): unknown {
  const direct = (context as TurnContext & { identity?: unknown }).identity;
  if (direct) {
    return direct;
  }

  const turnState = (context as unknown as { turnState?: unknown }).turnState;

  if (!turnState) {
    return undefined;
  }

  if (hasGet(turnState)) {
    return turnState.get('identity') ?? turnState.get('AgentIdentity') ?? turnState.get('agentIdentity');
  }

  if (isRecord(turnState)) {
    return turnState.identity ?? turnState.AgentIdentity ?? turnState.agentIdentity;
  }

  return undefined;
}

function hasGet(value: unknown): value is { get(key: string): unknown } {
  return isRecord(value) && typeof value.get === 'function';
}

function isRecord(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null;
}
