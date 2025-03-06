import { IInputElement, InputElement } from './base';

/**
 * Lets a user select a time.
 */
export interface ITimeInput extends IInputElement {
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

export type TimeInputOptions = Omit<ITimeInput, 'type'>;

/**
 * Lets a user select a time.
 */
export class TimeInput extends InputElement implements ITimeInput {
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

  constructor(options: TimeInputOptions = {}) {
    super();
    this.type = 'Input.Time';
    this.withOptions(options);
  }

  withOptions(value: TimeInputOptions) {
    Object.assign(this, value);
    return this;
  }

  withMax(value: string) {
    this.max = value;
    return this;
  }

  withMin(value: string) {
    this.min = value;
    return this;
  }

  withPlaceholder(value: string) {
    this.placeholder = value;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }
}
