import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { HttpMethod, HttpRouteHandler, IHttpServerAdapter } from '../http/adapter';
import { HttpServer } from '../http/http-server';
import { createTestApp } from '../test-utils';

import { CompositeAdapter } from './composite-adapter';
import { SocketConnectionHandlers } from './types';

// Replace the real SignalR-backed connection with a controllable fake. `failStart`
// makes start() reject to exercise the socket-start failure path; counters let
// tests assert the socket was attempted.
jest.mock('./socket-connection', () => {
  const state: {
    handlers?: SocketConnectionHandlers;
    autoReady: boolean;
    failStart: boolean;
    started: number;
    stopped: number;
  } = { autoReady: true, failStart: false, started: 0, stopped: 0 };

  class SignalRSocketConnection {
    constructor(_context: unknown, handlers: SocketConnectionHandlers) {
      state.handlers = handlers;
    }
    async start() {
      state.started++;
      if (state.failStart) {
        throw new Error('socket boom');
      }
      if (state.autoReady) {
        state.handlers?.onReady({ botKey: 'bot1', connectionId: 'c1' });
      }
    }
    async stop() {
      state.stopped++;
    }
  }
  return { SignalRSocketConnection, __state: state };
});

const connState = (jest.requireMock('./socket-connection') as any).__state as {
  handlers?: SocketConnectionHandlers;
  autoReady: boolean;
  failStart: boolean;
  started: number;
  stopped: number;
};

const quiet = (): ILogger => new ConsoleLogger('test', { level: 'error' });

describe('Socket Mode HTTP fallback (composite, through App)', () => {
  beforeEach(() => {
    connState.handlers = undefined;
    connState.autoReady = true;
    connState.failStart = false;
    connState.started = 0;
    connState.stopped = 0;
  });

  it('runs a single HttpServer over a CompositeAdapter by default (fallbackToHttp defaults to true)', async () => {
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      socketMode: {},
    });

    // Default Socket Mode runs both transports inside one HttpServer: its adapter
    // is the composite, while app.socketMode exposes the inner socket adapter.
    expect(app.server).toBeInstanceOf(HttpServer);
    expect(app.server.adapter).toBeInstanceOf(CompositeAdapter);
    expect(app.socketMode).toBeDefined();
    expect(app.server.adapter).not.toBe(app.socketMode);

    await app.start();
    // Inner socket reached readiness through the composite.
    expect(app.socketMode?.status).toBe('ready');
  });

  it('leaves browser-dependent HTTP features inert (no throw) in dual mode', () => {
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      socketMode: {},
    });

    // this.server is a real HttpServer, so these no longer throw; they fan out to
    // the composite's children (the HTTP adapter serves them, the socket ignores them).
    expect(() => app.tab('demo', './dist')).not.toThrow();
    expect(() => app.function('demo', async () => ({}))).not.toThrow();
  });

  it('is socket-only (adapter is the socket itself) when fallbackToHttp is false', () => {
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    expect(app.server).toBeInstanceOf(HttpServer);
    expect(app.server.adapter).not.toBeInstanceOf(CompositeAdapter);
    expect(app.server.adapter).toBe(app.socketMode);
  });

  it('propagates a socket start failure after the HTTP adapter is up', async () => {
    connState.failStart = true;
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      socketMode: { startupTimeoutMs: 0 },
    });

    let httpStarted = false;
    const http: IHttpServerAdapter = {
      registerRoute: () => {},
      serveStatic: () => {},
      start: async () => {
        httpStarted = true;
      },
      stop: async () => {},
    };

    // The socket adapter retries internally up to its startup budget (0 here), then
    // gives up; the composite does not swallow the failure — it propagates so
    // App.start() fails and tears the app down rather than coming up half-started.
    const composite = new CompositeAdapter([http, app.socketMode!], quiet());
    await expect(composite.start(3978)).rejects.toThrow();

    expect(httpStarted).toBe(true); // HTTP was started first (before the socket failed)
    expect(connState.started).toBeGreaterThanOrEqual(1); // socket start was attempted
  });
});

describe('CompositeAdapter (unit)', () => {
  function makeSpyAdapter(label: string, calls: string[]): IHttpServerAdapter {
    return {
      registerRoute: (method: HttpMethod, path: string, _handler: HttpRouteHandler) => {
        calls.push(`${label}:registerRoute:${method} ${path}`);
      },
      serveStatic: (path: string, _directory: string) => {
        calls.push(`${label}:serveStatic:${path}`);
      },
      start: async () => {
        calls.push(`${label}:start`);
      },
      stop: async () => {
        calls.push(`${label}:stop`);
      },
    };
  }

  it('fans registerRoute and serveStatic out to every child adapter', () => {
    const calls: string[] = [];
    const http = makeSpyAdapter('http', calls);
    const socket = makeSpyAdapter('socket', calls);
    const composite = new CompositeAdapter([http, socket], quiet());

    composite.registerRoute('POST', '/api/messages', async () => ({ status: 200 }));
    composite.serveStatic('/tabs/demo', './dist');

    expect(calls).toEqual([
      'http:registerRoute:POST /api/messages',
      'socket:registerRoute:POST /api/messages',
      'http:serveStatic:/tabs/demo',
      'socket:serveStatic:/tabs/demo',
    ]);
  });

  it('starts children in array order (HTTP first, then socket)', async () => {
    const calls: string[] = [];
    const http = makeSpyAdapter('http', calls);
    const socket = makeSpyAdapter('socket', calls);
    const composite = new CompositeAdapter([http, socket], quiet());

    await composite.start(3978);
    await composite.stop();

    expect(calls).toEqual(['http:start', 'socket:start', 'http:stop', 'socket:stop']);
  });

  it('propagates a child start failure instead of swallowing it', async () => {
    const calls: string[] = [];
    const http = makeSpyAdapter('http', calls);
    const socket: IHttpServerAdapter = {
      registerRoute: () => {},
      serveStatic: () => {},
      start: async () => {
        throw new Error('socket boom');
      },
      stop: async () => {},
    };
    const composite = new CompositeAdapter([http, socket], quiet());

    // HTTP starts first, then the socket fails; the composite re-throws (no
    // internal retry — that lives in the socket adapter's own start()).
    await expect(composite.start(3978)).rejects.toThrow('socket boom');
    expect(calls).toEqual(['http:start']);
  });

  it('stops starting later children once an earlier child fails (fail-fast, no half-start)', async () => {
    const calls: string[] = [];
    const http: IHttpServerAdapter = {
      registerRoute: () => {},
      serveStatic: () => {},
      start: async () => {
        calls.push('http:start');
        throw new Error('http boom');
      },
      stop: async () => {},
    };
    const socket = makeSpyAdapter('socket', calls);
    const composite = new CompositeAdapter([http, socket], quiet());

    // The first child (HTTP) fails to start; the composite must re-throw and NOT
    // start the socket — sequential start means a failure short-circuits the rest,
    // so the app never comes up with only some transports live.
    await expect(composite.start(3978)).rejects.toThrow('http boom');
    expect(calls).toEqual(['http:start']); // socket:start never ran
  });

  it('stops every child even if one throws, then rethrows the first failure', async () => {
    const calls: string[] = [];
    const http: IHttpServerAdapter = {
      registerRoute: () => {},
      serveStatic: () => {},
      start: async () => {},
      stop: async () => {
        calls.push('http:stop');
        throw new Error('http stop failed');
      },
    };
    const socket = makeSpyAdapter('socket', calls);
    const composite = new CompositeAdapter([http, socket], quiet());

    await expect(composite.stop()).rejects.toThrow('http stop failed');
    // The socket's teardown still ran despite the HTTP failure (allSettled).
    expect(calls).toContain('socket:stop');
  });
});
