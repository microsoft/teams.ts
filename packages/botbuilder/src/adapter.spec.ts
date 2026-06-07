import type { CloudAdapter, TurnContext } from 'botbuilder';

import type e from 'express';

import type { IMessageActivity } from '@microsoft/teams.api';
import { MessageActivity } from '@microsoft/teams.api';
import { App, ExpressAdapter } from '@microsoft/teams.apps';

import { BotBuilderAdapter } from './adapter';

class MockExpressAdapter extends ExpressAdapter {
  postMock = jest.fn();

  constructor() {
    super(undefined);
    (this as any).post = this.postMock;
  }

  async start(_port: number): Promise<void> {
    return Promise.resolve();
  }

  async stop(): Promise<void> {
    return Promise.resolve();
  }
}

describe('BotBuilderAdapter', () => {
  let app: App;
  let adapter: { processActivity: jest.Mock };
  let httpServerAdapter: MockExpressAdapter;
  let adapterProcessFn: (authHeader: string, activity: any, fn: (context: TurnContext) => Promise<void>) => Promise<any>;
  const activity: IMessageActivity = new MessageActivity();
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  beforeEach(async () => {
    delete process.env.MicrosoftAppId;
    delete process.env.MicrosoftAppPassword;
    delete process.env.MicrosoftAppTenantId;
    delete process.env.MicrosoftAppType;
    delete process.env.CLIENT_ID;
    delete process.env.CLIENT_SECRET;
    delete process.env.TENANT_ID;

    adapterProcessFn = async (_authHeader: string, activity: any, fn: (context: TurnContext) => Promise<void>) => {
      await fn({ activity: { ...activity, id: 'activity-id' } } as TurnContext);
      return undefined;
    };
    adapter = { processActivity: jest.fn().mockImplementation(adapterProcessFn) };
    httpServerAdapter = new MockExpressAdapter();
    app = new App({
      httpServerAdapter: new BotBuilderAdapter({
        cloudAdapter: adapter as unknown as CloudAdapter,
        httpServerAdapter,
      }),
      skipAuth: true,
    });
    await app.start();
  });

  afterEach(async () => {
    await app.stop();
  });

  it('should default to teams sdk if no activity handler registered', async () => {
    const req = {
      body: activity,
      headers: {},
    } as e.Request;

    app.use(() => {
      return { status: 200, body: 'some data' };
    });

    const res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
      headersSent: false
    } as unknown as e.Response;
    const next = jest.fn();

    const routeHandler = httpServerAdapter.postMock.mock.calls[0][2];
    await routeHandler(req, res, next);

    expect(adapter.processActivity).toHaveBeenCalledWith('', req.body, expect.any(Function));
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('some data');
  });

  it('sends BotBuilder invoke response when BotBuilder handles invoke', async () => {
    adapter.processActivity.mockResolvedValueOnce({
      status: 200,
      body: { source: 'botbuilder' },
    });
    const req = {
      body: { type: 'invoke', name: 'adaptiveCard/action', value: {} },
      headers: {},
    } as e.Request;
    const res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
      headersSent: false
    } as unknown as e.Response;
    const next = jest.fn();

    const routeHandler = httpServerAdapter.postMock.mock.calls[0][2];
    await routeHandler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ source: 'botbuilder' });
  });

  it('falls through to Teams SDK when BotBuilder does not handle invoke', async () => {
    adapter.processActivity.mockResolvedValueOnce({ status: 501 });
    const req = {
      body: { type: 'invoke', name: 'adaptiveCard/action', value: {} },
      headers: {},
    } as e.Request;
    app.use(() => ({ status: 200, body: { source: 'teams' } }));
    const res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
      headersSent: false
    } as unknown as e.Response;
    const next = jest.fn();

    const routeHandler = httpServerAdapter.postMock.mock.calls[0][2];
    await routeHandler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ source: 'teams' });
  });

  it('constructs CloudAdapter from MicrosoftApp environment variables', () => {
    process.env.MicrosoftAppId = 'app-id';
    process.env.MicrosoftAppPassword = 'secret';
    process.env.MicrosoftAppTenantId = 'tenant-id';
    process.env.MicrosoftAppType = 'SingleTenant';

    expect(() => new BotBuilderAdapter()).not.toThrow();
  });

  it('constructs CloudAdapter from Teams app environment variables', () => {
    process.env.CLIENT_ID = 'app-id';
    process.env.CLIENT_SECRET = 'secret';
    process.env.TENANT_ID = 'tenant-id';

    expect(() => new BotBuilderAdapter()).not.toThrow();
  });

  it('throws when neither cloudAdapter nor credentials are provided', () => {
    expect(() => new BotBuilderAdapter()).toThrow('BotBuilderAdapter requires credentials');
  });
});
