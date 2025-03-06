import { IInputElement, InputElement } from './base';

/**
 * Allows a user to enter a number.
 */
export interface INumberInput extends IInputElement {
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

export type NumberInputOptions = Omit<INumberInput, 'type'>;

/**
 * Allows a user to enter a number.
 */
export class NumberInput extends InputElement implements INumberInput {
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

  constructor(options: NumberInputOptions = {}) {
    super();
    this.type = 'Input.Number';
    this.withOptions(options);
  }

  withOptions(value: NumberInputOptions) {
    Object.assign(this, value);
    return this;
  }

  withMax(value: number) {
    this.max = value;
    return this;
  }

  withMin(value: number) {
    this.min = value;
    return this;
  }

  withPlaceholder(value: string) {
    this.placeholder = value;
    return this;
  }

  withValue(value: number) {
    this.value = value;
    return this;
  }
}
