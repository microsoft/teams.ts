import { AgentUser } from '@microsoft/teams.api';

import { AppAuthProvider } from './auth-provider';
import { TokenManager } from './token-manager';

describe('AppAuthProvider', () => {
  it('uses app token when agent user is absent', async () => {
    const tokenManager = {
      getAppToken: jest.fn(async () => 'app-token'),
      getAgentUserToken: jest.fn(),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);

    const token = await provider.token({ scope: 'bot-scope' });

    expect(token).toBe('app-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('bot-scope');
    expect(tokenManager.getAgentUserToken).not.toHaveBeenCalled();
  });

  it('uses an Agent User token when Agent User identity is present', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgentUserToken: jest.fn(async () => 'agent-user-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgentUser = { agentAppInstanceId: 'agent-app', agentUserId: 'agent-user' };

    const token = await provider.token({ scope: 'agent-user-scope', agentUser: identity });

    expect(token).toBe('agent-user-token');
    expect(tokenManager.getAgentUserToken).toHaveBeenCalledWith('agent-user-scope', identity);
    expect(tokenManager.getAppToken).not.toHaveBeenCalled();
  });

  it('defaults to cloud botScope when scope is omitted', async () => {
    const tokenManager = {
      getAppToken: jest.fn(async () => 'default-token'),
      getAgentUserToken: jest.fn(),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);

    const token = await provider.token({});

    expect(token).toBe('default-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('https://api.botframework.com/.default');
  });

  it('defaults to cloud agentUserBotScope when scope is omitted with agent user', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgentUserToken: jest.fn(async () => 'agent-user-default-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgentUser = { agentAppInstanceId: 'agent-app', agentUserId: 'agent-user' };

    const token = await provider.token({ agentUser: identity });

    expect(token).toBe('agent-user-default-token');
    expect(tokenManager.getAgentUserToken).toHaveBeenCalledWith('https://botapi.skype.com/.default', identity);
  });
});
