import { ConversationReference, MessagingExtensionAction } from '../../../models';
import { IActivity } from '../../activity';

export interface IMessageExtensionSubmitActionInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'composeExtension/submitAction';

  /**
   * A value that is associated with the activity.
   */
  value: MessagingExtensionAction;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
