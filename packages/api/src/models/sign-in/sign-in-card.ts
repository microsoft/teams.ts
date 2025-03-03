import { CardAction } from '../card';

/**
 * A card representing a request to sign in
 */
export interface SigninCard {
  /**
   * Text for signin request
   */
  text?: string;

  /**
   * Action to use to perform signin
   */
  buttons: CardAction[];
}
