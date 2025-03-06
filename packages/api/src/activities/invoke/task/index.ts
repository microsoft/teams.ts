import { ITaskFetchInvokeActivity } from './task-fetch';
import { ITaskSubmitInvokeActivity } from './task-submit';

export type TaskInvokeActivity = ITaskFetchInvokeActivity | ITaskSubmitInvokeActivity;

export * from './task-fetch';
export * from './task-submit';
