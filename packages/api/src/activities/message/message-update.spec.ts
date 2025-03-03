import { MessageUpdateActivity } from './message-update';

describe('MessageUpdateActivity', () => {
  it('should build', () => {
    const expiration = new Date();
    const activity = MessageUpdateActivity('editMessage')
      .text('hello world')
      .speak('say something')
      .summary('my test summary')
      .expiration(expiration)
      .build();

    expect(activity.type).toEqual('messageUpdate');
    expect(activity.channelData?.eventType).toEqual('editMessage');
    expect(activity.text).toEqual('hello world');
    expect(activity.speak).toEqual('say something');
    expect(activity.summary).toEqual('my test summary');
    expect(activity.expiration).toStrictEqual(expiration);
  });
});
