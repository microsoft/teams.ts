import { ActivityTypes, type Activity as AgentsActivity } from '@microsoft/agents-activity';
import type { AuthProvider, TurnContext } from '@microsoft/agents-hosting';
import { App, Plugin, type IPlugin } from '@microsoft/teams.apps';

import { agentSdkContext, _agentSdkContextStore } from './context';
import { createAgentSdkTokenProvider } from './credentials';
import { useTeamsSdk, type AgentSdkConnections } from './install';
import { isTeamsChannel, TeamsMiddleware } from './middleware';
import { TeamsToken } from './token';

const CALLER_ID_BOT = 'urn:botframework:aadappid';
const CALLER_ID_AZURE = 'urn:botframework:azure';

class FakeTurnContext {
  readonly sendActivity = jest.fn().mockResolvedValue(undefined);

  constructor(
    readonly activity: AgentsActivity,
    readonly identity?: unknown
  ) { }
}

function teamsActivity(
  type: ActivityTypes = ActivityTypes.Message,
  overrides: Partial<AgentsActivity> = {}
): AgentsActivity {
  return {
    type,
    id: 'activity-1',
    channelId: 'msteams',
    text: 'help',
    recipient: { id: 'bot-app-id', name: 'MyBot' },
    conversation: { id: 'conv-1', tenantId: 'tenant-1' },
    serviceUrl: 'https://smba.example.com/teams/',
    from: { id: 'user-1' },
    ...(type === ActivityTypes.Invoke ? { name: 'task/fetch', value: { data: {} } } : {}),
    ...overrides,
  } as AgentsActivity;
}

function fakeApp(options: {
  hasRoute: boolean;
  invokeResponse?: unknown;
}) {
  return {
    initialize: jest.fn().mockResolvedValue(undefined),
    router: {
      select: jest.fn().mockReturnValue(options.hasRoute ? [jest.fn()] : []),
    },
    process: jest.fn().mockResolvedValue(options.invokeResponse),
  } as unknown as App<any>;
}

function connectionManager(provider: AuthProvider): AgentSdkConnections & {
  getDefaultConnection: jest.Mock;
  getTokenProvider: jest.Mock;
} {
  return {
    getDefaultConnection: jest.fn().mockReturnValue(provider),
    getTokenProvider: jest.fn().mockReturnValue(provider),
    getDefaultConnectionConfiguration: jest.fn().mockReturnValue({
      clientId: 'bot-app-id',
      tenantId: 'tenant-1',
    }),
  };
}

describe('isTeamsChannel', () => {
  it('matches the plain Teams channel', () => {
    expect(isTeamsChannel({ channelId: 'msteams' })).toBe(true);
  });

  it('matches Teams subchannels', () => {
    expect(isTeamsChannel({ channelId: 'msteams:COPILOT' })).toBe(true);
  });

  it('rejects non-Teams channels', () => {
    expect(isTeamsChannel({ channelId: 'webchat' })).toBe(false);
  });

  it('rejects missing channels', () => {
    expect(isTeamsChannel({})).toBe(false);
  });
});

describe('TeamsToken', () => {
  it('projects bot fields from an activity', () => {
    const token = TeamsToken.fromActivity(teamsActivity());

    expect(token.appId).toBe('bot-app-id');
    expect(token.appDisplayName).toBe('MyBot');
    expect(token.tenantId).toBe('tenant-1');
  });

  it('strips the trailing slash from serviceUrl', () => {
    const token = TeamsToken.fromActivity(teamsActivity());

    expect(token.serviceUrl).toBe('https://smba.example.com/teams');
  });

  it('classifies bot callers', () => {
    const token = TeamsToken.fromActivity(teamsActivity());

    expect(token.from).toBe('bot');
    expect(token.fromId).toBe(`${CALLER_ID_BOT}:bot-app-id`);
  });

  it('is not expired when freshly constructed', () => {
    const token = TeamsToken.fromActivity(teamsActivity());

    expect(token.isExpired()).toBe(false);
    expect(token.expiration).toBeDefined();
  });

  it('uses an azure caller and default serviceUrl when app id is missing', () => {
    const token = TeamsToken.fromActivity(teamsActivity(ActivityTypes.Message, {
      recipient: { id: '' },
      conversation: { id: 'conv-1' },
      serviceUrl: '',
    }));

    expect(token.appId).toBe('');
    expect(token.from).toBe('azure');
    expect(token.fromId).toBe(CALLER_ID_AZURE);
    expect(token.serviceUrl).toBe('https://smba.trafficmanager.net/teams');
  });
});

describe('useTeamsSdk', () => {
  it.each(['clientId', 'tenantId', 'token'] as const)(
    'throws when teamsAppOptions contains reserved key %s',
    (reservedKey) => {
      expect(() => useTeamsSdk({} as any, {} as any, { [reservedKey]: 'override' } as any))
        .toThrow(reservedKey);
    }
  );
});

describe('TeamsMiddleware routing', () => {
  it('lets non-Teams turns call next without initializing the Teams app', async () => {
    const app = fakeApp({ hasRoute: true });
    const next = jest.fn().mockResolvedValue(undefined);

    await new TeamsMiddleware(app).onTurn(
      new FakeTurnContext(teamsActivity(ActivityTypes.Message, { channelId: 'webchat' })) as unknown as TurnContext,
      next
    );

    expect(next).toHaveBeenCalledTimes(1);
    expect(app.initialize).not.toHaveBeenCalled();
    expect(app.process).not.toHaveBeenCalled();
  });

  it('lets bypassed Teams turns call next after initialization', async () => {
    const app = fakeApp({ hasRoute: true });
    const next = jest.fn().mockResolvedValue(undefined);

    await new TeamsMiddleware(app, () => true).onTurn(
      new FakeTurnContext(teamsActivity()) as unknown as TurnContext,
      next
    );

    expect(next).toHaveBeenCalledTimes(1);
    expect(app.initialize).toHaveBeenCalledTimes(1);
    expect(app.process).not.toHaveBeenCalled();
  });

  it('lets Teams turns with no matching route call next', async () => {
    const app = fakeApp({ hasRoute: false });
    const next = jest.fn().mockResolvedValue(undefined);

    await new TeamsMiddleware(app).onTurn(
      new FakeTurnContext(teamsActivity()) as unknown as TurnContext,
      next
    );

    expect(next).toHaveBeenCalledTimes(1);
    expect(app.initialize).toHaveBeenCalledTimes(1);
    expect(app.process).not.toHaveBeenCalled();
  });

  it('processes a matching route and does not call next', async () => {
    const app = fakeApp({ hasRoute: true });
    const next = jest.fn().mockResolvedValue(undefined);

    await new TeamsMiddleware(app).onTurn(
      new FakeTurnContext(teamsActivity()) as unknown as TurnContext,
      next
    );

    expect(next).not.toHaveBeenCalled();
    expect(app.process).toHaveBeenCalledTimes(1);
    expect(() => agentSdkContext()).toThrow('agentSdkContext() called outside');
  });

  it('runs App.process so configured plugins reach the turn', async () => {
    type PluginContext = { pluginValue: string };
    const onActivity = jest.fn(() => ({ pluginValue: 'from-plugin' }));
    class TestPlugin implements IPlugin<PluginContext> {
      onActivity = onActivity;
    }
    Plugin({ name: 'testPlugin' })(TestPlugin);
    const plugin = new TestPlugin();
    const app = new App<IPlugin<PluginContext>>({
      clientId: 'bot-app-id',
      token: createAgentSdkTokenProvider(connectionManager({
        getAccessToken: jest.fn().mockResolvedValue('token'),
      } as unknown as AuthProvider)),
      plugins: [plugin],
      dangerouslyAllowUnauthenticatedRequests: true,
    });
    const handler = jest.fn(({ pluginValue }: PluginContext) => ({ ok: pluginValue }));
    app.message(/help/, handler as any);

    await new TeamsMiddleware(app).onTurn(
      new FakeTurnContext(teamsActivity()) as unknown as TurnContext,
      jest.fn().mockResolvedValue(undefined)
    );

    expect(onActivity).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.results[0]?.value).toEqual({ ok: 'from-plugin' });
  });

  it('propagates invoke responses through the Agents SDK send pipeline', async () => {
    const app = fakeApp({ hasRoute: true, invokeResponse: { status: 200, body: { ok: true } } });
    const context = new FakeTurnContext(teamsActivity(ActivityTypes.Invoke));

    await new TeamsMiddleware(app).onTurn(
      context as unknown as TurnContext,
      jest.fn().mockResolvedValue(undefined)
    );

    expect(context.sendActivity).toHaveBeenCalledTimes(1);
    expect(context.sendActivity).toHaveBeenCalledWith({
      type: ActivityTypes.InvokeResponse,
      value: { status: 200, body: { ok: true } },
    });
  });

  it('does not send an invoke response for plain message turns', async () => {
    const app = fakeApp({ hasRoute: true, invokeResponse: { status: 200, body: { ok: true } } });
    const context = new FakeTurnContext(teamsActivity(ActivityTypes.Message));

    await new TeamsMiddleware(app).onTurn(
      context as unknown as TurnContext,
      jest.fn().mockResolvedValue(undefined)
    );

    expect(context.sendActivity).not.toHaveBeenCalled();
  });
});

describe('createAgentSdkTokenProvider', () => {
  it('uses the default connection without an active turn', async () => {
    const provider = { getAccessToken: jest.fn().mockReturnValue('tok') } as unknown as AuthProvider;
    const connections = connectionManager(provider);

    const token = await createAgentSdkTokenProvider(connections).getAppToken('https://graph.microsoft.com/.default');

    expect(token).toBe('tok');
    expect(connections.getDefaultConnection).toHaveBeenCalledTimes(1);
    expect(connections.getTokenProvider).not.toHaveBeenCalled();
    expect((provider as any).getAccessToken).toHaveBeenCalledWith('https://graph.microsoft.com');
  });

  it('uses the identity-specific provider inside a turn', async () => {
    const provider = { getAccessToken: jest.fn().mockReturnValue('tok') } as unknown as AuthProvider;
    const connections = connectionManager(provider);
    const context = new FakeTurnContext(teamsActivity(), 'claims-identity');

    await _agentSdkContextStore.run(context as unknown as TurnContext, async () => {
      await createAgentSdkTokenProvider(connections).getAppToken('https://graph.microsoft.com/.default');
    });

    expect(connections.getTokenProvider).toHaveBeenCalledWith('claims-identity', 'https://graph.microsoft.com');
    expect(connections.getDefaultConnection).not.toHaveBeenCalled();
  });

  it('falls back to the default connection when the turn has no identity', async () => {
    const provider = { getAccessToken: jest.fn().mockReturnValue('tok') } as unknown as AuthProvider;
    const connections = connectionManager(provider);
    const context = new FakeTurnContext(teamsActivity());

    await _agentSdkContextStore.run(context as unknown as TurnContext, async () => {
      await createAgentSdkTokenProvider(connections).getAppToken('https://graph.microsoft.com/.default');
    });

    expect(connections.getDefaultConnection).toHaveBeenCalledTimes(1);
    expect(connections.getTokenProvider).not.toHaveBeenCalled();
  });

  it('falls back to the default connection when lookup fails', async () => {
    const provider = { getAccessToken: jest.fn().mockReturnValue('tok') } as unknown as AuthProvider;
    const connections = connectionManager(provider);
    connections.getTokenProvider.mockImplementation(() => {
      throw new Error('lookup failed');
    });
    const context = new FakeTurnContext(teamsActivity(), 'claims-identity');

    const token = await _agentSdkContextStore.run(context as unknown as TurnContext, async () => {
      return await createAgentSdkTokenProvider(connections).getAppToken('https://graph.microsoft.com/.default');
    });

    expect(token).toBe('tok');
    expect(connections.getDefaultConnection).toHaveBeenCalledTimes(1);
  });

  it('awaits asynchronous access tokens', async () => {
    const provider = { getAccessToken: jest.fn().mockResolvedValue('async-tok') } as unknown as AuthProvider;
    const connections = connectionManager(provider);

    const token = await createAgentSdkTokenProvider(connections).getAppToken('https://graph.microsoft.com/.default');

    expect(token).toBe('async-tok');
  });
});
