import { AdaptiveCardInvokeActivity } from './adaptive-card';
import { MessageExtensionInvokeActivity } from './message-extension';
import { ConfigInvokeActivity } from './config';
import { ExecuteActionInvokeActivity } from './execute-action';
import { FileConsentInvokeActivity } from './file-consent';
import { HandoffActionInvokeActivity } from './handoff-action';
import { MessageInvokeActivity } from './message';
import { SignInInvokeActivity } from './sign-in';
import { TabInvokeActivity } from './tab';
import { TaskInvokeActivity } from './task';

export type InvokeActivity =
  | FileConsentInvokeActivity
  | ExecuteActionInvokeActivity
  | MessageExtensionInvokeActivity
  | ConfigInvokeActivity
  | TabInvokeActivity
  | TaskInvokeActivity
  | MessageInvokeActivity
  | HandoffActionInvokeActivity
  | SignInInvokeActivity
  | AdaptiveCardInvokeActivity;

export * from './file-consent';
export * from './execute-action';
export * from './message-extension';
export * from './config';
export * from './tab';
export * from './task';
export * from './message';
export * from './handoff-action';
export * from './sign-in';
export * from './adaptive-card';
