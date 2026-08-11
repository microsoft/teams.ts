import { ConsoleLogger } from '@microsoft/teams.common';

import { createTestApp } from '../test-utils';

import {
  ISocketConnection,
  SocketActivityEnvelope,
  SocketConnectionFactory,
  SocketConnectionHandlers,
} from './types';

/**
 * A controllable connection factory that stands in for the real SignalR
 * transport, so the server's protocol behavior can be exercised end-to-end
 * through the App's real activity pipeline.
 */
function makeFakeFactory() {
  const captured: { handlers?: SocketConnectionHandlers } = {};
  const factory: SocketConnectionFactory = (_context, handlers): ISocketConnection => {
    captured.handlers = handlers;
    return {
      start: async () => {
        // Simulate APX confirming readiness right after the socket opens.
        handlers.onReady({ botKey: 'bot1', connectionId: 'c1' });
      },
      stop: async () => {},
    };
  };
  return { factory, captured };
}

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

describe('SocketServer (through App)', () => {
  it('is wired as the app inbound transport and reaches ready status', async () => {
    const { factory } = makeFakeFactory();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });

    // The socket server IS the app's inbound transport (app.server), and the
    // same instance is exposed for observability as app.wsConnect.
    expect(app.wsConnect).toBeDefined();
    expect(app.server).toBe(app.wsConnect);
    expect(app.wsConnect?.status).toBe('idle');
    await app.start();
    expect(app.wsConnect?.status).toBe('ready');
  });

  it('returns a real invoke response over client results', async () => {
    const { factory, captured } = makeFakeFactory();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
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
    const reply = await captured.handlers!.onActivity(envelope);

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
    const { factory, captured } = makeFakeFactory();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
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
    const reply = await captured.handlers!.onActivity(envelope);

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
    const { factory, captured } = makeFakeFactory();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });
    await app.start();

    const reply = await captured.handlers!.onActivity({ type: 'invoke', envelopeId: 'x' });
    expect(reply).toBeUndefined();
  });

  it('returns a 500 frame when a handler throws', async () => {
    const { factory, captured } = makeFakeFactory();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });

    app.on('card.action', (async () => {
      throw new Error('handler boom');
    }) as any);

    await app.start();

    const reply = await captured.handlers!.onActivity({
      type: 'invoke',
      envelopeId: 'env-err',
      payload: invokeActivity(),
    });

    expect(reply).toMatchObject({ status: 500, envelopeId: 'env-err' });
  });

  it('throws for HTTP-only features (tab, function) in Socket Mode', () => {
    const { factory } = makeFakeFactory();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'error' }),
      clientId: 'bot1',
      wsConnect: { connectionFactory: factory },
    });

    // No HTTP listener exists in Socket Mode, so browser-driven HTTP features
    // are unavailable and fail fast rather than silently no-op.
    expect(() => app.tab('demo', './dist')).toThrow(/HTTP server transport/);
    expect(() => app.function('demo', async () => ({}))).toThrow(/HTTP server transport/);
  });
});
