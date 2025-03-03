/**
 * Represents the basic cart item information.
 */
export interface Item {
  /**
   * The id of the cart item.
   */
  readonly id: string;

  /**
   * The display name of the cart item.
   */
  readonly name: string;

  /**
   * The quantity of the cart item.
   */
  readonly quantity: number;

  /**
   * The price of the single cart item.
   */
  readonly price: number;

  /**
   * The thumbnail imageURL of the cart item.
   */
  readonly imageURL?: URL;
}

/**
 * Represents the cart item that could have accessories
 */
export interface CartItem extends Item {
  /**
   * Accessories to the item if existing.
   */
  readonly accessories?: Item[];

  /**
   * The thumbnail imageURL of the cart item.
   */
  readonly imageURL?: URL;
}
