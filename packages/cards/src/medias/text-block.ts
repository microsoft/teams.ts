import { IElement, Element } from '../base';
import { Color, FontSize, FontType, FontWeight } from '../common';

/**
 * Displays text, allowing control over font sizes, weight, and color.
 */
export interface ITextBlock extends IElement {
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

export type TextBlockOptions = Omit<ITextBlock, 'type' | 'text'>;

/**
 * Displays text, allowing control over font sizes, weight, and color.
 */
export class TextBlock extends Element implements ITextBlock {
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

  constructor(text: string, options: TextBlockOptions = {}) {
    super();
    this.type = 'TextBlock';
    this.text = text;
    Object.assign(this, options);
  }

  static from(options: Omit<ITextBlock, 'type'>) {
    return new TextBlock(options.text, options);
  }

  withStyle(value: 'default' | 'heading') {
    this.style = value;
    return this;
  }

  withColor(value: Color) {
    this.color = value;
    return this;
  }

  withFontType(value: FontType) {
    this.fontType = value;
    return this;
  }

  withSubtle(value = true) {
    this.isSubtle = value;
    return this;
  }

  withMaxLines(value: number) {
    this.maxLines = value;
    return this;
  }

  withSize(value: FontSize) {
    this.size = value;
    return this;
  }

  withWeight(value: FontWeight) {
    this.weight = value;
    return this;
  }

  withWrap(value = true) {
    this.wrap = value;
    return this;
  }

  addText(...value: string[]) {
    this.text += value.join('');
    return this;
  }

  toString() {
    return this.text;
  }
}
