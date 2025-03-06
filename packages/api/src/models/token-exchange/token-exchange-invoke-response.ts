/**
 * The response object of a token exchange invoke.
 */
export type TokenExchangeInvokeResponse = {
  /**
   * The id from the OAuthCard.
   */
  id: string;

  /**
   * The connection name.
   */
  connectionName: string;

  /**
   * The details of why the token exchange failed.
   */
  failureDetail: string;

  /**
   * Extension data for overflow of properties.
   */
  properties?: Record<string, any>;
};
