import { IMBackAction, IMBackData } from './im-back';

describe('Actions.IMBack', () => {
  it('should build', () => {
    const action = new IMBackAction('test')
      .withData(new IMBackData('testing123'))
      .withValue('testing123!');

    expect(action.data.msteams.value).toEqual('testing123!');
  });

  it('should build from interface', () => {
    const action = IMBackAction.from({
      data: {
        msteams: new IMBackData('testing123!'),
      },
    });

    expect(action.data.msteams.value).toEqual('testing123!');
  });
});
