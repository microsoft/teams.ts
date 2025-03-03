import { BaseInputElement } from './base';

/**
 * Lets a user select a time.
 */
export interface TimeInput extends BaseInputElement {
  type: 'Input.Time';

  /**
   * Hint of maximum value expressed in HH:MM (may be ignored by some clients).
   */
  max?: string;

  /**
   * Hint of minimum value expressed in HH:MM (may be ignored by some clients).
   */
  min?: string;

  /**
   * Description of the input desired. Displayed when no time has been selected.
   */
  placeholder?: string;

  /**
   * The initial value for this field expressed in HH:MM.
   */
  value?: string;
}

export type TimeInputParams = Omit<TimeInput, 'type'>;

/**
 * Lets a user select a time.
 */
export function TimeInput(params?: TimeInputParams): TimeInput {
  return {
    type: 'Input.Time',
    ...params,
  };
}
