import { CardAction } from '../card';
import { TokenPostResource } from '../token';
import { TokenExchangeResource } from '../token-exchange';

/**
 * A card representing a request to perform a sign in via OAuth
 */
export type OAuthCard = {
  /**
   * Text for signin request
   */
  text: string;

  /**
   * The name of the registered connection
   */
  connectionName: string;

  /**
   * The token exchange resource for single sign on
   */
  tokenExchangeResource?: TokenExchangeResource;

  /**
   * The token for directly post a token to token service
   */
  tokenPostResource?: TokenPostResource;

  /**
   * Action to use to perform signin
   */
  buttons: CardAction[];
};
