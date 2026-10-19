import { MessageActivity } from '../../activities/message';

import { ChannelData, ChatInfo, EncryptedChatInfo, ReplyChainInfo } from './index';

describe('ChannelData chat and reply chain ids', () => {
  it('exposes the ids of an inbound activity', () => {
    const wire = JSON.stringify({
      type: 'message',
      id: '1700000000002',
      text: 'hi',
      channelData: {
        tenant: { id: 'tenant-1' },
        chat: { id: '19:user_bot@unq.gbl.spaces', encrypted: { id: 'a:encrypted' } },
        replyChain: { id: '1700000000001' },
      },
    });

    const channelData = MessageActivity.from(JSON.parse(wire)).channelData;

    expect(channelData?.chat?.id).toBe('19:user_bot@unq.gbl.spaces');
    expect(channelData?.chat?.encrypted?.id).toBe('a:encrypted');
    expect(channelData?.replyChain?.id).toBe('1700000000001');
  });

  it('type check: allows the ids to be absent', () => {
    const none: ChannelData = { tenant: { id: 'tenant-1' } };
    const empty: ChannelData = { chat: {}, replyChain: {} };
    const withoutEncrypted: ChannelData = { chat: { id: '19:user_bot@unq.gbl.spaces' } };

    expect(none.chat?.id).toBeUndefined();
    expect(none.replyChain?.id).toBeUndefined();
    expect(empty.chat?.id).toBeUndefined();
    expect(empty.chat?.encrypted?.id).toBeUndefined();
    expect(empty.replyChain?.id).toBeUndefined();
    expect(withoutEncrypted.chat?.encrypted).toBeUndefined();
  });

  it('type check: is read-only', () => {
    const encrypted: EncryptedChatInfo = { id: 'a:encrypted' };
    const chat: ChatInfo = { id: '19:user_bot@unq.gbl.spaces', encrypted };
    const replyChain: ReplyChainInfo = { id: '1700000000001' };

    // @ts-expect-error the chat id cannot be reassigned
    chat.id = 'other';
    // @ts-expect-error the encrypted chat cannot be reassigned
    chat.encrypted = { id: 'other' };
    // @ts-expect-error the encrypted chat id cannot be reassigned
    encrypted.id = 'other';
    // @ts-expect-error the reply chain id cannot be reassigned
    replyChain.id = 'other';
  });

  it('keeps the chat id and the channel id apart', () => {
    const channelData: ChannelData = {
      chat: { id: '19:chat@thread.v2' },
      channel: { id: '19:channel@thread.tacv2' },
    };

    expect(channelData.chat?.id).toBe('19:chat@thread.v2');
    expect(channelData.channel?.id).toBe('19:channel@thread.tacv2');
  });

  it('rejects values of the wrong type', () => {
    // @ts-expect-error the chat id is a string
    const numericChatId: ChannelData = { chat: { id: 123 } };
    // @ts-expect-error the encrypted chat is an object, not a string
    const stringEncrypted: ChannelData = { chat: { encrypted: 'a:encrypted' } };
    // @ts-expect-error the reply chain is an object, not a string
    const stringReplyChain: ChannelData = { replyChain: '1700000000001' };
    // @ts-expect-error the reply chain id is a string
    const numericReplyChainId: ChannelData = { replyChain: { id: 1700000000001 } };

    expect([numericChatId, stringEncrypted, stringReplyChain, numericReplyChainId]).toHaveLength(4);
  });

  it('is available on an activity and survives merging more channel data', () => {
    const activity = new MessageActivity('hi')
      .withChannelData({ replyChain: { id: '1700000000001' }, chat: { id: '19:user_bot@unq.gbl.spaces' } })
      .withChannelData({ tenant: { id: 'tenant-1' } });

    expect(activity.channelData?.replyChain?.id).toBe('1700000000001');
    expect(activity.channelData?.chat?.id).toBe('19:user_bot@unq.gbl.spaces');
    expect(activity.channelData?.tenant?.id).toBe('tenant-1');
  });
});
