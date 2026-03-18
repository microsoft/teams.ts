import { ISubmitAction, SubmitAction, SubmitActionOptions } from '../../core';

import { MSTeamsData } from './ms-teams-data';

export type SignInActionOptions = SubmitActionOptions & { data: MSTeamsData<ISignInData> };

/**
 * @deprecated This type is deprecated. Please use {@link ISigninSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export interface ISignInAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ISignInData>;
}

/**
 * @deprecated This class is deprecated. Please use {@link SigninSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
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

/**
 * @deprecated This type is deprecated. Please use {@link ISigninSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export interface ISignInData {
  type: 'signin';

  /**
   * Set to the `URL` where you want to redirect.
   */
  value: string;
}

/**
 * @deprecated This class is deprecated. Please use {@link SigninSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
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
