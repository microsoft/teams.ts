import { IElement, Element } from '../base';
import { Color } from '../common';

/**
 * A progress bar element, to represent a value within a range.
 */
export interface IProgressBar extends IElement {
  type: 'ProgressBar';

  /**
   * @default `accent`
   */
  color?: Color;

  /**
   * percentage
   */
  value?: number;

  /**
   * the max value
   */
  max?: number;
}

export type ProgressBarOptions = Omit<IProgressBar, 'type'>;

/**
 * A progress bar element, to represent a value within a range.
 */
export class ProgressBar extends Element implements IProgressBar {
  type: 'ProgressBar';

  /**
   * @default `accent`
   */
  color?: Color;

  /**
   * percentage
   */
  value?: number;

  /**
   * the max value
   */
  max?: number;

  constructor(options: ProgressBarOptions = {}) {
    super();
    this.type = 'ProgressBar';
    Object.assign(this, options);
  }

  static from(options: ProgressBarOptions) {
    return new ProgressBar(options);
  }

  withColor(value: Color) {
    this.color = value;
    return this;
  }

  withValue(value: number) {
    this.value = value;
    return this;
  }

  withMax(value: number) {
    this.max = value;
    return this;
  }
}
