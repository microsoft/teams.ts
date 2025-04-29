import { ILogger } from '@microsoft/teams.common';

import { AppClient } from '../api';

import { IClientContext } from './client';

export interface IFunctionContext<T = any> extends IClientContext {
  /**
   * the api client
   */
  api: AppClient;

  /**
   * the app logger instance
   */
  log: ILogger;

  /**
   * the function payload
   */
  data: T;
}
