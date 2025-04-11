import {
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenResponse,
} from '@microsoft/spark.api';

import { IActivityContext } from './activity';

export interface IActivitySignInTokenExchangeContext
  extends IActivityContext<ISignInTokenExchangeInvokeActivity> {
  /**
   * the token response of the signin request
   */
  token: TokenResponse;
}

export interface IActivitySignInVerifyStateContext
  extends IActivityContext<ISignInVerifyStateInvokeActivity> {
  /**
   * the token response of the signin request
   */
  token: TokenResponse;
}

export type IActivitySignInContext =
  | IActivitySignInTokenExchangeContext
  | IActivitySignInVerifyStateContext;
