import { ILogger } from '@microsoft/teams.common';

import { ApiClient, AppGraphClient } from '../api';

import { IClientContext } from './client';

export interface IFunctionContext<T = any> extends IClientContext {
  /**
   * the api client
   */
  api: ApiClient;

  /**
   * the app graph client
   */
  appGraph: AppGraphClient;

  /**
   * the app logger instance
   */
  log: ILogger;

  /**
   * the function payload
   */
  data: T;
}
