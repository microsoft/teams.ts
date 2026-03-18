import { ISubmitAction, SubmitAction, SubmitActionOptions } from '../../core';

import { MSTeamsData } from './ms-teams-data';

export type MessageBackActionOptions = SubmitActionOptions & {
  data: MSTeamsData<IMessageBackData>;
};

/**
 * @deprecated This type is deprecated. Please use {@link IMessageBackSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export interface IMessageBackAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IMessageBackData>;
}

/**
 * @deprecated This class is deprecated. Please use {@link MessageBackSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export class MessageBackAction extends SubmitAction implements IMessageBackAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IMessageBackData>;

  constructor(data: IMessageBackData, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = {
      msteams: new MessageBackData(data.text, data.value, data.displayText),
    };
  }

  static from(options: MessageBackActionOptions) {
    return new MessageBackAction(options.data.msteams, options);
  }

  withData(value: IMessageBackData) {
    super.withData({ msteams: value });
    return this;
  }
}

/**
 * @deprecated This type is deprecated. Please use {@link IMessageBackSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export interface IMessageBackData {
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

/**
 * @deprecated This class is deprecated. Please use {@link MessageBackSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export class MessageBackData implements IMessageBackData {
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
