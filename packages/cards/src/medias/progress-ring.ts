import { BaseElement } from '../base';

/**
 * A spinning ring element, to indicate progress.
 */
export interface ProgressRing extends BaseElement {
  type: 'ProgressRing';

  /**
   * The label of the progress ring.
   */
  label?: string;

  /**
   * Controls the relative position of the label to the progress ring.
   * @default `above`
   */
  labelPosition?: 'before' | 'after' | 'above' | 'below';

  /**
   * The size of the progress ring.
   * @default `medium`
   */
  size?: 'tiny' | 'small' | 'medium' | 'large';
}

export type ProgressRingParams = Omit<ProgressRing, 'type'>;

/**
 * A spinning ring element, to indicate progress.
 */
export function ProgressRing(params?: ProgressRingParams): ProgressRing {
  return {
    type: 'ProgressRing',
    ...params,
  };
}
