import { BaseInputElement } from './base';

/**
 * Allows a user to enter a number.
 */
export interface NumberInput extends BaseInputElement {
  type: 'Input.Number';

  /**
   * Hint of maximum value (may be ignored by some clients).
   */
  max?: number;

  /**
   * Hint of minimum value (may be ignored by some clients).
   */
  min?: number;

  /**
   * Description of the input desired. Displayed when no selection has been made.
   */
  placeholder?: string;

  /**
   * Initial value for this field.
   */
  value?: number;
}

export type NumberInputParams = Omit<NumberInput, 'type'>;

/**
 * Allows a user to enter a number.
 */
export function NumberInput(params?: NumberInputParams): NumberInput {
  return {
    type: 'Input.Number',
    ...params,
  };
}
