import { ConversationReference } from '../../../models';
import { IActivity } from '../../activity';

export interface IMessageSubmitActionInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'message/submitAction';

  /**
   * A value that is associated with the activity.
   */
  value: {
    /**
     * Action name.
     */
    actionName: 'feedback';

    /**
     * Action value.
     */
    actionValue: {
      /**
       * Reaction triggered.
       */
      reaction: 'like' | 'dislike';

      /**
       * The response the user provides when prompted.
       */
      feedback: string;
    };
  };

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
