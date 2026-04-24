import { IMessageFetchTaskInvokeActivity } from './fetch-task';
import { IMessageSubmitActionInvokeActivity } from './submit-action';

export type MessageInvokeActivity = IMessageFetchTaskInvokeActivity | IMessageSubmitActionInvokeActivity;

export * from './fetch-task';
export * from './submit-action';
