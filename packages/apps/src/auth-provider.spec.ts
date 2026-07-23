import { AgenticUser } from '@microsoft/teams.api';

import { AppAuthProvider } from './auth-provider';
import { TokenManager } from './token-manager';

describe('AppAuthProvider', () => {
  it('uses app token when agentic user is absent', async () => {
    const tokenManager = {
      getAppToken: jest.fn(async () => 'app-token'),
      getAgenticUserToken: jest.fn(),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);

    const token = await provider.token({ scope: 'bot-scope' });

    expect(token).toBe('app-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('bot-scope');
    expect(tokenManager.getAgenticUserToken).not.toHaveBeenCalled();
  });

  it('uses an Agentic User token when Agentic User identity is present', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgenticUserToken: jest.fn(async () => 'agentic-user-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };

    const token = await provider.token({ scope: 'agentic-user-scope', agenticUser: identity });

    expect(token).toBe('agentic-user-token');
    expect(tokenManager.getAgenticUserToken).toHaveBeenCalledWith('agentic-user-scope', identity);
    expect(tokenManager.getAppToken).not.toHaveBeenCalled();
  });

  it('defaults to cloud botScope when scope is omitted', async () => {
    const tokenManager = {
      getAppToken: jest.fn(async () => 'default-token'),
      getAgenticUserToken: jest.fn(),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);

    const token = await provider.token({});

    expect(token).toBe('default-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('https://api.botframework.com/.default');
  });

  it('defaults to cloud agenticUserBotScope when scope is omitted with agentic user', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgenticUserToken: jest.fn(async () => 'agentic-user-default-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };

    const token = await provider.token({ agenticUser: identity });

    expect(token).toBe('agentic-user-default-token');
    expect(tokenManager.getAgenticUserToken).toHaveBeenCalledWith('https://botapi.skype.com/.default', identity);
  });
});
