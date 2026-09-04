import { ConsoleLogger } from '@microsoft/teams.common';

import { SocketModeAdapter } from './socket-server';
import { SocketActivityEnvelope } from './types';

// A controllable fake for the single-generation connection so the adapter's
// reconnect supervisor, dispatch fence, and drain can be driven
// without a live socket. Each constructed connection is recorded; tests trigger
// readiness/closure and can queue a start failure to simulate a failed cycle.
jest.mock('./socket-connection', () => {
  const state: {
    connections: FakeConnection[];
    startErrorQueue: Error[];
    expiresInSeconds?: number;
  } = { connections: [], startErrorQueue: [] };

  class FakeConnection {
    handlers: any;
    context: any;
    expiresInSeconds?: number;
    autoReady = true;
    started = 0;
    stopped = 0;

    constructor(context: any, handlers: any) {
      this.context = context;
      this.handlers = handlers;
      this.expiresInSeconds = state.expiresInSeconds;
      state.connections.push(this);
    }

    async start() {
      this.started++;
      const err = state.startErrorQueue.shift();
      if (err) throw err;
      if (this.autoReady) this.handlers.onReady({ botKey: 'bot' });
    }

    async stop() {
      this.stopped++;
    }

    /** Simulate the socket dropping (drives the supervisor). */
    drop(error?: Error) {
      this.handlers.onClosed(error);
    }
  }

  return { SignalRSocketConnection: FakeConnection, __state: state };
});

type FakeConnection = {
  handlers: {
    onActivity: (env: SocketActivityEnvelope) => Promise<any>;
    onReady: (frame: any) => void;
    onClosed: (error?: Error) => void;
  };
  expiresInSeconds?: number;
  autoReady: boolean;
  started: number;
  stopped: number;
  drop: (error?: Error) => void;
};

const connState = (jest.requireMock('./socket-connection') as any).__state as {
  connections: FakeConnection[];
  startErrorQueue: Error[];
  expiresInSeconds?: number;
};

const MESSAGING_ENDPOINT = '/api/messages';

const ticks = async (n = 8) => {
  for (let i = 0; i < n; i++) await new Promise((r) => setTimeout(r, 0));
};

/**
 * Register a messaging handler on the adapter, mirroring what the owning
 * HttpServer does via `registerRoute('POST', messagingEndpoint, ...)`. Inbound
 * socket frames are dispatched into it.
 */
function onMessaging(
  server: SocketModeAdapter,
  handler: (req: any) => Promise<{ status: number; body?: unknown }>
): void {
  server.registerRoute('POST', MESSAGING_ENDPOINT, handler as any);
}

async function makeServer(options: Record<string, unknown> = {}): Promise<SocketModeAdapter> {
  // Default to a single geo ([''] = no geo segment) so the per-connection
  // supervisor tests operate on exactly one connection; multi-geo behavior has
  // its own describe block below.
  const server = new SocketModeAdapter({ geos: [''], ...options } as any, {
    tokenProvider: { getAppToken: async () => 'app-token' } as any,
    messagingEndpoint: MESSAGING_ENDPOINT,
    soleTransport: true,
    logger: new ConsoleLogger('test', { level: 'error' }),
  });
  await server.initialize({ credentials: { clientId: 'bot1' } as any });
  return server;
}

function env(id: string, type = 'message'): SocketActivityEnvelope {
  return {
    type,
    envelopeId: id,
    payload: {
      type,
      id,
      from: { id: 'u1' },
      conversation: { id: 'c1' },
      recipient: { id: 'bot1' },
      channelId: 'msteams',
      serviceUrl: 'https://smba.example',
    },
  } as SocketActivityEnvelope;
}

describe('SocketModeAdapter resilience', () => {
  beforeEach(() => {
    connState.connections = [];
    connState.startErrorQueue = [];
    connState.expiresInSeconds = undefined;
  });

  describe('reconnect supervisor', () => {
    it('renegotiates a fresh connection after a drop and reports reconnected', async () => {
      const server = await makeServer({ reconnectDelaysMs: [0] });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));
      await server.start();
      expect(connState.connections).toHaveLength(1);
      expect(server.status).toBe('ready');

      const reconnected = jest.fn();
      server.events.on('reconnected', reconnected);

      connState.connections[0].drop(new Error('network drop'));
      await ticks();

      // A brand-new connection (fresh negotiate + token) was built.
      expect(connState.connections).toHaveLength(2);
      expect(server.status).toBe('ready');
      expect(reconnected).toHaveBeenCalled();

      await server.stop();
    });

    it('keeps retrying with back-off until a reconnect succeeds', async () => {
      const server = await makeServer({ reconnectDelaysMs: [0] });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));
      await server.start();

      // The first reconnect attempt fails; the supervisor must not give up.
      connState.startErrorQueue.push(new Error('negotiate 500'));
      connState.connections[0].drop();
      await ticks();

      // conn[0] initial, conn[1] failed attempt, conn[2] successful reconnect.
      expect(connState.connections.length).toBeGreaterThanOrEqual(3);
      expect(server.status).toBe('ready');

      await server.stop();
    });

    it('does not report ready off a bare SignalR reconnect — readiness is re-run per generation', async () => {
      // The fake models start() as "connected AND ready". A reconnect attempt
      // whose start rejects (readiness not reached) must leave status not-ready.
      const server = await makeServer({ reconnectDelaysMs: [50] });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));
      await server.start();

      connState.startErrorQueue.push(new Error('readiness timeout'));
      connState.connections[0].drop();
      await ticks(2); // let the drop + failed attempt run, before the 50ms retry

      expect(server.status).not.toBe('ready');

      await server.stop();
    });
  });

  describe('shutdown race', () => {
    it('does not reconnect after stop(), even on a late close', async () => {
      const server = await makeServer({ reconnectDelaysMs: [0] });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));
      await server.start();
      await server.stop();

      const count = connState.connections.length;
      connState.connections[0].drop(new Error('late close after stop'));
      await ticks();

      expect(connState.connections.length).toBe(count);
      expect(server.status).toBe('stopped');
    });

    it('drops activities delivered on a superseded connection', async () => {
      const server = await makeServer({ reconnectDelaysMs: [0] });
      const handler = jest.fn(async () => ({ status: 200 }));
      onMessaging(server, handler);
      await server.start();

      const oldConn = connState.connections[0];
      oldConn.drop();
      await ticks();
      expect(connState.connections.length).toBe(2);

      // A frame arriving late on the OLD connection is fenced out.
      const reply = await oldConn.handlers.onActivity(env('stale'));
      expect(reply).toBeUndefined();
      expect(handler).not.toHaveBeenCalled();

      await server.stop();
    });
  });

  describe('unbounded concurrency', () => {
    it('runs all concurrently-delivered activities without an admission cap', async () => {
      // There is no concurrency cap or queue: every activity SignalR delivers is
      // dispatched to the handler immediately, even while earlier ones are still
      // in flight. inFlight reflects the true concurrent count (used only for drain).
      let release!: () => void;
      const gate = new Promise<void>((r) => (release = r));
      const server = await makeServer();
      onMessaging(server, async () => {
        await gate;
        return { status: 200 };
      });
      await server.start();
      const h = connState.connections[0].handlers;

      // Fire a burst larger than the old default cap (50) — none is rejected.
      const replies = Array.from({ length: 60 }, (_, i) => h.onActivity(env(`e${i}`)));
      await new Promise((r) => setTimeout(r, 0));
      expect(server.inFlightCount).toBe(60);

      release();
      const settled = await Promise.all(replies);
      // Every activity ran and got a real 200 ack (no 503 overload frames).
      expect(settled.every((r) => r?.status === 200)).toBe(true);
      expect(server.inFlightCount).toBe(0);

      await server.stop();
    });
  });

  describe('drain on stop', () => {
    it('waits for in-flight activities to finish before closing', async () => {
      let release!: () => void;
      const gate = new Promise<void>((r) => (release = r));
      const server = await makeServer({ drainTimeoutMs: 1000 });
      let completed = false;
      onMessaging(server, async () => {
        await gate;
        completed = true;
        return { status: 200 };
      });
      await server.start();
      const h = connState.connections[0].handlers;

      const inflight = h.onActivity(env('e1'));
      expect(server.inFlightCount).toBe(1);

      const stopping = server.stop();
      await new Promise((r) => setTimeout(r, 10));
      // Still draining: the handler hasn't been allowed to finish yet.
      expect(completed).toBe(false);

      release();
      await stopping;

      expect(completed).toBe(true);
      expect(connState.connections[0].stopped).toBeGreaterThanOrEqual(1);
      await inflight;
    });
  });

  describe('proactive token refresh', () => {
    it('renegotiates before the negotiate token expires', async () => {
      jest.useFakeTimers();
      try {
        connState.expiresInSeconds = 120; // refresh scheduled at 120s - 60s margin
        const server = await makeServer({ reconnectDelaysMs: [0] });
        onMessaging(server, jest.fn(async () => ({ status: 200 })));
        await server.start();
        expect(connState.connections).toHaveLength(1);

        await jest.advanceTimersByTimeAsync(61_000);

        expect(connState.connections.length).toBeGreaterThanOrEqual(2);
        await server.stop();
      } finally {
        jest.useRealTimers();
      }
    });
  });

  describe('startup retries', () => {
    it('retries the initial connect until it succeeds within the budget', async () => {
      const server = await makeServer({ reconnectDelaysMs: [0], startupTimeoutMs: 5000 });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));
      connState.startErrorQueue.push(new Error('negotiate 500')); // first attempt fails

      await server.start();

      expect(server.status).toBe('ready');
      expect(connState.connections.length).toBeGreaterThanOrEqual(2); // retried before succeeding
      await server.stop();
    });

    it('rejects App.start when the startup budget is exhausted', async () => {
      const server = await makeServer({ startupTimeoutMs: 0 });
      connState.startErrorQueue.push(new Error('negotiate down'));

      await expect(server.start()).rejects.toThrow(/negotiate down/);
      expect(server.status).not.toBe('ready');
    });
  });

  describe('cloud gating', () => {
    const sovereign = { tokenIssuer: 'https://api.botframework.us' } as any;

    function cloudServer(options: Record<string, unknown> = {}): SocketModeAdapter {
      return new SocketModeAdapter(options as any, {
        tokenProvider: { getAppToken: async () => 'app-token' } as any,
        messagingEndpoint: MESSAGING_ENDPOINT,
        soleTransport: true,
        logger: new ConsoleLogger('test', { level: 'error' }),
      });
    }

    it('rejects Socket Mode in a sovereign cloud without an explicit endpoint', async () => {
      const server = cloudServer();
      await server.initialize({ cloud: sovereign });
      await expect(server.start()).rejects.toThrow(/not supported in this cloud/i);
    });

    it('allows a sovereign cloud when an explicit negotiateBaseUrl is provided', async () => {
      const server = cloudServer({ negotiateBaseUrl: 'https://apx.gov.example', geos: [''] });
      await server.initialize({ cloud: sovereign });
      await server.start();
      expect(server.status).toBe('ready');
      await server.stop();
    });
  });

  describe('multi-geo', () => {
    it('opens one connection per default geo (amer/emea/apac) with geo-scoped URLs', async () => {
      const server = new SocketModeAdapter({ reconnectDelaysMs: [0] } as any, {
        tokenProvider: { getAppToken: async () => 'app-token' } as any,
        messagingEndpoint: MESSAGING_ENDPOINT,
        soleTransport: true,
        logger: new ConsoleLogger('test', { level: 'error' }),
      });
      await server.initialize({ credentials: { clientId: 'bot1' } as any });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));

      await server.start();

      expect(server.geoList).toEqual(['amer', 'emea', 'apac']);
      expect(connState.connections).toHaveLength(3);
      const urls = connState.connections.map((c: any) => c.context.negotiateUrl).sort();
      expect(urls).toEqual([
        'https://botapi.skype.com/amer/v3/websockets/connect',
        'https://botapi.skype.com/apac/v3/websockets/connect',
        'https://botapi.skype.com/emea/v3/websockets/connect',
      ]);
      expect(server.status).toBe('ready');

      await server.stop();
    });

    it('reconnects one geo independently without disturbing the others', async () => {
      const server = new SocketModeAdapter({ reconnectDelaysMs: [0] } as any, {
        tokenProvider: { getAppToken: async () => 'app-token' } as any,
        messagingEndpoint: MESSAGING_ENDPOINT,
        soleTransport: true,
        logger: new ConsoleLogger('test', { level: 'error' }),
      });
      await server.initialize({ credentials: { clientId: 'bot1' } as any });
      onMessaging(server, jest.fn(async () => ({ status: 200 })));
      await server.start();
      expect(connState.connections).toHaveLength(3);

      const reconnected: string[] = [];
      server.events.on('reconnected', (e) => { reconnected.push(e.geo); });

      // Drop only the amer connection (the first built).
      const amer = connState.connections[0];
      amer.drop(new Error('amer dropped'));
      await ticks();

      // A fresh connection was built for amer only (4 total), and the reconnected
      // event carried the amer geo. The other geos were never rebuilt.
      expect(connState.connections).toHaveLength(4);
      expect(reconnected).toEqual(['amer']);
      expect(server.status).toBe('ready');

      await server.stop();
    });

    it('rejects App.start if any single geo cannot connect within the budget', async () => {
      const server = new SocketModeAdapter({ startupTimeoutMs: 0 } as any, {
        tokenProvider: { getAppToken: async () => 'app-token' } as any,
        messagingEndpoint: MESSAGING_ENDPOINT,
        soleTransport: true,
        logger: new ConsoleLogger('test', { level: 'error' }),
      });
      await server.initialize({ credentials: { clientId: 'bot1' } as any });
      // Exactly one geo's first connect fails; every geo must connect for start.
      connState.startErrorQueue.push(new Error('emea down'));

      await expect(server.start()).rejects.toThrow(/emea down/);
      expect(server.status).toBe('stopped');
    });
  });

  describe('onError reporting', () => {
    /** Build an adapter whose deps include an onError hook. */
    async function makeServerWithOnError(
      onError: (error: Error) => void | Promise<void>
    ): Promise<SocketModeAdapter> {
      const server = new SocketModeAdapter({ geos: [''] } as any, {
        tokenProvider: { getAppToken: async () => 'app-token' } as any,
        messagingEndpoint: MESSAGING_ENDPOINT,
        soleTransport: true,
        onError,
        logger: new ConsoleLogger('test', { level: 'error' }),
      });
      await server.initialize({ credentials: { clientId: 'bot1' } as any });
      return server;
    }

    it('awaits an async onError hook before returning the 500 reply frame', async () => {
      const order: string[] = [];
      const server = await makeServerWithOnError(async () => {
        // A microtask boundary: if onError were fire-and-forget (not awaited),
        // 'reply' would be recorded before 'onError-done'.
        await new Promise((r) => setTimeout(r, 5));
        order.push('onError-done');
      });
      onMessaging(server, async () => {
        throw new Error('handler boom');
      });
      await server.start();

      const reply = await connState.connections[0].handlers.onActivity(env('e-err', 'invoke'));
      order.push('reply');

      expect(order).toEqual(['onError-done', 'reply']);
      expect(reply).toMatchObject({ status: 500, envelopeId: 'e-err' });
    });

    it('receives the thrown error in the onError hook', async () => {
      const seen: Error[] = [];
      const server = await makeServerWithOnError((e) => {
        seen.push(e);
      });
      onMessaging(server, async () => {
        throw new Error('handler boom');
      });
      await server.start();

      await connState.connections[0].handlers.onActivity(env('e-err2', 'invoke'));

      expect(seen).toHaveLength(1);
      expect(seen[0]).toBeInstanceOf(Error);
      expect(seen[0].message).toMatch(/handler boom/);
    });

    it('does not crash dispatch when the onError hook itself throws', async () => {
      const server = await makeServerWithOnError(() => {
        throw new Error('hook boom');
      });
      onMessaging(server, async () => {
        throw new Error('handler boom');
      });
      await server.start();

      // A throwing onError hook must not propagate; a 500 frame is still returned.
      const reply = await connState.connections[0].handlers.onActivity(env('e-err3', 'invoke'));
      expect(reply).toMatchObject({ status: 500, envelopeId: 'e-err3' });
    });
  });
});
