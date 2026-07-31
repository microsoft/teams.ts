import { IToken } from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { TokenManager } from './token-manager';
import { AppTokenProvider } from './token-provider';

// AppTokenProvider's contract is Promise<IToken | null>, so the manager must
// yield a token-shaped object rather than a bare string. Reference equality on
// the returned value then proves the provider hands back the manager's token
// unchanged, which would regress if it ever stringified or re-wrapped it.
const makeToken = (value: string): IToken =>
  ({
    toString: () => value,
    appId: 'app-id',
    serviceUrl: 'https://smba.trafficmanager.net/teams',
    from: 'bot' as const,
    fromId: '28:app-id',
    isExpired: () => false,
  }) as IToken;

// Spy on a real TokenManager rather than a cast-shaped fake: the real instance
// keeps the tests bound to the actual method signatures, so a contract change
// surfaces here at compile time. Empty options configure no credentials, and the
// spies stub every acquisition leg, so MSAL is never exercised. Each leg defaults
// to null; a test overrides only the one it drives.
const spyOnTokenManager = (tokenManager: TokenManager) => ({
  getAppToken: jest.spyOn(tokenManager, 'getAppToken').mockResolvedValue(null),
  getAgenticUserToken: jest.spyOn(tokenManager, 'getAgenticUserToken').mockResolvedValue(null),
  getAgenticAppToken: jest.spyOn(tokenManager, 'getAgenticAppToken').mockResolvedValue(null),
});

describe('AppTokenProvider', () => {
  it('acquires an app token', async () => {
    const appToken = makeToken('app-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAppToken.mockResolvedValue(appToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAppToken('bot-scope');

    expect(token).toBe(appToken);
    expect(token?.toString()).toBe('app-token');
    expect(spies.getAppToken).toHaveBeenCalledWith('bot-scope', undefined);
    expect(spies.getAgenticUserToken).not.toHaveBeenCalled();
    expect(spies.getAgenticAppToken).not.toHaveBeenCalled();
  });

  it('acquires an Agentic User token by ID fields', async () => {
    const agenticUserToken = makeToken('agentic-user-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticUserToken.mockResolvedValue(agenticUserToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticUserToken('agentic-user-scope', 'agent-app', 'agentic-user', 'tenant');

    expect(token).toBe(agenticUserToken);
    expect(token?.toString()).toBe('agentic-user-token');
    expect(spies.getAgenticUserToken).toHaveBeenCalledWith('agentic-user-scope', 'agent-app', 'agentic-user', 'tenant');
    expect(spies.getAgenticAppToken).not.toHaveBeenCalled();
    expect(spies.getAppToken).not.toHaveBeenCalled();
  });

  it('acquires an Agentic App token by app ID', async () => {
    const agenticAppToken = makeToken('agentic-app-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticAppToken.mockResolvedValue(agenticAppToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticAppToken('agentic-app-scope', 'agent-app', 'tenant');

    expect(token).toBe(agenticAppToken);
    expect(token?.toString()).toBe('agentic-app-token');
    expect(spies.getAgenticAppToken).toHaveBeenCalledWith('agentic-app-scope', 'agent-app', 'tenant');
    expect(spies.getAgenticUserToken).not.toHaveBeenCalled();
    expect(spies.getAppToken).not.toHaveBeenCalled();
  });

  it('returns null when the app has no credentials configured', async () => {
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAppToken.mockResolvedValue(null);
    const provider = new AppTokenProvider(tokenManager);

    expect(await provider.getAppToken('bot-scope')).toBeNull();
  });

  it('defaults to the cloud botScope when scope is omitted', async () => {
    const defaultToken = makeToken('default-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAppToken.mockResolvedValue(defaultToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAppToken();

    expect(token).toBe(defaultToken);
    expect(spies.getAppToken).toHaveBeenCalledWith(
      'https://api.botframework.com/.default',
      undefined
    );
  });

  it('defaults Agentic User helper scope to the cloud agenticIdentityBotScope', async () => {
    const defaultToken = makeToken('agentic-user-default-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticUserToken.mockResolvedValue(defaultToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticUserToken(undefined, 'agent-app', 'agentic-user', 'tenant');

    expect(token).toBe(defaultToken);
    expect(spies.getAgenticUserToken).toHaveBeenCalledWith(
      'https://botapi.skype.com/.default',
      'agent-app',
      'agentic-user',
      'tenant'
    );
  });

  it('defaults Agentic App helper scope to the cloud agenticIdentityBotScope', async () => {
    const defaultToken = makeToken('agentic-app-default-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticAppToken.mockResolvedValue(defaultToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticAppToken(undefined, 'agent-app', 'tenant');

    expect(token).toBe(defaultToken);
    expect(spies.getAgenticAppToken).toHaveBeenCalledWith(
      'https://botapi.skype.com/.default',
      'agent-app',
      'tenant'
    );
  });
});
