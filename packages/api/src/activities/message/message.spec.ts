import { Card, TextBlock } from '@microsoft/teams.cards';

import { Account, cardAttachment } from '../../models';

import { MessageActivity } from './message';

describe('MessageActivity', () => {
  const user: Account = {
    id: '1',
    name: 'test',
    role: 'user',
  };

  it('should build', () => {
    const expiration = new Date();
    const card = new Card(new TextBlock('hello world'));
    const activity = new MessageActivity('test')
      .withText('hello ')
      .withSpeak('say something')
      .withInputHint('acceptingInput')
      .withSummary('my test summary')
      .withTextFormat('plain')
      .withAttachmentLayout('list')
      .withSuggestedActions({
        to: ['1', '2'],
        actions: [
          {
            type: 'openUrl',
            title: 'Open Link',
            value: 'http://localhost',
          },
        ],
      })
      .withImportance('high')
      .withDeliveryMode('notification')
      .withExpiration(expiration)
      .addMention(user)
      .addCard('adaptive', card);

    expect(activity.type).toEqual('message');
    expect(activity.text).toEqual(`hello <at>${user.name}</at>`);
    expect(activity.speak).toEqual('say something');
    expect(activity.inputHint).toEqual('acceptingInput');
    expect(activity.summary).toEqual('my test summary');
    expect(activity.textFormat).toEqual('plain');
    expect(activity.attachmentLayout).toEqual('list');
    expect(activity.suggestedActions).toStrictEqual({
      to: ['1', '2'],
      actions: [
        {
          type: 'openUrl',
          title: 'Open Link',
          value: 'http://localhost',
        },
      ],
    });

    expect(activity.importance).toEqual('high');
    expect(activity.deliveryMode).toEqual('notification');
    expect(activity.expiration).toStrictEqual(expiration);
    expect(activity.entities).toStrictEqual([
      {
        type: 'mention',
        mentioned: user,
        text: `<at>${user.name}</at>`,
      },
    ]);

    expect(activity.attachments).toStrictEqual([cardAttachment('adaptive', card)]);
  });

  it('should build from interface', () => {
    const expiration = new Date();
    const card = new Card(new TextBlock('hello world'));
    const activity = MessageActivity.from(
      new MessageActivity('test')
        .withText('hello ')
        .withSpeak('say something')
        .withInputHint('acceptingInput')
        .withSummary('my test summary')
        .withTextFormat('plain')
        .withAttachmentLayout('list')
        .withSuggestedActions({
          to: ['1', '2'],
          actions: [
            {
              type: 'openUrl',
              title: 'Open Link',
              value: 'http://localhost',
            },
          ],
        })
        .withImportance('high')
        .withDeliveryMode('notification')
        .withExpiration(expiration)
        .addMention(user)
        .addCard('adaptive', card)
        .toInterface()
    );

    expect(activity.type).toEqual('message');
    expect(activity.text).toEqual(`hello <at>${user.name}</at>`);
    expect(activity.speak).toEqual('say something');
    expect(activity.inputHint).toEqual('acceptingInput');
    expect(activity.summary).toEqual('my test summary');
    expect(activity.textFormat).toEqual('plain');
    expect(activity.attachmentLayout).toEqual('list');
    expect(activity.suggestedActions).toStrictEqual({
      to: ['1', '2'],
      actions: [
        {
          type: 'openUrl',
          title: 'Open Link',
          value: 'http://localhost',
        },
      ],
    });

    expect(activity.importance).toEqual('high');
    expect(activity.deliveryMode).toEqual('notification');
    expect(activity.expiration).toStrictEqual(expiration);
    expect(activity.entities).toStrictEqual([
      {
        type: 'mention',
        mentioned: user,
        text: `<at>${user.name}</at>`,
      },
    ]);

    expect(activity.attachments).toStrictEqual([cardAttachment('adaptive', card)]);
  });

  describe('removeMentionsText', () => {
    it('should remove', () => {
      const activity = new MessageActivity('hi ')
        .addMention({
          id: '123',
          name: 'test-user',
          role: 'user',
        })
        .addText(', how are you?');

      activity.stripMentionsText();
      expect(activity.text).toEqual('hi , how are you?');
    });

    it('should remove tag only', () => {
      const activity = new MessageActivity('hi ')
        .addMention({
          id: '123',
          name: 'test-user',
          role: 'user',
        })
        .addText(', how are you?');

      activity.stripMentionsText({ tagOnly: true });
      expect(activity.text).toEqual('hi test-user, how are you?');
    });

    it('should remove text for specific account only', () => {
      const activity = new MessageActivity('hi ')
        .addMention({
          id: '123',
          name: 'test-user',
          role: 'user',
        })
        .addText(', ')
        .addMention({
          id: '1234',
          name: 'test-bot',
          role: 'user',
        })
        .addText(' how are you?');

      activity.stripMentionsText({ accountId: '1234' });
      expect(activity.text).toEqual('hi <at>test-user</at>,  how are you?');
    });

    it('should not remove text when account not found', () => {
      const activity = new MessageActivity('hi ')
        .addMention({
          id: '123',
          name: 'test-user',
          role: 'user',
        })
        .addText(', how are you?');

      activity.stripMentionsText({ accountId: '1' });
      expect(activity.text).toEqual('hi <at>test-user</at>, how are you?');
    });
  });

  describe('isRecipientMentioned', () => {
    it('should be true', () => {
      const activity = new MessageActivity()
        .withRecipient({
          id: '123',
          name: 'test-user',
          role: 'user',
        })
        .addMention({
          id: '123',
          name: 'test-user',
          role: 'user',
        });

      expect(activity.isRecipientMentioned()).toEqual(true);
    });

    it('should be false', () => {
      const activity = new MessageActivity()
        .withRecipient({
          id: '1',
          name: 'test-bot',
          role: 'bot',
        })
        .addMention({
          id: '123',
          name: 'test-user',
          role: 'user',
        });

      expect(activity.isRecipientMentioned()).toEqual(false);
    });

    it('should be false when no entities', () => {
      const activity = new MessageActivity().withRecipient({
        id: '1',
        name: 'test-bot',
        role: 'bot',
      });

      expect(activity.isRecipientMentioned()).toEqual(false);
    });
  });

  describe('getAccountMention', () => {
    it('should exist', () => {
      const activity = new MessageActivity().addMention({
        id: '123',
        name: 'test-user',
        role: 'user',
      });

      const mention = activity.getAccountMention('123');
      expect(mention).toBeDefined();
      expect(mention).toEqual({
        type: 'mention',
        text: '<at>test-user</at>',
        mentioned: {
          id: '123',
          name: 'test-user',
          role: 'user',
        },
      });
    });

    it('should not exist', () => {
      const activity = new MessageActivity().addMention({
        id: '123',
        name: 'test-user',
        role: 'user',
      });

      const mention = activity.getAccountMention('1');
      expect(mention).toBeUndefined();
    });

    it('should not exist when no entities', () => {
      const activity = new MessageActivity();
      const mention = activity.getAccountMention('1');
      expect(mention).toBeUndefined();
    });
  });
});
