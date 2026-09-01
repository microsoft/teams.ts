import {
  parseLegacyThreadedConversationId,
  toThreadedConversationId,
} from './thread';

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
        rootMessageId: '123',
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
