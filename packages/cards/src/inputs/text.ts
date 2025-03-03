import { Action } from '../actions';
import { BaseInputElement } from './base';

/**
 * Style hint for text input.
 */
export type TextInputStyle = 'text' | 'tel' | 'url' | 'email' | 'password';

/**
 * Lets a user enter text.
 */
export interface TextInput extends BaseInputElement {
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

export type TextInputParams = Omit<TextInput, 'type'>;

/**
 * Lets a user enter text.
 */
export function TextInput(params?: TextInputParams): TextInput {
  return {
    type: 'Input.Text',
    ...params,
  };
}
