import {
  connectionState,
  createSocketTestApp,
  dispatch,
  envelope,
  invokeActivity,
  messageActivity,
  resetConnectionState,
  serviceUrl,
} from './app.e2e.test-harness';
import {
  SocketActivityEnvelope,
  SOCKET_MODE_PROTOCOL_VERSION,
} from './types';

describe('Socket Mode E2E: protocol and observability', () => {
  beforeEach(resetConnectionState);

  it('accepts PascalCase envelopes and returns the current protocol version', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn(async () => ({
      status: 202,
      body: { accepted: true },
    }));
    app.on('card.action', handler as any);
    await app.start();

    const reply = await dispatch({
      ProtocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
      EnvelopeId: 'pascal-envelope',
      Type: 'invoke',
      Payload: invokeActivity('adaptiveCard/action', {
        action: { verb: 'run' },
      }),
    } as unknown as SocketActivityEnvelope);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({
      protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
      envelopeId: 'pascal-envelope',
      status: 202,
      body: { accepted: true },
    });
    await app.stop();
  });

  it.each([undefined, 0, SOCKET_MODE_PROTOCOL_VERSION])(
    'dispatches a supported protocol version (%s)',
    async (protocolVersion) => {
      const app = createSocketTestApp();
      const handler = jest.fn();
      app.on('message', handler);
      await app.start();

      const reply = await dispatch({
        ...envelope(messageActivity(), 'supported-version-envelope'),
        protocolVersion,
      });

      expect(handler).toHaveBeenCalledTimes(1);
      expect(reply).toMatchObject({
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: 'supported-version-envelope',
        status: 200,
      });
      await app.stop();
    }
  );

  it('rejects a future protocol version before App dispatch', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn();
    app.on('card.action', handler as any);
    await app.start();

    const reply = await dispatch({
      ...envelope(
        invokeActivity('adaptiveCard/action'),
        'future-version-envelope'
      ),
      protocolVersion: SOCKET_MODE_PROTOCOL_VERSION + 1,
    });

    expect(handler).not.toHaveBeenCalled();
    expect(reply).toMatchObject({
      protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
      envelopeId: 'future-version-envelope',
      status: 400,
      body: {
        error: `unsupported protocolVersion ${
          SOCKET_MODE_PROTOCOL_VERSION + 1
        }`,
      },
    });
    await app.stop();
  });

  it('accepts the activity payload alias', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();

    const reply = await dispatch({
      type: 'message',
      envelopeId: 'activity-alias-envelope',
      activity: messageActivity(),
    });

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({
      envelopeId: 'activity-alias-envelope',
      status: 200,
    });
    await app.stop();
  });

  it.each([null, {}])(
    'drops a malformed activity payload (%p)',
    async (payload) => {
      const app = createSocketTestApp();
      const handler = jest.fn();
      app.on('activity', handler);
      await app.start();

      const reply = await dispatch({
        type: 'message',
        envelopeId: 'malformed-envelope',
        payload,
      });

      expect(reply).toBeUndefined();
      expect(handler).not.toHaveBeenCalled();
      await app.stop();
    }
  );

  it('supplies a normalized connection-authenticated token to App', async () => {
    const app = createSocketTestApp();
    const activityEvent = jest.fn();
    app.event('activity', activityEvent);
    await app.start();

    await dispatch(envelope(messageActivity(), 'token-envelope'));

    const token = activityEvent.mock.calls[0][0].token;
    expect(token).toMatchObject({
      appId: 'bot1',
      from: 'azure',
      fromId: '',
      serviceUrl,
    });
    expect(token.toString()).toBe('');
    expect(token.isExpired()).toBe(false);
    await app.stop();
  });

  it('returns a correlated 500 for an invoke failure and processes the next invoke', async () => {
    const app = createSocketTestApp();
    const handler = jest
      .fn()
      .mockRejectedValueOnce(new Error('invoke failed'))
      .mockResolvedValueOnce({ status: 200, body: { recovered: true } });
    app.on('card.action', handler as any);
    await app.start();

    const failed = await dispatch(
      {
        ...envelope(invokeActivity('adaptiveCard/action'), 'failed-invoke'),
        type: 'invoke',
      }
    );
    const recovered = await dispatch(
      {
        ...envelope(invokeActivity('adaptiveCard/action'), 'recovered-invoke'),
        type: 'invoke',
      }
    );

    expect(failed).toMatchObject({
      envelopeId: 'failed-invoke',
      status: 500,
    });
    expect(failed?.body).toBeUndefined();
    expect(recovered).toMatchObject({
      envelopeId: 'recovered-invoke',
      status: 200,
      body: { recovered: true },
    });
    await app.stop();
  });

  it('returns a correlated bodyless 500 for a one-way handler failure', async () => {
    const app = createSocketTestApp();
    app.on('message', async () => {
      throw new Error('message failed');
    });
    await app.start();

    const reply = await dispatch(
      envelope(messageActivity(), 'failed-message')
    );

    expect(reply).toMatchObject({
      protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
      envelopeId: 'failed-message',
      status: 500,
    });
    expect(reply?.body).toBeUndefined();
    await app.stop();
  });

  it('waits for a slow handler before returning its acknowledgement', async () => {
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const app = createSocketTestApp();
    app.on('message', async () => {
      await gate;
    });
    await app.start();

    let settled = false;
    const reply = dispatch(envelope(messageActivity(), 'slow-envelope')).then(
      (result) => {
        settled = true;
        return result;
      }
    );
    await Promise.resolve();
    expect(settled).toBe(false);

    release();
    await expect(reply).resolves.toMatchObject({
      envelopeId: 'slow-envelope',
      status: 200,
    });
    await app.stop();
  });

  it('exposes geo-tagged lifecycle events', async () => {
    const app = createSocketTestApp({
      socketMode: { geos: [''], reconnectDelaysMs: [0] },
    });
    const ready = jest.fn();
    const disconnected = jest.fn();
    const reconnected = jest.fn();
    app.socketMode!.events.on('ready', ready);
    app.socketMode!.events.on('disconnected', disconnected);
    app.socketMode!.events.on('reconnected', reconnected);
    await app.start();

    const error = new Error('network drop');
    connectionState.connections[0].drop(error);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(ready).toHaveBeenCalledWith({
      geo: '',
      frame: expect.objectContaining({ botKey: 'bot1' }),
    });
    expect(disconnected).toHaveBeenCalledWith({ geo: '', error });
    expect(reconnected).toHaveBeenCalledWith({ geo: '' });
    await app.stop();
  });
});
