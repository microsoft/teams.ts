import { ConversationReference } from '../models';

import { IActivity } from './activity';

/**
 * @deprecated This will be removed by end of summer 2026.
 */
export interface ITraceActivity extends IActivity<'trace'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name?: string;

  /**
   * A descriptive label for the activity.
   */
  label: string;

  /**
   * The type of the activity's value object.
   */
  valueType: string;

  /**
   * A value that is associated with the activity.
   */
  value?: any;

  /**
   * A reference to another conversation or activity.
   * @deprecated This will be removed by end of summer 2026.
   */
  relatesTo?: ConversationReference;
}
