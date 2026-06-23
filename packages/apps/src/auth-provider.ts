import { AgenticIdentity, IToken } from '@microsoft/teams.api';

import { TokenManager } from './token-manager';

export class AppAuthProvider {
  constructor(private readonly tokenManager: TokenManager) { }

  async token(options: { scope: string; agenticIdentity?: AgenticIdentity }): Promise<IToken | null> {
    const { scope, agenticIdentity } = options;
    if (!agenticIdentity) {
      return await this.tokenManager.getAppToken(scope);
    }

    return await this.tokenManager.getAgenticToken(agenticIdentity, scope);
  }
}
