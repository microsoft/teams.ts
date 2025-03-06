import { IConfigFetchInvokeActivity } from './config-fetch';
import { IConfigSubmitInvokeActivity } from './config-submit';

export type ConfigInvokeActivity = IConfigFetchInvokeActivity | IConfigSubmitInvokeActivity;

export * from './config-fetch';
export * from './config-submit';
