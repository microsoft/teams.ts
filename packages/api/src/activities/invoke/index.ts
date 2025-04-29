import { AdaptiveCardInvokeActivity } from './adaptive-card';
import { ConfigInvokeActivity } from './config';
import { IExecuteActionInvokeActivity } from './execute-action';
import { IFileConsentInvokeActivity } from './file-consent';
import { IHandoffActionInvokeActivity } from './handoff-action';
import { MessageInvokeActivity } from './message';
import { MessageExtensionInvokeActivity } from './message-extension';
import { SignInInvokeActivity } from './sign-in';
import { TabInvokeActivity } from './tab';
import { TaskInvokeActivity } from './task';

export type InvokeActivity =
  | IFileConsentInvokeActivity
  | IExecuteActionInvokeActivity
  | MessageExtensionInvokeActivity
  | ConfigInvokeActivity
  | TabInvokeActivity
  | TaskInvokeActivity
  | MessageInvokeActivity
  | IHandoffActionInvokeActivity
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
