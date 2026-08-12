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

export type TeamsSdkTokenProvider = ITokenProvider;

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
