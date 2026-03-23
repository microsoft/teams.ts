import { Account } from '../../models';

import { IMessageReactionActivity, MessageReactionActivity } from './message-reaction';

describe('MessageReactionActivity', () => {
  const a: Account = {
    id: '1',
    name: 'a',
    role: 'user',
  };

  const b: Account = {
    id: '2',
    name: 'b',
    role: 'user',
  };

  it('should build', () => {
    const activity = new MessageReactionActivity({
      reactionsAdded: [
        {
          type: 'like',
          user: a,
        },
      ],
      reactionsRemoved: [
        {
          type: 'heart',
          user: b,
        },
      ],
    });

    expect(activity.type).toEqual('messageReaction');
    expect(activity.reactionsAdded).toStrictEqual([
      {
        type: 'like',
        user: a,
      },
    ]);

    expect(activity.reactionsRemoved).toStrictEqual([
      {
        type: 'heart',
        user: b,
      },
    ]);
  });

  it('should build from interface', () => {
    const activity = MessageReactionActivity.from({
      type: 'messageReaction',
      reactionsAdded: [
        {
          type: 'like',
          user: a,
        },
      ],
      reactionsRemoved: [
        {
          type: 'heart',
          user: b,
        },
      ],
    } as unknown as IMessageReactionActivity);

    expect(activity.type).toEqual('messageReaction');
    expect(activity.reactionsAdded).toStrictEqual([
      {
        type: 'like',
        user: a,
      },
    ]);

    expect(activity.reactionsRemoved).toStrictEqual([
      {
        type: 'heart',
        user: b,
      },
    ]);
  });

  it('should clone', () => {
    const activity = new MessageReactionActivity({
      reactionsAdded: [
        {
          type: 'like',
          user: a,
        },
      ],
      reactionsRemoved: [
        {
          type: 'heart',
          user: b,
        },
      ],
    }).clone();

    expect(activity.type).toEqual('messageReaction');
    expect(activity.reactionsAdded).toStrictEqual([
      {
        type: 'like',
        user: a,
      },
    ]);

    expect(activity.reactionsRemoved).toStrictEqual([
      {
        type: 'heart',
        user: b,
      },
    ]);
  });
});
