/**
 * Represents the status of the cart.
 */
export type CartStatus = 'Open' | 'Processing' | 'Processed' | 'Closed' | 'Error';

/**
 * Represents the status of the cart.
 */
export enum CartStatuses {
  /**
   * Cart is created but not checked out yet.
   */
  Open = 'Open',

  /**
   * Cart is checked out but not completed yet.
   */
  Processing = 'Processing',

  /**
   * Indicate checking out is completed and the host should
   * return a new cart in the next getCart call.
   */
  Processed = 'Processed',

  /**
   * Indicate checking out process is manually cancelled by the user
   */
  Closed = 'Closed',

  /**
   * Indicate checking out is failed and the host should
   * return a new cart in the next getCart call.
   */
  Error = 'Error',
}
