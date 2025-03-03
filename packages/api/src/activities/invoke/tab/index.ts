import { TabFetchInvokeActivity } from './tab-fetch';
import { TabSubmitInvokeActivity } from './tab-submit';

export type TabInvokeActivity = TabFetchInvokeActivity | TabSubmitInvokeActivity;

export * from './tab-fetch';
export * from './tab-submit';
