import { TargetWidth } from '../common';

/**
 * A layout that stacks elements on top of each other. Layout.Stack is the default layout used by AdaptiveCard and all containers.
 */
export interface IStackLayout {
  type: 'Layout.Stack';

  /**
   * Controls for which card width the layout should be used.
   */
  targetWidth?: TargetWidth;
}

export type StackLayoutOptions = Omit<IStackLayout, 'type'>;

/**
 * A layout that stacks elements on top of each other. Layout.Stack is the default layout used by AdaptiveCard and all containers.
 */
export class StackLayout implements IStackLayout {
  type: 'Layout.Stack';

  /**
   * Controls for which card width the layout should be used.
   */
  targetWidth?: TargetWidth;

  constructor(options: StackLayoutOptions = {}) {
    this.type = 'Layout.Stack';
    Object.assign(this, options);
  }

  static from(options: StackLayoutOptions) {
    return new StackLayout(options);
  }

  withTargetWidth(value: TargetWidth) {
    this.targetWidth = value;
    return this;
  }
}
