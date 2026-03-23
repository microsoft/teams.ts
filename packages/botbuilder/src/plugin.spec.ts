import { CloudAdapter, TurnContext } from 'botbuilder';
import e from 'express';

import { IMessageActivity, MessageActivity } from '@microsoft/teams.api';

import { App, IPluginStartEvent, ExpressAdapter } from '@microsoft/teams.apps';

import { BotBuilderPlugin } from './plugin';

// Mock adapter that extends ExpressAdapter to pass instanceof check
// while avoiding real server operations in tests
class MockExpressAdapter extends ExpressAdapter {
  constructor() {
    // Don't create real server - pass undefined
    super(undefined);
  }

  // Override to prevent actual server start
  async start(_port: number): Promise<void> {
    return Promise.resolve();
  }

  // Override to prevent server close operations
  async stop(): Promise<void> {
    return Promise.resolve();
  }
}

class TestBotBuilderPlugin extends BotBuilderPlugin {
  async onStart(_event: IPluginStartEvent) {
    // No-op for tests
  }

  async onStop() {
    // No-op for tests
  }

  async OnRequestTest(req: e.Request, res: e.Response, next: e.NextFunction) {
    await this.onRequest(req, res, next);
  }
}

describe('BotBuilderPlugin', () => {
  let plugin: TestBotBuilderPlugin;
  let app: App<TestBotBuilderPlugin>;
  let adapter: { process: jest.Mock };
  let adapterProcessFn: (req: any, res: any, fn: (context: TurnContext) => Promise<void>) => Promise<void>;
  const activity: IMessageActivity = new MessageActivity();

  beforeEach(() => {
    adapterProcessFn = async (_req: any, _res: any, fn: (context: TurnContext) => Promise<void>) => {
        await fn({ activity: { id: 'activity-id' } } as TurnContext);
    };
    adapter = { process: jest.fn().mockImplementation(adapterProcessFn) };
    plugin = new TestBotBuilderPlugin({
      adapter: adapter as unknown as CloudAdapter,
    });
    app = new App({
      plugins: [plugin],
      httpServerAdapter: new MockExpressAdapter(),
      skipAuth: true,
    });
    app.start();
  });

  afterEach(() => {
    app.stop();
  });

  describe('OnRequest', () => {
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

      await plugin.OnRequestTest(req, res, next);

      expect(adapter.process).toHaveBeenCalledWith(req, res, expect.any(Function));
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('some data');
    });
  });
});
