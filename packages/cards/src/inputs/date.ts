import { BaseInputElement } from './base';

/**
 * Lets a user choose a date.
 */
export interface DateInput extends BaseInputElement {
  type: 'Input.Date';

  /**
   * Hint of maximum value expressed in YYYY-MM-DD(may be ignored by some clients).
   */
  max?: string;

  /**
   * Hint of minimum value expressed in YYYY-MM-DD(may be ignored by some clients).
   */
  min?: string;

  /**
   * Description of the input desired. Displayed when no selection has been made.
   */
  placeholder?: string;

  /**
   * The initial value for this field expressed in YYYY-MM-DD.
   */
  value?: string;
}

export type DateInputParams = Omit<DateInput, 'type'>;

/**
 * Lets a user choose a date.
 */
export function DateInput(params?: DateInputParams): DateInput {
  return {
    type: 'Input.Date',
    ...params,
  };
}
