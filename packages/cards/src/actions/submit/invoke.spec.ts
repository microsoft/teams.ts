import { InvokeAction, InvokeData } from './invoke';

describe('Actions.Invoke', () => {
  it('should build', () => {
    const action = new InvokeAction('test')
      .withData(new InvokeData('testing123'))
      .withValue('testing123!');

    expect(action.data.msteams.value).toEqual('testing123!');
  });

  it('should build from interface', () => {
    const action = InvokeAction.from({
      data: {
        msteams: new InvokeData('testing123!'),
      },
    });

    expect(action.data.msteams.value).toEqual('testing123!');
  });
});
