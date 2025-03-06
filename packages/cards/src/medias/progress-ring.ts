import { IElement, Element } from '../base';

/**
 * A spinning ring element, to indicate progress.
 */
export interface IProgressRing extends IElement {
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

export type ProgressRingOptions = Omit<IProgressRing, 'type'>;

/**
 * A spinning ring element, to indicate progress.
 */
export class ProgressRing extends Element implements IProgressRing {
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

  constructor(options: ProgressRingOptions = {}) {
    super();
    this.type = 'ProgressRing';
    this.withOptions(options);
  }

  withOptions(value: ProgressRingOptions) {
    Object.assign(this, value);
    return this;
  }

  withLabel(value: string, position?: 'before' | 'after' | 'above' | 'below') {
    this.label = value;
    this.labelPosition = position;
    return this;
  }

  withLabelPosition(value: 'before' | 'after' | 'above' | 'below') {
    this.labelPosition = value;
    return this;
  }

  withSize(value: 'tiny' | 'small' | 'medium' | 'large') {
    this.size = value;
    return this;
  }
}
