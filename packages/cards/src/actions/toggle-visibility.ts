import { TargetElement } from '../common';

import { IAction, Action } from './base';

/**
 * An action that toggles the visibility of associated card elements.
 */
export interface IToggleVisibilityAction extends IAction {
  type: 'Action.ToggleVisibility';

  /**
   * "The array of TargetElements. It is not recommended to include Input elements with validation under Action.Toggle due to confusion that can arise from invalid inputs that are not currently visible. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more information.
   */
  targetElements: (string | TargetElement)[];
}

export type ToggleVisibilityActionOptions = Omit<
  IToggleVisibilityAction,
  'type' | 'targetElements'
>;

/**
 * An action that toggles the visibility of associated card elements.
 */
export class ToggleVisibilityAction extends Action implements IToggleVisibilityAction {
  type: 'Action.ToggleVisibility';

  /**
   * "The array of TargetElements. It is not recommended to include Input elements with validation under Action.Toggle due to confusion that can arise from invalid inputs that are not currently visible. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more information.
   */
  targetElements: (string | TargetElement)[];

  constructor(...targetElements: (string | TargetElement)[]) {
    super();
    this.type = 'Action.ToggleVisibility';
    this.targetElements = targetElements;
  }

  withOptions(value: ToggleVisibilityActionOptions) {
    Object.assign(this, value);
    return this;
  }

  addElements(...value: (string | TargetElement)[]) {
    this.targetElements.push(...value);
    return this;
  }
}
