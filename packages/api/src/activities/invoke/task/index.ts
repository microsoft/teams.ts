import { TaskFetchInvokeActivity } from './task-fetch';
import { TaskSubmitInvokeActivity } from './task-submit';

export type TaskInvokeActivity = TaskFetchInvokeActivity | TaskSubmitInvokeActivity;

export * from './task-fetch';
export * from './task-submit';
