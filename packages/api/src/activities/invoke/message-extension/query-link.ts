import { AppBasedLinkQuery, ConversationReference } from '../../../models';
import { IActivity } from '../../activity';

export interface IMessageExtensionQueryLinkInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'composeExtension/queryLink';

  /**
   * A value that is associated with the activity.
   */
  value: AppBasedLinkQuery;

  /**
   * A reference to another conversation or activity.
   * @deprecated This will be removed by end of summer 2026.
   */
  relatesTo?: ConversationReference;
}
