/**
 * A request to receive a user token
 */
export interface TokenRequest {
  /**
   * The provider to request a user token from
   */
  provider: string;

  /**
   * A collection of settings for the specific provider for this request
   */
  settings: Record<string, any>;
}
