import * as Execute from './execute';
import * as OpenUrl from './open-url';
import * as ShowCard from './show-card';
import * as Submit from './submit';
import * as ToggleVisibility from './toggle-visibility';

export type Action =
  | Execute.IExecute
  | OpenUrl.IOpenUrl
  | ShowCard.IShowCard
  | Submit.ISubmit
  | ToggleVisibility.IToggleVisibility;

export * from './execute';
export * from './open-url';
export * from './show-card';
export * from './submit';
export * from './toggle-visibility';
