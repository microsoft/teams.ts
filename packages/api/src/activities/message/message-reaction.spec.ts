import { Account } from '../../models';

import { MessageReactionActivity } from './message-reaction';

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
      id: '',
      channelId: 'webchat',
      from: {
        id: '',
        aadObjectId: undefined,
        role: 'user',
        name: '',
        properties: undefined,
        membershipSources: undefined
      },
      conversation: {
        id: '',
        tenantId: undefined,
        conversationType: 'personal',
        name: undefined,
        isGroup: undefined
      },
      recipient: {
        id: '',
        aadObjectId: undefined,
        role: 'user',
        name: '',
        properties: undefined,
        membershipSources: undefined
      },
      channel: undefined,
      team: undefined,
      meeting: undefined,
      notification: undefined,
      isStreaming: function (): boolean {
        throw new Error('Function not implemented.');
      }
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
