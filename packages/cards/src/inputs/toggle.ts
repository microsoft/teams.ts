import { IInputElement, InputElement } from './base';

/**
 * Lets a user choose between two options.
 */
export interface IToggleInput extends IInputElement {
  type: 'Input.Toggle';

  /**
   * Title for the toggle
   */
  title: string;

  /**
   * The initial selected value. If you want the toggle to be initially on, set this to the value of valueOn‘s value.
   */
  value?: 'true' | 'false' | Omit<string, 'true' | 'false'>;

  /**
   * The value when toggle is off
   */
  valueOff?: 'false' | Omit<string, 'false'>;

  /**
   * The value when toggle is on
   */
  valueOn?: 'true' | Omit<string, 'true'>;

  /**
   * If `true`, allow text to wrap. Otherwise, text is clipped.
   */
  wrap?: boolean;
}

export type ToggleInputOptions = Omit<IToggleInput, 'type' | 'title'>;

/**
 * Lets a user choose between two options.
 */
export class ToggleInput extends InputElement implements IToggleInput {
  type: 'Input.Toggle';

  /**
   * Title for the toggle
   */
  title: string;

  /**
   * The initial selected value. If you want the toggle to be initially on, set this to the value of valueOn‘s value.
   */
  value?: 'true' | 'false' | Omit<string, 'true' | 'false'>;

  /**
   * The value when toggle is off
   */
  valueOff?: 'false' | Omit<string, 'false'>;

  /**
   * The value when toggle is on
   */
  valueOn?: 'true' | Omit<string, 'true'>;

  /**
   * If `true`, allow text to wrap. Otherwise, text is clipped.
   */
  wrap?: boolean;

  constructor(title: string, options: ToggleInputOptions = {}) {
    super();
    this.type = 'Input.Toggle';
    this.title = title;
    this.withOptions(options);
  }

  withOptions(value: ToggleInputOptions) {
    Object.assign(this, value);
    return this;
  }

  withValue(value: 'true' | 'false' | Omit<string, 'true' | 'false'>) {
    this.value = value;
    return this;
  }

  withValueOff(value: 'false' | Omit<string, 'false'>) {
    this.valueOff = value;
    return this;
  }

  withValueOn(value: 'true' | Omit<string, 'true'>) {
    this.valueOn = value;
    return this;
  }

  withWrap(value = true) {
    this.wrap = value;
    return this;
  }
}
