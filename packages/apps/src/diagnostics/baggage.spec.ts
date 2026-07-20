import { context, propagation, ROOT_CONTEXT } from '@opentelemetry/api';
import type { Context, ContextManager } from '@opentelemetry/api';

import type { Activity } from '@microsoft/teams.api';

import { APP_BAGGAGE_KEYS } from './constants';
import { TeamsBaggageBuilder, withTeamsBaggage } from './baggage';

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

describe('TeamsBaggageBuilder', () => {
  beforeEach(() => {
    context.disable();
    context.setGlobalContextManager(new TestContextManager());
  });

  afterEach(() => {
    context.disable();
  });

  it('sets typed and custom baggage entries for the callback scope only', () => {
    const existingBaggage = propagation.createBaggage({
      existing: { value: 'before' },
    });
    const existingContext = propagation.setBaggage(context.active(), existingBaggage);

    context.with(existingContext, () => {
      const result = new TeamsBaggageBuilder()
        .tenantId(' tenant-id ')
        .operationSource('test-service')
        .invokeAgentServer('agent.example.com', 443)
        .set('custom.key', 'custom-value')
        .set('blank.key', ' ')
        .set('nan.key', Number.NaN)
        .set(' ', 'ignored')
        .run(() => {
          const baggage = propagation.getActiveBaggage();

          expect(baggage?.getEntry('existing')?.value).toBe('before');
          expect(baggage?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value).toBe('tenant-id');
          expect(baggage?.getEntry(APP_BAGGAGE_KEYS.operationSource)?.value).toBe('test-service');
          expect(baggage?.getEntry(APP_BAGGAGE_KEYS.serverAddress)?.value).toBe('agent.example.com');
          expect(baggage?.getEntry(APP_BAGGAGE_KEYS.serverPort)?.value).toBe('443');
          expect(baggage?.getEntry('custom.key')?.value).toBe('custom-value');
          expect(baggage?.getEntry('blank.key')).toBeUndefined();
          expect(baggage?.getEntry('nan.key')).toBeUndefined();

          return 'callback-result';
        });

      expect(result).toBe('callback-result');
      expect(propagation.getActiveBaggage()?.getEntry('existing')?.value).toBe('before');
      expect(propagation.getActiveBaggage()?.getEntry(APP_BAGGAGE_KEYS.tenantId)).toBeUndefined();
    });
  });

  it('extracts activity-derived Agent365 baggage without synthesizing channel links', () => {
    const activity = {
      type: 'message',
      id: 'activity-id',
      serviceUrl: 'https://service.example.com',
      channelId: 'msteams',
      from: {
        id: 'channel-user-id',
        aadObjectId: 'aad-user-id',
        name: 'Caller Name',
        email: 'caller@example.com',
        role: 'user',
      },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: {
        id: 'bot-id',
        agenticAppId: 'agent-app-id',
        name: 'Agent Name',
        email: 'agent-user@example.com',
        userRole: 'Agent description',
        role: 'bot',
        tenantId: 'recipient-tenant-id',
        agenticUserId: 'agent-user-id',
        agenticAppBlueprintId: 'blueprint-id',
      },
      channelData: {
        tenant: { id: 'channel-tenant-id' },
      },
    } as unknown as Activity;

    new TeamsBaggageBuilder(activity).run(() => {
      const baggage = propagation.getActiveBaggage();

      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value).toBe('recipient-tenant-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.conversationId)?.value).toBe('conversation-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.conversationItemLink)?.value).toBe('https://service.example.com');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.channelName)?.value).toBe('msteams');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.userId)?.value).toBe('aad-user-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.userName)?.value).toBe('Caller Name');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.userEmail)?.value).toBe('caller@example.com');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agentId)?.value).toBe('agent-app-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agentName)?.value).toBe('Agent Name');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agenticUserId)?.value).toBe('agent-user-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agentBlueprintId)?.value).toBe('blueprint-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agenticUserEmail)?.value).toBe('agent-user@example.com');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agentDescription)?.value).toBe('Agent description');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.channelLink)).toBeUndefined();
    });
  });

  it('falls back to channel tenant and recipient id when preferred activity values are unavailable', () => {
    const activity = {
      type: 'message',
      channelId: 'msteams',
      from: { id: 'user-id', role: 'user' },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: { id: 'bot-id', role: 'bot' },
      channelData: {
        tenant: { id: 'channel-tenant-id' },
      },
    } as Activity;

    new TeamsBaggageBuilder(activity).run(() => {
      const baggage = propagation.getActiveBaggage();

      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value).toBe('channel-tenant-id');
      expect(baggage?.getEntry(APP_BAGGAGE_KEYS.agentId)?.value).toBe('bot-id');
    });
  });

  it('runs a configured callback with activity-derived and caller-provided baggage', () => {
    const activity = {
      type: 'message',
      channelId: 'msteams',
      from: { id: 'user-id', role: 'user' },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: { id: 'bot-id', role: 'bot', tenantId: 'tenant-id' },
    } as Activity;

    const result = withTeamsBaggage(
      activity,
      (baggage) => baggage.operationSource('test-service').invokeAgentServer('agent.example.com'),
      () => {
        const baggage = propagation.getActiveBaggage();

        expect(baggage?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value).toBe('tenant-id');
        expect(baggage?.getEntry(APP_BAGGAGE_KEYS.operationSource)?.value).toBe('test-service');
        expect(baggage?.getEntry(APP_BAGGAGE_KEYS.serverAddress)?.value).toBe('agent.example.com');

        return 'helper-result';
      }
    );

    expect(result).toBe('helper-result');
    expect(propagation.getActiveBaggage()?.getEntry(APP_BAGGAGE_KEYS.tenantId)).toBeUndefined();
  });

  it('keeps helper baggage active through an async callback and restores afterward', async () => {
    const activity = {
      type: 'message',
      channelId: 'msteams',
      from: { id: 'user-id', role: 'user' },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: { id: 'bot-id', role: 'bot', tenantId: 'tenant-id' },
    } as Activity;

    const result = await withTeamsBaggage(activity, async () => {
      expect(propagation.getActiveBaggage()?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value).toBe('tenant-id');

      await Promise.resolve();

      expect(propagation.getActiveBaggage()?.getEntry(APP_BAGGAGE_KEYS.tenantId)?.value).toBe('tenant-id');
      return 'async-helper-result';
    });

    expect(result).toBe('async-helper-result');
    expect(propagation.getActiveBaggage()?.getEntry(APP_BAGGAGE_KEYS.tenantId)).toBeUndefined();
  });
});
