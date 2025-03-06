import { MessageUpdateActivity } from './message-update';

describe('MessageUpdateActivity', () => {
  it('should build', () => {
    const expiration = new Date();
    const activity = new MessageUpdateActivity('editMessage')
      .withText('hello world')
      .withSpeak('say something')
      .withSummary('my test summary')
      .withExpiration(expiration);

    expect(activity.type).toEqual('messageUpdate');
    expect(activity.channelData?.eventType).toEqual('editMessage');
    expect(activity.text).toEqual('hello world');
    expect(activity.speak).toEqual('say something');
    expect(activity.summary).toEqual('my test summary');
    expect(activity.expiration).toStrictEqual(expiration);
  });
});
