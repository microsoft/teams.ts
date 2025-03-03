import { TokenPostResource } from '../token';
import { TokenExchangeResource } from '../token-exchange';

/**
 * @interface
 * An interface representing SignInUrlResponse.
 */
export interface SignInUrlResponse {
  /**
   * @member {string} [signInLink]
   */
  signInLink?: string;

  /**
   * @member {TokenExchangeResource} [tokenExchangeResource]
   */
  tokenExchangeResource?: TokenExchangeResource;

  /**
   * @member {TokenPostResource} [tokenPostResource]
   */
  tokenPostResource?: TokenPostResource;
}
