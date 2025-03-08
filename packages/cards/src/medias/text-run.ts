import { IExecuteAction, IOpenUrlAction, ISubmitAction, IToggleVisibilityAction } from '../actions';
import { Color, FontSize, FontType, FontWeight } from '../common';

/**
 * Defines a single run of formatted text. A TextRun with no properties set can be represented in the json as string containing the text as a shorthand for the json object. These two representations are equivalent.
 */
export interface ITextRun {
  type: 'TextRun';

  /**
   * Text to display. Markdown is not supported.
   */
  text: string;

  /**
   * Controls the color of the text.
   */
  color?: Color;

  /**
   * The type of font to use
   */
  fontType?: FontType;

  /**
   * If true, displays the text highlighted.
   */
  highlight?: boolean;

  /**
   * If true, displays text slightly toned down to appear less prominent.
   */
  isSubtle?: boolean;

  /**
   * If true, displays the text using italic font.
   */
  italic?: boolean;

  /**
   * Action to invoke when this text run is clicked. Visually changes the text run into a hyperlink. Action.ShowCard is not supported.
   */
  selectAction?: IExecuteAction | IOpenUrlAction | ISubmitAction | IToggleVisibilityAction;

  /**
   * Controls size of text.
   */
  size?: FontSize;

  /**
   * If true, displays the text with strikethrough.
   */
  strikethrough?: boolean;

  /**
   * If true, displays the text with an underline.
   */
  underline?: boolean;

  /**
   * Controls the weight of the text.
   */
  weight?: FontWeight;
}

export type TextRunOptions = Omit<ITextRun, 'type' | 'text'>;

/**
 * Defines a single run of formatted text. A TextRun with no properties set can be represented in the json as string containing the text as a shorthand for the json object. These two representations are equivalent.
 */
export class TextRun implements ITextRun {
  type: 'TextRun';

  /**
   * Text to display. Markdown is not supported.
   */
  text: string;

  /**
   * Controls the color of the text.
   */
  color?: Color;

  /**
   * The type of font to use
   */
  fontType?: FontType;

  /**
   * If true, displays the text highlighted.
   */
  highlight?: boolean;

  /**
   * If true, displays text slightly toned down to appear less prominent.
   */
  isSubtle?: boolean;

  /**
   * If true, displays the text using italic font.
   */
  italic?: boolean;

  /**
   * Action to invoke when this text run is clicked. Visually changes the text run into a hyperlink. Action.ShowCard is not supported.
   */
  selectAction?: IExecuteAction | IOpenUrlAction | ISubmitAction | IToggleVisibilityAction;

  /**
   * Controls size of text.
   */
  size?: FontSize;

  /**
   * If true, displays the text with strikethrough.
   */
  strikethrough?: boolean;

  /**
   * If true, displays the text with an underline.
   */
  underline?: boolean;

  /**
   * Controls the weight of the text.
   */
  weight?: FontWeight;

  constructor(text: string, options: TextRunOptions = {}) {
    this.type = 'TextRun';
    this.text = text;
    this.withOptions(options);
  }

  withOptions(value: TextRunOptions) {
    Object.assign(this, value);
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

  withHighlight(value = true) {
    this.highlight = value;
    return this;
  }

  withSubtle(value = true) {
    this.isSubtle = value;
    return this;
  }

  withItalic(value = true) {
    this.italic = value;
    return this;
  }

  withSelectAction(
    value: IExecuteAction | IOpenUrlAction | ISubmitAction | IToggleVisibilityAction
  ) {
    this.selectAction = value;
    return this;
  }

  withSize(value: FontSize) {
    this.size = value;
    return this;
  }

  withStrikeThrough(value = true) {
    this.strikethrough = value;
    return this;
  }

  withUnderline(value = true) {
    this.underline = value;
    return this;
  }

  withWeight(value: FontWeight) {
    this.weight = value;
    return this;
  }

  addText(...value: string[]) {
    this.text += value.join('');
    return this;
  }
}
