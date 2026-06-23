import { AgenticIdentity } from '@microsoft/teams.api';

import { AppAuthProvider } from './auth-provider';
import { TokenManager } from './token-manager';

describe('AppAuthProvider', () => {
  it('uses app token when agentic identity is absent', async () => {
    const tokenManager = {
      getAppToken: jest.fn(async () => 'app-token'),
      getAgenticToken: jest.fn(),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);

    const token = await provider.token({ scope: 'bot-scope' });

    expect(token).toBe('app-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('bot-scope');
    expect(tokenManager.getAgenticToken).not.toHaveBeenCalled();
  });

  it('uses agentic token when agentic identity is present', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgenticToken: jest.fn(async () => 'agentic-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

    const token = await provider.token({ scope: 'agentic-scope', agenticIdentity: identity });

    expect(token).toBe('agentic-token');
    expect(tokenManager.getAgenticToken).toHaveBeenCalledWith(identity, 'agentic-scope');
    expect(tokenManager.getAppToken).not.toHaveBeenCalled();
  });
});
