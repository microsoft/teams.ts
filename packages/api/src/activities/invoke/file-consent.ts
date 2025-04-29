import { ConversationReference, FileConsentCardResponse } from '../../models';
import { IActivity } from '../activity';

export interface IFileConsentInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'fileConsent/invoke';

  /**
   * A value that is associated with the activity.
   */
  value: FileConsentCardResponse;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;
}
