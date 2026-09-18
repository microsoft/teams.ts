import { ConsoleLogger } from '@microsoft/teams.common';

import { App } from '../app';
import { HttpRouteHandler, IHttpServerAdapter } from '../http';
import { HttpPlugin } from '../plugins';

import { createTestApp } from '../test-utils';

import { CompositeAdapter } from './composite-adapter';

import {
  SocketActivityEnvelope,
  SocketConnectionContext,
  SocketConnectionHandlers,
  SOCKET_MODE_PROTOCOL_VERSION,
} from './types';

// Replace the real SignalR-backed connection with a controllable fake so the
// full Socket Mode protocol/lifecycle can be exercised through the real App
// pipeline without a live socket — and without a public test seam. The fake
// mirrors the real single-generation contract: start() does not resolve until
// readiness (so `autoReady: false` models a socket that connected but hasn't
// received SocketReady), and a drop is reported via onClosed so the supervisor
// renegotiates a fresh connection. `contexts` records every SocketConnectionContext
// built so tests can assert the options forwarded to the transport.
jest.mock('./socket-connection', () => {
  const state: {
    contexts: any[];
    connections: any[];
    handlers?: SocketConnectionHandlers;
    autoReady: boolean;
    startError?: Error;
    expiresInSeconds?: number;
    startCalls: number;
    stopCalls: number;
  } = { contexts: [], connections: [], autoReady: true, startCalls: 0, stopCalls: 0 };

  class SignalRSocketConnection {
    handlers: SocketConnectionHandlers;
    expiresInSeconds?: number;
    resolveReady?: () => void;

    constructor(context: SocketConnectionContext, handlers: SocketConnectionHandlers) {
      state.contexts.push(context);
      state.handlers = handlers;
      this.handlers = handlers;
      this.expiresInSeconds = state.expiresInSeconds;
      state.connections.push(this);
    }

    async start() {
      state.startCalls++;
      if (state.startError) {
        throw state.startError;
      }
      if (state.autoReady) {
        this.handlers.onReady({ botKey: 'bot1', connectionId: `connection-${state.startCalls}` });
        return;
      }
      // Connected but not yet ready: block until readiness is fired, like the
      // real connection's SocketReady gate.
      await new Promise<void>((resolve) => {
        this.resolveReady = resolve;
      });
    }

    async stop() {
      state.stopCalls++;
    }

    /** Fire SocketReady: notify the server and resolve the readiness gate. */
    fireReady(frame: { botKey?: string; connectionId?: string }) {
      this.handlers.onReady(frame);
      this.resolveReady?.();
    }

    /** Simulate the socket dropping so the supervisor renegotiates. */
    drop(error?: Error) {
      this.handlers.onClosed(error);
    }
  }
  return { SignalRSocketConnection, __state: state };
});

const connState = (jest.requireMock('./socket-connection') as any).__state as {
  contexts: any[];
  connections: any[];
  handlers?: SocketConnectionHandlers;
  autoReady: boolean;
  startError?: Error;
  expiresInSeconds?: number;
  startCalls: number;
  stopCalls: number;
};

class CapturingAdapter implements IHttpServerAdapter {
  readonly routes = new Map<string, HttpRouteHandler>();
  readonly startedPorts: Array<number | string> = [];
  stopCalls = 0;

  registerRoute(method: 'POST', path: string, handler: HttpRouteHandler): void {
    this.routes.set(`${method} ${path}`, handler);
  }

  async start(port: number | string): Promise<void> {
    this.startedPorts.push(port);
  }

  async stop(): Promise<void> {
    this.stopCalls++;
  }
}

const quiet = () => new ConsoleLogger('test', { level: 'error' });
const serviceUrl = 'https://smba.example/teams';

/** Flush pending microtasks/timers so the reconnect supervisor can advance. */
const ticks = async (n = 8) => {
  for (let i = 0; i < n; i++) await new Promise((r) => setTimeout(r, 0));
};

function messageActivity(overrides: Record<string, unknown> = {}) {
  return {
    type: 'message',
    id: 'message-1',
    text: 'hello',
    from: { id: 'user-1' },
    conversation: { id: 'conversation-1' },
    recipient: { id: 'bot1' },
    channelId: 'msteams',
    serviceUrl,
    ...overrides,
  };
}

function invokeActivity(overrides: Record<string, unknown> = {}) {
  return {
    type: 'invoke',
    id: 'invoke-1',
    name: 'adaptiveCard/action',
    value: { action: { verb: 'run' } },
    from: { id: 'user-1' },
    conversation: { id: 'conversation-1' },
    recipient: { id: 'bot1' },
    channelId: 'msteams',
    serviceUrl,
    ...overrides,
  };
}

describe('Socket Mode App e2e matrix', () => {
  beforeEach(() => {
    connState.contexts = [];
    connState.connections = [];
    connState.handlers = undefined;
    connState.autoReady = true;
    connState.startError = undefined;
    connState.expiresInSeconds = undefined;
    connState.startCalls = 0;
    connState.stopCalls = 0;
  });

  describe('socket-only protocol and lifecycle', () => {
    it('stays connecting before readiness, renegotiates after a drop, then stops', async () => {
      connState.autoReady = false;
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: { reconnectDelaysMs: [0], geos: [''] },
      });
      const ready = jest.fn();
      const disconnected = jest.fn();
      const reconnected = jest.fn();
      app.socketMode!.events.on('ready', ready);
      app.socketMode!.events.on('disconnected', disconnected);
      app.socketMode!.events.on('reconnected', reconnected);

      await app.initialize();
      const start = app.server.start(0);

      expect(app.socketMode!.status).toBe('connecting');
      expect(ready).not.toHaveBeenCalled();

      // Fire SocketReady for the first connection to satisfy the readiness gate.
      connState.connections[0].fireReady({ botKey: 'bot1', connectionId: 'connection-2' });
      await start;
      expect(app.socketMode!.status).toBe('ready');
      // Events carry the geo they relate to ('' for the no-geo single connection).
      expect(ready).toHaveBeenCalledWith({ geo: '', frame: { botKey: 'bot1', connectionId: 'connection-2' } });

      // A drop terminates the connection; the supervisor renegotiates a fresh one
      // (subsequent connections auto-ready).
      connState.autoReady = true;
      const built = connState.connections.length;
      const drop = new Error('connection dropped');
      connState.connections[0].drop(drop);
      await ticks();

      expect(disconnected).toHaveBeenCalledWith({ geo: '', error: drop });
      expect(connState.connections.length).toBe(built + 1); // a brand-new connection
      expect(app.socketMode!.status).toBe('ready');
      expect(reconnected).toHaveBeenCalledWith({ geo: '' });

      await app.stop();
      expect(app.socketMode!.status).toBe('stopped');
      expect(connState.stopCalls).toBeGreaterThanOrEqual(1);
    });

    it('dispatches a PascalCase invoke and replies with the current protocol version', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: {},
      });
      app.on('card.action', (async ({ activity }: any) => ({
        status: 202,
        body: { name: activity.name },
      })) as any);
      await app.start();

      const reply = await connState.handlers!.onActivity({
        ProtocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        EnvelopeId: 'pascal-envelope',
        Type: 'invoke',
        Payload: invokeActivity(),
      } as unknown as SocketActivityEnvelope);

      expect(reply).toMatchObject({
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: 'pascal-envelope',
        botKey: 'bot1',
        status: 202,
        body: { name: 'adaptiveCard/action' },
      });
    });

    it('rejects a future inbound protocol version before dispatch', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: {},
      });
      const handler = jest.fn();
      app.on('card.action', handler);
      await app.start();

      const reply = await connState.handlers!.onActivity({
        ProtocolVersion: SOCKET_MODE_PROTOCOL_VERSION + 1,
        EnvelopeId: 'future-protocol',
        Type: 'invoke',
        Payload: invokeActivity(),
      } as unknown as SocketActivityEnvelope);

      expect(handler).not.toHaveBeenCalled();
      expect(reply).toMatchObject({
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: 'future-protocol',
        botKey: 'bot1',
        status: 400,
        body: { error: `unsupported protocolVersion ${SOCKET_MODE_PROTOCOL_VERSION + 1}` },
      });
    });

    it('drops a null payload without running the App handler', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: {},
      });
      const handler = jest.fn();
      app.on('activity', handler);
      await app.start();

      const reply = await connState.handlers!.onActivity({
        type: 'message',
        envelopeId: 'null-payload',
        payload: null,
      });

      expect(reply).toBeUndefined();
      expect(handler).not.toHaveBeenCalled();
    });

    it('returns a versioned bodyless 500 frame when a one-way handler throws', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: {},
      });
      app.on('message', async () => {
        throw new Error('message handler failed');
      });
      await app.start();

      const reply = await connState.handlers!.onActivity({
        type: 'message',
        ackRequired: true,
        envelopeId: 'failed-message',
        payload: messageActivity(),
      });

      expect(reply).toMatchObject({
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: 'failed-message',
        status: 500,
      });
      expect(reply?.body).toBeUndefined();
    });

    it('forwards only socket connection options, not HTTP fallback configuration', async () => {
      const defaultApp = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: { geos: [''] },
      });
      await defaultApp.start();

      expect(connState.contexts[0]).toMatchObject({
        negotiateUrl: 'https://botapi.skype.com/v3/websockets/connect',
        readinessTimeoutMs: 30_000,
        keepAliveIntervalMs: 15_000,
        serverTimeoutMs: 30_000,
      });

      const customApp = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        messagingEndpoint: '/custom/messages',
        socketMode: {
          fallbackToHttp: true,
          geos: [''],
          negotiateBaseUrl: 'https://apx.example/ring/',
          readinessTimeoutMs: 1234,
          keepAliveIntervalMs: 7000,
          serverTimeoutMs: 9000,
        },
      });
      await customApp.start();

      expect(connState.contexts[1]).toMatchObject({
        negotiateUrl: 'https://apx.example/ring/v3/websockets/connect',
        readinessTimeoutMs: 1234,
        keepAliveIntervalMs: 7000,
        serverTimeoutMs: 9000,
      });
      expect(Object.keys(connState.contexts[1]).sort()).toEqual([
        'getBotToken',
        'keepAliveIntervalMs',
        'negotiateUrl',
        'readinessTimeoutMs',
        'serverTimeoutMs',
      ]);
    });

    it('connects to all three geos by default with geo-scoped negotiate URLs', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: {},
      });
      await app.start();

      expect(app.socketMode!.geoList).toEqual(['amer', 'emea', 'apac']);
      const urls = connState.contexts.map((c: any) => c.negotiateUrl).sort();
      expect(urls).toEqual([
        'https://botapi.skype.com/amer/v3/websockets/connect',
        'https://botapi.skype.com/apac/v3/websockets/connect',
        'https://botapi.skype.com/emea/v3/websockets/connect',
      ]);
      expect(app.socketMode!.status).toBe('ready');
    });

    it('accepts the boolean shorthand (socketMode: true) and applies the default connection options', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        httpServerAdapter: new CapturingAdapter(),
        socketMode: true,
      });

      // The `true` shorthand is socket-only by default. A supplied HTTP adapter
      // is not constructed into the server unless fallback is explicitly true.
      expect(app.server.adapter).not.toBeInstanceOf(CompositeAdapter);
      expect(app.server.adapter).toBe(app.socketMode);
      expect(app.socketMode).toBeDefined();

      await app.start(4321);

      // The `true` shorthand uses the default geos, so it opens one connection
      // per geo with the shared default connection options.
      expect(app.socketMode!.geoList).toEqual(['amer', 'emea', 'apac']);
      expect(connState.contexts).toHaveLength(3);
      expect(connState.contexts[0]).toMatchObject({
        negotiateUrl: 'https://botapi.skype.com/amer/v3/websockets/connect',
        readinessTimeoutMs: 30_000,
        keepAliveIntervalMs: 15_000,
        serverTimeoutMs: 30_000,
      });
      expect((app.options.httpServerAdapter as CapturingAdapter).startedPorts).toEqual([]);
    });

    it('still reaches ready when a ready listener throws (readiness is not wedged)', async () => {
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        socketMode: {},
      });
      // A throwing observer must not prevent the server from completing its
      // readiness transition.
      app.socketMode!.events.on('ready', () => {
        throw new Error('ready listener boom');
      });

      await expect(app.start()).resolves.toBeUndefined();
      expect(app.socketMode!.status).toBe('ready');

      await app.stop();
    });
  });

  describe('composite transport integration', () => {
    it('reuses the supplied adapter and feeds socket and HTTP delivery into the same App pipeline', async () => {
      const adapter = new CapturingAdapter();
      const app = createTestApp({
        clientId: 'bot1',
        dangerouslyAllowUnauthenticatedRequests: true,
        httpServerAdapter: adapter,
        logger: quiet(),
        socketMode: { fallbackToHttp: true },
      });
      const seen: string[] = [];
      app.on('message', async ({ activity }) => {
        seen.push(activity.id);
      });
      app.on('card.action', (async () => ({
        status: 207,
        body: { transport: 'socket' },
      })) as any);

      expect(app.server.adapter).toBeInstanceOf(CompositeAdapter);
      await app.start(4321);

      expect(adapter.startedPorts).toEqual([4321]);
      const httpHandler = adapter.routes.get('POST /api/messages');
      expect(httpHandler).toBeDefined();

      const httpReply = await httpHandler!({
        body: messageActivity({ id: 'delivered-over-http' }),
        headers: {},
      });
      const socketReply = await connState.handlers!.onActivity({
        type: 'invoke',
        envelopeId: 'delivered-over-socket',
        payload: invokeActivity(),
      });

      expect(seen).toEqual(['delivered-over-http']);
      expect(httpReply).toEqual({ status: 200, body: undefined });
      expect(socketReply).toMatchObject({
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: 'delivered-over-socket',
        status: 207,
        body: { transport: 'socket' },
      });
    });

    it('tears down both transports and reports a socket startup failure', async () => {
      const startupError = new Error('socket startup failed');
      connState.startError = startupError;
      const adapter = new CapturingAdapter();
      const app = createTestApp({
        clientId: 'bot1',
        httpServerAdapter: adapter,
        logger: quiet(),
        socketMode: { fallbackToHttp: true, geos: [''], startupTimeoutMs: 0 },
      });
      const onError = jest.fn();
      app.event('error', onError);

      await expect(app.start(4321)).resolves.toBeUndefined();

      expect(adapter.startedPorts).toEqual([4321]);
      expect(adapter.stopCalls).toBe(1);
      expect(app.socketMode!.status).toBe('stopped');
      expect(onError).toHaveBeenCalledWith({ error: startupError });
    });
  });

  describe('App wiring guards', () => {
    it('rejects Socket Mode combined with the deprecated HttpPlugin', () => {
      expect(() => new App({
        clientId: 'bot1',
        logger: quiet(),
        plugins: [new HttpPlugin()],
        socketMode: true,
      })).toThrow(/both socketMode and an HttpPlugin/);
    });

    it('accepts an HTTP adapter in both fallback and socket-only mode (socket-only ignores it)', () => {
      const adapter = new CapturingAdapter();

      expect(() => createTestApp({
        clientId: 'bot1',
        httpServerAdapter: adapter,
        logger: quiet(),
        socketMode: { fallbackToHttp: true },
      })).not.toThrow();

      expect(() => createTestApp({
        clientId: 'bot1',
        httpServerAdapter: adapter,
        logger: quiet(),
        socketMode: {},
      })).not.toThrow();
    });
  });
});
