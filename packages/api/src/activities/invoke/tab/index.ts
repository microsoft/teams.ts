import { ITabFetchInvokeActivity } from './tab-fetch';
import { ITabSubmitInvokeActivity } from './tab-submit';

export type TabInvokeActivity = ITabFetchInvokeActivity | ITabSubmitInvokeActivity;

export * from './tab-fetch';
export * from './tab-submit';
