import { TypingActivity } from './typing';

describe('TypingActivity', () => {
  it('should build', () => {
    const activity = TypingActivity().text('test').build();

    expect(activity.type).toEqual('typing');
    expect(activity.text).toEqual('test');
  });
});
