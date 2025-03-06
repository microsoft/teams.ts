import { MessageDeleteActivity } from './message-delete';

describe('MessageDeleteActivity', () => {
  it('should build', () => {
    const activity = new MessageDeleteActivity();

    expect(activity.type).toEqual('messageDelete');
  });
});
