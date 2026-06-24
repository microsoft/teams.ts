import { AgenticIdentity, CloudEnvironment, IToken, PUBLIC } from '@microsoft/teams.api';

import { TokenManager } from './token-manager';

export class AppAuthProvider {
  constructor(
    private readonly tokenManager: TokenManager,
    private readonly cloud: CloudEnvironment = PUBLIC
  ) { }

  async token(options: { scope?: string; agenticIdentity?: AgenticIdentity }): Promise<IToken | null> {
    const { scope, agenticIdentity } = options;
    if (!agenticIdentity) {
      return await this.tokenManager.getAppToken(scope ?? this.cloud.botScope);
    }

    return await this.tokenManager.getAgenticToken(scope ?? this.cloud.agenticBotScope, agenticIdentity);
  }
}
