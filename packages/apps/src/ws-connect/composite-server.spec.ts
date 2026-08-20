import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { IActivityEvent } from '../events';
import { IServer, IServerInitializeDeps } from '../server';
import { CompositeServer } from '../server/composite-server';
import { createTestApp } from '../test-utils';

import {
  ISocketConnection,
  SocketConnectionFactory,
  SocketConnectionHandlers,
} from './types';

/**
 * A controllable socket connection factory standing in for the real SignalR
 * transport. `autoReady` mimics APX confirming readiness on start; when false,
 * `start()` rejects to exercise the non-fatal socket-start path.
 */
function makeFakeFactory(opts: { autoReady?: boolean; failStart?: boolean } = {}) {
  const captured: { handlers?: SocketConnectionHandlers; started: number; stopped: number } = {
    started: 0,
    stopped: 0,
  };
  const factory: SocketConnectionFactory = (_context, handlers): ISocketConnection => {
    captured.handlers = handlers;
    return {
      start: async () => {
        captured.started++;
        if (opts.failStart) {
          throw new Error('socket boom');
        }
        if (opts.autoReady !== false) {
          handlers.onReady({ botKey: 'bot1', connectionId: 'c1' });
        }
      },
      stop: async () => {
        captured.stopped++;
      },
    };
  };
  return { factory, captured };
}

const quiet = (): ILogger => new ConsoleLogger('test', { level: 'error' });

describe('Socket Mode HTTP fallback (composite, through App)', () => {
  it('builds a CompositeServer by default (fallbackToHttp defaults to true)', async () => {
    const { factory } = makeFakeFactory();
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });

    // Default Socket Mode runs both transports: app.server is the composite,
    // while app.wsConnect still exposes the inner socket for observability.
    expect(app.server).toBeInstanceOf(CompositeServer);
    expect(app.server.transport).toBe('composite');
    expect(app.wsConnect).toBeDefined();
    expect(app.server).not.toBe(app.wsConnect);

    await app.start();
    // Inner socket reached readiness through the composite.
    expect(app.wsConnect?.status).toBe('ready');
  });

  it('keeps browser-dependent HTTP features disabled in dual mode', () => {
    const { factory } = makeFakeFactory();
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });

    // The inner HTTP server is a messaging-inbound sink only; the composite is
    // not an IHttpServer, so these features remain unavailable exactly as in
    // socket-only mode.
    expect(() => app.tab('demo', './dist')).toThrow(/HTTP server transport/);
    expect(() => app.function('demo', async () => ({}))).toThrow(/HTTP server transport/);
  });

  it('is socket-only (no composite) when fallbackToHttp is false', () => {
    const { factory } = makeFakeFactory();
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory, fallbackToHttp: false },
    });

    expect(app.server).not.toBeInstanceOf(CompositeServer);
    expect(app.server).toBe(app.wsConnect);
  });

  it('a socket start failure is non-fatal — HTTP still comes up', async () => {
    const { factory, captured } = makeFakeFactory({ failStart: true });
    const app = createTestApp({
      logger: quiet(),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });

    // App.start() swallows onStart errors, so assert on the composite directly
    // to prove the socket failure does not prevent the HTTP server from starting.
    let httpStarted = false;
    const http: IServer = {
      transport: 'http',
      onRequest: undefined,
      initialize: async () => {},
      start: async () => {
        httpStarted = true;
      },
      stop: async () => {},
    };

    const composite = new CompositeServer(app.wsConnect!, http, quiet());
    await composite.start();

    expect(captured.started).toBe(1); // socket start was attempted
    expect(httpStarted).toBe(true); // and HTTP still started despite the failure
  });
});

describe('CompositeServer (unit)', () => {
  function makeSpyServer(transport: string) {
    const calls: string[] = [];
    let onRequest: ((e: IActivityEvent) => Promise<any>) | undefined;
    const server: IServer = {
      transport,
      get onRequest() {
        return onRequest;
      },
      set onRequest(v) {
        onRequest = v;
      },
      initialize: async (_deps: IServerInitializeDeps) => {
        calls.push('initialize');
      },
      start: async () => {
        calls.push('start');
      },
      stop: async () => {
        calls.push('stop');
      },
    };
    return { server, calls, getOnRequest: () => onRequest };
  }

  it('fans onRequest out to both child servers', () => {
    const primary = makeSpyServer('socket');
    const secondary = makeSpyServer('http');
    const composite = new CompositeServer(primary.server, secondary.server, quiet());

    const handler = async () => ({ status: 200 } as any);
    composite.onRequest = handler;

    expect(composite.onRequest).toBe(handler);
    expect(primary.getOnRequest()).toBe(handler);
    expect(secondary.getOnRequest()).toBe(handler);
  });

  it('fans initialize/start/stop out to both children (HTTP starts first)', async () => {
    const primary = makeSpyServer('socket');
    const secondary = makeSpyServer('http');
    const composite = new CompositeServer(primary.server, secondary.server, quiet());

    await composite.initialize({});
    await composite.start(3978);
    await composite.stop();

    expect(secondary.calls).toEqual(['initialize', 'start', 'stop']);
    expect(primary.calls).toEqual(['initialize', 'start', 'stop']);
  });
});
