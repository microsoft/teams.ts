import { ConversationReference, O365ConnectorCardActionQuery } from '../../models';
import { IActivity } from '../activity';

export interface IExecuteActionInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'actionableMessage/executeAction';

  /**
   * A value that is associated with the activity.
   */
  value: O365ConnectorCardActionQuery;

  /**
   * A reference to another conversation or activity.
   * @deprecated This will be removed by end of summer 2026.
   */
  relatesTo?: ConversationReference;
}
