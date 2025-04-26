import { Account, ConversationAccount } from '../models';
import { Activity } from './activity';

describe('Activity', () => {
  const user: Account = {
    id: '1',
    name: 'test',
    role: 'user',
  };

  const bot: Account = {
    id: '2',
    name: 'test-bot',
    role: 'bot',
  };

  const chat: ConversationAccount = {
    id: '1',
    conversationType: 'personal',
  };

  it('should build', () => {
    const activity = new Activity({ type: 'test' })
      .withId('1')
      .withLocale('en')
      .withFrom(user)
      .withConversation(chat)
      .withRelatesTo({
        channelId: 'msteams',
        serviceUrl: 'http://localhost',
        bot,
        conversation: chat,
      })
      .withRecipient(bot)
      .withReplyToId('3')
      .withServiceUrl('http://localhost')
      .withTimestamp(new Date())
      .withLocalTimestamp(new Date());

    expect(activity.id).toEqual('1');
    expect(activity.type).toEqual('test');
    expect(activity.locale).toEqual('en');
    expect(activity.from).toStrictEqual(user);
    expect(activity.conversation).toStrictEqual(chat);
    expect(activity.relatesTo).toStrictEqual({
      channelId: 'msteams',
      serviceUrl: 'http://localhost',
      bot,
      conversation: chat,
    });

    expect(activity.recipient).toEqual(bot);
    expect(activity.replyToId).toEqual('3');
    expect(activity.serviceUrl).toEqual('http://localhost');
    expect(activity.timestamp).toBeDefined();
    expect(activity.localTimestamp).toBeDefined();
  });

  it('should build from interface', () => {
    const activity = Activity.from(
      new Activity({ type: 'test' })
        .withId('1')
        .withLocale('en')
        .withFrom(user)
        .withConversation(chat)
        .withRecipient(bot)
        .toInterface()
    );

    expect(activity.id).toEqual('1');
    expect(activity.type).toEqual('test');
    expect(activity.locale).toEqual('en');
    expect(activity.from).toEqual(user);
    expect(activity.conversation).toEqual(chat);
    expect(activity.recipient).toEqual(bot);
  });

  it('should clone', () => {
    const activity = Activity.from(
      new Activity({ type: 'test' })
        .withId('1')
        .withLocale('en')
        .withFrom(user)
        .withConversation(chat)
        .withRecipient(bot)
        .toInterface()
    ).clone();

    expect(activity.id).toEqual('1');
    expect(activity.type).toEqual('test');
    expect(activity.locale).toEqual('en');
    expect(activity.from).toEqual(user);
    expect(activity.conversation).toEqual(chat);
    expect(activity.recipient).toEqual(bot);
  });

  it('should have channel data accessors', () => {
    const activity = new Activity({ type: 'test' })
      .withId('1')
      .withLocale('en')
      .withFrom(user)
      .withConversation(chat)
      .withRecipient(bot)
      .withChannelData({
        tenant: { id: 'tenant-id' },
        channel: { id: 'channel-id' },
        team: { id: 'team-id' },
        meeting: { id: 'meeting-id' },
        notification: { alert: true },
      });

    expect(activity.id).toEqual('1');
    expect(activity.type).toEqual('test');
    expect(activity.locale).toEqual('en');
    expect(activity.from).toEqual(user);
    expect(activity.conversation).toEqual(chat);
    expect(activity.recipient).toEqual(bot);
    expect(activity.tenant?.id).toEqual('tenant-id');
    expect(activity.channel?.id).toEqual('channel-id');
    expect(activity.team?.id).toEqual('team-id');
    expect(activity.meeting?.id).toEqual('meeting-id');
    expect(activity.notification?.alert).toEqual(true);
  });

  describe('addAiGenerated', () => {
    it('should add', () => {
      const activity = new Activity({ type: 'test' }).addAiGenerated();

      expect(activity.type).toEqual('test');
      expect(activity.entities).toStrictEqual([
        {
          type: 'https://schema.org/Message',
          '@type': 'Message',
          '@id': '',
          '@context': 'https://schema.org',
          additionalType: ['AIGeneratedContent'],
        },
      ]);
    });
  });

  describe('addFeedback', () => {
    it('should add', () => {
      const activity = new Activity({ type: 'test' }).addFeedback();

      expect(activity.type).toEqual('test');
      expect(activity.channelData?.feedbackLoopEnabled).toEqual(true);
    });
  });

  describe('addCitation', () => {
    it('should add', () => {
      const activity = new Activity({ type: 'test' }).addCitation(0, {
        abstract: 'test',
        name: 'test',
      });

      expect(activity.type).toEqual('test');
      expect(activity.entities).toEqual([
        {
          type: 'https://schema.org/Message',
          '@type': 'Message',
          '@id': '',
          '@context': 'https://schema.org',
          citation: [
            expect.objectContaining({
              '@type': 'Claim',
              position: 0,
              appearance: {
                '@type': 'DigitalDocument',
                abstract: 'test',
                name: 'test',
                encodingFormat: 'application/vnd.microsoft.card.adaptive',
              },
            }),
          ],
        },
      ]);
    });

    it('should add with icon', () => {
      const activity = new Activity({ type: 'test' }).addCitation(0, {
        abstract: 'test',
        name: 'test',
        icon: 'GIF',
      });

      expect(activity.type).toEqual('test');
      expect(activity.entities).toEqual([
        {
          type: 'https://schema.org/Message',
          '@type': 'Message',
          '@id': '',
          '@context': 'https://schema.org',
          citation: [
            expect.objectContaining({
              '@type': 'Claim',
              position: 0,
              appearance: {
                '@type': 'DigitalDocument',
                abstract: 'test',
                name: 'test',
                encodingFormat: 'application/vnd.microsoft.card.adaptive',
                image: {
                  '@type': 'ImageObject',
                  name: 'GIF',
                },
              },
            }),
          ],
        },
      ]);
    });
  });
});
