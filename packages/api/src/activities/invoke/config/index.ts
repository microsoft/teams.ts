import { ConfigFetchInvokeActivity } from './config-fetch';
import { ConfigSubmitInvokeActivity } from './config-submit';

export type ConfigInvokeActivity = ConfigFetchInvokeActivity | ConfigSubmitInvokeActivity;

export * from './config-fetch';
export * from './config-submit';
