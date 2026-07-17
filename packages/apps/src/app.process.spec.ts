import { IMessageActivity, InvokeResponse, ISignInFailureInvokeActivity, ITaskFetchInvokeActivity, IToken, MessageActivity, TaskModuleResponse } from '@microsoft/teams.api';

import { App } from './app';
import { IActivityResponseEvent, IActivitySentEvent, IErrorEvent } from './events';
import { IActivityEvent } from './events/activity';
import { createTestApp } from './test-utils';

describe('App', () => {
  let app: App;
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
    app = createTestApp();
    app.start();
  });

  afterEach(() => {
    app.stop();
  });

  describe('process', () => {
    it('should return status 200 if no route matches', async () => {
      const event: IActivityEvent = {
        token: token,
        body: activity,
      };

      const response = await app.process(event);
      expect(response.status).toBe(200);
      expect(response.body).toBeUndefined();
    });

    it('should return an invoke response', async () => {
      const event: IActivityEvent = {
        token: token,
        body: activity,
      };

      app.use(() => {
        const response: InvokeResponse = {
          status: 413,
          body: { result: 'success' }
        };
        // returning invoke response
        return response;
      });

      const response = await app.process(event);
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
        body: taskFetchInvokeActivity,
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

      const response = await app.process(event);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(dialogOpenResponse);
    });

    it('should return 500 status response if an error is thrown', async () => {
      const event: IActivityEvent = {
        token: token,
        body: activity,
      };

      app.use(() => {
        throw new Error('Test error');
      });

      const response = await app.process(event);
      expect(response.status).toBe(500);
      expect(response.body).toBeUndefined();
    });

    it('should handle signin/failure invoke with default handler', async () => {
      const signinFailureActivity = {
        type: 'invoke',
        name: 'signin/failure',
        channelId: 'msteams',
        from: { id: 'user-1', name: 'Test User' },
        conversation: { id: 'conv-1' },
        recipient: { id: 'bot-1', name: 'Test Bot' },
        value: {
          code: 'resourcematchfailed',
          message: 'Resource match failed',
        },
      } as unknown as ISignInFailureInvokeActivity;

      const event: IActivityEvent = {
        token: token,
        body: signinFailureActivity,
      };

      const response = await app.process(event);
      expect(response.status).toBe(200);
    });

    it('should use incoming activity serviceUrl when sending replies', async () => {
      const incomingServiceUrl = 'https://incoming-service.botframework.com';

      // Create incoming activity with specific serviceUrl
      const incomingActivity: IMessageActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-123', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl(incomingServiceUrl)
        .toInterface();

      const incomingToken: IToken = {
        appId: 'app-id',
        serviceUrl: incomingServiceUrl,
        from: 'bot',
        fromId: 'bot-1',
        toString: () => 'token',
        isExpired: () => false,
      };

      const event: IActivityEvent = {
        token: incomingToken,
        body: incomingActivity,
      };

      // Track what serviceUrl is used when sending
      let capturedServiceUrl: string | undefined;
      const originalSend = app['activitySender'].send.bind(app['activitySender']);
      jest.spyOn(app['activitySender'], 'send').mockImplementation((activity, ref) => {
        capturedServiceUrl = ref.serviceUrl;
        return originalSend(activity, ref);
      });

      // Set up handler that replies
      app.on('message', async ({ reply }) => {
        await reply('response');
      });

      await app.process(event);

      // Verify the serviceUrl from incoming activity was used
      expect(capturedServiceUrl).toBe(incomingServiceUrl);
    });

    it('should use different serviceUrls for different incoming activities', async () => {
      const serviceUrl1 = 'https://service-1.botframework.com';
      const serviceUrl2 = 'https://service-2.botframework.com';

      const capturedServiceUrls: string[] = [];
      const originalSend = app['activitySender'].send.bind(app['activitySender']);
      jest.spyOn(app['activitySender'], 'send').mockImplementation((activity, ref) => {
        capturedServiceUrls.push(ref.serviceUrl);
        return originalSend(activity, ref);
      });

      app.on('message', async ({ reply }) => {
        await reply('response');
      });

      // Process first activity with serviceUrl1
      const activity1: IMessageActivity = new MessageActivity('hello1')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl(serviceUrl1)
        .toInterface();

      await app.process({
        token: { ...token, serviceUrl: serviceUrl1 },
        body: activity1,
      });

      // Process second activity with serviceUrl2
      const activity2: IMessageActivity = new MessageActivity('hello2')
        .withFrom({ id: 'user-2', name: 'Test User 2', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-2', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl(serviceUrl2)
        .toInterface();

      await app.process({
        token: { ...token, serviceUrl: serviceUrl2 },
        body: activity2,
      });

      // Verify both serviceUrls were used correctly
      expect(capturedServiceUrls).toEqual([serviceUrl1, serviceUrl2]);
    });

    it('should expose interface methods like getQuotedMessages on message activities', async () => {
      // Use a plain object (as would arrive from JSON deserialization over HTTP)
      // rather than a MessageActivity instance, to verify the context constructor
      // enriches it with bound interface methods.
      const incomingActivity = {
        type: 'message',
        text: 'hello',
        from: { id: 'user-1', name: 'Test User', role: 'user' },
        recipient: { id: 'bot-1', name: 'Test Bot', role: 'bot' },
        conversation: { id: 'conv-1', conversationType: 'personal' },
        channelId: 'msteams',
        serviceUrl: 'https://service.url',
      } as unknown as IMessageActivity;

      const event: IActivityEvent = {
        token: token,
        body: incomingActivity,
      };

      let capturedActivity: IMessageActivity | undefined;
      app.on('message', async ({ activity }) => {
        capturedActivity = activity;
      });

      await app.process(event);

      expect(capturedActivity).toBeDefined();
      expect(typeof capturedActivity!.getQuotedMessages).toBe('function');
      expect(capturedActivity!.getQuotedMessages()).toEqual([]);
    });
  });

  describe('lifecycle events', () => {
    const messageActivity: IMessageActivity = new MessageActivity('hello')
      .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
      .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
      .withConversation({ id: 'conv-1', conversationType: 'personal' })
      .withChannelId('msteams')
      .withServiceUrl('https://service.url')
      .toInterface();

    it('should emit the "activity" event when an activity is received via onActivity', async () => {
      const received: IActivityEvent[] = [];
      app.event('activity', (event) => {
        received.push(event);
      });

      const event: IActivityEvent = {
        token: token,
        body: messageActivity,
      };

      await app.onActivity(event);

      expect(received).toHaveLength(1);
      expect(received[0]).toBe(event);
    });

    it('should emit the "activity.response" event after processing', async () => {
      const responses: IActivityResponseEvent[] = [];
      app.event('activity.response', (event) => {
        responses.push(event);
      });

      app.use(() => {
        const response: InvokeResponse = {
          status: 413,
          body: { result: 'success' },
        };
        return response;
      });

      const event: IActivityEvent = {
        token: token,
        body: messageActivity,
      };

      await app.process(event);

      expect(responses).toHaveLength(1);
      expect(responses[0].response).toEqual({ status: 413, body: { result: 'success' } });
      expect(responses[0].activity).toBeDefined();
    });

    it('should emit the "activity.sent" event when a reply is sent', async () => {
      const sent: IActivitySentEvent[] = [];
      app.event('activity.sent', (event) => {
        sent.push(event);
      });

      jest
        .spyOn(app['activitySender'], 'send')
        .mockImplementation(async (activity) => ({ id: 'sent-1', ...activity }) as any);

      app.on('message', async ({ reply }) => {
        await reply('response');
      });

      const event: IActivityEvent = {
        token: token,
        body: messageActivity,
      };

      await app.process(event);

      expect(sent.length).toBeGreaterThanOrEqual(1);
      expect(sent.some((e) => e.activity !== undefined)).toBe(true);
    });

    it('should emit the "error" event when a route throws', async () => {
      const errors: IErrorEvent[] = [];
      app.event('error', (event) => {
        errors.push(event);
      });

      app.use(() => {
        throw new Error('Test error');
      });

      const event: IActivityEvent = {
        token: token,
        body: messageActivity,
      };

      const response = await app.process(event);

      expect(response.status).toBe(500);
      expect(errors).toHaveLength(1);
      expect(errors[0].error.message).toBe('Test error');
      expect(errors[0].activity).toBeDefined();
    });
  });

  describe('user token lookup', () => {
    const userActivity = new MessageActivity('hi', {
      id: 'a1',
      channelId: 'msteams',
      from: { id: 'user-1', name: 'User' },
      conversation: { id: 'c1' },
      recipient: { id: 'bot' },
    } as Partial<IMessageActivity>);

    it('does not fetch the user token when no OAuth connection is configured', async () => {
      const testApp = createTestApp();
      testApp.start();
      const spy = jest.spyOn(testApp.api.users, 'getToken');

      await testApp.process({ token, body: userActivity });

      expect(spy).not.toHaveBeenCalled();
      testApp.stop();
    });

    it('fetches the user token when an OAuth connection is configured', async () => {
      const testApp = createTestApp({ oauth: { defaultConnectionName: 'graph' } });
      testApp.start();
      const spy = jest
        .spyOn(testApp.api.users, 'getToken')
        .mockResolvedValue({ token: 'user-token' } as any);

      await testApp.process({ token, body: userActivity });

      expect(spy).toHaveBeenCalledTimes(1);
      testApp.stop();
    });

    it('honors an explicit fetchUserToken=false override even when OAuth is configured', async () => {
      const testApp = createTestApp({ oauth: { defaultConnectionName: 'graph', fetchUserToken: false } });
      testApp.start();
      const spy = jest.spyOn(testApp.api.users, 'getToken');

      await testApp.process({ token, body: userActivity });

      expect(spy).not.toHaveBeenCalled();
      testApp.stop();
    });

    it('honors an explicit fetchUserToken=true override when no OAuth connection is configured', async () => {
      const testApp = createTestApp({ oauth: { fetchUserToken: true } });
      testApp.start();
      const spy = jest
        .spyOn(testApp.api.users, 'getToken')
        .mockResolvedValue({ token: 'user-token' } as any);

      await testApp.process({ token, body: userActivity });

      expect(spy).toHaveBeenCalledTimes(1);
      testApp.stop();
    });
  });
});
