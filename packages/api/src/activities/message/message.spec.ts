import { AdaptiveCard, TextBlock } from '@microsoft/teams.cards';

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
    const card = new AdaptiveCard(new TextBlock('hello world'));
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

    expect(activity.attachments).toStrictEqual([
      cardAttachment('adaptive', card),
    ]);
  });

  it('should build from interface', () => {
    const expiration = new Date();
    const card = new AdaptiveCard(new TextBlock('hello world'));
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

    expect(activity.attachments).toStrictEqual([
      cardAttachment('adaptive', card),
    ]);
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

  describe('withRecipient', () => {
    it('should default to not targeted', () => {
      const activity = new MessageActivity('hello').withRecipient({ id: '1', name: '', role: 'user' });

      expect(activity.recipient.isTargeted).toBeUndefined();
      expect(activity.recipient).toBeDefined();
    });

    it('should set isTargeted when second parameter is true', () => {
      const activity = new MessageActivity('hello').withRecipient({ id: '1', name: '', role: 'user' }, true);

      expect(activity.recipient.isTargeted).toBe(true);
      expect(activity.recipient).toBeDefined();
    });

    it('should set isTargeted and recipient with full account', () => {
      const activity = new MessageActivity('hello').withRecipient(
        { id: 'user-123', name: 'user', role: 'user' },
        true
      );

      expect(activity.recipient.isTargeted).toBe(true);
      expect(activity.recipient).toBeDefined();
      expect(activity.recipient.id).toBe('user-123');
      expect(activity.recipient.name).toBe('user');
      expect(activity.recipient.role).toBe('user');
    });

    it('should maintain fluent chaining', () => {
      const activity = new MessageActivity('hello')
        .withImportance('high')
        .withRecipient({ id: 'user-123', name: '', role: 'user' })
        .addText(' world');

      expect(activity.text).toBe('hello world');
      expect(activity.importance).toBe('high');
      expect(activity.recipient).toBeDefined();
      expect(activity.recipient.id).toBe('user-123');
      expect(activity.recipient.isTargeted).toBeUndefined();
    });

    it('should be chainable with targeted flag', () => {
      const activity = new MessageActivity('hello')
        .withImportance('high')
        .withRecipient({ id: 'user-456', name: '', role: 'user' }, true)
        .withDeliveryMode('notification');

      expect(activity.text).toBe('hello');
      expect(activity.importance).toBe('high');
      expect(activity.deliveryMode).toBe('notification');
      expect(activity.recipient.isTargeted).toBe(true);
      expect(activity.recipient.id).toBe('user-456');
    });

    it('should preserve isTargeted and recipient when using from()', () => {
      const original = new MessageActivity('test')
        .withRecipient({ id: 'user-789', name: '', role: 'user' }, true)
        .toInterface();

      const restored = MessageActivity.from(original);

      expect(restored.recipient.isTargeted).toBe(true);
      expect(restored.recipient.id).toBe('user-789');
    });

    it('should validate fluent API', () => {
      const msg = new MessageActivity('Hello')
        .withDeliveryMode('notification')
        .withRecipient({ id: 'user-123', name: 'Test User', role: 'user' }, true)
        .withImportance('high');

      expect(msg.text).toBe('Hello');
      expect(msg.recipient.isTargeted).toBe(true);
      expect(msg.recipient).toBeDefined();
      expect(msg.recipient.id).toBe('user-123');
      expect(msg.recipient.name).toBe('Test User');
      expect(msg.recipient.role).toBe('user');
    });
  });

  describe('getQuotedMessages', () => {
    it('should return quoted reply entities', () => {
      const activity = new MessageActivity('hello');
      activity.addEntity({
        type: 'quotedReply',
        quotedReply: { messageId: 'msg-1' },
      });

      expect(activity.getQuotedMessages()).toHaveLength(1);
      expect(activity.getQuotedMessages()[0].quotedReply.messageId).toEqual('msg-1');
    });

    it('should return empty array when no quoted replies', () => {
      const activity = new MessageActivity('hello');
      expect(activity.getQuotedMessages()).toHaveLength(0);
    });

    it('should return empty array when no entities', () => {
      const activity = new MessageActivity('hello');
      activity.entities = undefined;
      expect(activity.getQuotedMessages()).toHaveLength(0);
    });

    it('should filter out non-quoted-reply entities', () => {
      const activity = new MessageActivity('hello')
        .addMention({ id: '1', name: 'user', role: 'user' });
      activity.addEntity({
        type: 'quotedReply',
        quotedReply: { messageId: 'msg-1' },
      });

      expect(activity.getQuotedMessages()).toHaveLength(1);
      expect(activity.entities).toHaveLength(2);
    });

    it('should return multiple quoted replies', () => {
      const activity = new MessageActivity('hello');
      activity.addEntity({
        type: 'quotedReply',
        quotedReply: { messageId: 'msg-1' },
      });
      activity.addEntity({
        type: 'quotedReply',
        quotedReply: { messageId: 'msg-2' },
      });

      expect(activity.getQuotedMessages()).toHaveLength(2);
      expect(activity.getQuotedMessages()[0].quotedReply.messageId).toEqual('msg-1');
      expect(activity.getQuotedMessages()[1].quotedReply.messageId).toEqual('msg-2');
    });

    it('should be accessible via toInterface', () => {
      const activity = new MessageActivity('hello');
      activity.addEntity({
        type: 'quotedReply',
        quotedReply: { messageId: 'msg-1' },
      });

      const iface = activity.toInterface();
      expect(iface.getQuotedMessages()).toHaveLength(1);
      expect(iface.getQuotedMessages()[0].quotedReply.messageId).toEqual('msg-1');
    });
  });

  describe('addQuote', () => {
    it('should add entity and append placeholder', () => {
      const activity = new MessageActivity().addQuote('msg-1');
      expect(activity.entities).toHaveLength(1);
      expect(activity.entities![0]).toEqual(
        expect.objectContaining({ type: 'quotedReply', quotedReply: { messageId: 'msg-1' } })
      );
      expect(activity.text).toEqual('<quoted messageId="msg-1"/>');
    });

    it('should append response text after placeholder', () => {
      const activity = new MessageActivity().addQuote('msg-1', 'my response');
      expect(activity.text).toEqual('<quoted messageId="msg-1"/> my response');
    });

    it('should support multi-quote with interleaved responses', () => {
      const activity = new MessageActivity()
        .addQuote('msg-1', 'response to first')
        .addQuote('msg-2', 'response to second');
      expect(activity.text).toEqual(
        '<quoted messageId="msg-1"/> response to first<quoted messageId="msg-2"/> response to second'
      );
      expect(activity.entities).toHaveLength(2);
    });

    it('should support grouped quotes', () => {
      const activity = new MessageActivity()
        .addQuote('msg-1')
        .addQuote('msg-2', 'response to both');
      expect(activity.text).toEqual(
        '<quoted messageId="msg-1"/><quoted messageId="msg-2"/> response to both'
      );
    });

    it('should be chainable', () => {
      const activity = new MessageActivity()
        .addQuote('msg-1')
        .addText(' manual text');
      expect(activity.text).toEqual('<quoted messageId="msg-1"/> manual text');
    });
  });
});
