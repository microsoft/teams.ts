import { ConsoleLogger } from '@microsoft/teams.common';

import { HttpServer } from '../http/http-server';
import { createTestApp } from '../test-utils';

import { SocketActivityEnvelope, SocketConnectionHandlers } from './types';

// Replace the real SignalR-backed connection with a controllable fake so the
// server's protocol behavior can be exercised end-to-end through the App's real
// activity pipeline — without a live socket and without a public test seam.
jest.mock('./socket-connection', () => {
  const state: { handlers?: SocketConnectionHandlers } = {};
  class SignalRSocketConnection {
    constructor(_context: unknown, handlers: SocketConnectionHandlers) {
      state.handlers = handlers;
    }
    async start() {
      // Simulate Teams backend service confirming readiness right after the socket opens.
      state.handlers?.onReady({ botKey: 'bot1', connectionId: 'c1' });
    }
    async stop() {}
  }
  return { SignalRSocketConnection, __state: state };
});

const connState = (jest.requireMock('./socket-connection') as any).__state as {
  handlers?: SocketConnectionHandlers;
};

const serviceUrl = 'https://smba.example/teams';

function messageActivity(overrides: Record<string, unknown> = {}) {
  return {
    type: 'message',
    id: 'msg-1',
    text: 'hi',
    from: { id: 'user-1', name: 'User' },
    conversation: { id: 'conv-1' },
    recipient: { id: 'bot1' },
    channelId: 'msteams',
    serviceUrl,
    ...overrides,
  };
}

function invokeActivity(overrides: Record<string, unknown> = {}) {
  return {
    type: 'invoke',
    id: 'inv-1',
    name: 'adaptiveCard/action',
    value: { action: { verb: 'doThing' } },
    from: { id: 'user-1' },
    conversation: { id: 'conv-1' },
    recipient: { id: 'bot1' },
    channelId: 'msteams',
    serviceUrl,
    ...overrides,
  };
}

describe('SocketModeAdapter (through App)', () => {
  beforeEach(() => {
    connState.handlers = undefined;
  });

  it('is wired as the app inbound transport and reaches ready status', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    // The socket adapter IS the app HttpServer's transport adapter, and the same
    // instance is exposed for observability as app.socketMode.
    expect(app.socketMode).toBeDefined();
    expect(app.server).toBeInstanceOf(HttpServer);
    expect(app.server.adapter).toBe(app.socketMode);
    expect(app.socketMode?.status).toBe('idle');
    await app.start();
    expect(app.socketMode?.status).toBe('ready');
  });

  it('returns a real invoke response over client results', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    const seen: string[] = [];
    app.on('card.action', (async ({ activity }: any) => {
      seen.push(activity.type);
      return { status: 201, body: { echoed: activity.name } };
    }) as any);

    await app.start();

    const envelope: SocketActivityEnvelope = {
      type: 'invoke',
      envelopeId: 'env-invoke',
      payload: invokeActivity(),
    };
    const reply = await connState.handlers!.onActivity(envelope);

    expect(seen).toContain('invoke');
    expect(reply).toMatchObject({
      protocolVersion: 1,
      envelopeId: 'env-invoke',
      botKey: 'bot1',
      status: 201,
      body: { echoed: 'adaptiveCard/action' },
    });
  });

  it('runs the handler then returns a bare 200 ack for a one-way activity', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    let handled = false;
    app.on('message', async () => {
      handled = true;
    });

    await app.start();

    const envelope: SocketActivityEnvelope = {
      type: 'message',
      ackRequired: true,
      envelopeId: 'env-msg',
      payload: messageActivity(),
    };
    const reply = await connState.handlers!.onActivity(envelope);

    // Handler ran (transport-agnostic) and the ack is emitted post-handler.
    expect(handled).toBe(true);
    expect(reply).toMatchObject({
      protocolVersion: 1,
      envelopeId: 'env-msg',
      status: 200,
    });
    expect(reply?.body).toBeUndefined();
  });

  it('drops an envelope with no activity payload', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });
    await app.start();

    const reply = await connState.handlers!.onActivity({ type: 'invoke', envelopeId: 'x' });
    expect(reply).toBeUndefined();
  });

  it('returns a 500 frame when a handler throws', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    app.on('card.action', (async () => {
      throw new Error('handler boom');
    }) as any);

    await app.start();

    const reply = await connState.handlers!.onActivity({
      type: 'invoke',
      envelopeId: 'env-err',
      payload: invokeActivity(),
    });

    expect(reply).toMatchObject({ status: 500, envelopeId: 'env-err' });
  });

  it('rejects an envelope declaring an unsupported (newer) protocol version with a 400, without running the handler', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    let handled = false;
    app.on('card.action', (async () => {
      handled = true;
      return { status: 200 };
    }) as any);

    await app.start();

    const reply = await connState.handlers!.onActivity({
      type: 'invoke',
      envelopeId: 'env-future',
      protocolVersion: 999,
      payload: invokeActivity(),
    } as SocketActivityEnvelope);

    // Handler never runs; the reply is a versioned 400 stamped with our version.
    expect(handled).toBe(false);
    expect(reply).toMatchObject({
      protocolVersion: 1,
      envelopeId: 'env-future',
      status: 400,
    });
  });

  it('still processes an envelope that omits protocolVersion (treated as current)', async () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    let handled = false;
    app.on('message', async () => {
      handled = true;
    });

    await app.start();

    const reply = await connState.handlers!.onActivity({
      type: 'message',
      envelopeId: 'env-nover',
      payload: messageActivity(),
    });

    expect(handled).toBe(true);
    expect(reply).toMatchObject({ status: 200, envelopeId: 'env-nover' });
  });

  it('leaves HTTP-only features (tab, function) inert in socket-only mode', () => {
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      socketMode: { fallbackToHttp: false },
    });

    // Socket-only mode runs a single HttpServer whose adapter is the socket
    // adapter. Browser-driven HTTP features have no transport, so registering
    // them is an inert no-op (the socket adapter ignores non-messaging routes and
    // static mounts) rather than throwing.
    expect(() => app.tab('demo', './dist')).not.toThrow();
    expect(() => app.function('demo', async () => ({}))).not.toThrow();
  });
});

