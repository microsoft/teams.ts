import { TypingActivity, TypingActivityInput } from './typing';

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

  it('should build with textFormat', () => {
    const activity = new TypingActivity().withText('test').withTextFormat('extendedmarkdown');
    expect(activity.text).toEqual('test');
    expect(activity.textFormat).toEqual('extendedmarkdown');
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

describe('TypingActivityInput', () => {
  it('should build with text', () => {
    const activity = new TypingActivityInput().withText('test').addText('ing123');
    expect(activity.type).toEqual('typing');
    expect(activity.text).toEqual('testing123');
  });

  it('should build with textFormat', () => {
    const activity = new TypingActivityInput().withText('test').withTextFormat('extendedmarkdown');
    expect(activity.text).toEqual('test');
    expect(activity.textFormat).toEqual('extendedmarkdown');
  });

  it('should build from interface, retaining textFormat', () => {
    const activity = TypingActivityInput.from({
      type: 'typing',
      text: 'test',
      textFormat: 'extendedmarkdown',
    });
    expect(activity.text).toEqual('test');
    expect(activity.textFormat).toEqual('extendedmarkdown');
  });
});
