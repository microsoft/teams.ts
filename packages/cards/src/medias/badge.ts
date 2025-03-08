import { IElement, Element } from '../base';

import { IconName } from './icon';

export type BadgeAppearance = 'filled' | 'tint';
export type BadgeStyle =
  | 'default'
  | 'subtle'
  | 'informative'
  | 'accent'
  | 'good'
  | 'attention'
  | 'warning';

/**
 * A badge element to show an icon and/or text in a compact form over a colored background.
 */
export interface IBadge extends IElement {
  type: 'Badge';

  /**
   * Controls the strength of the background color.
   */
  appearance?: BadgeAppearance;

  /**
   * The name of the icon to display.
   */
  icon?: IconName;

  /**
   * Controls the position of the icon.
   */
  iconPosition?: 'before' | 'after';

  /**
   * Controls the shape of the badge.
   */
  shape?: 'square' | 'rounded' | 'circular';

  /**
   * The size of the badge.
   */
  size?: 'medium' | 'large' | 'extraLarge';

  /**
   * The style of the badge.
   */
  style?: BadgeStyle;

  /**
   * The text to display.
   */
  text?: string;

  /**
   * Controls the tooltip text to display when the badge is hovered over.
   */
  tooltip?: string;
}

export type BadgeOptions = Omit<IBadge, 'type'>;

/**
 * A badge element to show an icon and/or text in a compact form over a colored background.
 */
export class Badge extends Element implements IBadge {
  type: 'Badge';

  /**
   * Controls the strength of the background color.
   */
  appearance?: BadgeAppearance;

  /**
   * The name of the icon to display.
   */
  icon?: IconName;

  /**
   * Controls the position of the icon.
   */
  iconPosition?: 'before' | 'after';

  /**
   * Controls the shape of the badge.
   */
  shape?: 'square' | 'rounded' | 'circular';

  /**
   * The size of the badge.
   */
  size?: 'medium' | 'large' | 'extraLarge';

  /**
   * The style of the badge.
   */
  style?: BadgeStyle;

  /**
   * The text to display.
   */
  text?: string;

  /**
   * Controls the tooltip text to display when the badge is hovered over.
   */
  tooltip?: string;

  constructor(options: BadgeOptions = {}) {
    super();
    this.type = 'Badge';
    Object.assign(this, options);
  }

  static from(options: BadgeOptions) {
    return new Badge(options);
  }

  withAppearance(value: BadgeAppearance) {
    this.appearance = value;
    return this;
  }

  withIcon(value: IconName, position?: 'before' | 'after') {
    this.icon = value;
    this.iconPosition = position;
    return this;
  }

  withIconPosition(value: 'before' | 'after') {
    this.iconPosition = value;
    return this;
  }

  withShape(value: 'square' | 'rounded' | 'circular') {
    this.shape = value;
    return this;
  }

  withSize(value: 'medium' | 'large' | 'extraLarge') {
    this.size = value;
    return this;
  }

  withStyle(value: BadgeStyle) {
    this.style = value;
    return this;
  }

  withText(value: string) {
    this.text = value;
    return this;
  }

  withTooltip(value: string) {
    this.tooltip = value;
    return this;
  }
}
