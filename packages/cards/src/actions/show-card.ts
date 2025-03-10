import { ICard } from '../card';

import { IAction, Action } from './base';

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export interface IShowCardAction extends IAction {
  type: 'Action.ShowCard';

  /**
   * the card to display
   */
  card: ICard;
}

export type ShowCardOptions = Omit<IShowCardAction, 'type' | 'card'>;

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export class ShowCardAction extends Action implements IShowCardAction {
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

  static from(options: Omit<IShowCardAction, 'type'>) {
    return new ShowCardAction(options.card, options);
  }

  withCard(value: ICard) {
    this.card = value;
    return this;
  }
}
