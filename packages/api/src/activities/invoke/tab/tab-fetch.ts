import { ConversationReference, TabRequest } from '../../../models';
import { IActivity } from '../../activity';

export interface ITabFetchInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'tab/fetch';

  /**
   * A value that is associated with the activity.
   */
  value: TabRequest;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
