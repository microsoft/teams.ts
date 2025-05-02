import { ITabInfo } from '../../common';

import { ISubmitAction, SubmitAction, SubmitActionOptions } from '../../core';

import { MSTeamsData } from './ms-teams-data';

export type CollabStageActionOptions = SubmitActionOptions & {
  data: MSTeamsData<ICollabStageData>;
};

/**
 * Adaptive Card action response type for the {@link CollabStageAction} function.
 */
export interface ICollabStageAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ICollabStageData>;
}

/**
 * Adaptive Card action that opens a collab stage popout window.
 */
export class CollabStageAction extends SubmitAction implements ICollabStageAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ICollabStageData>;

  constructor(tab?: ITabInfo, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = {
      msteams: {
        type: 'invoke',
        value: tab
          ? {
              type: 'tab/tabInfoAction',
              tabInfo: tab,
            }
          : undefined,
      },
    };
  }

  static from(options: CollabStageActionOptions) {
    return new CollabStageAction(options.data.msteams.value?.tabInfo, options);
  }

  withData(value: ICollabStageData) {
    super.withData({ msteams: value });
    return this;
  }

  withValue(value: ITabInfo) {
    this.data.msteams.value = new CollabStageValueData(value);
    return this;
  }
}

/**
 * Contains the Adaptive Card action data in {@link CollabStageAction}.
 */
export interface ICollabStageData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: ICollabStageValueData;
}

/**
 * Contains the Adaptive Card action data in {@link CollabStageAction}.
 */
export class CollabStageData implements ICollabStageData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: ICollabStageValueData;

  constructor(value?: ICollabStageValueData) {
    this.type = 'invoke';
    this.value = value;
  }
}

/**
 * Contains the Adaptive Card action value data in {@link CollabStageActionData}.
 */
export interface ICollabStageValueData {
  type: 'tab/tabInfoAction';

  /**
   * Information about the iFrame content, rendered in the collab stage popout window.
   */
  tabInfo: ITabInfo;
}

/**
 * Contains the Adaptive Card action value data in {@link CollabStageActionData}.
 */
export class CollabStageValueData implements ICollabStageValueData {
  type: 'tab/tabInfoAction';

  /**
   * Information about the iFrame content, rendered in the collab stage popout window.
   */
  tabInfo: ITabInfo;

  constructor(tab: ITabInfo) {
    this.type = 'tab/tabInfoAction';
    this.tabInfo = tab;
  }
}
