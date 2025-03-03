import { Logger } from '@microsoft/spark.common/logging';
import { AxiosError } from 'axios';

export interface ErrorEventArgs {
  /**
   * the error
   */
  err: Error;

  /**
   * the app logger instance
   */
  log: Logger;
}

export function error({ err, log }: ErrorEventArgs) {
  log.error(err.message);

  if (err instanceof AxiosError) {
    log.error(err.request.path);
    log.error(err.response?.data);
  }
}
