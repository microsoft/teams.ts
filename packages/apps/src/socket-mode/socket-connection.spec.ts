import { SignalRSocketConnection } from './socket-connection';
import { SocketConnectionContext, SocketConnectionHandlers } from './types';

// Fake @microsoft/signalr so readiness/client-results can be driven without a
// real Azure SignalR connection. `__state` lets the test fire SocketReady /
// Activity frames the way Teams backend service would.
jest.mock('@microsoft/signalr', () => {
  const state: {
    autoReady: boolean;
    handlers: Record<string, (...args: any[]) => any>;
    started: number;
    stopped: number;
    logger?: { log: (level: number, message: string) => void };
  } = { autoReady: true, handlers: {}, started: 0, stopped: 0 };

  const connection = {
    on: (name: string, handler: (...args: any[]) => any) => {
      state.handlers[name] = handler;
    },
    onreconnecting: (h: (...args: any[]) => any) => { state.handlers.__reconnecting = h; },
    onreconnected: (h: (...args: any[]) => any) => { state.handlers.__reconnected = h; },
    onclose: (h: (...args: any[]) => any) => { state.handlers.__close = h; },
    start: async () => {
      state.started++;
      if (state.autoReady) {
        state.handlers.SocketReady?.({ botKey: 'bot', connectionId: 'c1' });
      }
    },
    stop: async () => { state.stopped++; },
  };

  class HubConnectionBuilder {
    withUrl() { return this; }
    configureLogging(logger: { log: (level: number, message: string) => void }) {
      state.logger = logger;
      return this;
    }
    withAutomaticReconnect() { return this; }
    build() { return connection; }
  }

  const LogLevel = {
    Trace: 0, Debug: 1, Information: 2, Warning: 3, Error: 4, Critical: 5, None: 6,
  };

  return { HubConnectionBuilder, LogLevel, __state: state, __connection: connection };
});

const signalr = jest.requireMock('@microsoft/signalr') as any;
const state = signalr.__state as {
  autoReady: boolean;
  handlers: Record<string, (...args: any[]) => any>;
  started: number;
  stopped: number;
  logger?: { log: (level: number, message: string) => void };
};

function makeContext(overrides: Partial<SocketConnectionContext> = {}): SocketConnectionContext {
  return {
    negotiateUrl: 'https://apx.example/v3/websockets/connect',
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

describe('SignalRSocketConnection', () => {
  beforeEach(() => {
    state.autoReady = true;
    state.handlers = {};
    state.started = 0;
    state.stopped = 0;
    state.logger = undefined;
    globalThis.fetch = jest.fn(async () => ({
      ok: true,
      status: 200,
      json: async () => ({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 3600 }),
      text: async () => '',
    })) as unknown as typeof fetch;
  });

  it('negotiates, connects, and resolves once SocketReady satisfies readiness', async () => {
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext(), handlers);

    await conn.start();

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(state.started).toBe(1);
    expect(handlers.onReady).toHaveBeenCalledWith({ botKey: 'bot', connectionId: 'c1' });
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

  it('reports a terminal close through onClosed so the supervisor can reconnect', async () => {
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext(), handlers);
    await conn.start();

    state.handlers.__close(new Error('drop'));
    expect(handlers.onClosed).toHaveBeenCalledWith(expect.any(Error));
  });

  it('does not enable SignalR auto-reconnect (supervisor owns reconnect)', async () => {
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers());
    await conn.start();
    // withAutomaticReconnect is never configured; the socket is single-generation.
    expect(state.handlers.__reconnecting).toBeUndefined();
    expect(state.handlers.__reconnected).toBeUndefined();
  });

  it('applies explicit keep-alive and server-timeout to the connection', async () => {
    const conn = new SignalRSocketConnection(
      makeContext({ keepAliveIntervalMs: 1234, serverTimeoutMs: 5678 }),
      makeHandlers()
    );
    await conn.start();
    expect(signalr.__connection.keepAliveIntervalInMilliseconds).toBe(1234);
    expect(signalr.__connection.serverTimeoutInMilliseconds).toBe(5678);
  });

  it('rejects immediately when start is called with an already-aborted signal', async () => {
    const conn = new SignalRSocketConnection(makeContext(), makeHandlers());
    const ac = new AbortController();
    ac.abort();
    await expect(conn.start(ac.signal)).rejects.toThrow(/aborted/i);
    expect(globalThis.fetch).not.toHaveBeenCalled();
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
  });

  it('ignores a SocketReady that arrives after stop', async () => {
    state.autoReady = false;
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext({ readinessTimeoutMs: 10_000 }), handlers);
    const startPromise = conn.start();
    await new Promise((r) => setTimeout(r, 10));

    await conn.stop();
    // A readiness frame racing in after stop must not re-notify observers.
    state.handlers.SocketReady?.({ botKey: 'bot' });
    expect(handlers.onReady).not.toHaveBeenCalled();

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
});
