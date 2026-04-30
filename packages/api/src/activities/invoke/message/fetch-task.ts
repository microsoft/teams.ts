import { ConversationReference } from '../../../models';
import { IActivity } from '../../activity';

export interface IMessageFetchTaskInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'message/fetchTask';

  /**
   * A value that is associated with the activity.
   */
  value: {
    /**
     * The data payload containing action name and value.
     */
    data: {
      /**
       * The name of the action.
       */
      actionName: 'feedback';

      /**
       * The nested action value containing the user's reaction.
       */
      actionValue: {
        /**
         * The feedback button the user clicked.
         */
        reaction: 'like' | 'dislike';
      };
    };
  };

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
