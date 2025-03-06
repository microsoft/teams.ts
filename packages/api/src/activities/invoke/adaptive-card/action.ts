import { AdaptiveCardInvokeValue } from '../../../models';
import { IActivity } from '../../activity';

export interface IAdaptiveCardActionInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'adaptiveCard/action';

  /**
   * A value that is associated with the activity.
   */
  value: AdaptiveCardInvokeValue;
}
