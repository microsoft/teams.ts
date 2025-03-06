import { SignInExchangeToken } from '../../../models';
import { IActivity } from '../../activity';

export interface ISignInTokenExchangeInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'signin/tokenExchange';

  /**
   * A value that is associated with the activity.
   */
  value: SignInExchangeToken;
}
