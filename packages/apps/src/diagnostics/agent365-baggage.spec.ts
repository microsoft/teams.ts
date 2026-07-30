import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

import { context, propagation, ROOT_CONTEXT } from '@opentelemetry/api';
import type { Context, ContextManager } from '@opentelemetry/api';

import type { Activity, AgenticUser } from '@microsoft/teams.api';

import {
  agent365BaggageFromActivity,
  Agent365BaggageKeys,
  createAgent365Scope,
  withAgent365Baggage,
} from './agent365-baggage';

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

function createActivity(): Activity {
  return {
    type: 'message',
    id: 'activity-id',
    text: 'secret message content',
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
}

function activeValue(key: string): string | undefined {
  return propagation.getActiveBaggage()?.getEntry(key)?.value;
}

function sourceFilesUnder(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      return sourceFilesUnder(path);
    }

    if (!entry.endsWith('.ts') || entry.endsWith('.spec.ts')) {
      return [];
    }

    return [path];
  });
}

describe('agent365 baggage', () => {
  beforeEach(() => {
    context.disable();
    context.setGlobalContextManager(new TestContextManager());
  });

  afterEach(() => {
    context.disable();
  });

  describe('agent365BaggageFromActivity', () => {
    it('adds correlation identifiers only inside the scope, leaving existing baggage intact', async () => {
      const existingContext = propagation.setBaggage(
        context.active(),
        propagation.createBaggage({ existing: { value: 'before' } })
      );
      const activity = createActivity();
      let scopedValues: Record<string, string | undefined> = {};

      await context.with(existingContext, async () => {
        const entries = agent365BaggageFromActivity(activity, {
          operationSource: 'agent-blueprint',
          channelLink: 'https://teams.example.com/channel',
          additionalBaggage: {
            'custom.agent365.key': 'custom-value',
            'blank.key': ' ',
            'nan.key': Number.NaN,
          },
        });

        const result = await withAgent365Baggage(entries, async () => {
          scopedValues = {
            existing: activeValue('existing'),
            tenantId: activeValue(Agent365BaggageKeys.tenantId),
            conversationId: activeValue(Agent365BaggageKeys.conversationId),
            conversationItemLink: activeValue(Agent365BaggageKeys.conversationItemLink),
            channelName: activeValue(Agent365BaggageKeys.channelName),
            channelLink: activeValue(Agent365BaggageKeys.channelLink),
            agentId: activeValue(Agent365BaggageKeys.agentId),
            agenticUserId: activeValue(Agent365BaggageKeys.agenticUserId),
            agentBlueprintId: activeValue(Agent365BaggageKeys.agentBlueprintId),
            userId: activeValue(Agent365BaggageKeys.userId),
            operationSource: activeValue(Agent365BaggageKeys.operationSource),
            custom: activeValue('custom.agent365.key'),
            blank: activeValue('blank.key'),
            nan: activeValue('nan.key'),
          };

          const baggage = propagation.getActiveBaggage();
          expect(baggage?.getAllEntries().some(([, entry]) => entry.value.includes('secret message content'))).toBe(false);

          // survives an await, so handler work later in the turn still sees it
          await Promise.resolve();
          expect(activeValue(Agent365BaggageKeys.tenantId)).toBe('recipient-tenant-id');

          return 'handler-result';
        });

        expect(result).toBe('handler-result');
        expect(activeValue('existing')).toBe('before');
        expect(activeValue(Agent365BaggageKeys.tenantId)).toBeUndefined();
      });

      expect(scopedValues).toEqual({
        existing: 'before',
        tenantId: 'recipient-tenant-id',
        conversationId: 'conversation-id',
        conversationItemLink: 'https://service.example.com',
        channelName: 'msteams',
        channelLink: 'https://teams.example.com/channel',
        agentId: 'agent-app-id',
        agenticUserId: 'agent-user-id',
        agentBlueprintId: 'blueprint-id',
        userId: 'aad-user-id',
        operationSource: 'agent-blueprint',
        custom: 'custom-value',
        blank: undefined,
        nan: undefined,
      });
      expect(propagation.getActiveBaggage()).toBeUndefined();
    });

    it('omits personal data unless it is included explicitly', () => {
      const activity = createActivity();

      withAgent365Baggage(agent365BaggageFromActivity(activity, {}), () => {
        expect(activeValue(Agent365BaggageKeys.userName)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.userEmail)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.agentName)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.agenticUserEmail)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.agentDescription)).toBeUndefined();
      });

      const included = agent365BaggageFromActivity(activity, {
        include: ['senderName', 'senderEmail', 'agentName', 'agentEmail', 'agentDescription'],
      });

      withAgent365Baggage(included, () => {
        expect({
          userName: activeValue(Agent365BaggageKeys.userName),
          userEmail: activeValue(Agent365BaggageKeys.userEmail),
          agentName: activeValue(Agent365BaggageKeys.agentName),
          agenticUserEmail: activeValue(Agent365BaggageKeys.agenticUserEmail),
          agentDescription: activeValue(Agent365BaggageKeys.agentDescription),
        }).toEqual({
          userName: 'Caller Name',
          userEmail: 'caller@example.com',
          agentName: 'Agent Name',
          agenticUserEmail: 'agent-user@example.com',
          agentDescription: 'Agent description',
        });
      });
    });

    it('falls back to channel tenant, recipient id, and channel user id', () => {
      const activity = {
        type: 'message',
        channelId: 'msteams',
        from: { id: 'channel-user-id', role: 'user' },
        conversation: { id: 'conversation-id', conversationType: 'personal' },
        recipient: { id: 'bot-id', role: 'bot' },
        channelData: { tenant: { id: 'channel-tenant-id' } },
      } as Activity;

      withAgent365Baggage(agent365BaggageFromActivity(activity, {}), () => {
        expect(activeValue(Agent365BaggageKeys.tenantId)).toBe('channel-tenant-id');
        expect(activeValue(Agent365BaggageKeys.agentId)).toBe('bot-id');
        expect(activeValue(Agent365BaggageKeys.userId)).toBe('channel-user-id');
      });
    });
  });

  describe('withAgent365Baggage', () => {
    it('overwrites existing entries so proactive callers can correct them', () => {
      withAgent365Baggage({ [Agent365BaggageKeys.agentId]: 'first' }, () => {
        withAgent365Baggage({ [Agent365BaggageKeys.agentId]: 'second' }, () => {
          expect(activeValue(Agent365BaggageKeys.agentId)).toBe('second');
        });
      });
    });

    it('does not create a context when every value is skipped', () => {
      withAgent365Baggage({ a: undefined, b: ' ', c: Number.NaN, '': 'x' }, () => {
        expect(propagation.getActiveBaggage()).toBeUndefined();
      });
    });
  });

  describe('createAgent365Scope', () => {
    const agenticUser: AgenticUser = {
      agenticAppInstanceId: 'app-instance-1',
      agenticUserId: 'agentic-user-1',
      tenantId: 'tenant-1',
      agenticBlueprintId: 'blueprint-1',
    };

    it('binds options once so call sites supply identity only', () => {
      const withScope = createAgent365Scope({
        serviceUrl: 'https://smba.example',
        agentId: 'client-1',
        channelName: 'msteams',
        operationSource: 'nightly-digest',
      });

      withScope({ agenticUser, conversationId: 'conv-1' }, () => {
        expect(activeValue(Agent365BaggageKeys.tenantId)).toBe('tenant-1');
        expect(activeValue(Agent365BaggageKeys.agentId)).toBe('app-instance-1');
        expect(activeValue(Agent365BaggageKeys.agenticUserId)).toBe('agentic-user-1');
        expect(activeValue(Agent365BaggageKeys.agentBlueprintId)).toBe('blueprint-1');
        expect(activeValue(Agent365BaggageKeys.conversationId)).toBe('conv-1');
        expect(activeValue(Agent365BaggageKeys.conversationItemLink)).toBe('https://smba.example');
        expect(activeValue(Agent365BaggageKeys.channelName)).toBe('msteams');
        expect(activeValue(Agent365BaggageKeys.operationSource)).toBe('nightly-digest');
      });
    });

    it('falls back to the bound agent id for app-only work', () => {
      const withScope = createAgent365Scope({ agentId: 'client-1' });

      withScope({ conversationId: 'conv-1' }, () => {
        expect(activeValue(Agent365BaggageKeys.agentId)).toBe('client-1');
        expect(activeValue(Agent365BaggageKeys.agenticUserId)).toBeUndefined();
      });
    });

    it('keeps the personal-data policy out of call sites', () => {
      const withoutPii = createAgent365Scope({ agentId: 'client-1' });
      const withPii = createAgent365Scope({ agentId: 'client-1', include: ['agentName'] });

      withoutPii({ agentName: 'Digest Agent' }, () => {
        expect(activeValue(Agent365BaggageKeys.agentName)).toBeUndefined();
      });

      withPii({ agentName: 'Digest Agent' }, () => {
        expect(activeValue(Agent365BaggageKeys.agentName)).toBe('Digest Agent');
      });
    });

    it('gates every personal-data field on the scope and never the identifiers', () => {
      const withScope = createAgent365Scope({
        agentId: 'client-1',
        include: ['senderName', 'senderEmail', 'agentName', 'agentEmail', 'agentDescription'],
      });
      const gated = createAgent365Scope({ agentId: 'client-1' });

      const pii = {
        userId: 'user-1',
        senderName: 'Ada',
        senderEmail: 'ada@example.com',
        agentName: 'Digest Agent',
        agentEmail: 'agent@example.com',
        agentDescription: 'Nightly digest',
      };

      withScope(pii, () => {
        expect(activeValue(Agent365BaggageKeys.userName)).toBe('Ada');
        expect(activeValue(Agent365BaggageKeys.userEmail)).toBe('ada@example.com');
        expect(activeValue(Agent365BaggageKeys.agentName)).toBe('Digest Agent');
        expect(activeValue(Agent365BaggageKeys.agenticUserEmail)).toBe('agent@example.com');
        expect(activeValue(Agent365BaggageKeys.agentDescription)).toBe('Nightly digest');
      });

      gated(pii, () => {
        // `userId` is an identifier, so it survives the gate.
        expect(activeValue(Agent365BaggageKeys.userId)).toBe('user-1');
        expect(activeValue(Agent365BaggageKeys.userName)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.userEmail)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.agentName)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.agenticUserEmail)).toBeUndefined();
        expect(activeValue(Agent365BaggageKeys.agentDescription)).toBeUndefined();
      });
    });

    it('lets scope entries override bound values and returns the result', () => {
      const withScope = createAgent365Scope({ agentId: 'client-1' });

      const result = withScope(
        { additionalBaggage: { [Agent365BaggageKeys.agentId]: 'override' } },
        () => {
          expect(activeValue(Agent365BaggageKeys.agentId)).toBe('override');
          return 'returned';
        }
      );

      expect(result).toBe('returned');
    });

    it('passes work through untouched when disabled', () => {
      const withScope = createAgent365Scope(false);

      withScope({ agenticUser, conversationId: 'conv-1' }, () => {
        expect(propagation.getActiveBaggage()).toBeUndefined();
      });
    });
  });

  it('does not import Microsoft OpenTelemetry distro or Agents SDK packages from Apps SDK source', () => {
    const appsSourceRoot = join(__dirname, '..');
    const forbiddenImport = /from\s+['"]@microsoft\/(?:opentelemetry|agents(?:[-/][^'"]*)?)['"]/;

    const offenders = sourceFilesUnder(appsSourceRoot).filter((path) => forbiddenImport.test(readFileSync(path, 'utf8')));

    expect(offenders).toEqual([]);
  });
});
