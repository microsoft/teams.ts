import {
  createSocketTestApp,
  dispatch,
  envelope,
  eventActivity,
  invokeActivity,
  messageActivity,
  resetConnectionState,
} from './app.e2e.test-harness';

describe('Socket Mode E2E: file, authentication, extension, and meeting activities', () => {
  beforeEach(resetConnectionState);

  it.each([
    ['file.consent.accept', { action: 'accept' }],
    ['file.consent.decline', { action: 'decline' }],
  ])('routes %s once', async (route, value) => {
    const app = createSocketTestApp();
    const handler = jest.fn(async () => ({ status: 200, body: { route } }));
    (app as any).on(route, handler);
    await app.start();

    const reply = await dispatch(
      envelope(
        invokeActivity('fileConsent/invoke', value),
        `${route}-envelope`
      )
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({ status: 200, body: { route } });
    await app.stop();
  });

  it('delivers file attachment metadata through a message activity', async () => {
    const app = createSocketTestApp();
    const handler = jest.fn();
    app.on('message', handler);
    await app.start();

    const attachment = {
      contentType: 'application/vnd.microsoft.teams.file.download.info',
      name: 'report.txt',
      content: { downloadUrl: 'https://files.example/report.txt' },
    };
    await dispatch(
      envelope(messageActivity({ attachments: [attachment] }), 'file-envelope')
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].activity.attachments).toEqual([attachment]);
    await app.stop();
  });

  it.each([
    ['signin.token-exchange', 'signin/tokenExchange'],
    ['signin.verify-state', 'signin/verifyState'],
  ])('routes Teams-delivered %s invokes without an HTTP callback', async (route, name) => {
    const app = createSocketTestApp();
    const handler = jest.fn(async () => ({ status: 200, body: { route } }));
    (app as any).on(route, handler);
    await app.start();

    const reply = await dispatch(
      envelope(invokeActivity(name, { token: 'opaque' }), `${route}-envelope`)
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({ status: 200, body: { route } });
    await app.stop();
  });

  it.each([
    ['message.ext.query', 'composeExtension/query'],
    ['message.ext.select-item', 'composeExtension/selectItem'],
    ['message.ext.submit', 'composeExtension/submitAction'],
    ['message.ext.open', 'composeExtension/fetchTask'],
    ['message.ext.query-link', 'composeExtension/queryLink'],
  ])('routes %s through Socket Mode', async (route, name) => {
    const app = createSocketTestApp();
    const handler = jest.fn(async () => ({ status: 200, body: { route } }));
    (app as any).on(route, handler);
    await app.start();

    const reply = await dispatch(
      envelope(invokeActivity(name), `${route}-envelope`)
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({ status: 200, body: { route } });
    await app.stop();
  });

  it.each([
    ['meetingStart', 'application/vnd.microsoft.meetingStart'],
    ['meetingEnd', 'application/vnd.microsoft.meetingEnd'],
  ])('routes %s as a one-way event', async (route, name) => {
    const app = createSocketTestApp();
    const handler = jest.fn();
    (app as any).on(route, handler);
    await app.start();

    const reply = await dispatch(
      envelope(eventActivity(name), `${route}-envelope`)
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(reply).toMatchObject({ status: 200 });
    expect(reply?.body).toBeUndefined();
    await app.stop();
  });
});
