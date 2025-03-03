import { ConversationReference } from '../models';

import { ActivityBase } from './base';

export interface TraceActivity extends ActivityBase {
  readonly type: 'trace';

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
   */
  relatesTo?: ConversationReference;
}
