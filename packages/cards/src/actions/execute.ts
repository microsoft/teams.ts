import { AssociatedInputs } from '../common';

import { IAction, Action } from './base';

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. Clients process the event by sending an Invoke activity of type adaptiveCard/action to the target Bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See [Universal Action Model](https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/universal-action-model) documentation for more details.
 */
export interface IExecuteAction extends IAction {
  type: 'Action.Execute';

  /**
   * The card author-defined verb associated with this action.
   */
  verb?: string;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?: string | Record<string, any>;

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;
}

export type ExecuteActionOptions = Omit<IExecuteAction, 'type'>;

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. Clients process the event by sending an Invoke activity of type adaptiveCard/action to the target Bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See [Universal Action Model](https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/universal-action-model) documentation for more details.
 */
export class ExecuteAction extends Action implements IExecuteAction {
  type: 'Action.Execute';

  /**
   * The card author-defined verb associated with this action.
   */
  verb?: string;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?: string | Record<string, any>;

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;

  constructor(options: ExecuteActionOptions = {}) {
    super();
    this.type = 'Action.Execute';
    Object.assign(this, options);
  }

  static from(options: ExecuteActionOptions) {
    return new ExecuteAction(options);
  }

  withVerb(value: string) {
    this.verb = value;
    return this;
  }

  withData(value: string | Record<string, any>) {
    this.data = value;
    return this;
  }

  withAssociatedInputs(value: AssociatedInputs) {
    this.associatedInputs = value;
    return this;
  }
}
