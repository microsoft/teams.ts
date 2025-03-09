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
export interface ISubmit extends IAction {
  type: 'Action.Submit';

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?: string | SubmitActionData;
}

export type SubmitOptions = Omit<ISubmit, 'type'>;

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. For example: With BotFramework bots, the client would send an activity through the messaging medium to the bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more details.
 */
export class Submit extends Action implements ISubmit {
  type: 'Action.Submit';

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?: string | SubmitActionData;

  constructor(options: SubmitOptions = {}) {
    super();
    this.type = 'Action.Submit';
    Object.assign(this, options);
  }

  static from(options: Omit<ISubmit, 'type'>) {
    return new Submit(options);
  }

  withAssociatedInputs(value: AssociatedInputs) {
    this.associatedInputs = value;
    return this;
  }

  withData(data: string | SubmitActionData) {
    this.data = data;
    return this;
  }
}

/**
 * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
 */
export type SubmitActionData = {
  /**
   * Teams specific payload data.
   */
  msteams?: IMessageBackData | IIMBackData | ISignInData | ITaskFetchData | IInvokeData;

  /**
   * any other properties
   */
  [key: string]: any;
};
