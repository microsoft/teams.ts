/**
 *
 * Envelope for cards for a Tab request.
 *
 */
export type TabResponseCard = {
  /**
   * @member {Record<string, any>} [card] The adaptive card for this card tab response.
   */
  card: Record<string, unknown>;
};

/**
 *
 * Envelope for cards for a TabResponse.
 *
 */
export type TabResponseCards = {
  /**
   * @member {TabResponseCard[]} [cards] Adaptive cards for this card tab response.
   */
  cards: TabResponseCard[];
};
