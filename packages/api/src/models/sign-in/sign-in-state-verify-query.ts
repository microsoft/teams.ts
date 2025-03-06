/**
 *
 * An interface representing SigninStateVerificationQuery.
 * Signin state (part of signin action auth flow) verification invoke query
 *
 */
export type SigninStateVerifyQuery = {
  /**
   * @member {string} [state] The state string originally received when the
   * signin web flow is finished with a state posted back to client via tab SDK
   * microsoftTeams.authentication.notifySuccess(state)
   */
  state?: string;
};
