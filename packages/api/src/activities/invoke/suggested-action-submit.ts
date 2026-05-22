import { IActivity } from '../activity';

/**
 * Sent when the user clicks a suggested action of type `Action.Submit`.
 * The structured payload authored on the suggested action is delivered via `value`.
 *
 * @experimental This API is in preview and may change in the future.
 */
export interface ISuggestedActionSubmitInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'suggestedActions/submit';

  /**
   * The structured value authored on the suggested action chip.
   */
  value: any;
}
