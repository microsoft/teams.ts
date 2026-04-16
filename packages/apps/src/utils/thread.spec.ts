import { toThreadedConversationId, supportsThreading } from './thread';

describe('toThreadedConversationId', () => {
  it('should construct a threaded conversation ID', () => {
    expect(toThreadedConversationId('19:abc@thread.skype', '1680000000000')).toBe(
      '19:abc@thread.skype;messageid=1680000000000'
    );
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

describe('supportsThreading', () => {
  it('should return true for @thread.tacv2 (channel)', () => {
    expect(supportsThreading('19:abc@thread.tacv2')).toBe(true);
  });

  it('should return true for @thread.skype (classic channel)', () => {
    expect(supportsThreading('19:abc@thread.skype')).toBe(true);
  });

  it('should return true for @unq.gbl.spaces (1:1 chat)', () => {
    expect(supportsThreading('a]8:orgid:user-guid@unq.gbl.spaces')).toBe(true);
  });

  it('should return false for @thread.v2 (group chat / meeting)', () => {
    expect(supportsThreading('19:meeting_abc@thread.v2')).toBe(false);
  });

  it('should check base ID when ;messageid= suffix is present', () => {
    expect(supportsThreading('19:abc@thread.tacv2;messageid=123')).toBe(true);
    expect(supportsThreading('19:meeting_abc@thread.v2;messageid=123')).toBe(false);
  });
});
