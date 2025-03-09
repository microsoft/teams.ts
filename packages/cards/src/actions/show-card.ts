import { ICard } from '../card';

import { IAction, Action } from './base';

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export interface IShowCard extends IAction {
  type: 'Action.ShowCard';

  /**
   * the card to display
   */
  card: ICard;
}

export type ShowCardOptions = Omit<IShowCard, 'type' | 'card'>;

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export class ShowCard extends Action implements IShowCard {
  type: 'Action.ShowCard';

  /**
   * the card to display
   */
  card: ICard;

  constructor(card: ICard, options: ShowCardOptions = {}) {
    super();
    this.type = 'Action.ShowCard';
    this.card = card;
    Object.assign(this, options);
  }

  static from(options: Omit<IShowCard, 'type'>) {
    return new ShowCard(options.card, options);
  }

  withCard(value: ICard) {
    this.card = value;
    return this;
  }
}
