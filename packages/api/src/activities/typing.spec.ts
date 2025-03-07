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

  it('should build from interface', () => {
    const activity = TypingActivity.from(new TypingActivity().addText('test').toInterface());
    expect(activity.text).toEqual('test');
  });

  it('should clone', () => {
    const activity = new TypingActivity()
      .addText('test')
      .withFrom({
        id: '1',
        name: 'test-user',
        role: 'user',
      })
      .clone();

    expect(activity.text).toEqual('test');
    expect(activity.from).toEqual({
      id: '1',
      name: 'test-user',
      role: 'user',
    });
  });
});
