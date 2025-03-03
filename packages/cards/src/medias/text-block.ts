import { BaseElement } from '../base';
import { Color, FontSize, FontType, FontWeight, HorizontalAlignment } from '../common';

/**
 * Displays text, allowing control over font sizes, weight, and color.
 */
export interface TextBlock extends BaseElement {
  type: 'TextBlock';

  /**
   * Text to display. A subset of markdown is supported (https://aka.ms/ACTextFeatures)
   */
  text: string;

  /**
   * The style of this TextBlock for accessibility purposes.
   */
  style?: 'default' | 'heading';

  /**
   * Controls the color of TextBlock elements.
   */
  color?: Color;

  /**
   * Type of font to use for rendering
   */
  fontType?: FontType | null;

  /**
   * Controls the horizontal text alignment. When not specified, the value of horizontalAlignment is inherited from the parent container. If no parent container has horizontalAlignment set, it defaults to Left.
   */
  horizontalAlignment?: HorizontalAlignment;

  /**
   * If true, displays text slightly toned down to appear less prominent.
   */
  isSubtle?: boolean;

  /**
   * Specifies the maximum number of lines to display.
   */
  maxLines?: number;

  /**
   * Controls size of text.
   */
  size?: FontSize;

  /**
   * Controls the weight of TextBlock elements.
   */
  weight?: FontWeight;

  /**
   * If true, allow text to wrap. Otherwise, text is clipped.
   */
  wrap?: boolean;
}

export type TextBlockParams = Omit<TextBlock, 'type' | 'text'>;

/**
 * Displays text, allowing control over font sizes, weight, and color.
 */
export function TextBlock(text: string, params?: TextBlockParams): TextBlock {
  return {
    type: 'TextBlock',
    text,
    ...params,
  };
}
