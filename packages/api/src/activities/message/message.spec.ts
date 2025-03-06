import { Card, TextBlock } from '@microsoft/spark.cards';

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
    const card = Card([TextBlock('hello world')]);
    const activity = new MessageActivity('test')
      .withText('hello world')
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
    expect(activity.text).toEqual('hello world');
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
});
