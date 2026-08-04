import { SearchInvokeValue } from '../../models';
import { IActivity } from '../activity';

/**
 * Sent when an Adaptive Card dynamic typeahead `Input.ChoiceSet` (via `choices.data` /
 * `Data.Query`) requests choices. The bot responds with a `SearchInvokeResponse`.
 */
export interface ISearchInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'application/search';

  /**
   * A value that is associated with the activity.
   */
  value: SearchInvokeValue;
}
