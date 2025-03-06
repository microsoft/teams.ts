import { CartInfo } from './cart-info';
import { CartItem } from './cart-item';
import { CartVersion } from './cart-version';

/**
 * Represents the cart object for the app checkout flow.
 */
export type Cart = {
  /**
   * Version of the cart.
   */
  readonly version: CartVersion;

  /**
   * The uuid of the cart.
   */
  readonly id: string;

  /**
   * The cart info.
   */
  readonly cartInfo: CartInfo;

  /**
   * The cart items.
   */
  readonly cartItems: CartItem[];
};
