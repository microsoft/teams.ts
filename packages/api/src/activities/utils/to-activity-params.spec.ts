import { AdaptiveCard, CodeBlock } from '@microsoft/teams.cards';

import { MessageActivity, MessageActivityInput } from '../message';
import { TypingActivity, TypingActivityInput } from '../typing';

import { toActivityParams } from './to-activity-params';

describe('Activity Utils', () => {
  describe('toActivityParams', () => {
    it('should convert `string` to message activity', () => {
      const activity = toActivityParams('testing123');
      expect(activity).toEqual({
        type: 'message',
        text: 'testing123',
      });
    });

    it('should convert card to message activity with card attachment', () => {
      const card = new AdaptiveCard(
        new CodeBlock({
          language: 'TypeScript',
          codeSnippet: 'let test = 1',
        })
      );

      const activity = toActivityParams(card);
      expect(activity).toEqual(new MessageActivityInput().addCard('adaptive', card));
    });

    it('should convert legacy message activity builder to message input', () => {
      const activity = toActivityParams(
        new MessageActivity('hello')
          .withId('activity-id')
          .withFrom({ id: 'bot-id', name: 'Bot', role: 'bot' })
          .withRecipient({ id: 'user-id', name: 'User', role: 'user' })
          .withConversation({ id: 'conversation-id', conversationType: 'personal' })
          .withChannelId('msteams')
          .withServiceUrl('https://service.url')
      );

      expect(activity).toEqual(new MessageActivityInput('hello', {
        id: 'activity-id',
        recipient: { id: 'user-id', name: 'User', role: 'user', isTargeted: undefined },
      }));
    });

    it('should convert legacy typing activity builder to typing input', () => {
      const activity = toActivityParams(
        new TypingActivity()
          .withId('activity-id')
          .withFrom({ id: 'bot-id', name: 'Bot', role: 'bot' })
          .withRecipient({ id: 'user-id', name: 'User', role: 'user' })
          .withConversation({ id: 'conversation-id', conversationType: 'personal' })
          .withChannelId('msteams')
          .withServiceUrl('https://service.url')
      );

      expect(activity).toEqual(new TypingActivityInput({
        id: 'activity-id',
        recipient: { id: 'user-id', name: 'User', role: 'user', isTargeted: undefined },
      }));
    });
  });
});
