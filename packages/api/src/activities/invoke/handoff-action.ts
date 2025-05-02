import { ConversationReference } from '../../models';
import { IActivity } from '../activity';

export interface IHandoffActionInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'handoff/action';

  /**
   * A value that is associated with the activity.
   */
  value: {
    /**
     * Continuation token used to get the conversation reference.
     */
    continuation: string;
  };

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
