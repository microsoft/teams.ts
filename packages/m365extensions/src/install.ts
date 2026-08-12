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

export type AgentSdkConnections = {
  getDefaultConnection(): AuthProvider;
  getTokenProvider(identity: unknown, serviceUrl: string): AuthProvider;
  getDefaultConnectionConfiguration(): AuthConfiguration;
};

export type UseTeamsSdkOptions<TPlugin extends IPlugin = IPlugin> = Omit<
  AppOptions<TPlugin>,
  (typeof RESERVED_KEYS)[number]
>;

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
