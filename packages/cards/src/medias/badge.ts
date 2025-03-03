import { BaseElement } from '../base';
import { HorizontalAlignment } from '../common';

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
export interface Badge extends BaseElement {
  type: 'Badge';

  /**
   * Controls the strength of the background color.
   */
  appearance?: BadgeAppearance;

  /**
   * Describes how the image should be aligned if it must be cropped or if using repeat fill mode.
   */
  horizontalAlignment?: HorizontalAlignment;

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

export type BadgeParams = Omit<Badge, 'type'>;

/**
 * A badge element to show an icon and/or text in a compact form over a colored background.
 */
export function Badge(params?: BadgeParams): Badge {
  return {
    type: 'Badge',
    ...params,
  };
}
