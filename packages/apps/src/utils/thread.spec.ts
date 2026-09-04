import { MessageActivity } from '@microsoft/teams.api';

import {
  getDefaultThreadId,
  getProactiveThreadReference,
  parseLegacyThreadedConversationId,
  toThreadedConversationId,
} from './thread';

function message(
  conversationType: 'channel' | 'groupChat' | 'personal',
  conversationId = 'conversation-id',
  activityId = 'activity-id'
) {
  return new MessageActivity('hello')
    .withConversation({ id: conversationId, conversationType })
    .withId(activityId);
}

describe('toThreadedConversationId', () => {
  it('should construct a threaded conversation ID', () => {
    expect(toThreadedConversationId('19:abc@thread.skype', '1680000000000')).toBe(
      '19:abc@thread.skype;messageid=1680000000000'
    );
  });

  describe('parseLegacyThreadedConversationId', () => {
    it('parses a valid legacy threaded conversation ID', () => {
      expect(
        parseLegacyThreadedConversationId('19:abc@thread.skype;messageid=123')
      ).toEqual({
        conversationId: '19:abc@thread.skype',
        threadRootId: '123',
      });
    });

    it.each([
      '19:abc@thread.skype',
      '19:abc@thread.skype;messageid=',
      '19:abc@thread.skype;messageid=0',
      '19:abc@thread.skype;messageid=abc',
    ])('ignores invalid legacy ID %s', (conversationId) => {
      expect(parseLegacyThreadedConversationId(conversationId)).toBeUndefined();
    });
  });

  it('should work with different conversation ID formats', () => {
    expect(toThreadedConversationId('19:meeting_abc@thread.v2', '999')).toBe(
      '19:meeting_abc@thread.v2;messageid=999'
    );
  });

  it('should throw on empty conversationId', () => {
    expect(() => toThreadedConversationId('', '123')).toThrow(
      'conversationId must be a non-empty string'
    );
  });

  it('should throw on empty messageId', () => {
    expect(() => toThreadedConversationId('19:abc@thread.skype', '')).toThrow(
      'Invalid messageId'
    );
  });

  it('should throw on zero messageId', () => {
    expect(() => toThreadedConversationId('19:abc@thread.skype', '0')).toThrow(
      'Invalid messageId'
    );
  });

  it('should throw on non-numeric messageId', () => {
    expect(() => toThreadedConversationId('19:abc@thread.skype', 'abc')).toThrow(
      'Invalid messageId'
    );
  });

  it('should throw on negative messageId', () => {
    expect(() => toThreadedConversationId('19:abc@thread.skype', '-1')).toThrow(
      'Invalid messageId'
    );
  });

  it('should throw on decimal messageId', () => {
    expect(() => toThreadedConversationId('19:abc@thread.skype', '1.5')).toThrow(
      'Invalid messageId'
    );
  });

  it('should strip existing ;messageid= and replace with thread root', () => {
    expect(toThreadedConversationId('19:abc@thread.skype;messageid=111', '222')).toBe(
      '19:abc@thread.skype;messageid=222'
    );
  });
});

describe('getProactiveThreadReference', () => {
  it('uses typed thread metadata before the legacy suffix', () => {
    const activity = message(
      'channel',
      'conversation-id;messageid=123'
    ).withChannelData({ thread: { id: 'typed-root' } });

    expect(getProactiveThreadReference(activity)).toEqual({
      conversationId: 'conversation-id',
      threadRootId: 'typed-root',
    });
  });

  it('normalizes a valid legacy suffix and uses its thread root', () => {
    const activity = message(
      'groupChat',
      'conversation-id;messageid=123'
    );

    expect(getProactiveThreadReference(activity)).toEqual({
      conversationId: 'conversation-id',
      threadRootId: '123',
    });
  });

  it('uses the inbound activity ID for a root message', () => {
    expect(getProactiveThreadReference(message('channel'))).toEqual({
      conversationId: 'conversation-id',
      threadRootId: 'activity-id',
    });
  });
});

describe('getDefaultThreadId', () => {
  it('uses typed thread metadata before the legacy suffix', () => {
    const activity = message(
      'groupChat',
      'conversation-id;messageid=123'
    ).withChannelData({ thread: { id: 'typed-root' } });

    expect(getDefaultThreadId(activity)).toBe('typed-root');
  });

  it('uses a valid legacy suffix in a group chat', () => {
    expect(
      getDefaultThreadId(
        message('groupChat', 'conversation-id;messageid=123')
      )
    ).toBe('123');
  });

  it('uses the inbound activity ID for a channel root message', () => {
    expect(getDefaultThreadId(message('channel'))).toBe('activity-id');
  });

  it.each(['groupChat', 'personal'] as const)(
    'returns undefined for a %s root message',
    (conversationType) => {
      expect(getDefaultThreadId(message(conversationType))).toBeUndefined();
    }
  );
});
