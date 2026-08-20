import { ConsoleLogger } from '@microsoft/teams.common';

import { App } from '../app';
import { HttpRouteHandler, IHttpServerAdapter } from '../http';
import { HttpPlugin } from '../plugins';
import { CompositeServer } from '../server/composite-server';
import { createTestApp } from '../test-utils';

import {
  ISocketConnection,
  SocketActivityEnvelope,
  SocketConnectionContext,
  SocketConnectionFactory,
  SocketConnectionHandlers,
  WS_CONNECT_PROTOCOL_VERSION,
} from './types';

type FakeSocketOptions = {
  readonly autoReady?: boolean;
  readonly startError?: Error;
};

function makeFakeFactory(options: FakeSocketOptions = {}) {
  const captured: {
    context?: SocketConnectionContext;
    handlers?: SocketConnectionHandlers;
    startCalls: number;
    stopCalls: number;
  } = {
    startCalls: 0,
    stopCalls: 0,
  };

  const factory: SocketConnectionFactory = (context, handlers): ISocketConnection => {
    captured.context = context;
    captured.handlers = handlers;
    return {
      start: async () => {
        captured.startCalls++;
        if (options.startError) {
          throw options.startError;
        }
        if (options.autoReady !== false) {
          handlers.onReady({ botKey: 'bot1', connectionId: 'connection-1' });
        }
      },
      stop: async () => {
        captured.stopCalls++;
      },
    };
  };

  return { captured, factory };
}

class CapturingAdapter implements IHttpServerAdapter {
  readonly routes = new Map<string, HttpRouteHandler>();
  readonly startedPorts: Array<number | string> = [];

  registerRoute(method: 'POST', path: string, handler: HttpRouteHandler): void {
    this.routes.set(`${method} ${path}`, handler);
  }

  async start(port: number | string): Promise<void> {
    this.startedPorts.push(port);
  }

  async stop(): Promise<void> {}
}

const quiet = () => new ConsoleLogger('test', { level: 'error' });
const serviceUrl = 'https://smba.example/teams';

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
  describe('socket-only protocol and lifecycle', () => {
    it('stays connecting before readiness, then transitions through disconnect, reconnect, and stop', async () => {
      const { captured, factory } = makeFakeFactory({ autoReady: false });
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        wsConnect: { connectionFactory: factory, fallbackToHttp: false },
      });
      const ready = jest.fn();
      const disconnected = jest.fn();
      const reconnected = jest.fn();
      app.wsConnect!.events.on('ready', ready);
      app.wsConnect!.events.on('disconnected', disconnected);
      app.wsConnect!.events.on('reconnected', reconnected);

      await app.initialize();
      const start = app.server.start();

      expect(app.wsConnect!.status).toBe('connecting');
      expect(ready).not.toHaveBeenCalled();

      captured.handlers!.onReady({ botKey: 'bot1', connectionId: 'connection-2' });
      await start;
      expect(app.wsConnect!.status).toBe('ready');
      expect(ready).toHaveBeenCalledWith({
        botKey: 'bot1',
        connectionId: 'connection-2',
      });

      const drop = new Error('connection dropped');
      captured.handlers!.onDisconnected(drop);
      expect(app.wsConnect!.status).toBe('disconnected');
      expect(disconnected).toHaveBeenCalledWith({ error: drop });

      captured.handlers!.onReconnected();
      expect(app.wsConnect!.status).toBe('ready');
      expect(reconnected).toHaveBeenCalledWith(undefined);

      await app.stop();
      expect(app.wsConnect!.status).toBe('stopped');
      expect(captured.stopCalls).toBe(1);
    });

    it('dispatches a PascalCase invoke and always replies with the current protocol version', async () => {
      const { captured, factory } = makeFakeFactory();
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        wsConnect: { connectionFactory: factory, fallbackToHttp: false },
      });
      app.on('card.action', (async ({ activity }: any) => ({
        status: 202,
        body: { name: activity.name },
      })) as any);
      await app.start();

      const reply = await captured.handlers!.onActivity({
        ProtocolVersion: WS_CONNECT_PROTOCOL_VERSION + 99,
        EnvelopeId: 'pascal-envelope',
        Type: 'invoke',
        Payload: invokeActivity(),
      } as unknown as SocketActivityEnvelope);

      expect(reply).toMatchObject({
        protocolVersion: WS_CONNECT_PROTOCOL_VERSION,
        envelopeId: 'pascal-envelope',
        botKey: 'bot1',
        status: 202,
        body: { name: 'adaptiveCard/action' },
      });
    });

    it('drops a null payload without running the App handler', async () => {
      const { captured, factory } = makeFakeFactory();
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        wsConnect: { connectionFactory: factory, fallbackToHttp: false },
      });
      const handler = jest.fn();
      app.on('activity', handler);
      await app.start();

      const reply = await captured.handlers!.onActivity({
        type: 'message',
        envelopeId: 'null-payload',
        payload: null,
      });

      expect(reply).toBeUndefined();
      expect(handler).not.toHaveBeenCalled();
    });

    it('returns a versioned bodyless 500 frame when a one-way handler throws', async () => {
      const { captured, factory } = makeFakeFactory();
      const app = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        wsConnect: { connectionFactory: factory, fallbackToHttp: false },
      });
      app.on('message', async () => {
        throw new Error('message handler failed');
      });
      await app.start();

      const reply = await captured.handlers!.onActivity({
        type: 'message',
        ackRequired: true,
        envelopeId: 'failed-message',
        payload: messageActivity(),
      });

      expect(reply).toMatchObject({
        protocolVersion: WS_CONNECT_PROTOCOL_VERSION,
        envelopeId: 'failed-message',
        status: 500,
      });
      expect(reply?.body).toBeUndefined();
    });

    it('forwards default and custom connection options to the connection factory', async () => {
      const defaults = makeFakeFactory();
      const defaultApp = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        wsConnect: { connectionFactory: defaults.factory, fallbackToHttp: false },
      });
      await defaultApp.start();

      expect(defaults.captured.context).toMatchObject({
        negotiateUrl: 'https://botapi.skype.com/v3/websockets/connect',
        readinessTimeoutMs: 30_000,
        reconnectDelaysMs: [0, 2000, 5000, 10_000, 20_000],
      });

      const custom = makeFakeFactory();
      const customApp = createTestApp({
        clientId: 'bot1',
        logger: quiet(),
        wsConnect: {
          connectionFactory: custom.factory,
          fallbackToHttp: false,
          negotiateBaseUrl: 'https://apx.example/ring/',
          readinessTimeoutMs: 1234,
          reconnectDelaysMs: [],
        },
      });
      await customApp.start();

      expect(custom.captured.context).toMatchObject({
        negotiateUrl: 'https://apx.example/ring/v3/websockets/connect',
        readinessTimeoutMs: 1234,
        reconnectDelaysMs: [],
      });
    });
  });

  describe('composite transport integration', () => {
    it('reuses the supplied adapter and feeds socket and HTTP delivery into the same App pipeline', async () => {
      const adapter = new CapturingAdapter();
      const { captured, factory } = makeFakeFactory();
      const app = createTestApp({
        clientId: 'bot1',
        dangerouslyAllowUnauthenticatedRequests: true,
        httpServerAdapter: adapter,
        logger: quiet(),
        wsConnect: { connectionFactory: factory },
      });
      const seen: string[] = [];
      app.on('message', async ({ activity }) => {
        seen.push(activity.id);
      });
      app.on('card.action', (async () => ({
        status: 207,
        body: { transport: 'socket' },
      })) as any);

      expect(app.server).toBeInstanceOf(CompositeServer);
      await app.start(4321);

      expect(adapter.startedPorts).toEqual([4321]);
      const httpHandler = adapter.routes.get('POST /api/messages');
      expect(httpHandler).toBeDefined();

      const httpReply = await httpHandler!({
        body: messageActivity({ id: 'delivered-over-http' }),
        headers: {},
      });
      const socketReply = await captured.handlers!.onActivity({
        type: 'invoke',
        envelopeId: 'delivered-over-socket',
        payload: invokeActivity(),
      });

      expect(seen).toEqual(['delivered-over-http']);
      expect(httpReply).toEqual({ status: 200, body: undefined });
      expect(socketReply).toMatchObject({
        protocolVersion: WS_CONNECT_PROTOCOL_VERSION,
        envelopeId: 'delivered-over-socket',
        status: 207,
        body: { transport: 'socket' },
      });
    });
  });

  describe('App wiring guards', () => {
    it('rejects Socket Mode combined with the deprecated HttpPlugin', () => {
      expect(() => new App({
        clientId: 'bot1',
        logger: quiet(),
        plugins: [new HttpPlugin()],
        wsConnect: true,
      })).toThrow(/both wsConnect and an HttpPlugin/);
    });

    it('accepts an HTTP adapter for fallback but rejects it for socket-only mode', () => {
      const adapter = new CapturingAdapter();
      const { factory } = makeFakeFactory();

      expect(() => createTestApp({
        clientId: 'bot1',
        httpServerAdapter: adapter,
        logger: quiet(),
        wsConnect: { connectionFactory: factory },
      })).not.toThrow();

      expect(() => createTestApp({
        clientId: 'bot1',
        httpServerAdapter: adapter,
        logger: quiet(),
        wsConnect: { connectionFactory: factory, fallbackToHttp: false },
      })).toThrow(/httpServerAdapter with wsConnect\.fallbackToHttp = false/);
    });
  });
});
