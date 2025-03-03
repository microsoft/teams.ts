import { ConversationReference, MessagingExtensionAction } from '../../../models';

import { ActivityBase } from '../../base';

export interface MessageExtensionFetchTaskInvokeActivity extends ActivityBase {
  readonly type: 'invoke';

  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'composeExtension/fetchTask';

  /**
   * A value that is associated with the activity.
   */
  value: MessagingExtensionAction;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
