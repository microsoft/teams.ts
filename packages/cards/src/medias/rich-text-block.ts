import { BaseElement } from '../base';
import { HorizontalAlignment } from '../common';

import { TextRun } from './text-run';

/**
 * Defines an array of inlines, allowing for inline text formatting.
 */
export interface RichTextBlock extends BaseElement {
  type: 'RichTextBlock';

  /**
   * The array of inlines.
   */
  inlines: (TextRun | string)[];

  /**
   * Controls the horizontal text alignment. When not specified, the value of horizontalAlignment is inherited from the parent container. If no parent container has horizontalAlignment set, it defaults to Left.
   */
  horizontalAlignment?: HorizontalAlignment;
}

export type RichTextBlockParams = Omit<RichTextBlock, 'type' | 'inlines'>;

/**
 * Defines an array of inlines, allowing for inline text formatting.
 */
export function RichTextBlock(
  inlines: (TextRun | string)[] = [],
  params?: RichTextBlockParams
): RichTextBlock {
  return {
    type: 'RichTextBlock',
    inlines,
    ...params,
  };
}
