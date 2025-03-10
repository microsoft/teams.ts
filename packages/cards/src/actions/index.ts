import { IExecuteAction } from './execute';
import { IOpenUrlAction } from './open-url';
import { IShowCardAction } from './show-card';
import { ISubmitAction } from './submit';
import { IToggleVisibilityAction } from './toggle-visibility';

export type Action =
  | IExecuteAction
  | IOpenUrlAction
  | IShowCardAction
  | ISubmitAction
  | IToggleVisibilityAction;

export type SelectAction =
  | IExecuteAction
  | IOpenUrlAction
  | ISubmitAction
  | IToggleVisibilityAction;

export * from './execute';
export * from './open-url';
export * from './show-card';
export * from './submit';
export * from './toggle-visibility';
