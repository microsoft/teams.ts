import { AgenticUser, CloudEnvironment, IToken, PUBLIC } from '@microsoft/teams.api';

import { TokenManager } from './token-manager';

/**
 * Auth provider that resolves app-only or Agentic User-scoped tokens for the
 * Teams API client.
 */
export class AppAuthProvider {
  constructor(
    private readonly tokenManager: TokenManager,
    private readonly cloud: CloudEnvironment = PUBLIC
  ) { }

  /**
   * Gets a token for the requested scope. When `agenticUser` is supplied, the
   * returned token is scoped to that Agentic User; otherwise an app-only token is
   * returned.
   */
  async token(options: { scope?: string; agenticUser?: AgenticUser }): Promise<IToken | null> {
    const { scope, agenticUser } = options;
    if (!agenticUser) {
      return await this.tokenManager.getAppToken(scope ?? this.cloud.botScope);
    }

    return await this.tokenManager.getAgenticUserToken(scope ?? this.cloud.agenticUserBotScope, agenticUser);
  }
}
