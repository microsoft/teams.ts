import { IMessageActivity, InvokeResponse, ITaskFetchInvokeActivity, IToken, MessageActivity, TaskModuleResponse } from '@microsoft/teams.api';

import { App } from './app';
import { IActivityEvent } from './events/activity';
import { TestHttpPlugin } from './plugins/http/plugin.spec';

describe('App', () => {
  let senderPlugin: TestHttpPlugin;
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
    senderPlugin = new TestHttpPlugin();
    app = new App({
      plugins: [senderPlugin],
    });
    app.start();
  });

  afterEach(() => {
    app.stop();
  });

  describe('process', () => {
    it('should return status 200 if no route matches', async () => {
      const event: IActivityEvent = {
        token: token,
        activity: activity,
        sender: senderPlugin,
      };

      const response = await app.process(senderPlugin, event);
      expect(response.status).toBe(200);
      expect(response.body).toBeUndefined();
    });

    it('should return an invoke response', async () => {
      const event: IActivityEvent = {
        token: token,
        activity: activity,
        sender: senderPlugin,
      };

      app.use(() => {
        const response: InvokeResponse = {
          status: 413,
          body: { result: 'success' }
        };
        // returning invoke response
        return response;
      });

      const response = await app.process(senderPlugin, event);
      expect(response.status).toBe(413);
      expect(response.body).toEqual({ result: 'success' });
    });

    it('should return a non-invoke response', async () => {
      const taskFetchInvokeActivity: ITaskFetchInvokeActivity = {
        type: 'invoke',
        name: 'task/fetch',
        value: {}
      } as ITaskFetchInvokeActivity;

      const event: IActivityEvent = {
        token: token,
        activity: taskFetchInvokeActivity,
        sender: senderPlugin,
      };

      const dialogOpenResponse: TaskModuleResponse = {
        task: {
          type: 'message',
          value: 'Form was submitted',
        },
      };

      app.on('dialog.open', () => {
        // returning non-invoke response
        return dialogOpenResponse;
      });

      const response = await app.process(senderPlugin, event);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(dialogOpenResponse);
    });

    it('should return 500 status response if an error is thrown', async () => {
      const event: IActivityEvent = {
        token: token,
        activity: activity,
        sender: senderPlugin,
      };

      app.use(() => {
        throw new Error('Test error');
      });

      const response = await app.process(senderPlugin, event);
      expect(response.status).toBe(500);
      expect(response.body).toBeUndefined();
    });
  });
});
