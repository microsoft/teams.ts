import type {
  AgentApplication,
  AuthConfiguration,
  AuthProvider,
  TurnState,
} from '@microsoft/agents-hosting';
import { App, type AppOptions, type IPlugin } from '@microsoft/teams.apps';

import { createAgentSdkTokenProvider } from './credentials';
import { TeamsMiddleware, type ShouldBypassTeams } from './middleware';

const RESERVED_KEYS = ['clientId', 'tenantId', 'token'] as const;

/**
 * The subset of an Agents SDK connection manager the bridge relies on to reuse
 * the host app's identity — resolving the default bot connection and the
 * per-request token provider for outbound Teams API calls.
 */
export type AgentSdkConnections = {
  getDefaultConnection(): AuthProvider;
  getTokenProvider(identity: unknown, serviceUrl: string): AuthProvider;
  getDefaultConnectionConfiguration(): AuthConfiguration;
};

/**
 * Options forwarded to the internally-created teams.ts {@link App}.
 *
 * Mirrors `AppOptions` but omits the identity/credential keys the bridge owns
 * (`clientId`, `tenantId`, `token`) — those are derived from the host Agents
 * SDK connection, so passing them is rejected.
 */
export type UseTeamsSdkOptions<TPlugin extends IPlugin = IPlugin> = Omit<
  AppOptions<TPlugin>,
  (typeof RESERVED_KEYS)[number]
>;

/**
 * Wire teams.ts routing into an existing Microsoft 365 Agents SDK app.
 *
 * Creates a teams.ts app that borrows the host app's identity (via
 * `connectionManager`) and installs a {@link TeamsMiddleware} on the Agents SDK
 * adapter so matching Teams activities are handled by teams.ts while everything
 * else flows through the host app unchanged. Returns the teams.ts app so the
 * caller can register routes (`app.message(...)`, `app.on(...)`, etc.).
 *
 * @param app the host Agents SDK application to attach the middleware to
 * @param connectionManager resolves the host app's credentials/token provider
 * @param teamsAppOptions extra teams.ts `AppOptions`; the identity keys
 *   (`clientId`, `tenantId`, `token`) are owned by the bridge and must be omitted
 * @param shouldBypassTeams optional predicate to keep specific turns on the host app
 * @throws TypeError if `teamsAppOptions` includes a reserved identity key
 */
export function useTeamsSdk<TState extends TurnState, TPlugin extends IPlugin = IPlugin>(
  app: AgentApplication<TState>,
  connectionManager: AgentSdkConnections,
  teamsAppOptions: UseTeamsSdkOptions<TPlugin> = {},
  shouldBypassTeams?: ShouldBypassTeams
): App<TPlugin> {
  const reserved = RESERVED_KEYS.filter((key) => key in teamsAppOptions);
  if (reserved.length > 0) {
    throw new TypeError(
      `useTeamsSdk owns ${JSON.stringify(reserved)}; remove from teamsAppOptions.`
    );
  }

  const auth = connectionManager.getDefaultConnectionConfiguration();
  const teamsApp = new App<TPlugin>({
    ...(teamsAppOptions as AppOptions<TPlugin>),
    clientId: auth.clientId,
    tenantId: auth.tenantId,
    token: createAgentSdkTokenProvider(connectionManager),
  });

  app.adapter.use(new TeamsMiddleware(teamsApp, shouldBypassTeams));
  return teamsApp;
}
