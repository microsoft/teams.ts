import { AssociatedInputs } from '../common';

import { IAction, Action } from './base';

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
  data?:
    | string
    | {
        msteams?:
          | IMessageBackActionData
          | IIMBackActionData
          | ISignInActionData
          | ITaskFetchActionData
          | IInvokeActionData;

        [key: string]: any;
      };
}

export type SubmitActionOptions = Omit<ISubmitAction, 'type'>;

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
  data?:
    | string
    | {
        msteams?:
          | IMessageBackActionData
          | IIMBackActionData
          | ISignInActionData
          | ITaskFetchActionData
          | IInvokeActionData;

        [key: string]: any;
      };

  constructor(options: SubmitActionOptions = {}) {
    super();
    this.type = 'Action.Submit';
    this.withOptions(options);
  }

  withOptions(value: SubmitActionOptions) {
    Object.assign(this, value);
    return this;
  }

  withAssociatedInputs(value: AssociatedInputs) {
    this.associatedInputs = value;
    return this;
  }

  withData(data: ISubmitAction['data']) {
    this.data = data;
    return this;
  }
}

export interface IMessageBackActionData {
  type: 'messageBack';

  /**
   * Sent to your bot when the action is performed.
   */
  text: string;

  /**
   * Used by the user in the chat stream when the action is performed.
   * This text isn't sent to your bot.
   */
  displayText?: string;

  /**
   * Sent to your bot when the action is performed. You can encode context
   * for the action, such as unique identifiers or a `JSON` object.
   */
  value: string;
}

export class MessageBackActionData implements IMessageBackActionData {
  type: 'messageBack';

  /**
   * Sent to your bot when the action is performed.
   */
  text: string;

  /**
   * Used by the user in the chat stream when the action is performed.
   * This text isn't sent to your bot.
   */
  displayText?: string;

  /**
   * Sent to your bot when the action is performed. You can encode context
   * for the action, such as unique identifiers or a `JSON` object.
   */
  value: string;

  constructor(text: string, value: string, displayText?: string) {
    this.type = 'messageBack';
    this.text = text;
    this.value = value;
    this.displayText = displayText;
  }

  withDisplayText(value: string) {
    this.displayText = value;
    return this;
  }
}

export interface IIMBackActionData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;
}

export class IMBackActionData implements IIMBackActionData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;

  constructor(value: string) {
    this.type = 'imBack';
    this.value = value;
  }
}

export interface ISignInActionData {
  type: 'signin';

  /**
   * Set to the `URL` where you want to redirect.
   */
  value: string;
}

export class SignInActionData implements ISignInActionData {
  type: 'signin';

  /**
   * Set to the `URL` where you want to redirect.
   */
  value: string;

  constructor(value: string) {
    this.type = 'signin';
    this.value = value;
  }
}

export interface ITaskFetchActionData {
  type: 'task/fetch';

  /**
   * The data value sent with the `task/fetch` invoke.
   */
  data?: any;
}

export class TaskFetchActionData implements ITaskFetchActionData {
  type: 'task/fetch';

  /**
   * The data value sent with the `task/fetch` invoke.
   */
  data?: any;

  constructor(data?: any) {
    this.type = 'task/fetch';
    this.data = data;
  }
}

export interface IInvokeActionData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: any;
}

export class InvokeActionData implements IInvokeActionData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: any;

  constructor(value?: any) {
    this.type = 'invoke';
    this.value = value;
  }
}
