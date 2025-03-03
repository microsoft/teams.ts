import { ChoiceSetInput } from './choice-set';
import { DateInput } from './date';
import { NumberInput } from './number';
import { TextInput } from './text';
import { TimeInput } from './time';
import { ToggleInput } from './toggle';

export type InputElement =
  | ChoiceSetInput
  | DateInput
  | NumberInput
  | TextInput
  | TimeInput
  | ToggleInput;

export * from './choice-set';
export * from './date';
export * from './number';
export * from './text';
export * from './time';
export * from './toggle';
