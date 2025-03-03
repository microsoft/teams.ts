/**
 * @interface
 * Envelope for cards for a Tab request.
 *
 */
export interface TabResponseCard {
  /**
   * @member {Record<string, any>} [card] The adaptive card for this card tab response.
   */
  card: Record<string, unknown>;
}

/**
 * @interface
 * Envelope for cards for a TabResponse.
 *
 */
export interface TabResponseCards {
  /**
   * @member {TabResponseCard[]} [cards] Adaptive cards for this card tab response.
   */
  cards: TabResponseCard[];
}
