import { ConversationReference } from '../../../models';
import { IActivity } from '../../activity';

export interface IConfigSubmitInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'config/submit';

  /**
   * A value that is associated with the activity.
   */
  value: any;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
