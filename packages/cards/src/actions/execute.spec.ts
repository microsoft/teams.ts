import { ExecuteAction } from './execute';

describe('Actions.Execute', () => {
  it('should build', () => {
    const action = new ExecuteAction()
      .withVerb('test')
      .withData({ hello: 'world' })
      .withAssociatedInputs('auto');

    expect(action.verb).toEqual('test');
    expect(action.data).toEqual({ hello: 'world' });
    expect(action.associatedInputs).toEqual('auto');
  });

  it('should build from interface', () => {
    const action = ExecuteAction.from({
      verb: 'test',
      data: { hello: 'world' },
      associatedInputs: 'auto',
    });

    expect(action.verb).toEqual('test');
    expect(action.data).toEqual({ hello: 'world' });
    expect(action.associatedInputs).toEqual('auto');
  });
});
