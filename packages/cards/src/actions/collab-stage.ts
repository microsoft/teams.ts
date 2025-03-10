import { ITabInfo } from '../common';

import { ISubmitAction, SubmitAction, SubmitOptions } from './submit';

/**
 * Adaptive Card action response type for the {@link CollabStageAction} function.
 */
export interface ICollabStageAction extends ISubmitAction {
  data: {
    msteams: ICollabStageData;
  };
}

/**
 * Adaptive Card action that opens a collab stage popout window.
 */
export class CollabStageAction extends SubmitAction implements ICollabStageAction {
  declare data: {
    msteams: ICollabStageData;
  };

  constructor(tab: ITabInfo, options: SubmitOptions = {}) {
    super(options);
    this.data = {
      msteams: {
        type: 'invoke',
        value: {
          type: 'tab/tabInfoAction',
          tabInfo: tab,
        },
      },
    };

    this.withOptions(options);
  }

  withOptions(value: SubmitOptions) {
    Object.assign(this, value);
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
export class CollabStageActionData implements ICollabStageData {
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
