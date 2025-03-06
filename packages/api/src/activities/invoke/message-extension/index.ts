import { IMessageExtensionAnonQueryLinkInvokeActivity } from './anon-query-link';
import { IMessageExtensionCardButtonClickedInvokeActivity } from './card-button-clicked';
import { IMessageExtensionFetchTaskInvokeActivity } from './fetch-task';
import { IMessageExtensionQueryInvokeActivity } from './query';
import { IMessageExtensionQueryLinkInvokeActivity } from './query-link';
import { IMessageExtensionQuerySettingUrlInvokeActivity } from './query-setting-url';
import { IMessageExtensionSelectItemInvokeActivity } from './select-item';
import { IMessageExtensionSettingInvokeActivity } from './setting';
import { IMessageExtensionSubmitActionInvokeActivity } from './submit-action';

export type MessageExtensionInvokeActivity =
  | IMessageExtensionAnonQueryLinkInvokeActivity
  | IMessageExtensionFetchTaskInvokeActivity
  | IMessageExtensionCardButtonClickedInvokeActivity
  | IMessageExtensionQueryLinkInvokeActivity
  | IMessageExtensionQuerySettingUrlInvokeActivity
  | IMessageExtensionQueryInvokeActivity
  | IMessageExtensionSelectItemInvokeActivity
  | IMessageExtensionSettingInvokeActivity
  | IMessageExtensionSubmitActionInvokeActivity;

export * from './anon-query-link';
export * from './card-button-clicked';
export * from './fetch-task';
export * from './query';
export * from './query-link';
export * from './query-setting-url';
export * from './select-item';
export * from './setting';
export * from './submit-action';
