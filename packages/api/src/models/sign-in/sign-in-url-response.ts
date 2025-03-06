import { TokenPostResource } from '../token';
import { TokenExchangeResource } from '../token-exchange';

/**
 *
 * An interface representing SignInUrlResponse.
 */
export type SignInUrlResponse = {
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
};
