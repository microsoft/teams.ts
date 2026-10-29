import { HubConnectionState, HttpTransportType, IHttpConnectionOptions } from '@microsoft/signalr';
import { Client as HttpClient, ConsoleLogger } from '@microsoft/teams.common';

import { SignalRSocketConnection } from './socket-connection';
import { SocketModeAdapter } from './socket-mode-adapter';
import { configureSocketModeForTest } from './socket-mode.test-harness';
import { SocketConnectionContext, SocketConnectionHandlers, SocketReadyFrame } from './types';

type SignalRState = {
  autoReady: boolean;
  readyFrame?: SocketReadyFrame;
  handlers: Record<string, (...args: any[]) => any>;
  connections: {
    handlers: SignalRState['handlers'];
    state: HubConnectionState;
    url?: string;
    options: IHttpConnectionOptions;
    keepAliveIntervalInMilliseconds?: number;
    serverTimeoutInMilliseconds?: number;
  }[];
  started: number;
  stopped: number;
  startError?: Error;
  startGate?: Promise<void>;
  automaticReconnect: boolean;
  statefulReconnect: boolean;
  logger?: { log: (level: number, message: string) => void };
};

// Fake @microsoft/signalr so readiness/client-results can be driven without a
// real Azure SignalR connection. `__state` lets the test fire SocketReady /
// Activity frames the way Teams backend service would.
jest.mock('@microsoft/signalr', () => {
  const { HubConnectionState, HttpTransportType } = jest.requireActual<typeof import('@microsoft/signalr')>('@microsoft/signalr');
  const state: SignalRState = {
    autoReady: true, handlers: {}, connections: [], started: 0, stopped: 0,
    automaticReconnect: false, statefulReconnect: false,
  };

  class HubConnectionBuilder {
    private url?: string;
    private options: IHttpConnectionOptions = {};
    withUrl(url: string, options: IHttpConnectionOptions) {
      this.url = url;
      this.options = options;
      return this;
    }
    configureLogging(logger: { log: (level: number, message: string) => void }) {
      state.logger = logger;
      return this;
    }
    withAutomaticReconnect() { state.automaticReconnect = true; return this; }
    withStatefulReconnect() { state.statefulReconnect = true; return this; }
    build() {
      const handlers: SignalRState['handlers'] = {};
      const connection = {
        connectionId: 'signalr-transport-id',
        url: this.url,
        options: this.options,
        state: HubConnectionState.Disconnected,
        handlers,
        on: (name: string, handler: (...args: any[]) => any) => {
          handlers[name] = handler;
        },
        onreconnecting: (h: (...args: any[]) => any) => { handlers.__reconnecting = h; },
        onreconnected: (h: (...args: any[]) => any) => { handlers.__reconnected = h; },
        onclose: (h: (...args: any[]) => any) => { handlers.__close = h; },
        start: async () => {
          state.started++;
          await state.startGate;
          if (state.startError) throw state.startError;
          connection.state = HubConnectionState.Connected;
          if (state.autoReady) {
            handlers.SocketReady?.(state.readyFrame);
          }
        },
        stop: async () => {
          state.stopped++;
          connection.state = HubConnectionState.Disconnected;
        },
      };
      state.handlers = handlers;
      state.connections.push(connection);
      return connection;
    }
  }

  const LogLevel = {
    Trace: 0, Debug: 1, Information: 2, Warning: 3, Error: 4, Critical: 5, None: 6,
  };

  return { HubConnectionBuilder, HubConnectionState, HttpTransportType, LogLevel, __state: state };
});

const signalr = jest.requireMock('@microsoft/signalr') as {
  __state: SignalRState;
  LogLevel: typeof import('@microsoft/signalr').LogLevel;
};
const state = signalr.__state;

const post = jest.fn();
const client = { post } as unknown as HttpClient;

function makeContext(overrides: Partial<SocketConnectionContext> = {}): SocketConnectionContext {
  return {
    negotiateUrl: 'https://apx.example/v3/websockets/connect',
    client,
    getBotToken: async () => 'bot-jwt',
    readinessTimeoutMs: 50,
    keepAliveIntervalMs: 15000,
    serverTimeoutMs: 30000,
    ...overrides,
  };
}

function makeHandlers(overrides: Partial<SocketConnectionHandlers> = {}): SocketConnectionHandlers {
  return {
    onActivity: jest.fn(async () => undefined),
    onReady: jest.fn(),
    onClosed: jest.fn(),
    ...overrides,
  };
}

function makeAdapter(getBotToken = async () => 'bot-jwt', reconnectDelayMs = 0): SocketModeAdapter {
  const adapter = new SocketModeAdapter({
    negotiateBaseUrl: 'https://apx.example',
    geos: ['amer'],
  }, {
    client,
    tokenProvider: {
      getAppToken: async () => {
        const token = await getBotToken();
        return {
          appId: 'bot',
          from: 'azure',
          fromId: '',
          serviceUrl: '',
          toString: () => token,
          isExpired: () => false,
        };
      },
      getAgenticUserToken: async () => null,
      getAgenticAppToken: async () => null,
    },
    processActivity: async () => ({ status: 200 }),
    messagingEndpoint: '/api/messages',
    logger: new ConsoleLogger('test', { level: 'error' }),
  });
  configureSocketModeForTest(adapter, { reconnectDelaysMs: [reconnectDelayMs] });
  return adapter;
}

describe('SignalRSocketConnection', () => {
  beforeEach(() => {
    state.autoReady = true;
    state.readyFrame = { botKey: 'bot', connectionId: 'c1' };
    state.handlers = {};
    state.connections = [];
    state.started = 0;
    state.stopped = 0;
    state.startError = undefined;
    state.startGate = undefined;
    state.automaticReconnect = false;
    state.statefulReconnect = false;
    state.logger = undefined;
    post.mockReset();
    post.mockResolvedValue({
      status: 200,
      data: { url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 300 },
      headers: {},
    });
  });

  it('negotiates, connects, and resolves once SocketReady satisfies readiness', async () => {
    const onReady = jest.fn(() => conn.connectionId);
    const handlers = makeHandlers({ onReady });
    const conn = new SignalRSocketConnection(makeContext(), handlers);

    expect(conn.connectionId).toBeUndefined();
    await conn.start();

    expect(post).toHaveBeenCalledTimes(1);
    expect(state.started).toBe(1);
    expect(handlers.onReady).toHaveBeenCalledWith({ botKey: 'bot', connectionId: 'c1' });
    expect(conn.connectionId).toBe('c1');
    expect(conn.expiresInSeconds).toBe(300);
    expect(onReady).toHaveReturnedWith('c1');
  });

  it('keeps server IDs independent across overlapping sockets', async () => {
    const first = new SignalRSocketConnection(
      makeContext({ negotiateUrl: 'https://apx.example/amer/v3/websockets/connect' }),
      makeHandlers()
    );
    await first.start();

    state.readyFrame = { botKey: 'bot', connectionId: 'c2' };
    post.mockResolvedValueOnce({
      status: 200,
      data: { url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 86400 },
      headers: {},
    });
    const next = new SignalRSocketConnection(
      makeContext({ negotiateUrl: 'https://apx.example/emea/v3/websockets/connect' }),
      makeHandlers()
    );
    await next.start();

    expect(first.connectionId).toBe('c1');
    expect(next.connectionId).toBe('c2');
    expect(first.expiresInSeconds).toBe(300);
    expect(next.expiresInSeconds).toBe(86400);

    await first.stop();
    await next.stop();
  });

  it('sends the exact predecessor ID only when a planned refresh replaces an identified live socket', async () => {
    jest.useFakeTimers();
    const adapter = makeAdapter();
    const header = 'x-ms-socket-replaces-connection-id';
    try {
      state.readyFrame = { connectionId: ' c1/+== ' };
      await adapter.start();
      expect(post.mock.calls[0][2].headers).not.toHaveProperty(header);

      state.readyFrame = { connectionId: '' };
      await jest.advanceTimersByTimeAsync(240_000);
      expect(post).toHaveBeenCalledTimes(2);
      expect(post.mock.calls[1][0]).toBe('https://apx.example/amer/v3/websockets/connect');
      expect(post.mock.calls[1][2].headers[header]).toBe(' c1/+== ');
      expect(state.stopped).toBe(0);

      state.readyFrame = { connectionId: 'c3' };
      await jest.advanceTimersByTimeAsync(240_000);
      expect(post).toHaveBeenCalledTimes(3);
      expect(post.mock.calls[2][2].headers).not.toHaveProperty(header);

      state.connections[2].handlers.__close(new Error('network drop'));
      await jest.advanceTimersByTimeAsync(0);
      expect(post).toHaveBeenCalledTimes(4);
      expect(post.mock.calls[3][2].headers).not.toHaveProperty(header);
    } finally {
      await adapter.stop();
      jest.useRealTimers();
    }
  });

  it('gets a fresh connect response for every socket attempt, including retries and rotations', async () => {
    jest.useFakeTimers();
    const adapter = makeAdapter();
    post.mockImplementation(async () => {
      const attempt = post.mock.calls.length;
      state.startError = attempt % 2 === 1 ? new Error('socket failed to connect') : undefined;
      return {
        status: 200,
        data: { url: `https://sr/hub-${attempt}`, accessToken: `sr-token-${attempt}`, expiresIn: 300 },
        headers: {},
      };
    });
    try {
      await adapter.start();
      expect(state.connections).toHaveLength(2);

      await jest.advanceTimersByTimeAsync(240_000);
      expect(state.connections).toHaveLength(4);

      state.connections[3].handlers.__close(new Error('network drop'));
      await jest.advanceTimersByTimeAsync(0);
      expect(state.connections).toHaveLength(6);
      expect(post).toHaveBeenCalledTimes(6);
      expect(state.started).toBe(6);
      for (const [index, connection] of state.connections.entries()) {
        expect(connection.url).toBe(`https://sr/hub-${index + 1}`);
        expect(await connection.options.accessTokenFactory?.()).toBe(`sr-token-${index + 1}`);
      }
    } finally {
      await adapter.stop();
      jest.useRealTimers();
    }
  });

  it.each(['retry backoff', 'token acquisition'])('keeps serving through refresh 429s and omits an ID expiring during %s', async (phase) => {
    jest.useFakeTimers();
    const getBotToken = jest.fn(async () => 'bot-jwt');
    const adapter = makeAdapter(getBotToken);
    const header = 'x-ms-socket-replaces-connection-id';
    let releaseToken!: () => void;
    const tokenGate = new Promise<void>((resolve) => { releaseToken = resolve; });
    let finishHandshake!: () => void;
    state.startGate = new Promise<void>((resolve) => { finishHandshake = resolve; });
    try {
      const start = adapter.start();
      await jest.advanceTimersByTimeAsync(30_000);
      finishHandshake();
      await start;
      state.startGate = undefined;
      const predecessor = state.connections[0];
      post.mockResolvedValue({ status: 429, data: 'throttled', headers: { 'retry-after': '15' } });

      await jest.advanceTimersByTimeAsync(209_999);
      expect(post).toHaveBeenCalledTimes(1);
      await jest.advanceTimersByTimeAsync(1);
      expect(post).toHaveBeenCalledTimes(2);
      expect(post.mock.calls[1][2].headers[header]).toBe('c1');

      for (let retry = 0; retry < 3; retry++) {
        if (retry === 2) {
          post.mockResolvedValueOnce({
            status: 429,
            data: 'throttled',
            headers: { 'retry-after': phase === 'token acquisition' ? '7' : '20' },
          });
        }
        await jest.advanceTimersByTimeAsync(14_999);
        expect(post).toHaveBeenCalledTimes(retry + 2);
        expect(state.stopped).toBe(0);
        await expect(predecessor.handlers.Activity({
          envelopeId: `during-backoff-${retry}`,
          payload: { type: 'message', text: 'still serving' },
        })).resolves.toMatchObject({ status: 200 });
        await jest.advanceTimersByTimeAsync(1);
        expect(post).toHaveBeenCalledTimes(retry + 3);
        expect(post.mock.calls[retry + 2][2].headers[header]).toBe('c1');
      }

      post.mockResolvedValue({
        status: 200,
        data: { url: 'wss://sr/replacement', accessToken: 'fresh-token', expiresIn: 600 },
        headers: {},
      });
      if (phase === 'token acquisition') {
        getBotToken.mockImplementationOnce(async () => {
          await tokenGate;
          return 'bot-jwt';
        });
        await jest.advanceTimersByTimeAsync(6_999);
        expect(getBotToken).toHaveBeenCalledTimes(5);
        await jest.advanceTimersByTimeAsync(1);
        expect(getBotToken).toHaveBeenCalledTimes(6);
        await jest.advanceTimersByTimeAsync(7_999);
      } else {
        await jest.advanceTimersByTimeAsync(14_999);
      }
      expect(post).toHaveBeenCalledTimes(5);
      await jest.advanceTimersByTimeAsync(1);
      expect(post).toHaveBeenCalledTimes(5);
      expect(state.stopped).toBe(0);
      await expect(predecessor.handlers.Activity({
        envelopeId: 'expired-during-wait',
        payload: { type: 'message', text: 'still serving at expiry' },
      })).resolves.toMatchObject({ status: 200 });
      if (phase === 'retry backoff') {
        await jest.advanceTimersByTimeAsync(4_999);
        expect(post).toHaveBeenCalledTimes(5);
        await jest.advanceTimersByTimeAsync(1);
      }
      releaseToken();
      await jest.advanceTimersByTimeAsync(0);

      expect(post).toHaveBeenCalledTimes(6);
      expect(post.mock.calls[5][2].headers).not.toHaveProperty(header);
      expect(state.connections).toHaveLength(2);
      expect(state.connections[1].url).toBe('wss://sr/replacement');
      expect(await state.connections[1].options.accessTokenFactory?.()).toBe('fresh-token');
      expect(predecessor.state).toBe(HubConnectionState.Connected);
      expect(state.stopped).toBe(0);
      expect(adapter.status).toBe('ready');
      await expect(predecessor.handlers.Activity({
        envelopeId: 'after-expiry',
        payload: { type: 'message', text: 'still open' },
      })).resolves.toMatchObject({ status: 200 });
    } finally {
      finishHandshake();
      releaseToken();
      await adapter.stop();
      jest.useRealTimers();
    }
  });

  it.each([
    { phase: 'token acquisition', transportState: HubConnectionState.Disconnecting },
    { phase: 'token acquisition', transportState: HubConnectionState.Disconnected },
    { phase: 'retry backoff', transportState: HubConnectionState.Disconnected },
  ])('omits a predecessor during $phase once its transport is $transportState', async ({ phase, transportState }) => {
    jest.useFakeTimers();
    const getBotToken = jest.fn(async () => 'bot-jwt');
    const adapter = makeAdapter(getBotToken, 100);
    const header = 'x-ms-socket-replaces-connection-id';
    let releaseToken!: () => void;
    const tokenGate = new Promise<void>((resolve) => { releaseToken = resolve; });
    try {
      await adapter.start();
      const predecessor = state.connections[0];
      post.mockRejectedValueOnce(new Error('negotiate unavailable'));
      await jest.advanceTimersByTimeAsync(240_100);
      expect(post).toHaveBeenCalledTimes(2);
      expect(post.mock.calls[1][2].headers[header]).toBe('c1');

      if (phase === 'token acquisition') {
        getBotToken.mockImplementationOnce(async () => {
          await tokenGate;
          return 'bot-jwt';
        });
        await jest.advanceTimersByTimeAsync(100);
        expect(getBotToken).toHaveBeenCalledTimes(3);
        expect(post).toHaveBeenCalledTimes(2);
      }

      predecessor.state = transportState;
      if (phase === 'retry backoff') {
        predecessor.handlers.__close(new Error('predecessor closed'));
      }
      releaseToken();
      await jest.advanceTimersByTimeAsync(100);

      expect(post).toHaveBeenCalledTimes(3);
      expect(post.mock.calls[2][2].headers).not.toHaveProperty(header);
      if (phase === 'token acquisition') {
        predecessor.handlers.__close(new Error('delayed close notification'));
      }
      expect(adapter.status).toBe('ready');
    } finally {
      releaseToken();
      await adapter.stop();
      jest.useRealTimers();
    }
  });

  it('does NOT resolve start until SocketReady arrives (readiness gate)', async () => {
    state.autoReady = false; // socket opens but Teams backend service never confirms readiness
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext({ readinessTimeoutMs: 10_000 }), handlers);

    let resolved = false;
    const startPromise = conn.start().then(() => { resolved = true; });

    // Let negotiate + connect microtasks flush; still not ready.
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 20));
    expect(resolved).toBe(false);
    expect(handlers.onReady).not.toHaveBeenCalled();

    // Teams backend service now confirms readiness -> start resolves.
    state.handlers.SocketReady({ botKey: 'bot' });
    await startPromise;
    expect(resolved).toBe(true);
    expect(conn.connectionId).toBeUndefined();
  });

  it('rejects and closes the socket when readiness times out', async () => {
    state.autoReady = false;
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext({ readinessTimeoutMs: 20 }), handlers);

    await expect(conn.start()).rejects.toThrow(/readiness timed out/i);
    expect(state.stopped).toBeGreaterThanOrEqual(1);
  });

  it('returns the handler result on the Activity method (SignalR client results)', async () => {
    const reply = { protocolVersion: 1, status: 201, body: { ok: true } };
    const onActivity = jest.fn(async () => reply);
    const handlers = makeHandlers({ onActivity });
    const conn = new SignalRSocketConnection(makeContext(), handlers);

    await conn.start();

    const result = await state.handlers.Activity({ type: 'invoke', envelopeId: 'e1' });
    expect(onActivity).toHaveBeenCalledWith({ type: 'invoke', envelopeId: 'e1' });
    expect(result).toBe(reply);
  });

  it('dispatches envelopes with delivery metadata and malformed headers', async () => {
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext(), handlers);
    await conn.start();

    const envelope = {
      envelopeId: 'e1',
      BotKey: 'bot-key-1',
      DeadlineMs: 25000,
      headers: 'junk',
      payload: { type: 'message' },
    };
    await state.handlers.Activity(envelope);

    expect(handlers.onActivity).toHaveBeenCalledWith(envelope);
    expect(state.stopped).toBe(0);
  });

  it('reports a terminal close through onClosed so the supervisor can reconnect', async () => {
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext(), handlers);
    await conn.start();

    state.handlers.__close(new Error('drop'));
    expect(handlers.onClosed).toHaveBeenCalledWith(expect.any(Error));
  });

  it('does not let SignalR reconnect or fall back to another transport with the same token', async () => {
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers());
    await conn.start();
    expect(state.automaticReconnect).toBe(false);
    expect(state.handlers.__reconnecting).toBeUndefined();
    expect(state.handlers.__reconnected).toBeUndefined();
    const options = state.connections[0].options;
    expect(state.statefulReconnect).toBe(false);
    expect(options.skipNegotiation).not.toBe(true);

    const signalr = jest.requireActual<typeof import('@microsoft/signalr')>('@microsoft/signalr');
    const send = jest.fn()
      .mockResolvedValueOnce(new signalr.HttpResponse(200, 'OK', JSON.stringify({
        negotiateVersion: 1,
        connectionId: 'one',
        connectionToken: 'one',
        availableTransports: [
          { transport: 'WebSockets', transferFormats: ['Text'] },
          { transport: 'LongPolling', transferFormats: ['Text'] },
        ],
      })))
      .mockRejectedValue(new Error('unexpected fallback negotiation'));
    class NegotiationClient extends signalr.HttpClient {
      send = send;
    }
    const WebSocket = Object.assign(jest.fn(() => {
      throw new Error('WebSocket failed');
    }), { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 });
    const accessTokenFactory = jest.fn(options.accessTokenFactory);
    const transportOptions = { ...options, accessTokenFactory, httpClient: new NegotiationClient(), WebSocket };
    const hub = new signalr.HubConnectionBuilder()
      .withUrl('https://sr/hub', transportOptions)
      .configureLogging(signalr.LogLevel.None)
      .build();
    await expect(hub.start()).rejects.toThrow('WebSocket failed');
    expect(WebSocket).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledTimes(1);
    expect(accessTokenFactory).toHaveBeenCalledTimes(2);
    expect(accessTokenFactory).toHaveReturnedWith('sr-token');
    expect(options.transport).toBe(HttpTransportType.WebSockets);
    await conn.stop();
  });

  it('applies explicit keep-alive and server-timeout to the connection', async () => {
    const conn = new SignalRSocketConnection(
      makeContext({ keepAliveIntervalMs: 1234, serverTimeoutMs: 5678 }),
      makeHandlers()
    );
    await conn.start();
    expect(state.connections[0].keepAliveIntervalInMilliseconds).toBe(1234);
    expect(state.connections[0].serverTimeoutInMilliseconds).toBe(5678);
  });

  it('rejects immediately when start is called with an already-aborted signal', async () => {
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers());
    const ac = new AbortController();
    ac.abort();
    await expect(conn.start(ac.signal)).rejects.toThrow(/aborted/i);
    expect(post).not.toHaveBeenCalled();
  });

  it('still reaches readiness even when an onReady observer throws', async () => {
    // The internal readiness transition must complete before observers are
    // notified, so a throwing listener can't wedge the connection.
    const onReady = jest.fn(() => {
      throw new Error('listener boom');
    });
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers({ onReady }));
    await expect(conn.start()).resolves.toBeUndefined();
    expect(onReady).toHaveBeenCalled();
  });

  it('fires onReady at most once even if a duplicate SocketReady arrives', async () => {
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext(), handlers);
    await conn.start();
    expect(handlers.onReady).toHaveBeenCalledTimes(1);

    // A late/duplicate readiness frame must be ignored once the gate settled.
    state.handlers.SocketReady({ botKey: 'bot', connectionId: 'c2' });
    expect(handlers.onReady).toHaveBeenCalledTimes(1);
    expect(conn.connectionId).toBe('c1');
  });

  it('ignores a SocketReady that arrives after stop', async () => {
    state.autoReady = false;
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext({ readinessTimeoutMs: 10_000 }), handlers);
    const startPromise = conn.start();
    await new Promise((r) => setTimeout(r, 10));

    await conn.stop();
    // A readiness frame racing in after stop must not re-notify observers.
    state.handlers.SocketReady?.({ botKey: 'bot', connectionId: 'late-id' });
    expect(handlers.onReady).not.toHaveBeenCalled();
    expect(conn.connectionId).toBeUndefined();

    // Settle the pending start so the test doesn't leak a promise.
    state.handlers.__close?.(new Error('stopped'));
    await startPromise.catch(() => undefined);
  });

  it('stops the started connection when the signal aborts during start', async () => {
    // autoReady=false so readiness stays pending while we abort mid-connect.
    state.autoReady = false;
    const conn = new SignalRSocketConnection(makeContext({ readinessTimeoutMs: 10_000 }), makeHandlers());
    const ac = new AbortController();

    const startPromise = conn.start(ac.signal);
    await new Promise((r) => setTimeout(r, 10)); // let negotiate+start flush
    ac.abort();

    await expect(startPromise).rejects.toThrow(/aborted/i);
    expect(state.stopped).toBeGreaterThanOrEqual(1);
  });

  it('stops the connection when the signal aborts during the SignalR handshake', async () => {
    let finishHandshake!: () => void;
    state.startGate = new Promise<void>((resolve) => {
      finishHandshake = resolve;
    });
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers());
    const ac = new AbortController();

    const startPromise = conn.start(ac.signal);
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(state.started).toBe(1);

    ac.abort();
    await Promise.resolve();
    expect(state.stopped).toBe(1);

    finishHandshake();
    await expect(startPromise).rejects.toThrow(/aborted/i);
  });

  it('removes the abort listener when the SignalR handshake fails', async () => {
    state.startError = new Error('handshake failed');
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers());
    const ac = new AbortController();
    const removeEventListener = jest.spyOn(ac.signal, 'removeEventListener');

    await expect(conn.start(ac.signal)).rejects.toThrow('handshake failed');

    expect(removeEventListener).toHaveBeenCalledWith('abort', expect.any(Function));
  });

  it('bridges SignalR internal diagnostics into the app logger', async () => {
    const log = {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers(), log as any);
    await conn.start();

    // SignalR emits diagnostics through the logger passed to configureLogging;
    // simulate messages at each level and assert they route to the app logger.
    expect(state.logger).toBeDefined();
    state.logger!.log(signalr.LogLevel.Error, 'boom');
    state.logger!.log(signalr.LogLevel.Warning, 'flaky');
    state.logger!.log(signalr.LogLevel.Information, 'connected');
    state.logger!.log(signalr.LogLevel.Debug, 'noisy');

    expect(log.error).toHaveBeenCalledWith(expect.stringContaining('boom'));
    expect(log.warn).toHaveBeenCalledWith(expect.stringContaining('flaky'));
    expect(log.info).toHaveBeenCalledWith(expect.stringContaining('connected'));
    expect(log.debug).toHaveBeenCalledWith(expect.stringContaining('noisy'));
  });

  it('redacts the SignalR access token from internal diagnostics', async () => {
    const log = {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers(), log as any);
    await conn.start();

    state.logger!.log(
      signalr.LogLevel.Debug,
      'connecting to wss://sr/hub?access_token=sr-token'
    );

    const diagnostics = log.debug.mock.calls.flat().join(' ');
    expect(diagnostics).not.toContain('sr-token');
    expect(diagnostics).toContain('access_token=[REDACTED]');
  });
});
