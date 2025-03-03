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
    const activity = MessageReactionActivity()
      .addReaction({
        type: 'angry',
        user: a,
      })
      .addReaction({
        type: 'heart',
        user: b,
      })
      .removeReaction({
        type: 'heart',
        user: b,
      })
      .build();

    expect(activity.type).toEqual('messageReaction');
    expect(activity.reactionsAdded).toStrictEqual([
      {
        type: 'angry',
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
