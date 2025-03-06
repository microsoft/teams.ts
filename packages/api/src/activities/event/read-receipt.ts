import { IActivity } from '../activity';

export interface IReadReceiptEventActivity extends IActivity<'event'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'application/vnd.microsoft.readReceipt';
}
