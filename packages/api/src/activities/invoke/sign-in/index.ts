import { SignInTokenExchangeInvokeActivity } from './token-exchange';
import { SignInVerifyStateInvokeActivity } from './verify-state';

export type SignInInvokeActivity =
  | SignInTokenExchangeInvokeActivity
  | SignInVerifyStateInvokeActivity;

export * from './token-exchange';
export * from './verify-state';
