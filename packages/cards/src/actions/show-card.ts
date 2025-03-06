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

export type ShowCardActionOptions = Omit<IShowCardAction, 'type' | 'card'>;

/**
 * Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
 */
export class ShowCardAction extends Action implements IShowCardAction {
  type: 'Action.ShowCard';

  /**
   * the card to display
   */
  card: ICard;

  constructor(card: ICard, options: ShowCardActionOptions = {}) {
    super();
    this.type = 'Action.ShowCard';
    this.card = card;
    this.withOptions(options);
  }

  withOptions(value: ShowCardActionOptions) {
    Object.assign(this, value);
    return this;
  }

  withCard(value: ICard) {
    this.card = value;
    return this;
  }
}
