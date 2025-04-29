import { AssociatedInputs } from '../../common';

import { Action, IAction } from '../base';

export type SubmitActionOptions = Omit<ISubmitAction, 'type' | 'data'>;

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. For example: With BotFramework bots, the client would send an activity through the messaging medium to the bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more details.
 */
export interface ISubmitAction extends IAction {
  type: 'Action.Submit';

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?: MSTeamsData<Record<string, any>>;
}

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. For example: With BotFramework bots, the client would send an activity through the messaging medium to the bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more details.
 */
export class SubmitAction extends Action implements ISubmitAction {
  type: 'Action.Submit';

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?: MSTeamsData<Record<string, any>>;

  constructor(options: SubmitActionOptions = {}) {
    super();
    this.type = 'Action.Submit';
    Object.assign(this, options);
  }

  static from(options: Omit<ISubmitAction, 'type'>) {
    return new SubmitAction(options);
  }

  withAssociatedInputs(value: AssociatedInputs) {
    this.associatedInputs = value;
    return this;
  }

  withData(value: Record<string, any> = { msteams: {} }) {
    const { msteams, ...rest } = value;
    if (!this.data) {
      this.data = { msteams };
    }

    Object.assign(this.data, {
      msteams: {
        ...this.data.msteams,
        ...msteams,
      },
      ...rest,
    });
    return this;
  }
}

/**
 * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
 */
export type MSTeamsData<T> = {
  /**
   * Teams specific payload data.
   */
  msteams: T;

  /**
   * Other
   */
  [key: string]: any;
};
