import { Activity } from '@microsoft/spark.api';

import { IActivityContext } from './activity';

export interface IActivityErrorContext<T extends Activity = Activity> extends IActivityContext<T> {
  /**
   * the error
   */
  err: Error;
}
