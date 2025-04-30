import { ConversationReference } from '../../../models';
import { IActivity } from '../../activity';

export interface IConfigFetchInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'config/fetch';

  /**
   * A value that is associated with the activity.
   */
  value: any;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
