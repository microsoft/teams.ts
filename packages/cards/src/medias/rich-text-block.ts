import { IElement, Element } from '../base';

import { ITextRun, TextRun } from './text-run';

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

  static from(options: Omit<IRichTextBlock, 'type'>) {
    const block = new RichTextBlock(...options.inlines);
    Object.assign(block, options);
    return block;
  }

  addText(...value: (ITextRun | string)[]) {
    this.inlines.push(...value);
    return this;
  }

  toString(delim = '') {
    return this.inlines
      .map((v) => (typeof v === 'string' ? v : TextRun.from(v).toString()))
      .join(delim);
  }
}
