import { SubmitAction } from './submit';

describe('Actions.Submit', () => {
  it('should build', () => {
    const action = new SubmitAction()
      .withAssociatedInputs('auto')
      .withData()
      .withData({ hello: 'world' })
      .withData({ msteams: { foo: 'bar' } });

    expect(action.associatedInputs).toEqual('auto');
    expect(action.data).toEqual({ msteams: { foo: 'bar' }, hello: 'world' });
  });

  it('should build from interface', () => {
    const action = SubmitAction.from({
      associatedInputs: 'auto',
      data: { msteams: { hello: 'world' } },
    });

    expect(action.associatedInputs).toEqual('auto');
    expect(action.data).toEqual({ msteams: { hello: 'world' } });
  });
});
