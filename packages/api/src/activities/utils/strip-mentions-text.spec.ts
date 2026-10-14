import { Account } from '../../models';
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
      describe('leadingOnly', () => {
      const bot: Account = { id: '4', name: 'test-bot', role: 'bot' };
      const alice: Account = { id: '5', name: 'Alice', role: 'user' };

      const build = (text: string, entities: Array<{ text?: string; mentioned: Account }>) => {
        const a = activity.clone().withText(text);
        a.entities = entities.map((e) => ({ type: 'mention' as const, ...e }));
        return a;
      };

      it('should remove the leading recipient mention and preserve others', () => {
        const text = stripMentionsText(
          build('<at>test-bot</at> help <at>Alice</at>', [
            { text: '<at>test-bot</at>', mentioned: bot },
            { text: '<at>Alice</at>', mentioned: alice },
          ]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('help <at>Alice</at>');
      });

      it('should preserve a recipient mention later in the text', () => {
        const text = stripMentionsText(
          build('<at>test-bot</at> tell <at>test-bot</at> hi', [
            { text: '<at>test-bot</at>', mentioned: bot },
          ]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('tell <at>test-bot</at> hi');
      });

      it('should not remove a recipient mention that is not leading', () => {
        const text = stripMentionsText(
          build('hey <at>test-bot</at> help', [{ text: '<at>test-bot</at>', mentioned: bot }]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('hey <at>test-bot</at> help');
      });

      it('should not remove a leading mention of another account', () => {
        const text = stripMentionsText(
          build('<at>Alice</at> <at>test-bot</at> help', [
            { text: '<at>Alice</at>', mentioned: alice },
            { text: '<at>test-bot</at>', mentioned: bot },
          ]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('<at>Alice</at> <at>test-bot</at> help');
      });

      it('should handle leading whitespace', () => {
        const text = stripMentionsText(
          build('  <at>test-bot</at>   help', [{ text: '<at>test-bot</at>', mentioned: bot }]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('help');
      });

      it('should fall back to the mentioned name when entity text is missing', () => {
        const text = stripMentionsText(
          build('<at>test-bot</at> help <at>Alice</at>', [
            { mentioned: bot },
            { mentioned: alice },
          ]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('help <at>Alice</at>');
      });

      it('should strip consecutive leading mentions when no accountId is given', () => {
        const text = stripMentionsText(
          build('<at>test-bot</at> <at>Alice</at> help <at>Alice</at>', [
            { text: '<at>test-bot</at>', mentioned: bot },
            { text: '<at>Alice</at>', mentioned: alice },
          ]),
          { leadingOnly: true }
        );

        expect(text).toEqual('help <at>Alice</at>');
      });

      it('should keep the name of the leading mention with tagOnly', () => {
        const text = stripMentionsText(
          build('<at>test-bot</at> help <at>Alice</at>', [
            { text: '<at>test-bot</at>', mentioned: bot },
            { text: '<at>Alice</at>', mentioned: alice },
          ]),
          { accountId: '4', leadingOnly: true, tagOnly: true }
        );

        expect(text).toEqual('test-bot help <at>Alice</at>');
      });

      it('should return an empty string when the text is only the mention', () => {
        const text = stripMentionsText(
          build('<at>test-bot</at>', [{ text: '<at>test-bot</at>', mentioned: bot }]),
          { accountId: '4', leadingOnly: true }
        );

        expect(text).toEqual('');
      });
    });
  });
});
