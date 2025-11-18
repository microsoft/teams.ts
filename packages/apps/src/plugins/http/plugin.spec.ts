import e from 'express';

import { IMessageActivity, IToken, MessageActivity } from '@microsoft/teams.api';

import { App } from '../../app';

import { JwtValidatedRequest } from '../../middleware';
import { IPluginStartEvent } from '../../types';

import { HttpPlugin } from './plugin';

export class TestHttpPlugin extends HttpPlugin {
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

describe('HttpPlugin', () => {
  let plugin: TestHttpPlugin;
  let app: App<TestHttpPlugin>;
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
    plugin = new TestHttpPlugin();
    app = new App({
      plugins: [plugin],
    });
    app.start();
  });

  afterEach(() => {
    app.stop();
  });

  describe('OnRequest', () => {
    it('should process incoming request', async () => {
      const req = {
        body: activity,
        validatedToken: token,
      } as JwtValidatedRequest;

      app.use(() => {
        return { status: 200, body: 'some data' };
      });

      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() } as any;
      const next = jest.fn();

      await plugin.OnRequestTest(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('some data');
    });
  });
});
