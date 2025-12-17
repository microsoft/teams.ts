import { SignInFailure } from '../../../models';
import { IActivity } from '../../activity';

/**
 * Sign-in failure invoke activity for signin/failure invokes.
 *
 * Represents an invoke activity when a sign-in operation fails
 * during the authentication process.
 */
export interface ISignInFailureInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'signin/failure';

  /**
   * A value that is associated with the activity.
   */
  value: SignInFailure;
}
