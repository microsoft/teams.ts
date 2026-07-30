import { AgenticUser, IToken } from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { TokenManager } from './token-manager';
import { AppTokenProvider } from './token-provider';

const identity: AgenticUser = {
  agenticAppInstanceId: 'agent-app',
  agenticUserId: 'agentic-user',
};

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
  getAgenticAppInstanceToken: jest
    .spyOn(tokenManager, 'getAgenticAppInstanceToken')
    .mockResolvedValue(null),
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
  });

  it('acquires an Agentic User token', async () => {
    const agenticUserToken = makeToken('agentic-user-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticUserToken.mockResolvedValue(agenticUserToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticUserToken('agentic-user-scope', identity);

    expect(token).toBe(agenticUserToken);
    expect(token?.toString()).toBe('agentic-user-token');
    expect(spies.getAgenticUserToken).toHaveBeenCalledWith('agentic-user-scope', identity);
    expect(spies.getAppToken).not.toHaveBeenCalled();
  });

  it('acquires an Agentic App Instance token', async () => {
    const appInstanceToken = makeToken('app-instance-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticAppInstanceToken.mockResolvedValue(appInstanceToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticAppInstanceToken('obs-scope', 'agent-app', 'tenant');

    expect(token).toBe(appInstanceToken);
    expect(token?.toString()).toBe('app-instance-token');
    expect(spies.getAgenticAppInstanceToken).toHaveBeenCalledWith(
      'obs-scope',
      'agent-app',
      'tenant'
    );
    expect(spies.getAgenticUserToken).not.toHaveBeenCalled();
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

  it('defaults to the cloud agenticUserBotScope when scope is omitted', async () => {
    const defaultToken = makeToken('agentic-user-default-token');
    const tokenManager = new TokenManager({}, new ConsoleLogger('test'));
    const spies = spyOnTokenManager(tokenManager);
    spies.getAgenticUserToken.mockResolvedValue(defaultToken);
    const provider = new AppTokenProvider(tokenManager);

    const token = await provider.getAgenticUserToken(undefined, identity);

    expect(token).toBe(defaultToken);
    expect(spies.getAgenticUserToken).toHaveBeenCalledWith(
      'https://botapi.skype.com/.default',
      identity
    );
  });
});
