import { CloudAdapter, TurnContext } from 'botbuilder';
import e from 'express';

import { IMessageActivity, IToken, MessageActivity } from '@microsoft/teams.api';

import { App, IPluginStartEvent } from '@microsoft/teams.apps';
import { JwtValidatedRequest } from '@microsoft/teams.apps/dist/middleware';

import { BotBuilderPlugin } from './plugin';

class TestBotBuilderPlugin extends BotBuilderPlugin {
  async onStart(_event: IPluginStartEvent) {
    // No-op for tests
  }

  async onStop() {
    // No-op for tests
  }

  async OnRequestTest(req: JwtValidatedRequest, res: e.Response, _next: e.NextFunction) {
    await this.onRequest(req, res, _next);
  }
}

describe('BotBuilderPlugin', () => {
  let plugin: TestBotBuilderPlugin;
  let app: App<TestBotBuilderPlugin>;
  let adapter: { process: jest.Mock };
  let adapterProcessFn: (req: any, res: any, fn: (context: TurnContext) => Promise<void>) => Promise<void>;
  const token: IToken = {
    appId: 'app-id',
    serviceUrl: 'https://service.url',
    from: 'bot',
    fromId: 'bot-id',
    toString: () => 'token',
    isExpired: () => false,
  };
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
        validatedToken: token,
      } as JwtValidatedRequest;

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
