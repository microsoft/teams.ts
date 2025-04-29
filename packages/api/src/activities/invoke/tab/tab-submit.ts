import { ConversationReference, TabRequest } from '../../../models';
import { IActivity } from '../../activity';

export interface ITabSubmitInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'tab/submit';

  /**
   * A value that is associated with the activity.
   */
  value: TabRequest;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
