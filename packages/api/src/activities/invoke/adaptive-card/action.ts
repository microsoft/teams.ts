import { AdaptiveCardInvokeValue } from '../../../models';
import { ActivityBase } from '../../base';

export interface AdaptiveCardActionInvokeActivity extends ActivityBase {
  readonly type: 'invoke';

  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'adaptiveCard/action';

  /**
   * A value that is associated with the activity.
   */
  value: AdaptiveCardInvokeValue;
}
