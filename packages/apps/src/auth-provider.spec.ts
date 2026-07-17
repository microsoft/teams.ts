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

  it('uses an Agentic Id token when Agentic User identity is present', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgenticToken: jest.fn(async () => 'agentic-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

    const token = await provider.token({ scope: 'agentic-scope', agenticIdentity: identity });

    expect(token).toBe('agentic-token');
    expect(tokenManager.getAgenticToken).toHaveBeenCalledWith('agentic-scope', identity);
    expect(tokenManager.getAppToken).not.toHaveBeenCalled();
  });

  it('defaults to cloud botScope when scope is omitted', async () => {
    const tokenManager = {
      getAppToken: jest.fn(async () => 'default-token'),
      getAgenticToken: jest.fn(),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);

    const token = await provider.token({});

    expect(token).toBe('default-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('https://api.botframework.com/.default');
  });

  it('defaults to cloud agenticBotScope when scope is omitted with agentic identity', async () => {
    const tokenManager = {
      getAppToken: jest.fn(),
      getAgenticToken: jest.fn(async () => 'agentic-default-token'),
    } as unknown as jest.Mocked<TokenManager>;
    const provider = new AppAuthProvider(tokenManager);
    const identity: AgenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };

    const token = await provider.token({ agenticIdentity: identity });

    expect(token).toBe('agentic-default-token');
    expect(tokenManager.getAgenticToken).toHaveBeenCalledWith('https://botapi.skype.com/.default', identity);
  });
});
