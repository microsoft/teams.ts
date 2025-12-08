import { ISignInFailureInvokeActivity } from './failure';
import { ISignInTokenExchangeInvokeActivity } from './token-exchange';
import { ISignInVerifyStateInvokeActivity } from './verify-state';

export type SignInInvokeActivity =
  | ISignInTokenExchangeInvokeActivity
  | ISignInVerifyStateInvokeActivity
  | ISignInFailureInvokeActivity;

export * from './failure';
export * from './token-exchange';
export * from './verify-state';
