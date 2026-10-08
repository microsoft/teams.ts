import { ITokenProvider, JsonWebToken, PUBLIC } from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { App, AppOptions } from '../app';
import { createTestApp } from '../test-utils';
import { IPlugin } from '../types';

import { SocketModeAdapter } from './socket-mode-adapter';
import { ReplyFrame, SocketActivityEnvelope, SocketModeOptions, SocketReadyFrame } from './types';

type SyntheticHub = {
  activity?: (envelope: SocketActivityEnvelope) => Promise<ReplyFrame | undefined>;
  ready?: (frame: SocketReadyFrame) => void;
  closed?: (error?: Error) => void;
  stop: jest.Mock;
};

jest.mock('@microsoft/signalr', () => {
  const hubs: SyntheticHub[] = [];
  class HubConnectionBuilder {
    withUrl() { return this; }
    configureLogging() { return this; }
    build() {
      const hub: SyntheticHub = { stop: jest.fn(async () => undefined) };
      hubs.push(hub);
      return {
        on(name: string, handler: never) {
          if (name === 'Activity') hub.activity = handler;
          if (name === 'SocketReady') hub.ready = handler;
        },
        onclose(handler: (error?: Error) => void) { hub.closed = handler; },
        async start() { hub.ready?.({ botKey: 'blueprint', connectionId: String(hubs.length) }); },
        stop: hub.stop,
      };
    }
  }
  return { HubConnectionBuilder, LogLevel: {}, __hubs: hubs };
});

const hubs: SyntheticHub[] = jest.requireMock('@microsoft/signalr').__hubs;
const scope = 'api://synthetic-socket/.default';
const agenticOptions = { agenticAppId: 'connection-instance', agenticTokenScope: scope };
const recipient = {
  id: 'recipient-id',
  role: 'agenticUser',
  agenticAppBlueprintId: 'blueprint',
  agenticAppId: 'recipient-instance',
  agenticUserId: 'recipient-user',
  tenantId: 'recipient-tenant',
};

function jwt(label: string): string {
  return `e30.${Buffer.from(JSON.stringify({ appid: label })).toString('base64url')}.signature`;
}

function envelope(identity: unknown = recipient): SocketActivityEnvelope {
  return {
    envelopeId: 'env-1',
    botKey: 'blueprint',
    payload: {
      type: 'message',
      id: 'message-1',
      text: 'hello',
      from: { id: 'human' },
      recipient: identity,
      conversation: { id: 'conversation-1' },
      channelId: 'msteams',
      serviceUrl: 'https://synthetic.example/teams',
    },
  };
}

describe('agentic Socket Mode through App', () => {
  const apps: App[] = [];
  const requests: { url?: string; authorization?: unknown; data?: unknown }[] = [];
  let expiresIn = 0;

  function provider() {
    return {
      getAppToken: jest.fn(async () => jwt('classic')),
      getAgenticAppToken: jest.fn(async (
        _scope: string, appId: string, tenantId?: string
      ) => jwt(`${appId}:${tenantId}`)),
      getAgenticUserToken: jest.fn(async (
        _scope: string, appId: string, userId: string, tenantId?: string
      ) => jwt(`${appId}:${userId}:${tenantId}`)),
    } satisfies ITokenProvider;
  }

  function makeApp(
    socketOptions: SocketModeOptions = agenticOptions,
    overrides: Partial<AppOptions<IPlugin>> = {},
  ) {
    const tokens = provider();
    const app = createTestApp({
      clientId: 'blueprint',
      clientSecret: '',
      tenantId: 'credential-tenant',
      token: tokens,
      logger: new ConsoleLogger('test', { level: 'error' }),
      socketMode: {
        geos: [''],
        negotiateBaseUrl: 'https://synthetic.example',
        startupTimeoutMs: 0,
        reconnectDelaysMs: [0],
        ...socketOptions,
      },
      client: {
        interceptors: [{
          request: ({ config }) => {
            config.adapter = async (request) => {
              requests.push({
                url: request.url,
                authorization: request.headers.get('authorization'),
                data: typeof request.data === 'string' ? JSON.parse(request.data) : request.data,
              });
              const data = request.url?.endsWith('/v3/websockets/connect')
                ? { url: 'https://synthetic.example/hub', accessToken: 'synthetic-signalr', expiresIn }
                : { id: 'sent-activity' };
              return { data, status: 200, statusText: 'OK', headers: {}, config: request };
            };
            return config;
          },
        }],
      },
      ...overrides,
    });
    apps.push(app);
    return { app, tokens };
  }

  beforeEach(() => {
    hubs.length = 0;
    requests.length = 0;
    expiresIn = 0;
  });

  afterEach(async () => {
    for (const app of apps.splice(0)) await app.stop();
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it.each([
    { agenticAppId: 'instance' },
    { agenticAppId: 'instance', agenticTokenScope: '' },
    { agenticAppId: 'instance', agenticTokenScope: '   ' },
    { agenticTokenScope: scope },
    { agenticTenantId: 'tenant' },
    { agenticTokenScope: scope, agenticTenantId: 'tenant' },
  ])('rejects incomplete options %j before startup', (options) => {
    expect(() => makeApp(options)).toThrow(/socketMode\.agentic/);
    expect(requests).toHaveLength(0);
  });

  it.each([undefined, 'override-tenant'])('negotiates as the instance with tenant %s', async (tenant) => {
    const { app, tokens } = makeApp({ ...agenticOptions, agenticTenantId: tenant });
    await app.start();

    expect(tokens.getAgenticAppToken).toHaveBeenCalledWith(
      scope, 'connection-instance', tenant ?? 'credential-tenant',
    );
    expect(tokens.getAppToken).not.toHaveBeenCalled();
    expect(tokens.getAgenticUserToken).not.toHaveBeenCalled();
    expect(requests[0].authorization).toBe(
      `Bearer ${jwt(`connection-instance:${tenant ?? 'credential-tenant'}`)}`,
    );
    expect(app.socketMode?.status).toBe('ready');

    await app.tokenProvider.getAppToken();
    expect(tokens.getAppToken).toHaveBeenCalledWith(PUBLIC.botScope, 'credential-tenant');
  });

  it('keeps classic connection authentication when agentic options are omitted', async () => {
    const { app, tokens } = makeApp({});
    await app.start();
    expect(tokens.getAppToken).toHaveBeenCalledWith(PUBLIC.botScope, 'credential-tenant');
    expect(tokens.getAgenticAppToken).not.toHaveBeenCalled();
    expect(requests[0].authorization).toBe(`Bearer ${jwt('classic')}`);
  });

  it('preserves the exported classic tokenProvider constructor path', async () => {
    const { app, tokens } = makeApp({});
    const adapter = new SocketModeAdapter({ geos: [''], startupTimeoutMs: 0 }, {
      client: app.client,
      tokenProvider: app.tokenProvider,
      messagingEndpoint: '/api/messages',
      processActivity: async () => ({ status: 200 }),
      logger: new ConsoleLogger('test', { level: 'error' }),
    });
    try {
      await adapter.start();
      expect(adapter.status).toBe('ready');
      expect(tokens.getAppToken).toHaveBeenCalledTimes(1);
      expect(tokens.getAgenticAppToken).not.toHaveBeenCalled();
    } finally {
      await adapter.stop();
    }
  });

  it.each([
    agenticOptions,
    { agenticTokenScope: scope },
    { agenticTenantId: 'tenant' },
  ])('rejects agentic options on the legacy constructor path: %j', (options) => {
    const { app, tokens } = makeApp({});
    expect(() => new SocketModeAdapter(options, {
      client: app.client,
      tokenProvider: app.tokenProvider,
      messagingEndpoint: '/api/messages',
      processActivity: async () => ({ status: 200 }),
    })).toThrow(/App-selected getBotToken/);
    expect(tokens.getAppToken).not.toHaveBeenCalled();
  });

  it.each([
    { options: { ...agenticOptions, agenticAppId: '' }, appOptions: {}, error: /agenticAppId is required/ },
    { options: agenticOptions, appOptions: { tenantId: '' }, error: /tenantId is required/ },
    { options: { ...agenticOptions, agenticTenantId: '' }, appOptions: {}, error: /tenantId is required/ },
    { options: agenticOptions, appOptions: { token: undefined }, error: /require ClientCredentials/ },
    { options: agenticOptions, appOptions: { token: undefined, managedIdentityClientId: 'system' }, error: /require ClientCredentials/ },
    { options: agenticOptions, appOptions: { token: async () => jwt('classic') }, error: /getAgenticAppToken/ },
    { options: agenticOptions, appOptions: { token: { getAppToken: async () => jwt('classic') } }, error: /getAgenticAppToken/ },
  ])('defers invalid credentials to acquisition: $error', async ({ options, appOptions, error }) => {
    const { app } = makeApp(options, appOptions);
    await expect(app.start()).rejects.toThrow(error);
    expect(requests).toHaveLength(0);
    expect(app.socketMode?.status).toBe('stopped');
  });

  it.each([null, undefined, ''])('rejects a provider returning %s without classic fallback', async (result) => {
    const getAppToken = jest.fn(async () => jwt('classic'));
    const { app } = makeApp(agenticOptions, {
      token: { getAppToken, getAgenticAppToken: async () => result },
    });
    await expect(app.start()).rejects.toThrow();
    expect(getAppToken).not.toHaveBeenCalled();
    expect(requests).toHaveLength(0);
  });

  it.each(['', ' ', '\t\n'])('rejects a blank selected token %j before negotiation', async (value) => {
    const { app, tokens } = makeApp();
    const emptyToken = new JsonWebToken(jwt('empty'));
    jest.spyOn(emptyToken, 'toString').mockReturnValue(value);
    jest.spyOn(app.tokenProvider, 'getAgenticAppToken').mockResolvedValue(emptyToken);
    await expect(app.start()).rejects.toThrow(/no bot token/);
    expect(tokens.getAppToken).not.toHaveBeenCalled();
    expect(requests).toHaveLength(0);
  });

  it('reports missing App credentials without negotiating', async () => {
    const { app } = makeApp(agenticOptions, { clientId: '', token: undefined });
    await expect(app.start()).rejects.toThrow(/could not acquire a connection token/);
    expect(requests).toHaveLength(0);
  });

  it('surfaces provider errors without falling back', async () => {
    const { app, tokens } = makeApp();
    const error = new Error('agent provider failed');
    tokens.getAgenticAppToken.mockRejectedValue(error);
    await expect(app.start()).rejects.toBe(error);
    expect(tokens.getAppToken).not.toHaveBeenCalled();
    expect(requests).toHaveLength(0);
  });

  it.each([null, undefined, '', [], 42, {}])('rejects malformed recipient %j', async (identity) => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.({
      ...envelope(),
      payload: { ...envelope().payload as object, recipient: identity },
    });
    expect(reply).toMatchObject({ status: 400, envelopeId: 'env-1', botKey: 'blueprint' });
    expect(handler).not.toHaveBeenCalled();
  });

  it.each(
    ['agenticAppBlueprintId', 'agenticAppId', 'tenantId', 'agenticUserId'].flatMap((key) =>
      [undefined, null, '', ' ', ' padded', 'padded ', 123, {}, []].map((value) => ({ key, value })),
    ),
  )('rejects recipient $key=$value', async ({ key, value }) => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.(envelope({ ...recipient, [key]: value }));
    expect(reply?.status).toBe(400);
    expect(handler).not.toHaveBeenCalled();
  });

  it('rejects a recipient from another blueprint', async () => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.(envelope({ ...recipient, agenticAppBlueprintId: 'other' }));
    expect(reply?.status).toBe(400);
    expect(handler).not.toHaveBeenCalled();
  });

  it.each(['other', 'connection-instance', '', null, 123])('rejects mismatched botKey %j', async (botKey) => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.({ ...envelope(), botKey: undefined, BotKey: botKey } as SocketActivityEnvelope);
    expect(reply).toMatchObject({ status: 400, botKey: 'blueprint' });
    expect(handler).not.toHaveBeenCalled();
  });

  it.each([
    { protocolVersion: 999 },
    { payload: undefined },
  ])('uses the blueprint for early error replies: %j', async (overrides) => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.({ ...envelope(), botKey: 'connection-instance', ...overrides });
    expect(reply).toMatchObject({ status: 400, botKey: 'blueprint', envelopeId: 'env-1' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('uses the blueprint for processing failures', async () => {
    const { app } = makeApp();
    jest.spyOn(app, 'onActivity').mockRejectedValue(new Error('pipeline failed'));
    await app.start();
    expect(await hubs[0].activity?.(envelope())).toMatchObject({ status: 500, botKey: 'blueprint' });
  });

  it('accepts an absent botKey and keeps the blueprint as reply identity', async () => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.({ ...envelope(), botKey: undefined });
    expect(reply).toMatchObject({ status: 200, botKey: 'blueprint' });
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it.each([undefined, null])('accepts app-backed identities without a user ID (%s)', async (userId) => {
    const { app, tokens } = makeApp();
    app.on('message', async ({ send }) => { await send('app reply'); });
    await app.start();
    const identity = { ...recipient, role: 'bot', agenticUserId: userId };
    expect(await hubs[0].activity?.(envelope(identity))).toMatchObject({ status: 200 });
    expect(tokens.getAgenticAppToken).toHaveBeenLastCalledWith(
      PUBLIC.agenticIdentityBotScope, identity.agenticAppId, identity.tenantId,
    );
    expect(tokens.getAgenticUserToken).not.toHaveBeenCalled();
    expect(requests[1].data).toMatchObject({ from: JSON.parse(JSON.stringify(identity)) });
  });

  it.each(['', ' padded ', 123])('validates supplied AU IDs even without agenticUser role: %j', async (userId) => {
    const { app } = makeApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();
    const reply = await hubs[0].activity?.(envelope({ ...recipient, role: 'bot', agenticUserId: userId }));
    expect(reply?.status).toBe(400);
    expect(handler).not.toHaveBeenCalled();
  });

  it('leaves classic metadata and botKey handling untouched', async () => {
    const { app } = makeApp({});
    let seen: unknown;
    app.on('message', async ({ activity }) => { seen = activity.recipient; });
    await app.start();
    const identity = { ...recipient, agenticAppBlueprintId: 'other', agenticUserId: '' };
    const reply = await hubs[0].activity?.({ ...envelope(identity), botKey: 'other' });
    expect(reply).toMatchObject({ status: 200, botKey: 'blueprint' });
    expect(seen).toBe(identity);
  });

  it('preserves interleaved recipient auth and sender identity across reconnect and refresh', async () => {
    jest.useFakeTimers();
    expiresIn = 120;
    const { app, tokens } = makeApp();
    const second = { ...recipient, id: 'second', agenticAppId: 'sibling-instance', agenticUserId: 'sibling-user', tenantId: 'sibling-tenant' };
    let release!: () => void;
    const gate = new Promise<void>((resolve) => { release = resolve; });
    app.on('message', async ({ activity, send }) => {
      if (activity.recipient.id === recipient.id) await gate;
      await send(`reply for ${activity.recipient.id}`);
    });
    await app.start();
    const firstTurn = hubs[0].activity?.(envelope());
    expect(await hubs[0].activity?.(envelope(second))).toMatchObject({ status: 200, botKey: 'blueprint' });
    release();
    expect(await firstTurn).toMatchObject({ status: 200, botKey: 'blueprint' });

    hubs[0].closed?.(new Error('synthetic drop'));
    await jest.advanceTimersByTimeAsync(0);
    expect(hubs).toHaveLength(2);
    await hubs[1].activity?.(envelope(recipient));
    await jest.advanceTimersByTimeAsync(60_000);
    expect(hubs).toHaveLength(3);
    await hubs[2].activity?.(envelope(second));
    await hubs[1].activity?.(envelope(recipient));

    expect(tokens.getAgenticAppToken.mock.calls).toEqual(Array(3).fill([
      scope, 'connection-instance', 'credential-tenant',
    ]));
    expect(tokens.getAgenticUserToken.mock.calls).toEqual(
      [second, recipient, recipient, second, recipient].map((identity) => [
        PUBLIC.agenticIdentityBotScope, identity.agenticAppId, identity.agenticUserId, identity.tenantId,
      ]),
    );
    const outbound = requests.filter((request) => !request.url?.endsWith('/v3/websockets/connect'));
    expect(outbound).toHaveLength(5);
    for (const [index, identity] of [second, recipient, recipient, second, recipient].entries()) {
      expect(outbound[index]).toMatchObject({
        authorization: `Bearer ${jwt(`${identity.agenticAppId}:${identity.agenticUserId}:${identity.tenantId}`)}`,
        data: { from: identity },
      });
    }
    expect(tokens.getAppToken).not.toHaveBeenCalled();
    await app.stop();
    expect(hubs.every((hub) => hub.stop.mock.calls.length > 0)).toBe(true);
    expect(await hubs[2].activity?.(envelope())).toBeUndefined();
    await jest.advanceTimersByTimeAsync(120_000);
    expect(hubs).toHaveLength(3);
    expect(jest.getTimerCount()).toBe(0);
  });
});
