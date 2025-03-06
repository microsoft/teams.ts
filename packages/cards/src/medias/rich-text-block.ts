import { IElement, Element } from '../base';

import { ITextRun } from './text-run';

/**
 * Defines an array of inlines, allowing for inline text formatting.
 */
export interface IRichTextBlock extends IElement {
  type: 'RichTextBlock';

  /**
   * The array of inlines.
   */
  inlines: (ITextRun | string)[];
}

export type RichTextBlockOptions = Omit<IRichTextBlock, 'type' | 'inlines'>;

/**
 * Defines an array of inlines, allowing for inline text formatting.
 */
export class RichTextBlock extends Element implements IRichTextBlock {
  type: 'RichTextBlock';

  /**
   * The array of inlines.
   */
  inlines: (ITextRun | string)[];

  constructor(...inlines: (ITextRun | string)[]) {
    super();
    this.type = 'RichTextBlock';
    this.inlines = inlines;
  }

  withOptions(value: RichTextBlockOptions) {
    Object.assign(this, value);
    return this;
  }

  addText(...value: (ITextRun | string)[]) {
    this.inlines.push(...value);
    return this;
  }
}
