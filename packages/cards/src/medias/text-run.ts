import { ExecuteAction, OpenUrlAction, SubmitAction, ToggleVisibilityAction } from '../actions';
import { Color, FontSize, FontType, FontWeight } from '../common';

/**
 * Defines a single run of formatted text. A TextRun with no properties set can be represented in the json as string containing the text as a shorthand for the json object. These two representations are equivalent.
 */
export interface TextRun {
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
  selectAction?: ExecuteAction | OpenUrlAction | SubmitAction | ToggleVisibilityAction;

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

export type TextRunParams = Omit<TextRun, 'type' | 'text'>;

/**
 * Defines a single run of formatted text. A TextRun with no properties set can be represented in the json as string containing the text as a shorthand for the json object. These two representations are equivalent.
 */
export function TextRun(text: string, params?: TextRunParams): TextRun {
  return {
    type: 'TextRun',
    text,
    ...params,
  };
}
