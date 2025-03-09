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
