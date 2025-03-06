import { IMessageActivity } from '../message';
import { removeMentionsText } from './remove-mentions-text';

describe('Activity Utils', () => {
  describe('removeMentionsText', () => {
    const activity: IMessageActivity = {
      id: '1',
      type: 'message',
      channelId: 'msteams',
      text: 'Hello <at>test-bot</at>! How are you?',
      conversation: {
        id: '2',
        conversationType: 'personal',
      },
      from: {
        id: '3',
        name: 'test-user',
        role: 'user',
      },
      recipient: {
        id: '4',
        name: 'test-bot',
        role: 'bot',
      },
      entities: [
        {
          type: 'mention',
          mentioned: {
            id: '4',
            name: 'test-bot',
            role: 'bot',
          },
        },
      ],
    };

    it('should do nothing when no text', () => {
      const text = removeMentionsText({
        ...activity,
        type: 'typing',
        text: undefined,
      });

      expect(text).toBeUndefined();
    });

    it('should do nothing when no mentions', () => {
      const text = removeMentionsText({
        ...activity,
        entities: undefined,
      });

      expect(text).toEqual(activity.text);
    });

    it('should remove mention', () => {
      const text = removeMentionsText(activity);
      expect(text).toEqual('Hello ! How are you?');
    });

    it('should remove multiple mentions', () => {
      const text = removeMentionsText({
        ...activity,
        text: `${activity.text} <at>some other text</at>`,
        entities: [
          ...(activity.entities || []),
          {
            type: 'mention',
            text: '<at>some other text</at>',
            mentioned: {
              id: '4',
              name: 'test-bot',
              role: 'bot',
            },
          },
        ],
      });

      expect(text).toEqual('Hello ! How are you?');
    });

    it('should remove only mention tags', () => {
      const text = removeMentionsText(
        {
          ...activity,
          text: `${activity.text} <at>some other text</at>`,
          entities: [
            ...(activity.entities || []),
            {
              type: 'mention',
              text: '<at>some other text</at>',
              mentioned: {
                id: '4',
                name: 'test-bot',
                role: 'bot',
              },
            },
          ],
        },
        { tagOnly: true }
      );

      expect(text).toEqual('Hello test-bot! How are you? some other text');
    });

    it('should remove only specific account mentions', () => {
      const text = removeMentionsText(
        {
          ...activity,
          text: `${activity.text} <at>test-bot-2</at>`,
          entities: [
            ...(activity.entities || []),
            {
              type: 'mention',
              mentioned: {
                id: '5',
                name: 'test-bot-2',
                role: 'bot',
              },
            },
          ],
        },
        { accountId: '4' }
      );

      expect(text).toEqual('Hello ! How are you? <at>test-bot-2</at>');
    });
  });
});
