import { IChoiceSetInput } from './choice-set';
import { IDateInput } from './date';
import { INumberInput } from './number';
import { ITextInput } from './text';
import { ITimeInput } from './time';
import { IToggleInput } from './toggle';

export type InputElement =
  | IChoiceSetInput
  | IDateInput
  | INumberInput
  | ITextInput
  | ITimeInput
  | IToggleInput;

export * from './choice-set';
export * from './date';
export * from './number';
export * from './text';
export * from './time';
export * from './toggle';
