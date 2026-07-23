import { AgentUser, CloudEnvironment, IToken, PUBLIC } from '@microsoft/teams.api';

import { TokenManager } from './token-manager';

/**
 * Auth provider that resolves app-only or Agent User-scoped tokens for the
 * Teams API client.
 */
export class AppAuthProvider {
  constructor(
    private readonly tokenManager: TokenManager,
    private readonly cloud: CloudEnvironment = PUBLIC
  ) { }

  /**
   * Gets a token for the requested scope. When `agentUser` is supplied, the
   * returned token is scoped to that Agent User; otherwise an app-only token is
   * returned.
   */
  async token(options: { scope?: string; agentUser?: AgentUser }): Promise<IToken | null> {
    const { scope, agentUser } = options;
    if (!agentUser) {
      return await this.tokenManager.getAppToken(scope ?? this.cloud.botScope);
    }

    return await this.tokenManager.getAgentUserToken(scope ?? this.cloud.agentUserBotScope, agentUser);
  }
}
