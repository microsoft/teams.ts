import { context, propagation, ROOT_CONTEXT } from '@opentelemetry/api';
import type { Baggage, Context, ContextManager, Span, Tracer } from '@opentelemetry/api';

import { IMessageActivity, InvokeResponse, ISignInFailureInvokeActivity, ITaskFetchInvokeActivity, IToken, MessageActivity, TaskModuleResponse } from '@microsoft/teams.api';
import { IStorage } from '@microsoft/teams.common';

import { ActivitySender } from './activity-sender';
import { App } from './app';
import { Agent365BaggageKeys } from './diagnostics/agent365-baggage';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotActivityReceived,
  recordTeamsBotApplicationException,
  recordTeamsBotHandlerDispatched,
  recordTeamsBotHandlerDuration,
  recordTeamsBotHandlerFailure,
  recordTeamsBotHandlerUnmatched,
  recordTeamsBotActivityProcessDuration
} from './diagnostics/helpers';
import { IActivityResponseEvent, IActivitySentEvent, IErrorEvent } from './events';
import { IActivityEvent } from './events/activity';
import { TurnStateContainer } from './state';
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
  recordTeamsBotActivityProcessDuration: jest.fn(),
}));

type SpanRecord = {
  readonly name: string;
  readonly options: any;
  readonly span: Span;
  /** baggage active at the moment the span was created */
  readonly baggage?: Baggage;
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
      spans.push({ name, options, span, baggage: propagation.getActiveBaggage() });
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
    it('loads, exposes, persists, and seals per-turn state', async () => {
      const data = new Map<string, string>();
      const storage: IStorage<string, string> = {
        get: (key) => data.get(key),
        set: (key, value) => {
          data.set(key, value);
        },
        delete: (key) => {
          data.delete(key);
        },
      };
      await app.stop();
      app = createTestApp({ state: { storage } });
      await app.start();
      const turnStates: TurnStateContainer[] = [];
      const counts: number[] = [];
      app.on('message', ({ state }) => {
        if (!state) {
          throw new Error('Expected state to be enabled.');
        }
        turnStates.push(state);
        const count = (state.conversation.get<number>('count') ?? 0) + 1;
        counts.push(count);
        state.conversation.set('count', count);
      });
      const stateActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .toInterface();

      await app.process({ token, body: stateActivity });
      await app.process({ token, body: stateActivity });

      expect(turnStates).toHaveLength(2);
      expect(counts).toEqual([1, 2]);
      expect(turnStates[0].conversation.isSealed).toBe(true);
      expect(() => turnStates[0].conversation.get('count')).toThrow();
    });

    it('persists dirty state when a handler fails', async () => {
      const data = new Map<string, string>();
      const storage: IStorage<string, string> = {
        get: (key) => data.get(key),
        set: (key, value) => {
          data.set(key, value);
        },
        delete: (key) => {
          data.delete(key);
        },
      };
      await app.stop();
      app = createTestApp({ state: { storage } });
      await app.start();
      app.on('message', ({ state }) => {
        state?.conversation.set('saved', true);
        throw new Error('handler failed');
      });
      const stateActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .toInterface();

      const response = await app.process({ token, body: stateActivity });

      expect(response.status).toBe(500);
      expect(data.get('ts:conv:conv-1')).toBe('{"saved":true}');
    });

    it('reports a state load failure without dispatching handlers', async () => {
      const loadError = new Error('load failed');
      const errors: IErrorEvent[] = [];
      const storage: IStorage<string, string> = {
        get: () => {
          throw loadError;
        },
        set: () => undefined,
        delete: () => undefined,
      };
      await app.stop();
      app = createTestApp({ state: { storage } });
      await app.start();
      const handler = jest.fn();
      app.on('message', handler);
      app.event('error', (event) => {
        errors.push(event);
      });
      const stateActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .toInterface();

      const response = await app.process({ token, body: stateActivity });

      expect(response.status).toBe(500);
      expect(handler).not.toHaveBeenCalled();
      expect(errors).toHaveLength(1);
      expect(errors[0].error).toBe(loadError);
    });

    it('seals state and reports the error when persistence fails', async () => {
      const saveError = new Error('save failed');
      const errors: IErrorEvent[] = [];
      const storage: IStorage<string, string> = {
        get: () => undefined,
        set: () => {
          throw saveError;
        },
        delete: () => undefined,
      };
      await app.stop();
      app = createTestApp({ state: { storage } });
      await app.start();
      let capturedState: TurnStateContainer | undefined;
      app.on('message', ({ state }) => {
        capturedState = state;
        state?.conversation.set('saved', true);
      });
      app.event('error', (event) => {
        errors.push(event);
      });
      const stateActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .toInterface();

      const response = await app.process({ token, body: stateActivity });

      expect(response.status).toBe(500);
      expect(errors).toHaveLength(1);
      expect(errors[0].error).toBe(saveError);
      expect(capturedState?.conversation.isSealed).toBe(true);
      expect(() => capturedState?.conversation.get('saved')).toThrow();
    });

    it('reports handler and persistence failures as one error', async () => {
      const handlerError = new Error('handler failed');
      const saveError = new Error('save failed');
      const errors: IErrorEvent[] = [];
      const storage: IStorage<string, string> = {
        get: () => undefined,
        set: () => {
          throw saveError;
        },
        delete: () => undefined,
      };
      await app.stop();
      app = createTestApp({ state: { storage } });
      await app.start();
      app.on('message', ({ state }) => {
        state?.conversation.set('saved', true);
        throw handlerError;
      });
      app.event('error', (event) => {
        errors.push(event);
      });
      const stateActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .toInterface();

      const response = await app.process({ token, body: stateActivity });

      expect(response.status).toBe(500);
      expect(errors).toHaveLength(1);
      expect(errors[0].error).toBeInstanceOf(AggregateError);
      expect((errors[0].error as AggregateError).errors).toEqual([
        handlerError,
        saveError,
      ]);
    });

    it('should return status 200 if no route matches', async () => {
      const event: IActivityEvent = {
        token: token,
        body: activity,
      };

      const response = await app.process(event);
      expect(response.status).toBe(200);
      expect(response.body).toBeUndefined();
    });

    it('emits activity process telemetry and unmatched metrics without recording payload text', async () => {
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

      const activityProcessSpan = spans.find((span) => span.name === 'microsoft.teams.activity.process');
      expect(response.status).toBe(200);
      expect(recordTeamsBotActivityReceived).toHaveBeenCalledWith('message');
      expect(recordTeamsBotHandlerUnmatched).toHaveBeenCalledWith('message', undefined);
      expect(recordTeamsBotActivityProcessDuration).toHaveBeenCalledWith('message', expect.any(Number));
      expect(activityProcessSpan?.options.attributes).toEqual(expect.objectContaining({
        'activity.type': 'message',
        'activity.id': 'activity-id',
        'conversation.id': 'conv-1',
        'channel.id': 'msteams',
        'bot.id': 'bot-1',
        'service.url': 'https://service.url',
      }));
      expect(activityProcessSpan?.options.attributes).not.toHaveProperty('text');
      expect(activityProcessSpan?.span.end).toHaveBeenCalled();
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

      const handlerSpan = spans.find((span) => span.name === 'microsoft.teams.handler');
      expect(response.status).toBe(200);
      expect(recordTeamsBotHandlerDispatched).toHaveBeenCalledWith('message', 'type');
      expect(recordTeamsBotHandlerDuration).toHaveBeenCalledWith('message', 'type', expect.any(Number));
      expect(handlerSpan?.options.attributes).toEqual({
        'handler.type': 'message',
        'handler.dispatch': 'type',
      });
      expect(handlerSpan?.span.end).toHaveBeenCalled();
    });

    it('records handler and activity process exceptions while preserving error responses', async () => {
      const error = new Error('Test error');
      app.use(() => {
        throw error;
      });

      const response = await app.process({
        token,
        body: new MessageActivity('hello').toInterface(),
      });

      const activityProcessSpan = spans.find((span) => span.name === 'microsoft.teams.activity.process');
      const handlerSpan = spans.find((span) => span.name === 'microsoft.teams.handler');
      expect(response.status).toBe(500);
      expect(recordTeamsBotHandlerFailure).toHaveBeenCalledWith('message', 'catchall');
      expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(handlerSpan?.span, error);
      expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(activityProcessSpan?.span, error);
      expect(recordTeamsBotHandlerDuration).toHaveBeenCalledWith('message', 'catchall', expect.any(Number));
    });

    it('uses catchall dispatch for middleware and activity catchall handlers', async () => {
      app.use((ctx) => ctx.next());
      app.on('activity', () => undefined);

      const response = await app.process({
        token,
        body: new MessageActivity('hello').toInterface(),
      });

      expect(response.status).toBe(200);
      expect(recordTeamsBotHandlerDispatched).toHaveBeenNthCalledWith(1, 'message', 'catchall');
      expect(recordTeamsBotHandlerDispatched).toHaveBeenNthCalledWith(2, 'message', 'catchall');
    });

    it('uses invoke dispatch for invoke-specific handlers', async () => {
      app.on('dialog.open', () => ({
        task: {
          type: 'message',
          value: 'opened',
        },
      }));

      const response = await app.process({
        token,
        body: {
          type: 'invoke',
          name: 'task/fetch',
          channelId: 'msteams',
          from: { id: 'user-1' },
          recipient: { id: 'bot-1' },
          conversation: { id: 'conv-1' },
          serviceUrl: 'https://service.url',
          value: {},
        } as ITaskFetchInvokeActivity,
      });

      expect(response.status).toBe(200);
      expect(recordTeamsBotHandlerDispatched).toHaveBeenCalledWith('task/fetch', 'invoke');
    });

    describe('agent365 baggage', () => {
      const inbound: IMessageActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot', tenantId: 'tenant-id' })
        .withConversation({ id: 'conv-1', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl('https://service.url')
        .toInterface();

      it('establishes baggage before the root span so every span in the turn inherits it', async () => {
        let handlerConversationId: string | undefined;
        app.on('message', () => {
          handlerConversationId = propagation.getActiveBaggage()?.getEntry(Agent365BaggageKeys.conversationId)?.value;
        });

        const response = await app.process({ token, body: inbound });
        const rootSpan = spans.find((span) => span.name === 'microsoft.teams.activity.process');

        expect(response.status).toBe(200);
        // the root span is the point a route-level middleware could never reach
        expect(rootSpan?.baggage?.getEntry(Agent365BaggageKeys.conversationId)?.value).toBe('conv-1');
        expect(rootSpan?.baggage?.getEntry(Agent365BaggageKeys.tenantId)?.value).toBe('tenant-id');
        expect(rootSpan?.baggage?.getEntry(Agent365BaggageKeys.agentId)?.value).toBe('bot-1');
        expect(handlerConversationId).toBe('conv-1');
      });

      it('does not leak the scope past the turn', async () => {
        await app.process({ token, body: inbound });
        expect(propagation.getActiveBaggage()?.getEntry(Agent365BaggageKeys.conversationId)).toBeUndefined();
      });

      it('omits personal data unless the app opts in', async () => {
        const scoped = createTestApp();
        scoped.start();

        try {
          await scoped.process({ token, body: inbound });
          const rootSpan = spans.find((span) => span.name === 'microsoft.teams.activity.process');
          expect(rootSpan?.baggage?.getEntry(Agent365BaggageKeys.userName)).toBeUndefined();
        } finally {
          scoped.stop();
        }

        spans = [];
        const optedIn = createTestApp({ telemetry: { agent365: { include: ['senderName'], operationSource: 'test-agent' } } });
        optedIn.start();

        try {
          await optedIn.process({ token, body: inbound });
          const rootSpan = spans.find((span) => span.name === 'microsoft.teams.activity.process');
          expect(rootSpan?.baggage?.getEntry(Agent365BaggageKeys.userName)?.value).toBe('Test User');
          expect(rootSpan?.baggage?.getEntry(Agent365BaggageKeys.operationSource)?.value).toBe('test-agent');
        } finally {
          optedIn.stop();
        }
      });

      it('does not let a nested send downgrade the values the activity established', async () => {
        // ctx.send builds its ConversationReference from `activity.recipient`, so its
        // agent id is recipient.id while the activity resolver prefers agenticAppId.
        // The nested send scope must not overwrite the richer value.
        const agenticInbound: IMessageActivity = new MessageActivity('hello')
          .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
          .withRecipient({
            id: 'bot-1',
            name: 'Test Bot',
            role: 'bot',
            tenantId: 'tenant-id',
            agenticAppId: 'agentic-app-instance-id',
            agenticUserId: 'agentic-user-id',
            agenticAppBlueprintId: 'agentic-blueprint-id',
          } as any)
          .withConversation({ id: 'conv-1', conversationType: 'personal' })
          .withChannelId('msteams')
          .withServiceUrl('https://service.url')
          .toInterface();

        let sendBaggage: Record<string, string | undefined> = {};
        // stub the network leg only, so the real send-side baggage wrapper still runs
        jest.spyOn(ActivitySender.prototype as any, 'dispatch').mockImplementation(async () => {
          const baggage = propagation.getActiveBaggage();
          sendBaggage = {
            agentId: baggage?.getEntry(Agent365BaggageKeys.agentId)?.value,
            tenantId: baggage?.getEntry(Agent365BaggageKeys.tenantId)?.value,
            conversationId: baggage?.getEntry(Agent365BaggageKeys.conversationId)?.value,
            agenticUserId: baggage?.getEntry(Agent365BaggageKeys.agenticUserId)?.value,
          };
          return { id: 'sent-1' };
        });

        app.on('message', async ({ send }) => {
          await send('reply');
        });

        await app.process({ token, body: agenticInbound });

        expect(sendBaggage).toEqual({
          agentId: 'agentic-app-instance-id',
          tenantId: 'tenant-id',
          conversationId: 'conv-1',
          agenticUserId: 'agentic-user-id',
        });
      });

      it('sets no baggage when the bridge is disabled', async () => {
        const disabled = createTestApp({ telemetry: { agent365: false } });
        disabled.start();

        try {
          spans = [];
          await disabled.process({ token, body: inbound });
          const rootSpan = spans.find((span) => span.name === 'microsoft.teams.activity.process');
          expect(rootSpan?.baggage).toBeUndefined();
        } finally {
          disabled.stop();
        }
      });
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
          agenticUserId: 'agentic-user',
          agenticAppBlueprintId: 'agentic-blueprint',
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
          agenticUserId: 'agentic-user',
          agenticAppBlueprintId: 'agentic-blueprint',
        }),
      });
    });

    it('uses the inbound AgenticIdentity-scoped API client for the user-token precheck', async () => {
      await app.stop();
      app = createTestApp({ oauth: { defaultConnectionName: 'graph' } });
      await app.start();

      const incomingServiceUrl = 'https://incoming-service.botframework.com';
      const agenticIdentity = {
        agenticAppId: 'agent-app',
        agenticUserId: 'agentic-user',
        tenantId: 'tenant-id',
        agenticAppBlueprintId: 'blueprint-id',
      };
      const incomingActivity: IMessageActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({
          id: 'bot-1',
          name: 'Test Bot',
          role: 'bot',
          agenticAppId: agenticIdentity.agenticAppId,
          agenticUserId: agenticIdentity.agenticUserId,
          agenticAppBlueprintId: agenticIdentity.agenticAppBlueprintId,
          tenantId: agenticIdentity.tenantId,
        })
        .withConversation({ id: 'conv-123', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl(incomingServiceUrl)
        .toInterface();
      const scopedApi = app.api.clone({
        serviceUrl: incomingServiceUrl,
        agenticIdentity,
      });
      const clone = jest.spyOn(app.api, 'clone').mockReturnValue(scopedApi);
      const rootGetToken = jest.spyOn(app.api.users, 'getToken').mockResolvedValue({ token: 'root-token' } as any);
      const scopedGetToken = jest.spyOn(scopedApi.users, 'getToken').mockResolvedValue({ token: 'agentic-user-token' } as any);

      await app.process({
        token: { ...token, serviceUrl: incomingServiceUrl },
        body: incomingActivity,
      });

      expect(clone).toHaveBeenCalledWith({
        serviceUrl: incomingServiceUrl,
        agenticIdentity,
      });
      expect(rootGetToken).not.toHaveBeenCalled();
      expect(scopedGetToken).toHaveBeenCalledWith({
        channelId: 'msteams',
        userId: 'user-1',
        connectionName: 'graph',
      });
    });

    it('keeps the user-token precheck app-only when the inbound activity has no agentic user', async () => {
      await app.stop();
      app = createTestApp({ oauth: { defaultConnectionName: 'graph' } });
      await app.start();

      const incomingServiceUrl = 'https://incoming-service.botframework.com';
      const incomingActivity: IMessageActivity = new MessageActivity('hello')
        .withFrom({ id: 'user-1', name: 'Test User', role: 'user' })
        .withRecipient({ id: 'bot-1', name: 'Test Bot', role: 'bot' })
        .withConversation({ id: 'conv-123', conversationType: 'personal' })
        .withChannelId('msteams')
        .withServiceUrl(incomingServiceUrl)
        .toInterface();
      const scopedApi = app.api.clone({
        serviceUrl: incomingServiceUrl,
        agenticIdentity: undefined,
      });
      const clone = jest.spyOn(app.api, 'clone').mockReturnValue(scopedApi);
      const rootGetToken = jest.spyOn(app.api.users, 'getToken').mockResolvedValue({ token: 'root-token' } as any);
      const scopedGetToken = jest.spyOn(scopedApi.users, 'getToken').mockResolvedValue({ token: 'app-token' } as any);

      await app.process({
        token: { ...token, serviceUrl: incomingServiceUrl },
        body: incomingActivity,
      });

      expect(clone).toHaveBeenCalledWith({
        serviceUrl: incomingServiceUrl,
        agenticIdentity: undefined,
      });
      expect(rootGetToken).not.toHaveBeenCalled();
      expect(scopedGetToken).toHaveBeenCalledWith({
        channelId: 'msteams',
        userId: 'user-1',
        connectionName: 'graph',
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

  describe('user token lookup', () => {
    let testApp: App;
    const userActivity = new MessageActivity('hi', {
      id: 'a1',
      channelId: 'msteams',
      from: { id: 'user-1', name: 'User' },
      conversation: { id: 'c1' },
      recipient: { id: 'bot' },
    } as Partial<IMessageActivity>);

    afterEach(() => {
      testApp?.stop();
    });

    it('does not fetch the user token when no OAuth connection is configured', async () => {
      testApp = createTestApp();
      testApp.start();
      const spy = jest.spyOn(testApp.api.users, 'getToken');

      await testApp.process({ token, body: userActivity });

      expect(spy).not.toHaveBeenCalled();
    });

    it('fetches the user token when an OAuth connection is configured', async () => {
      testApp = createTestApp({ oauth: { defaultConnectionName: 'graph' } });
      await testApp.start();
      jest.spyOn(testApp.api, 'clone').mockReturnValue(testApp.api);
      const spy = jest
        .spyOn(testApp.api.users, 'getToken')
        .mockResolvedValue({ token: 'user-token' } as any);

      await testApp.process({ token, body: userActivity });

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('honors an explicit fetchUserToken=false override even when OAuth is configured', async () => {
      testApp = createTestApp({ oauth: { defaultConnectionName: 'graph', fetchUserToken: false } });
      testApp.start();
      const spy = jest.spyOn(testApp.api.users, 'getToken');

      await testApp.process({ token, body: userActivity });

      expect(spy).not.toHaveBeenCalled();
    });

    it('honors an explicit fetchUserToken=true override when no OAuth connection is configured', async () => {
      testApp = createTestApp({ oauth: { fetchUserToken: true } });
      await testApp.start();
      jest.spyOn(testApp.api, 'clone').mockReturnValue(testApp.api);
      const spy = jest
        .spyOn(testApp.api.users, 'getToken')
        .mockResolvedValue({ token: 'user-token' } as any);

      await testApp.process({ token, body: userActivity });

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
