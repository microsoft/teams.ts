import { BaseElement } from '../base';
import { Color } from '../common';

/**
 * A progress bar element, to represent a value within a range.
 */
export interface ProgressBar extends BaseElement {
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

export type ProgressBarParams = Omit<ProgressBar, 'type'>;

/**
 * A progress bar element, to represent a value within a range.
 */
export function ProgressBar(params?: ProgressBarParams): ProgressBar {
  return {
    type: 'ProgressBar',
    ...params,
  };
}
