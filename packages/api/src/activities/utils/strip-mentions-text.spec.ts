import { MessageActivity } from '../message';

import { stripMentionsText } from './strip-mentions-text';

describe('Activity Utils', () => {
  describe('stripMentionsText', () => {
    const activity = new MessageActivity('Hello <at>test-bot</at>! How are you?')
      .withChannelId('msteams')
      .withConversation({
        id: '2',
        conversationType: 'personal',
      })
      .withFrom({
        id: '3',
        name: 'test-user',
        role: 'user',
      })
      .withRecipient({
        id: '4',
        name: 'test-bot',
        role: 'bot',
      })
      .addEntity({
        type: 'mention',
        mentioned: {
          id: '4',
          name: 'test-bot',
          role: 'bot',
        },
      });

    it('should do nothing when no text', () => {
      const text = stripMentionsText({
        ...activity.toInterface(),
        type: 'typing',
        text: undefined,
      });

      expect(text).toBeUndefined();
    });

    it('should do nothing when no mentions', () => {
      const text = stripMentionsText({
        ...activity.toInterface(),
        entities: undefined,
      });

      expect(text).toEqual(activity.text);
    });

    it('should remove mention', () => {
      const text = stripMentionsText(activity);
      expect(text).toEqual('Hello ! How are you?');
    });

    it('should remove multiple mentions', () => {
      const text = stripMentionsText(
        activity
          .clone()
          .withText(`${activity.text} <at>some other text</at>`)
          .addEntity({
            type: 'mention',
            text: '<at>some other text</at>',
            mentioned: {
              id: '4',
              name: 'test-bot',
              role: 'bot',
            },
          })
      );

      expect(text).toEqual('Hello ! How are you?');
    });

    it('should remove only mention tags', () => {
      const text = stripMentionsText(
        activity
          .clone()
          .withText(`${activity.text} <at>some other text</at>`)
          .addEntity({
            type: 'mention',
            text: '<at>some other text</at>',
            mentioned: {
              id: '4',
              name: 'test-bot',
              role: 'bot',
            },
          }),
        { tagOnly: true }
      );

      expect(text).toEqual('Hello test-bot! How are you? some other text');
    });

    it('should remove only specific account mentions', () => {
      const text = stripMentionsText(
        activity
          .clone()
          .withText(`${activity.text} <at>test-bot-2</at>`)
          .addEntity({
            type: 'mention',
            mentioned: {
              id: '5',
              name: 'test-bot-2',
              role: 'bot',
            },
          }),
        { accountId: '4' }
      );

      expect(text).toEqual('Hello ! How are you? <at>test-bot-2</at>');
    });
  });
});
