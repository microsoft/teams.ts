import jwt from 'jsonwebtoken';

import { App } from '../app';
import { createTestApp } from '../test-utils';

import { ISocketActivityEnvelope } from './envelope';
import { NegotiateUnavailableError } from './negotiate';
import { SocketModeApp } from './socket-mode-app';
import { ConnectionState, ISocketModeClient } from './socket-mode-client';

class FakeSocketClient implements ISocketModeClient {
  readonly id: string;
  connectionId: string;
  state: ConnectionState = 'disconnected';
  connectCalls: Array<{ url: string; accessToken: string }> = [];
  disconnectCalls = 0;
  activityHandler?: (env: unknown) => void | Promise<void>;
  closeHandler?: (err?: Error) => void;
  reconnectingHandler?: (err?: Error) => void;
  reconnectedHandler?: (id?: string) => void;
  shouldFailConnect = false;

  constructor(id = 'test-conn-1') {
    this.id = id;
    this.connectionId = id;
  }

  async connect(url: string, accessToken: string): Promise<void> {
    this.connectCalls.push({ url, accessToken });
    if (this.shouldFailConnect) {
      this.state = 'disconnected';
      throw new Error('fake connect failed');
    }
    this.state = 'connected';
  }
  async disconnect(): Promise<void> {
    this.disconnectCalls++;
    this.state = 'disconnected';
  }
  onActivity(h: (e: unknown) => void | Promise<void>) { this.activityHandler = h; }
  onClose(h: (err?: Error) => void) { this.closeHandler = h; }
  onReconnecting(h: (err?: Error) => void) { this.reconnectingHandler = h; }
  onReconnected(h: (id?: string) => void) { this.reconnectedHandler = h; }

  async deliver(env: ISocketActivityEnvelope) {
    if (this.activityHandler) await this.activityHandler(env);
  }
  fireClose(err?: Error) {
    if (this.closeHandler) this.closeHandler(err);
  }
}

function mockNegotiateOnApp(
  app: App,
  responses: Array<{ status?: number; body?: unknown; error?: Error }>,
) {
  const post = jest.spyOn(app.client, 'post');
  for (const r of responses) {
    if (r.error) {
      post.mockRejectedValueOnce(r.error);
    } else {
      post.mockResolvedValueOnce({
        data: r.body,
        status: r.status ?? 200,
        statusText: 'OK',
        headers: {},
        config: {} as never,
      });
    }
  }
  return post;
}

function mockBotToken(app: App, value: string | null) {
  jest.spyOn(app.tokenManager, 'getBotToken').mockResolvedValue(
    value == null
      ? null
      : { toString: () => value, isExpired: () => false } as never,
  );
}

const sampleMessageEnvelope: ISocketActivityEnvelope = {
  type: 'activity',
  envelopeId: 'env-1',
  cv: 'cv.1',
  payload: {
    type: 'message',
    id: 'act-1',
    text: 'hello',
    serviceUrl: 'https://smba.trafficmanager.net/teams',
    channelId: 'msteams',
    from: { id: 'user-1', name: 'Alice' },
    recipient: { id: 'bot-1', name: 'Bot' },
    conversation: { id: 'conv-1', tenantId: 't1' },
  },
};

function envelopeOfType(type: string, name?: string, id = `env-${Math.random()}`): ISocketActivityEnvelope {
  return {
    type: 'activity',
    envelopeId: id,
    cv: 'cv.x',
    payload: {
      type,
      ...(name ? { name } : {}),
      id: `act-${id}`,
      serviceUrl: 'https://smba.trafficmanager.net/teams',
      channelId: 'msteams',
      from: { id: 'user-1' },
      recipient: { id: 'bot-1' },
      conversation: { id: 'conv-1', tenantId: 't1' },
    },
  };
}

describe('SocketModeApp', () => {
  let app: App;
  let fake: FakeSocketClient;
  const fakeJwt = jwt.sign(
    { exp: Math.floor((Date.now() + 3600000) / 1000) },
    'test-secret',
  );

  beforeEach(() => {
    app = createTestApp({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenantId: 'test-tenant-id',
    });
    fake = new FakeSocketClient();
    mockBotToken(app, fakeJwt);
  });

  afterEach(async () => {
    jest.restoreAllMocks();
    // Best-effort: app.stop is idempotent
    try { await app.stop(); } catch { /* */ }
  });

  it('start() boots the App and opens the socket', async () => {
    const appStart = jest.spyOn(app, 'start');
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://sr/?h=hub', accessToken: 'tok', sessionId: 'sess-1', expiresIn: 60 },
    }]);

    const sm = new SocketModeApp(app, { client: fake });
    await sm.start();

    expect(appStart).toHaveBeenCalledTimes(1);
    expect(fake.connectCalls).toHaveLength(1);
    expect(fake.connectCalls[0]).toEqual({ url: 'wss://sr/?h=hub', accessToken: 'tok' });
    expect(sm.sessionId).toBe('sess-1');
    expect(sm.sessionIds).toEqual(['sess-1']);
    expect(fake.state).toBe('connected');
  });

  it('emits "connected" event with slot=0', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 'sess-2', expiresIn: 60 },
    }]);
    const sm = new SocketModeApp(app, { client: fake });
    const cb = jest.fn();
    sm.on('connected', cb);

    await sm.start();

    expect(cb).toHaveBeenCalledWith({ sessionId: 'sess-2', connectionId: 'test-conn-1', slot: 0 });
  });

  it('routes inbound activities through app.onActivity for all activity types', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 'sess-3', expiresIn: 3600 },
    }]);
    const onActivity = jest.spyOn(app, 'onActivity')
      .mockResolvedValue({ status: 200 });

    const sm = new SocketModeApp(app, { client: fake });
    await sm.start();

    // Parity check: every activity type that flows on HTTP should flow on socket.
    const types = [
      'message',
      'messageReaction',
      'messageUpdate',
      'messageDelete',
      'conversationUpdate',
      'installationUpdate',
      'event',
      'typing',
      'endOfConversation',
    ];
    for (const t of types) {
      await fake.deliver(envelopeOfType(t));
    }

    expect(onActivity).toHaveBeenCalledTimes(types.length);
    for (let i = 0; i < types.length; i++) {
      const call = onActivity.mock.calls[i][0];
      expect((call.body as { type?: string }).type).toBe(types[i]);
      expect(call.token.appId).toBe('test-client-id');
      expect(call.token.from).toBe('azure');
      expect(call.token.serviceUrl).toBe('https://smba.trafficmanager.net/teams');
      expect(call.token.tenantId).toBe('t1');
      expect(call.token.isExpired()).toBe(false);
    }
  });

  it('routes inbound invoke activities through app.onActivity (defensive fallback)', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 'sess-4', expiresIn: 3600 },
    }]);
    const onActivity = jest.spyOn(app, 'onActivity').mockResolvedValue({ status: 200 });

    const sm = new SocketModeApp(app, { client: fake });
    await sm.start();
    await fake.deliver(envelopeOfType('invoke', 'composeExtension/query'));

    // SocketModeApp does not filter by activity.type — even invokes (which platform v1 says
    // never come on the socket) are routed if they arrive. Response is discarded.
    expect(onActivity).toHaveBeenCalledTimes(1);
    expect((onActivity.mock.calls[0][0].body as { type?: string }).type).toBe('invoke');
  });

  it('emits an envelope event carrying envelopeId + cv for every frame', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 's', expiresIn: 60 },
    }]);
    jest.spyOn(app, 'onActivity').mockResolvedValue({ status: 200 });

    const sm = new SocketModeApp(app, { client: fake });
    const env = jest.fn();
    sm.on('envelope', env);
    await sm.start();

    await fake.deliver(sampleMessageEnvelope);
    expect(env).toHaveBeenCalledWith({
      envelopeId: 'env-1',
      cv: 'cv.1',
      type: 'activity',
      slot: 0,
      duplicate: false,
    });
    expect(sm.lastCv).toBe('cv.1');
  });

  it('dedupe drops a repeated envelopeId', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 's', expiresIn: 60 },
    }]);
    const onActivity = jest.spyOn(app, 'onActivity').mockResolvedValue({ status: 200 });

    const sm = new SocketModeApp(app, { client: fake, dedupe: true });
    await sm.start();

    await fake.deliver(sampleMessageEnvelope);
    await fake.deliver(sampleMessageEnvelope);
    await fake.deliver(sampleMessageEnvelope);

    expect(onActivity).toHaveBeenCalledTimes(1);
  });

  it('non-envelope frames are discarded without throwing', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 's', expiresIn: 60 },
    }]);
    const onActivity = jest.spyOn(app, 'onActivity').mockResolvedValue({ status: 200 });

    const sm = new SocketModeApp(app, { client: fake });
    await sm.start();

    await fake.deliver(null as never);
    await fake.deliver({ type: 'activity', envelopeId: 'x' } as never); // payload missing
    expect(onActivity).not.toHaveBeenCalled();
  });

  it('503 from negotiate with fallbackOn503=true resolves start() and emits "unavailable"', async () => {
    const err = new Error('boom') as Error & { response?: { status?: number; data?: { error?: string } } };
    err.response = { status: 503, data: { error: 'Socket mode is not available.' } };
    mockNegotiateOnApp(app, [{ error: err }]);

    const sm = new SocketModeApp(app, { client: fake, fallbackOn503: true });
    const unavailable = jest.fn();
    sm.on('unavailable', unavailable);

    await expect(sm.start()).resolves.toBeUndefined();
    expect(unavailable).toHaveBeenCalledWith({ status: 503, message: 'Socket mode is not available.', slot: 0 });
    expect(fake.connectCalls).toHaveLength(0);
  });

  it('503 from negotiate with fallbackOn503=false rejects start()', async () => {
    const err = new Error('boom') as Error & { response?: { status?: number; data?: { error?: string } } };
    err.response = { status: 503, data: { error: 'down' } };
    mockNegotiateOnApp(app, [{ error: err }]);

    const sm = new SocketModeApp(app, { client: fake, fallbackOn503: false });
    await expect(sm.start()).rejects.toBeInstanceOf(NegotiateUnavailableError);
  });

  it('stop() cancels reconnect, disconnects socket, and stops the App', async () => {
    mockNegotiateOnApp(app, [{
      body: { url: 'wss://x', accessToken: 't', sessionId: 's', expiresIn: 60 },
    }]);
    const appStop = jest.spyOn(app, 'stop');

    const sm = new SocketModeApp(app, { client: fake });
    await sm.start();
    await sm.stop();

    expect(fake.disconnectCalls).toBe(1);
    expect(appStop).toHaveBeenCalledTimes(1);
  });

  it('handleClose triggers a fresh negotiate+connect cycle', async () => {
    mockNegotiateOnApp(app, [
      { body: { url: 'wss://x', accessToken: 'a', sessionId: 's1', expiresIn: 60 } },
      { body: { url: 'wss://y', accessToken: 'b', sessionId: 's2', expiresIn: 60 } },
    ]);

    const sm = new SocketModeApp(app, { client: fake });
    await sm.start();
    expect(fake.connectCalls).toHaveLength(1);

    fake.fireClose(new Error('transport closed'));

    // Wait a tick for the async reconnect path
    await new Promise<void>((r) => setImmediate(r));

    expect(fake.connectCalls).toHaveLength(2);
    expect(sm.sessionId).toBe('s2');
  });

  // ---------------------------------------------------------------------------
  // Multi-connection (the Slack-style "up to 10 connections" surface)
  // ---------------------------------------------------------------------------

  describe('multi-connection', () => {
    it('rejects connections outside [1, 10]', () => {
      expect(() => new SocketModeApp(app, { connections: 0 })).toThrow(/\[1, 10\]/);
      expect(() => new SocketModeApp(app, { connections: 11 })).toThrow(/\[1, 10\]/);
      expect(() => new SocketModeApp(app, { connections: 1.5 })).toThrow(/\[1, 10\]/);
    });

    it('opens N concurrent sockets when connections > 1', async () => {
      const fakes = [
        new FakeSocketClient('c-0'),
        new FakeSocketClient('c-1'),
        new FakeSocketClient('c-2'),
      ];
      mockNegotiateOnApp(app, [
        { body: { url: 'wss://a', accessToken: 'a', sessionId: 'sess-a', expiresIn: 3600 } },
        { body: { url: 'wss://b', accessToken: 'b', sessionId: 'sess-b', expiresIn: 3600 } },
        { body: { url: 'wss://c', accessToken: 'c', sessionId: 'sess-c', expiresIn: 3600 } },
      ]);

      const sm = new SocketModeApp(app, {
        connections: 3,
        clientFactory: (i) => fakes[i],
      });
      const connected = jest.fn();
      sm.on('connected', connected);

      await sm.start();

      expect(fakes[0].connectCalls).toHaveLength(1);
      expect(fakes[1].connectCalls).toHaveLength(1);
      expect(fakes[2].connectCalls).toHaveLength(1);
      expect(connected).toHaveBeenCalledTimes(3);
      expect(sm.sessionIds.sort()).toEqual(['sess-a', 'sess-b', 'sess-c']);
      // sessionId mirrors slot 0
      expect(sm.sessionId).toBe('sess-a');
    });

    it('routes a fan-out envelope exactly once across all slots (dedupe auto-enabled)', async () => {
      const fakes = [new FakeSocketClient('c-0'), new FakeSocketClient('c-1')];
      mockNegotiateOnApp(app, [
        { body: { url: 'wss://a', accessToken: 'a', sessionId: 's-a', expiresIn: 3600 } },
        { body: { url: 'wss://b', accessToken: 'b', sessionId: 's-b', expiresIn: 3600 } },
      ]);
      const onActivity = jest.spyOn(app, 'onActivity').mockResolvedValue({ status: 200 });

      const sm = new SocketModeApp(app, {
        connections: 2,
        clientFactory: (i) => fakes[i],
        // dedupe omitted intentionally — must auto-enable when connections > 1
      });
      const envelopeEvt = jest.fn();
      sm.on('envelope', envelopeEvt);

      await sm.start();

      // APX dispatches via SignalR group fan-out: every session receives every event.
      // The SDK must call app.onActivity exactly once per envelopeId.
      await fakes[0].deliver(sampleMessageEnvelope);
      await fakes[1].deliver(sampleMessageEnvelope);

      expect(onActivity).toHaveBeenCalledTimes(1);
      // The envelope event still fires for BOTH frames so observability stays complete,
      // but the second is flagged duplicate=true.
      expect(envelopeEvt).toHaveBeenCalledTimes(2);
      expect(envelopeEvt.mock.calls[0][0].duplicate).toBe(false);
      expect(envelopeEvt.mock.calls[1][0].duplicate).toBe(true);
      expect(envelopeEvt.mock.calls[0][0].slot).toBe(0);
      expect(envelopeEvt.mock.calls[1][0].slot).toBe(1);
    });

    it('stop() drains all slots', async () => {
      const fakes = [new FakeSocketClient('c-0'), new FakeSocketClient('c-1')];
      mockNegotiateOnApp(app, [
        { body: { url: 'wss://a', accessToken: 'a', sessionId: 's-a', expiresIn: 3600 } },
        { body: { url: 'wss://b', accessToken: 'b', sessionId: 's-b', expiresIn: 3600 } },
      ]);

      const sm = new SocketModeApp(app, {
        connections: 2,
        clientFactory: (i) => fakes[i],
      });
      await sm.start();
      await sm.stop();

      expect(fakes[0].disconnectCalls).toBe(1);
      expect(fakes[1].disconnectCalls).toBe(1);
    });

    it('close on one slot reconnects only that slot, others stay live', async () => {
      const fakes = [new FakeSocketClient('c-0'), new FakeSocketClient('c-1')];
      mockNegotiateOnApp(app, [
        { body: { url: 'wss://a', accessToken: 'a', sessionId: 's-a', expiresIn: 3600 } },
        { body: { url: 'wss://b', accessToken: 'b', sessionId: 's-b', expiresIn: 3600 } },
        { body: { url: 'wss://b2', accessToken: 'b2', sessionId: 's-b2', expiresIn: 3600 } },
      ]);

      const sm = new SocketModeApp(app, {
        connections: 2,
        clientFactory: (i) => fakes[i],
      });
      await sm.start();
      expect(fakes[0].connectCalls).toHaveLength(1);
      expect(fakes[1].connectCalls).toHaveLength(1);

      // Slot 1 drops. Slot 0 stays connected. Slot 1's client reconnects in place.
      fakes[1].fireClose(new Error('peer reset'));
      await new Promise<void>((r) => setImmediate(r));

      expect(fakes[0].connectCalls).toHaveLength(1);              // slot 0 untouched
      expect(fakes[0].disconnectCalls).toBe(0);                   // slot 0 untouched
      expect(fakes[1].connectCalls).toHaveLength(2);              // slot 1 reconnected
      expect(sm.sessionIds[0]).toBe('s-a');
      expect(sm.sessionIds[1]).toBe('s-b2');
    });

    it('user-set dedupe=false is honored even when connections > 1', async () => {
      const fakes = [new FakeSocketClient('c-0'), new FakeSocketClient('c-1')];
      mockNegotiateOnApp(app, [
        { body: { url: 'wss://a', accessToken: 'a', sessionId: 's-a', expiresIn: 3600 } },
        { body: { url: 'wss://b', accessToken: 'b', sessionId: 's-b', expiresIn: 3600 } },
      ]);
      const onActivity = jest.spyOn(app, 'onActivity').mockResolvedValue({ status: 200 });

      const sm = new SocketModeApp(app, {
        connections: 2,
        dedupe: false, // explicit override
        clientFactory: (idx) => fakes[idx],
      });
      await sm.start();
      await fakes[0].deliver(sampleMessageEnvelope);
      await fakes[1].deliver(sampleMessageEnvelope);

      // With dedupe explicitly off, both deliveries route through.
      expect(onActivity).toHaveBeenCalledTimes(2);
    });
  });
});
