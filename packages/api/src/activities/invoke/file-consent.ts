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
   * @deprecated This will be removed by end of summer 2026.
   */
  relatesTo?: ConversationReference;
}
