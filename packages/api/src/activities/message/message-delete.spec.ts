import { MessageDeleteActivity } from './message-delete';

describe('MessageDeleteActivity', () => {
  it('should build', () => {
    const activity = MessageDeleteActivity().build();

    expect(activity.type).toEqual('messageDelete');
  });
});
