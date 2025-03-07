import { TypingActivity } from './typing';

describe('TypingActivity', () => {
  it('should build', () => {
    const activity = new TypingActivity();
    expect(activity.type).toEqual('typing');
    expect(activity.text).toBeUndefined();
  });

  it('should build with text', () => {
    const activity = new TypingActivity().withText('test').addText('ing123');

    expect(activity.type).toEqual('typing');
    expect(activity.text).toEqual('testing123');
  });
});
