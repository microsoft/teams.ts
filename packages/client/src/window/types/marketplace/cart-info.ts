import { CartStatus } from './cart-status';
import { Intent } from './intent';

/**
 * Represents the cart information
 */
export type CartInfo = {
  /**
   * The country market where the products are selling.
   * Should be country code in ISO 3166-1 alpha-2 format, e.g. CA for Canada.
   * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  readonly market: string;

  /**
   * The identifier to tell the cart is checked out by admin or end user.
   */
  readonly intent: Intent;

  /**
   * Locale the app should render for the user
   * Should be a BCP 47 language tag, e.g. en-US ([primary tag]-[ISO 3166-1 alpha-2 code]).
   * https://en.wikipedia.org/wiki/IETF_language_tag
   */
  readonly locale: string;

  /**
   * The status of the cart.
   */
  readonly status: CartStatus;

  /**
   * ISO 4217 currency code for the cart item price, e.g. USD for US Dollar.
   * https://en.wikipedia.org/wiki/ISO_4217
   */
  readonly currency: string;

  /**
   * ISO 8601 timestamp string in UTC, indicates when the cart is created.
   * e.g. 2023-06-19T22:06:59Z
   * https://en.wikipedia.org/wiki/ISO_8601
   */
  readonly createdAt: string;

  /**
   * ISO 8601 timestamp string in UTC, indicates when the cart is updated.
   * e.g. 2023-06-19T22:06:59Z
   * https://en.wikipedia.org/wiki/ISO_8601
   */
  readonly updatedAt: string;
};
