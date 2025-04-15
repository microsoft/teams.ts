import {
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenResponse,
} from '@microsoft/teams.api';

import { IActivityContext } from './activity';

export interface IActivitySignInContext
  extends IActivityContext<ISignInTokenExchangeInvokeActivity | ISignInVerifyStateInvokeActivity> {
  /**
   * the token response of the signin request
   */
  token: TokenResponse;
}
