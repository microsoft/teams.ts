import { HttpPlugin } from '../plugins';

import {
  App,
  CapturingAdapter,
  connectionState,
  createSocketTestApp,
  dispatch,
  envelope,
  messageActivity,
  resetConnectionState,
  ticks,
} from './app.e2e.test-harness';

describe('Socket Mode E2E: exclusive transport, failure, ordering, and recovery', () => {
  beforeEach(resetConnectionState);

  it('uses Socket Mode as the exclusive inbound adapter', () => {
    const app = createSocketTestApp();

    expect(app.server.adapter).toBe(app.socketMode);
    expect(app.socketMode).toBeDefined();
  });

  it('does not use a supplied HTTP adapter', async () => {
    const adapter = new CapturingAdapter();
    const app = createSocketTestApp({
      httpServerAdapter: adapter,
      socketMode: true,
    });

    await app.start(4321);
    await app.stop();

    expect(adapter.routes.size).toBe(0);
    expect(adapter.startedPorts).toHaveLength(0);
    expect(adapter.stopCalls).toBe(0);
  });

  it('dispatches directly to App instead of a registered messaging route handler', async () => {
    const appHandler = jest.fn();
    const routeHandler = jest.fn(async () => {
      throw new Error('HTTP route handler must not run');
    });
    const app = createSocketTestApp({
      messagingEndpoint: '/custom/messages',
    });
    app.on('message', appHandler);
    app.socketMode!.registerRoute(
      'POST',
      '/custom/messages',
      routeHandler
    );
    await app.start();

    const reply = await dispatch(
      envelope(messageActivity(), 'direct-pipeline-envelope')
    );

    expect(routeHandler).not.toHaveBeenCalled();
    expect(appHandler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({ status: 200 });
    await app.stop();
  });

  it('waits for every default geo to become ready', async () => {
    connectionState.autoReadyQueue = [false, false, false];
    const app = createSocketTestApp({ socketMode: {} });
    let started = false;
    const start = app.start().then(() => {
      started = true;
    });
    await ticks();

    expect(connectionState.connections).toHaveLength(3);
    expect(app.socketMode!.status).toBe('connecting');

    connectionState.connections[0].fireReady();
    connectionState.connections[1].fireReady();
    await ticks();
    expect(started).toBe(false);

    connectionState.connections[2].fireReady();
    await start;
    expect(app.socketMode!.status).toBe('ready');
    expect(app.socketMode!.geoList).toEqual(['amer', 'emea', 'apac']);
    await app.stop();
  });

  it('renegotiates a fresh connection after an unexpected drop', async () => {
    const app = createSocketTestApp({
      socketMode: { geos: [''], reconnectDelaysMs: [0] },
    });
    const disconnected = jest.fn();
    const reconnected = jest.fn();
    app.socketMode!.events.on('disconnected', disconnected);
    app.socketMode!.events.on('reconnected', reconnected);
    await app.start();

    const dropped = new Error('connection dropped');
    connectionState.connections[0].drop(dropped);
    await ticks();

    expect(connectionState.connections).toHaveLength(2);
    expect(disconnected).toHaveBeenCalledWith({ geo: '', error: dropped });
    expect(reconnected).toHaveBeenCalledWith({ geo: '' });
    expect(app.socketMode!.status).toBe('ready');
    await app.stop();
  });

  describe('make-before-break token refresh', () => {
    it('keeps the old socket through replacement readiness and the APX handoff window', async () => {
      jest.useFakeTimers();
      try {
        connectionState.expiresInSeconds = 120;
        connectionState.autoReadyQueue = [true, false];
        const handler = jest.fn();
        const app = createSocketTestApp({
          socketMode: { geos: [''], reconnectDelaysMs: [0] },
        });
        app.on('message', handler);
        await app.start();
        const oldConnection = connectionState.connections[0];

        await jest.advanceTimersByTimeAsync(61_000);
        expect(connectionState.connections).toHaveLength(2);
        const replacement = connectionState.connections[1];

        expect(oldConnection.stopped).toBe(0);
        await oldConnection.handlers.onActivity(
          envelope(messageActivity({ id: 'before-ready' }), 'before-ready')
        );
        expect(handler).toHaveBeenCalledTimes(1);

        replacement.fireReady();
        await jest.advanceTimersByTimeAsync(0);

        expect(oldConnection.stopped).toBe(0);
        await oldConnection.handlers.onActivity(
          envelope(messageActivity({ id: 'cached-old-id' }), 'cached-old-id')
        );
        expect(handler).toHaveBeenCalledTimes(2);

        await jest.advanceTimersByTimeAsync(4_999);
        expect(oldConnection.stopped).toBe(0);
        await jest.advanceTimersByTimeAsync(1);
        expect(oldConnection.stopped).toBe(1);

        await app.stop();
      } finally {
        jest.useRealTimers();
      }
    });

    it('closes active and retiring sockets when stopped during handoff', async () => {
      jest.useFakeTimers();
      try {
        connectionState.expiresInSeconds = 120;
        const app = createSocketTestApp({
          socketMode: { geos: [''], reconnectDelaysMs: [0] },
        });
        await app.start();

        await jest.advanceTimersByTimeAsync(61_000);
        expect(connectionState.connections).toHaveLength(2);

        const [oldConnection, replacement] = connectionState.connections;
        expect(oldConnection.stopped).toBe(0);
        expect(replacement.stopped).toBe(0);

        await app.stop();

        expect(oldConnection.stopped).toBe(1);
        expect(replacement.stopped).toBe(1);
      } finally {
        jest.useRealTimers();
      }
    });

    it('retires overlapping predecessor generations independently', async () => {
      jest.useFakeTimers();
      try {
        connectionState.expiresInSeconds = 61;
        const app = createSocketTestApp({
          socketMode: { geos: [''], reconnectDelaysMs: [0] },
        });
        await app.start();
        const first = connectionState.connections[0];

        await jest.advanceTimersByTimeAsync(1_000);
        expect(connectionState.connections).toHaveLength(2);
        const second = connectionState.connections[1];

        connectionState.expiresInSeconds = undefined;
        await jest.advanceTimersByTimeAsync(1_000);
        expect(connectionState.connections).toHaveLength(3);

        await jest.advanceTimersByTimeAsync(3_999);
        expect(first.stopped).toBe(0);
        expect(second.stopped).toBe(0);

        await jest.advanceTimersByTimeAsync(1);
        expect(first.stopped).toBe(1);
        expect(second.stopped).toBe(0);

        await jest.advanceTimersByTimeAsync(1_000);
        expect(second.stopped).toBe(1);

        await app.stop();
      } finally {
        jest.useRealTimers();
      }
    });

    it('keeps the old socket serving while replacement attempts fail', async () => {
      jest.useFakeTimers();
      try {
        connectionState.expiresInSeconds = 120;
        const handler = jest.fn();
        const app = createSocketTestApp({
          socketMode: { geos: [''], reconnectDelaysMs: [100] },
        });
        app.on('message', handler);
        await app.start();
        const oldConnection = connectionState.connections[0];

        connectionState.startErrorQueue.push(
          new Error('replacement negotiate failed')
        );
        await jest.advanceTimersByTimeAsync(60_000);
        await oldConnection.handlers.onActivity(
          envelope(
            messageActivity({ id: 'during-first-backoff' }),
            'during-first-backoff'
          )
        );
        expect(handler).toHaveBeenCalledTimes(1);

        await jest.advanceTimersByTimeAsync(100);
        expect(connectionState.connections).toHaveLength(2);
        expect(oldConnection.stopped).toBe(0);
        await oldConnection.handlers.onActivity(
          envelope(
            messageActivity({ id: 'after-failed-replacement' }),
            'after-failed-replacement'
          )
        );
        expect(handler).toHaveBeenCalledTimes(2);

        connectionState.expiresInSeconds = undefined;
        await jest.advanceTimersByTimeAsync(100);
        expect(connectionState.connections).toHaveLength(3);
        expect(app.socketMode!.status).toBe('ready');

        await app.stop();
      } finally {
        jest.useRealTimers();
      }
    });

    it('reports an outage if the old socket dies before its replacement is ready', async () => {
      jest.useFakeTimers();
      try {
        connectionState.expiresInSeconds = 120;
        connectionState.autoReadyQueue = [true, false];
        const app = createSocketTestApp({
          socketMode: { geos: [''], reconnectDelaysMs: [0] },
        });
        const disconnected = jest.fn();
        const reconnected = jest.fn();
        app.socketMode!.events.on('disconnected', disconnected);
        app.socketMode!.events.on('reconnected', reconnected);
        await app.start();

        await jest.advanceTimersByTimeAsync(61_000);
        const oldConnection = connectionState.connections[0];
        const replacement = connectionState.connections[1];
        const error = new Error('old socket dropped during rotation');

        oldConnection.drop(error);

        expect(app.socketMode!.status).toBe('disconnected');
        expect(disconnected).toHaveBeenCalledWith({ geo: '', error });

        replacement.fireReady();
        await jest.advanceTimersByTimeAsync(0);

        expect(app.socketMode!.status).toBe('ready');
        expect(reconnected).toHaveBeenCalledWith({ geo: '' });
        await app.stop();
      } finally {
        jest.useRealTimers();
      }
    });
  });

  it('starts a fresh generation when the app restarts', async () => {
    const app = createSocketTestApp();

    await app.start();
    await app.stop();
    expect(app.socketMode!.status).toBe('stopped');

    await app.start();
    expect(connectionState.connections).toHaveLength(2);
    expect(app.socketMode!.status).toBe('ready');
    await app.stop();
  });

  it('forwards default and configured connection options', async () => {
    const defaultApp = createSocketTestApp();
    await defaultApp.start();

    expect(connectionState.contexts[0]).toMatchObject({
      negotiateUrl: 'https://botapi.skype.com/v3/websockets/connect',
      readinessTimeoutMs: 30_000,
      keepAliveIntervalMs: 15_000,
      serverTimeoutMs: 30_000,
    });
    await defaultApp.stop();

    const customApp = createSocketTestApp({
      socketMode: {
        geos: [''],
        negotiateBaseUrl: 'https://apx.example/ring/',
        readinessTimeoutMs: 1234,
        keepAliveIntervalMs: 7000,
        serverTimeoutMs: 9000,
      },
    });
    await customApp.start();

    expect(connectionState.contexts[1]).toMatchObject({
      negotiateUrl: 'https://apx.example/ring/v3/websockets/connect',
      readinessTimeoutMs: 1234,
      keepAliveIntervalMs: 7000,
      serverTimeoutMs: 9000,
    });
    expect(Object.keys(connectionState.contexts[1]).sort()).toEqual([
      'client',
      'getBotToken',
      'keepAliveIntervalMs',
      'negotiateUrl',
      'readinessTimeoutMs',
      'serverTimeoutMs',
    ]);
    await customApp.stop();
  });

  it('does not wedge readiness when an observer throws', async () => {
    const app = createSocketTestApp();
    app.socketMode!.events.on('ready', () => {
      throw new Error('ready listener failed');
    });

    await expect(app.start()).resolves.toBeUndefined();
    expect(app.socketMode!.status).toBe('ready');
    await app.stop();
  });

  it('rejects combining Socket Mode with the deprecated HttpPlugin', () => {
    expect(
      () =>
        new App({
          clientId: 'bot1',
          plugins: [new HttpPlugin()],
          socketMode: true,
        })
    ).toThrow(/both socketMode and an HttpPlugin/);
  });

  it('keeps concurrent activity results correlated', async () => {
    const app = createSocketTestApp();
    const messageHandler = jest.fn();
    const invokeHandler = jest.fn(async ({ activity }: any) => ({
      status: 200,
      body: { id: activity.id },
    }));
    app.on('message', messageHandler);
    app.on('card.action', invokeHandler as any);
    await app.start();

    const replies = await Promise.all([
      dispatch(envelope(messageActivity({ id: 'message-a' }), 'envelope-a')),
      dispatch(
        envelope(
          {
            ...messageActivity({ id: 'invoke-b' }),
            type: 'invoke',
            name: 'adaptiveCard/action',
            value: { action: { verb: 'run' } },
          },
          'envelope-b'
        )
      ),
    ]);

    expect(messageHandler).toHaveBeenCalledTimes(1);
    expect(invokeHandler).toHaveBeenCalledTimes(1);
    expect(replies[0]).toMatchObject({ envelopeId: 'envelope-a' });
    expect(replies[1]).toMatchObject({
      envelopeId: 'envelope-b',
      body: { id: 'invoke-b' },
    });
    await app.stop();
  });
});
