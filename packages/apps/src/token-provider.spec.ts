import { AgenticUser } from '@microsoft/teams.api';

import { TokenManager } from './token-manager';
import { AppTokenProvider } from './token-provider';

const identity: AgenticUser = {
  agenticAppInstanceId: 'agent-app',
  agenticUserId: 'agentic-user',
};

const mockTokenManager = (overrides: Partial<Record<string, unknown>> = {}) =>
  ({
    getAppToken: jest.fn(),
    getAgenticUserToken: jest.fn(),
    getAgenticAppInstanceToken: jest.fn(),
    ...overrides,
  }) as unknown as jest.Mocked<TokenManager>;

describe('AppTokenProvider', () => {
  it('acquires an app token', async () => {
    const tokenManager = mockTokenManager({ getAppToken: jest.fn(async () => 'app-token') });
    const provider = new AppTokenProvider(tokenManager);

    expect(await provider.getAppToken('bot-scope')).toBe('app-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith('bot-scope', undefined);
    expect(tokenManager.getAgenticUserToken).not.toHaveBeenCalled();
  });

  it('acquires an Agentic User token', async () => {
    const tokenManager = mockTokenManager({
      getAgenticUserToken: jest.fn(async () => 'agentic-user-token'),
    });
    const provider = new AppTokenProvider(tokenManager);

    expect(await provider.getAgenticUserToken('agentic-user-scope', identity)).toBe(
      'agentic-user-token'
    );
    expect(tokenManager.getAgenticUserToken).toHaveBeenCalledWith('agentic-user-scope', identity);
    expect(tokenManager.getAppToken).not.toHaveBeenCalled();
  });

  it('acquires an Agentic App Instance token', async () => {
    const tokenManager = mockTokenManager({
      getAgenticAppInstanceToken: jest.fn(async () => 'app-instance-token'),
    });
    const provider = new AppTokenProvider(tokenManager);

    expect(await provider.getAgenticAppInstanceToken('obs-scope', 'agent-app', 'tenant')).toBe(
      'app-instance-token'
    );
    expect(tokenManager.getAgenticAppInstanceToken).toHaveBeenCalledWith(
      'obs-scope',
      'agent-app',
      'tenant'
    );
    expect(tokenManager.getAgenticUserToken).not.toHaveBeenCalled();
  });

  it('defaults to the cloud botScope when scope is omitted', async () => {
    const tokenManager = mockTokenManager({ getAppToken: jest.fn(async () => 'default-token') });
    const provider = new AppTokenProvider(tokenManager);

    expect(await provider.getAppToken()).toBe('default-token');
    expect(tokenManager.getAppToken).toHaveBeenCalledWith(
      'https://api.botframework.com/.default',
      undefined
    );
  });

  it('defaults to the cloud agenticUserBotScope when scope is omitted', async () => {
    const tokenManager = mockTokenManager({
      getAgenticUserToken: jest.fn(async () => 'agentic-user-default-token'),
    });
    const provider = new AppTokenProvider(tokenManager);

    expect(await provider.getAgenticUserToken(undefined, identity)).toBe(
      'agentic-user-default-token'
    );
    expect(tokenManager.getAgenticUserToken).toHaveBeenCalledWith(
      'https://botapi.skype.com/.default',
      identity
    );
  });
});
