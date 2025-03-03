import { Card } from '../card';

import { BaseAction } from './base';

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export interface ShowCardAction extends BaseAction {
  type: 'Action.ShowCard';

  /**
   * the card to display
   */
  card: Card;
}

export type ShowCardActionParams = Omit<ShowCardAction, 'type' | 'card'>;

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export function ShowCardAction(card: Card, params?: ShowCardActionParams): ShowCardAction {
  return {
    type: 'Action.ShowCard',
    card,
    ...params,
  };
}
