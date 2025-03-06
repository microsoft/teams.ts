import { Action } from '../actions';
import { Element, IElement } from '../base';

/**
 * Displays a set of actions.
 */
export interface IActionSet extends IElement {
  type: 'ActionSet';

  /**
   * The array of `Action` elements to show.
   */
  actions: Action[];
}

export type ActionSetOptions = Omit<IActionSet, 'type' | 'actions'>;

/**
 * Displays a set of actions.
 */
export class ActionSet extends Element implements IActionSet {
  type: 'ActionSet';

  /**
   * The array of `Action` elements to show.
   */
  actions: Action[];

  constructor(...actions: Action[]) {
    super();
    this.type = 'ActionSet';
    this.actions = actions;
  }

  withOptions(value: ActionSetOptions) {
    Object.assign(this, value);
    return this;
  }

  addActions(...value: Action[]) {
    this.actions.push(...value);
    return this;
  }
}
