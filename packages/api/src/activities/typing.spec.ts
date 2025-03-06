import { TypingActivity } from './typing';

describe('TypingActivity', () => {
  it('should build', () => {
    const activity = new TypingActivity().withText('test');

    expect(activity.type).toEqual('typing');
    expect(activity.text).toEqual('test');
  });
});
