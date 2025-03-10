import { MessageBackAction, MessageBackData } from './message-back';

describe('Actions.MessageBack', () => {
  it('should build', () => {
    const action = new MessageBackAction(new MessageBackData('hello', 'world')).withData(
      new MessageBackData('a', 'b', 'c')
    );

    expect(action.data.msteams).toEqual({
      type: 'messageBack',
      text: 'a',
      value: 'b',
      displayText: 'c',
    });
  });

  it('should build from interface', () => {
    const action = MessageBackAction.from({
      data: {
        msteams: new MessageBackData('a', 'b').withDisplayText('c'),
      },
    });

    expect(action.data.msteams).toEqual({
      type: 'messageBack',
      text: 'a',
      value: 'b',
      displayText: 'c',
    });
  });
});
