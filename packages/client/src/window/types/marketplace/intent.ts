/**
 * Represents the persona creating the cart.
 */
export type Intent = 'TACAdminUser' | 'TeamsAdminUser' | 'TeamsEndUser';

/**
 * Represents the persona creating the cart.
 */
export enum Intents {
  /**
   * The cart is created by admin of an organization in Teams Admin Center.
   */
  TACAdminUser = 'TACAdminUser',

  /**
   * The cart is created by admin of an organization in Teams.
   */
  TeamsAdminUser = 'TeamsAdminUser',

  /**
   * The cart is created by end user of an organization in Teams.
   */
  TeamsEndUser = 'TeamsEndUser',
}
