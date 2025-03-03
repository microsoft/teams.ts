import { ActivityBase } from '../base';

export interface ReadReceiptEventActivity extends ActivityBase {
  readonly type: 'event';

  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'application/vnd.microsoft.readReceipt';
}
