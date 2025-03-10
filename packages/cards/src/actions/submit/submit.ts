import { AssociatedInputs } from '../../common';

import { IAction, Action } from '../base';
import { IIMBackData } from './im-back';
import { IInvokeData } from './invoke';
import { IMessageBackData } from './message-back';
import { ISignInData } from './sign-in';
import { ITaskFetchData } from './task-fetch';

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
  data?: string | SubmitData;
}

export type SubmitOptions = Omit<ISubmitAction, 'type'>;

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
  data?: string | SubmitData;

  constructor(options: SubmitOptions = {}) {
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

  withData(data: string | SubmitData) {
    this.data = data;
    return this;
  }
}

/**
 * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
 */
export type SubmitData = {
  /**
   * Teams specific payload data.
   */
  msteams?: IMessageBackData | IIMBackData | ISignInData | ITaskFetchData | IInvokeData;

  /**
   * any other properties
   */
  [key: string]: any;
};
