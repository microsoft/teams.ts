/**
 * Sign-in failure information.
 *
 * Represents the details of a sign-in failure including
 * an error code and message.
 */
export type SignInFailure = {
  /**
   * The error code for the sign-in failure.
   */
  code?: string;

  /**
   * The error message for the sign-in failure.
   */
  message?: string;
};
