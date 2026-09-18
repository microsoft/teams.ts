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
