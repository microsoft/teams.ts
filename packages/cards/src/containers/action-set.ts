import { Action } from '../actions';
import { BaseElement } from '../base';

/**
 * Displays a set of actions.
 */
export interface ActionSet extends BaseElement {
  type: 'ActionSet';

  /**
   * The array of `Action` elements to show.
   */
  actions: Action[];
}

export type ActionSetParams = Omit<ActionSet, 'type' | 'actions'>;

/**
 * Displays a set of actions.
 */
export function ActionSet(actions: Action[] = [], params?: ActionSetParams): ActionSet {
  return {
    type: 'ActionSet',
    actions,
    ...params,
  };
}
