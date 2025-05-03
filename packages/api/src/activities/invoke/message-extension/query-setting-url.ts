import { ConversationReference, MessagingExtensionQuery } from '../../../models';
import { IActivity } from '../../activity';

export interface IMessageExtensionQuerySettingUrlInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'composeExtension/querySettingUrl';

  /**
   * A value that is associated with the activity.
   */
  value: MessagingExtensionQuery;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
