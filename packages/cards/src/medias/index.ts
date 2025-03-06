import { IBadge } from './badge';
import { ICodeBlock } from './code-block';
import { IIcon } from './icon';
import { IImage } from './image';
import { IMedia } from './media';
import { IProgressBar } from './progress-bar';
import { IProgressRing } from './progress-ring';
import { IRichTextBlock } from './rich-text-block';
import { ITextBlock } from './text-block';
import { ITextRun } from './text-run';

export type MediaElement =
  | ICodeBlock
  | IIcon
  | IImage
  | IMedia
  | IRichTextBlock
  | ITextBlock
  | ITextRun
  | IBadge
  | IProgressBar
  | IProgressRing;

export * from './background-image';
export * from './text-block';
export * from './image';
export * from './media';
export * from './rich-text-block';
export * from './text-run';
export * from './code-block';
export * from './icon';
export * from './badge';
export * from './progress-bar';
export * from './progress-ring';
