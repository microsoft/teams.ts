import { ISignInTokenExchangeInvokeActivity } from './token-exchange';
import { ISignInVerifyStateInvokeActivity } from './verify-state';
import { ISignInFailureInvokeActivity } from './failure';

export type SignInInvokeActivity =
  | ISignInTokenExchangeInvokeActivity
  | ISignInVerifyStateInvokeActivity
  | ISignInFailureInvokeActivity;

export * from './token-exchange';
export * from './verify-state';
export * from './failure';
