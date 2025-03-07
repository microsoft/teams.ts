import { MessageDeleteActivity } from './message-delete';

describe('MessageDeleteActivity', () => {
  it('should build', () => {
    const activity = new MessageDeleteActivity();
    expect(activity.type).toEqual('messageDelete');
  });

  it('should build from interface', () => {
    const activity = MessageDeleteActivity.from(new MessageDeleteActivity().toInterface());
    expect(activity.type).toEqual('messageDelete');
  });

  it('should clone', () => {
    const activity = MessageDeleteActivity.from(new MessageDeleteActivity().toInterface()).clone();
    expect(activity.type).toEqual('messageDelete');
  });
});
