/**
 * A request to exchange a token.
 */
export interface TokenExchangeInvokeRequest {
  /**
   * The id from the OAuthCard.
   */
  id: string;

  /**
   * The connection name.
   */
  connectionName: string;

  /**
   * The user token that can be exchanged.
   */
  token: string;
}
