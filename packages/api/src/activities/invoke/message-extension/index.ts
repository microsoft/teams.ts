import { MessageExtensionAnonQueryLinkInvokeActivity } from './anon-query-link';
import { MessageExtensionCardButtonClickedInvokeActivity } from './card-button-clicked';
import { MessageExtensionFetchTaskInvokeActivity } from './fetch-task';
import { MessageExtensionQueryInvokeActivity } from './query';
import { MessageExtensionQueryLinkInvokeActivity } from './query-link';
import { MessageExtensionQuerySettingUrlInvokeActivity } from './query-setting-url';
import { MessageExtensionSelectItemInvokeActivity } from './select-item';
import { MessageExtensionSettingInvokeActivity } from './setting';
import { MessageExtensionSubmitActionInvokeActivity } from './submit-action';

export type MessageExtensionInvokeActivity =
  | MessageExtensionAnonQueryLinkInvokeActivity
  | MessageExtensionFetchTaskInvokeActivity
  | MessageExtensionCardButtonClickedInvokeActivity
  | MessageExtensionQueryLinkInvokeActivity
  | MessageExtensionQuerySettingUrlInvokeActivity
  | MessageExtensionQueryInvokeActivity
  | MessageExtensionSelectItemInvokeActivity
  | MessageExtensionSettingInvokeActivity
  | MessageExtensionSubmitActionInvokeActivity;

export * from './anon-query-link';
export * from './card-button-clicked';
export * from './fetch-task';
export * from './query';
export * from './query-link';
export * from './query-setting-url';
export * from './select-item';
export * from './setting';
export * from './submit-action';
