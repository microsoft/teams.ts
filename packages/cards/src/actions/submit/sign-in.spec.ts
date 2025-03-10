import { SignInAction, SignInData } from './sign-in';

describe('Actions.SignIn', () => {
  it('should build', () => {
    const action = new SignInAction('test')
      .withData(new SignInData('testing123'))
      .withValue('testing123!');

    expect(action.data.msteams.value).toEqual('testing123!');
  });

  it('should build from interface', () => {
    const action = SignInAction.from({
      data: {
        msteams: new SignInData('testing123!'),
      },
    });

    expect(action.data.msteams.value).toEqual('testing123!');
  });
});
