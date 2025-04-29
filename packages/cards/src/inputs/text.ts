import { Action } from '../actions';

import { IInputElement, InputElement } from './base';

/**
 * Style hint for text input.
 */
export type TextInputStyle = 'text' | 'tel' | 'url' | 'email' | 'password';

/**
 * Lets a user enter text.
 */
export interface ITextInput extends IInputElement {
  type: 'Input.Text';

  /**
   * If `true`, allow multiple lines of input.
   */
  isMultiline?: boolean;

  /**
   * Hint of maximum length characters to collect (may be ignored by some clients).
   */
  maxLength?: number;

  /**
   * Description of the input desired. Displayed when no text has been input.
   */
  placeholder?: string;

  /**
   * Regular expression indicating the required format of this text input.
   */
  regex?: string;

  /**
   * Style hint for text input.
   */
  style?: TextInputStyle;

  /**
   * The inline action for the input. Typically displayed to the right of the input. It is strongly recommended to provide an icon on the action (which will be displayed instead of the title of the action).
   */
  inlineAction?: Action;

  /**
   * The initial value for this field.
   */
  value?: string;
}

export type TextInputOptions = Omit<ITextInput, 'type'>;

/**
 * Lets a user enter text.
 */
export class TextInput extends InputElement implements ITextInput {
  type: 'Input.Text';

  /**
   * If `true`, allow multiple lines of input.
   */
  isMultiline?: boolean;

  /**
   * Hint of maximum length characters to collect (may be ignored by some clients).
   */
  maxLength?: number;

  /**
   * Description of the input desired. Displayed when no text has been input.
   */
  placeholder?: string;

  /**
   * Regular expression indicating the required format of this text input.
   */
  regex?: string;

  /**
   * Style hint for text input.
   */
  style?: TextInputStyle;

  /**
   * The inline action for the input. Typically displayed to the right of the input. It is strongly recommended to provide an icon on the action (which will be displayed instead of the title of the action).
   */
  inlineAction?: Action;

  /**
   * The initial value for this field.
   */
  value?: string;

  constructor(options: TextInputOptions = {}) {
    super();
    this.type = 'Input.Text';
    this.withOptions(options);
  }

  withOptions(value: TextInputOptions) {
    Object.assign(this, value);
    return this;
  }

  withMultiLine(value = true) {
    this.isMultiline = value;
    return this;
  }

  withMaxLength(value: number) {
    this.maxLength = value;
    return this;
  }

  withPlaceholder(value: string) {
    this.placeholder = value;
    return this;
  }

  withRegex(value: string) {
    this.regex = value;
    return this;
  }

  withStyle(value: TextInputStyle) {
    this.style = value;
    return this;
  }

  withInlineAction(value: Action) {
    this.inlineAction = value;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }
}
