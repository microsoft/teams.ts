import { SignalRSocketConnection } from './socket-connection';
import { SocketConnectionContext, SocketConnectionHandlers } from './types';

// Fake @microsoft/signalr so readiness/client-results can be driven without a
// real Azure SignalR connection. `__state` lets the test fire SocketReady /
// Activity frames the way APX would.
jest.mock('@microsoft/signalr', () => {
  const state: {
    autoReady: boolean;
    handlers: Record<string, (...args: any[]) => any>;
    started: number;
    stopped: number;
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
    configureLogging() { return this; }
    withAutomaticReconnect() { return this; }
    build() { return connection; }
  }

  return { HubConnectionBuilder, LogLevel: { Warning: 3 }, __state: state, __connection: connection };
});

const signalr = jest.requireMock('@microsoft/signalr') as any;
const state = signalr.__state as {
  autoReady: boolean;
  handlers: Record<string, (...args: any[]) => any>;
  started: number;
  stopped: number;
};

function makeContext(overrides: Partial<SocketConnectionContext> = {}): SocketConnectionContext {
  return {
    negotiateUrl: 'https://apx.example/v3/websockets/connect',
    getBotToken: async () => 'bot-jwt',
    readinessTimeoutMs: 50,
    reconnectDelaysMs: [0, 1000],
    ...overrides,
  };
}

function makeHandlers(overrides: Partial<SocketConnectionHandlers> = {}): SocketConnectionHandlers {
  return {
    onActivity: jest.fn(async () => undefined),
    onReady: jest.fn(),
    onDisconnected: jest.fn(),
    onReconnected: jest.fn(),
    ...overrides,
  };
}

describe('SignalRSocketConnection', () => {
  beforeEach(() => {
    state.autoReady = true;
    state.handlers = {};
    state.started = 0;
    state.stopped = 0;
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
    state.autoReady = false; // socket opens but APX never confirms readiness
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext({ readinessTimeoutMs: 10_000 }), handlers);

    let resolved = false;
    const startPromise = conn.start().then(() => { resolved = true; });

    // Let negotiate + connect microtasks flush; still not ready.
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 20));
    expect(resolved).toBe(false);
    expect(handlers.onReady).not.toHaveBeenCalled();

    // APX now confirms readiness -> start resolves.
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

  it('notifies handlers on reconnect lifecycle transitions', async () => {
    const handlers = makeHandlers();
    const conn = new SignalRSocketConnection(makeContext(), handlers);
    await conn.start();

    state.handlers.__reconnecting(new Error('drop'));
    expect(handlers.onDisconnected).toHaveBeenCalled();

    state.handlers.__reconnected('c2');
    expect(handlers.onReconnected).toHaveBeenCalled();
  });
});
