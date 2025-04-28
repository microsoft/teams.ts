import { ISubmitAction, MSTeamsData, SubmitAction, SubmitActionOptions } from './submit';

export type SignInActionOptions = SubmitActionOptions & { data: MSTeamsData<ISignInData> };

export interface ISignInAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ISignInData>;
}

export class SignInAction extends SubmitAction implements ISignInAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ISignInData>;

  constructor(value: string, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = { msteams: new SignInData(value) };
  }

  static from(options: SignInActionOptions) {
    return new SignInAction(options.data.msteams.value, options);
  }

  withData(value: ISignInData) {
    super.withData({ msteams: value });
    return this;
  }

  withValue(value: string) {
    this.data.msteams.value = value;
    return this;
  }
}

export interface ISignInData {
  type: 'signin';

  /**
   * Set to the `URL` where you want to redirect.
   */
  value: string;
}

export class SignInData implements ISignInData {
  type: 'signin';

  /**
   * Set to the `URL` where you want to redirect.
   */
  value: string;

  constructor(value: string) {
    this.type = 'signin';
    this.value = value;
  }
}
