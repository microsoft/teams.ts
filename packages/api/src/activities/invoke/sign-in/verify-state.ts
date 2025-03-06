import { SigninStateVerifyQuery } from '../../../models';
import { IActivity } from '../../activity';

export interface ISignInVerifyStateInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'signin/verifyState';

  /**
   * A value that is associated with the activity.
   */
  value: SigninStateVerifyQuery;
}
