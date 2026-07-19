import { context, propagation, ROOT_CONTEXT } from '@opentelemetry/api';
import type { Context, ContextManager, Span, Tracer } from '@opentelemetry/api';

import { IMessageActivity, InvokeResponse, ISignInFailureInvokeActivity, ITaskFetchInvokeActivity, IToken, MessageActivity, TaskModuleResponse } from '@microsoft/teams.api';

import { ActivitySender } from './activity-sender';
import { App } from './app';
import { APP_BAGGAGE_KEYS } from './diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotActivityReceived,
  recordTeamsBotApplicationException,
  recordTeamsBotHandlerDispatched,
  recordTeamsBotHandlerDuration,
  recordTeamsBotHandlerFailure,
  recordTeamsBotHandlerUnmatched,
  recordTeamsBotTurnDuration
} from './diagnostics/helpers';
import { IActivityResponseEvent, IActivitySentEvent, IErrorEvent } from './events';
import { IActivityEvent } from './events/activity';
import { createTestApp } from './test-utils';

jest.mock('./diagnostics/helpers', () => ({
  getTeamsBotApplicationTracer: jest.fn(),
  recordTeamsBotActivityReceived: jest.fn(),
  recordTeamsBotApplicationException: jest.fn(),
  recordTeamsBotHandlerDispatched: jest.fn(),
  recordTeamsBotHandlerDuration: jest.fn(),
  recordTeamsBotHandlerFailure: jest.fn(),
  recordTeamsBotHandlerUnmatched: jest.fn(),
  recordTeamsBotOAuthError: jest.fn(),
  recordTeamsBotOAuthOperation: jest.fn(),
  recordTeamsBotOAuthOperationDuration: jest.fn(),
  recordTeamsBotTurnDuration: jest.fn(),
}));

type SpanRecord = {
  readonly name: string;
  readonly options: any;
  readonly span: Span;
};

class TestContextManager implements ContextManager {
  private current = ROOT_CONTEXT;

  active(): Context {
    return this.current;
  }

  with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(
    scopedContext: Context,
    fn: F,
    thisArg?: ThisParameterType<F>,
    ...args: A
  ): ReturnType<F> {
    const previous = this.current;
    this.current = scopedContext;

    try {
      const result = fn.apply(thisArg, args);

      if (isPromiseLike(result)) {
        return result.finally(() => {
          this.current = previous;
        }) as ReturnType<F>;
      }

      this.current = previous;
      return result;
    } catch (error) {
      this.current = previous;
      throw error;
    }
  }

  bind<T>(_context: Context, target: T): T {
    return target;
  }

  enable(): this {
    return this;
  }

  disable(): this {
    this.current = ROOT_CONTEXT;
    return this;
  }
}

function isPromiseLike(value: unknown): value is Promise<unknown> {
  return !!value && typeof value === 'object' && 'finally' in value && typeof value.finally === 'function';
}

describe('App', () => {
  let app: App;
  let spans: SpanRecord[];
  const startActiveSpan = jest.fn();
  const tracer = { startActiveSpan } as unknown as Tracer;
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
    spans = [];
    jest.clearAllMocks();
    context.disable();
    context.setGlobalContextManager(new TestContextManager());
    jest.mocked(getTeamsBotApplicationTracer).mockReturnValue(tracer);
    startActiveSpan.mockImplementation((name: string, options: unknown, callback: (span: Span) => unknown) => {
      const span = {
        setAttribute: jest.fn(),
        recordException: jest.fn(),
        setStatus: jest.fn(),
        end: jest.fn(),
      } as unknown as Span;
      spans.push({ name, options, span });
      return callback(span);
    });
    app = createTestApp();
    app.start();
  });

  afterEach(() => {
    app.stop();
    jest.restoreAllMocks();
    context.disable();
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

    it('emits turn telemetry and unmatched metrics without recording payload text', async () => {
      const incomingActivity: IMessageActivity = new MessageActivity('do not record this')
        .withId('activity-id')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url/')
        .toInterface();

      const response = await app.process({
        token,
        body: incomingActivity,
      });

      const turnSpan = spans.find((span) => span.name === 'turn');
      expect(response.status).toBe(200);
      expect(recordTeamsBotActivityReceived).toHaveBeenCalledWith('message');
      expect(recordTeamsBotHandlerUnmatched).toHaveBeenCalledWith('message', undefined);
      expect(recordTeamsBotTurnDuration).toHaveBeenCalledWith('message', expect.any(Number));
      expect(turnSpan?.options.attributes).toEqual(expect.objectContaining({
        'activity.type': 'message',
        'activity.id': 'activity-id',
        'conversation.id': 'conv-1',
        'channel.id': 'msteams',
        'bot.id': 'bot-1',
        'service.url': 'https://service.url',
      }));
      expect(turnSpan?.options.attributes).not.toHaveProperty('text');
      expect(turnSpan?.span.end).toHaveBeenCalled();
    });

    it('emits unmatched invoke metrics with invoke name only', async () => {
      await app.process({
        token,
        body: {
          type: 'invoke',
          name: 'task/fetch',
          channelId: 'msteams',
          from: { id: 'user-1' },
          recipient: { id: 'bot-1' },
          conversation: { id: 'conv-1' },
          serviceUrl: 'https://service.url',
          value: { data: { dialog_id: 'not-recorded' } },
        } as any,
      });

      expect(recordTeamsBotHandlerUnmatched).toHaveBeenCalledWith('invoke', 'task/fetch');
    });

    it('emits handler telemetry for selected route handlers', async () => {
      app.on('message', () => undefined);

      const response = await app.process({
        token,
        body: new MessageActivity('hello').toInterface(),
      });

      const handlerSpan = spans.find((span) => span.name === 'handler');
      expect(response.status).toBe(200);
      expect(recordTeamsBotHandlerDispatched).toHaveBeenCalledWith('message', 'type');
      expect(recordTeamsBotHandlerDuration).toHaveBeenCalledWith('message', 'type', expect.any(Number));
      expect(handlerSpan?.options.attributes).toEqual({
        'handler.type': 'message',
        'handler.dispatch': 'type',
      });
      expect(handlerSpan?.span.end).toHaveBeenCalled();
    });

    it('records handler and turn exceptions while preserving error responses', async () => {
      const error = new Error('Test error');
      app.use(() => {
        throw error;
      });

      const response = await app.process({
        token,
        body: new MessageActivity('hello').toInterface(),
      });

      const turnSpan = spans.find((span) => span.name === 'turn');
      const handlerSpan = spans.find((span) => span.name === 'handler');
      expect(response.status).toBe(500);
      expect(recordTeamsBotHandlerFailure).toHaveBeenCalledWith('message', 'middleware');
      expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(handlerSpan?.span, error);
      expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(turnSpan?.span, error);
      expect(recordTeamsBotHandlerDuration).toHaveBeenCalledWith('message', 'middleware', expect.any(Number));
    });

    it('applies activity-derived baggage while processing the turn', async () => {
      let activeConversationId: string | undefined;
      let activeTenantId: string | undefined;
      const incomingActivity: IMessageActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot', tenantId: 'tenant-id' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url')
        .toInterface();

      app.on('message', () => {
        const baggage = propagation.getActiveBaggage();
        activeConversationId = baggage?.getEntry(APP_BAGGAGE_KEYS.conversationId)?.value;
        activeTenantId = baggage?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value;
      });

      const response = await app.process({
        token,
        body: incomingActivity,
      });

      expect(response.status).toBe(200);
      expect(activeConversationId).toBe('conv-1');
      expect(activeTenantId).toBe('tenant-id');
      expect(propagation.getActiveBaggage()?.getEntry(APP_BAGGAGE_KEYS.conversationId)).toBeUndefined();
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
      jest.spyOn(ActivitySender.prototype, 'send').mockImplementation(async (activity, ref) => {
        capturedServiceUrl = ref.serviceUrl;
        return { ...activity, id: 'sent-1' };
      });

      // Set up handler that replies
      app.on('message', async ({ reply }) => {
        await reply('response');
      });

      await app.process(event);

      // Verify the serviceUrl from incoming activity was used
      expect(capturedServiceUrl).toBe(incomingServiceUrl);
    });

    it('should scope the app API from the incoming activity using clone', async () => {
      const incomingServiceUrl = 'https://incoming-service.botframework.com';
      const incomingActivity: IMessageActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({
          id: 'bot-1',
          name: 'Test Bot',
          role: 'bot',
          agenticAppId: 'agent-app',
          agenticUserId: 'agent-user',
        })
        .withConversation({ id: 'conv-123', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl(incomingServiceUrl)
        .toInterface();
      const clone = jest.spyOn(app.api, 'clone');

      app.on('message', async ({ api }) => {
        expect(api.serviceUrl).toBe(incomingServiceUrl);
      });

      await app.process({
        token: { ...token, serviceUrl: incomingServiceUrl },
        body: incomingActivity,
      });

      expect(clone).toHaveBeenCalledWith({
        serviceUrl: incomingServiceUrl,
        agenticIdentity: expect.objectContaining({
          agenticAppId: 'agent-app',
          agenticUserId: 'agent-user',
        }),
      });
    });

    it('should use different serviceUrls for different incoming activities', async () => {
      const serviceUrl1 = 'https://service-1.botframework.com';
      const serviceUrl2 = 'https://service-2.botframework.com';

      const capturedServiceUrls: string[] = [];
      jest.spyOn(ActivitySender.prototype, 'send').mockImplementation(async (activity, ref) => {
        capturedServiceUrls.push(ref.serviceUrl);
        return { ...activity, id: 'sent-1' };
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
        .spyOn(ActivitySender.prototype, 'send')
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
});
