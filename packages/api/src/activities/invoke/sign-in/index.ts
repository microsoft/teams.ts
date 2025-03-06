import { ISignInTokenExchangeInvokeActivity } from './token-exchange';
import { ISignInVerifyStateInvokeActivity } from './verify-state';

export type SignInInvokeActivity =
  | ISignInTokenExchangeInvokeActivity
  | ISignInVerifyStateInvokeActivity;

export * from './token-exchange';
export * from './verify-state';
