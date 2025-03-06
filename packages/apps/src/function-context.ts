import { ILogger } from '@microsoft/spark.common';

import { AppClient } from './api';
import { ClientContext } from './client-context';

export interface FunctionContext<T = any> extends ClientContext {
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
