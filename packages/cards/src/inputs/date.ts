import { IInputElement, InputElement } from './base';

/**
 * Lets a user choose a date.
 */
export interface IDateInput extends IInputElement {
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

export type DateInputOptions = Omit<IDateInput, 'type'>;

/**
 * Lets a user choose a date.
 */
export class DateInput extends InputElement implements IDateInput {
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

  constructor(options: DateInputOptions = {}) {
    super();
    this.type = 'Input.Date';
    this.withOptions(options);
  }

  withOptions(value: DateInputOptions) {
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
