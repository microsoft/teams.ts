import { ISubmitAction, SubmitAction, SubmitActionOptions } from './submit';
import { ITabInfo } from './tab';

/**
 * Adaptive Card action response type for the {@link CollabStageAction} function.
 */
export interface ICollabStageAction extends ISubmitAction {
  data: {
    msteams: ICollabStageActionData;
  };
}

/**
 * Adaptive Card action that opens a collab stage popout window.
 */
export class CollabStageAction extends SubmitAction implements ICollabStageAction {
  declare data: {
    msteams: ICollabStageActionData;
  };

  constructor(tab: ITabInfo, options: SubmitActionOptions = {}) {
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

  withOptions(value: SubmitActionOptions) {
    Object.assign(this, value);
    return this;
  }
}

/**
 * Contains the Adaptive Card action data in {@link CollabStageAction}.
 */
export interface ICollabStageActionData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: ICollabStageActionValueData;
}

/**
 * Contains the Adaptive Card action data in {@link CollabStageAction}.
 */
export class CollabStageActionData implements ICollabStageActionData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: ICollabStageActionValueData;

  constructor(value?: ICollabStageActionValueData) {
    this.type = 'invoke';
    this.value = value;
  }
}

/**
 * Contains the Adaptive Card action value data in {@link CollabStageActionData}.
 */
export interface ICollabStageActionValueData {
  type: 'tab/tabInfoAction';

  /**
   * Information about the iFrame content, rendered in the collab stage popout window.
   */
  tabInfo: ITabInfo;
}

/**
 * Contains the Adaptive Card action value data in {@link CollabStageActionData}.
 */
export class CollabStageActionValueData implements ICollabStageActionValueData {
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
