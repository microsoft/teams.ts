import { CardAction } from '../card';

/**
 * A card representing a request to sign in
 */
export type SigninCard = {
  /**
   * Text for signin request
   */
  text?: string;

  /**
   * Action to use to perform signin
   */
  buttons: CardAction[];
};
