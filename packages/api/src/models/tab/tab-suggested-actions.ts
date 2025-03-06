import { CardAction } from '../card';

/**
 *
 * Tab SuggestedActions (Only when type is 'auth' or 'silentAuth').
 *
 */
export type TabSuggestedActions = {
  /**
   * @member {CardAction[]} [actions] Actions to show in the card response.
   */
  actions: CardAction[];
};
