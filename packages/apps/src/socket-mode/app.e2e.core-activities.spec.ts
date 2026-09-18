import {
  createSocketTestApp,
  dispatch,
  envelope,
  invokeActivity,
  messageActivity,
  resetConnectionState,
} from './app.e2e.test-harness';

describe('Socket Mode E2E: core message, card, and dialog activities', () => {
  beforeEach(resetConnectionState);

  it('routes a message once and acknowledges it after the handler completes', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();

    const reply = await dispatch(envelope(messageActivity(), 'message-envelope'));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({
      protocolVersion: 1,
      envelopeId: 'message-envelope',
      status: 200,
    });
    expect(reply?.body).toBeUndefined();
    await app.stop();
  });

  it('routes an Adaptive Card action and returns its invoke result', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn(async ({ activity }: any) => ({
      status: 202,
      body: { action: activity.value.action.verb },
    }));
    app.on('card.action', handler as any);
    await app.start();

    const reply = await dispatch(
      envelope(
        invokeActivity('adaptiveCard/action', {
          action: { type: 'Action.Execute', verb: 'save' },
        }),
        'card-envelope'
      )
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({
      protocolVersion: 1,
      envelopeId: 'card-envelope',
      status: 202,
      body: { action: 'save' },
    });
    await app.stop();
  });

  it.each([
    ['dialog.open', 'task/fetch', { data: { dialog_id: 'profile' } }],
    ['dialog.submit', 'task/submit', { data: { action: 'save' } }],
  ])('routes %s through the shared App pipeline', async (route, name, value) => {
    const app = createSocketTestApp();
    const handler = jest.fn(async () => ({
      status: 200,
      body: { route },
    }));
    (app as any).on(route, handler);
    await app.start();

    const reply = await dispatch(
      envelope(invokeActivity(name, value), `${route}-envelope`)
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({
      envelopeId: `${route}-envelope`,
      status: 200,
      body: { route },
    });
    await app.stop();
  });

  it('routes message reactions as one-way activities', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn();
    (app as any).on('messageReaction', handler);
    await app.start();

    const activity = {
      ...messageActivity({
        type: 'messageReaction',
        reactionsAdded: [{ type: 'like' }],
      }),
    };
    const reply = await dispatch(envelope(activity, 'reaction-envelope'));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({
      envelopeId: 'reaction-envelope',
      status: 200,
    });
    expect(reply?.body).toBeUndefined();
    await app.stop();
  });
});
