import {
  CollabStageInvokeDataValue,
  ICollabStageInvokeDataValue,
  IInvokeSubmitActionData,
  InvokeSubmitActionData,
  ISubmitAction,
  ISubmitActionData,
  ITabInfo,
  SubmitAction,
  SubmitActionData,
  SubmitActionOptions,
} from '../../core';

export type CollabStageActionOptions = SubmitActionOptions & {
  data: ISubmitActionData;
};

/**
 * Adaptive Card action response type for the {@link CollabStageAction} function.
 */
export interface ICollabStageAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially 'hidden' properties.
   */
  data: ISubmitActionData;
}

/**
 * Adaptive Card action that opens a collab stage popout window.
 */
export class CollabStageAction extends SubmitAction implements ICollabStageAction {
  /**
   * Initial data that input fields will be combined with. These are essentially 'hidden' properties.
   */
  data: ISubmitActionData;

  constructor(tab?: ITabInfo, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = new SubmitActionData({
      msteams: new InvokeSubmitActionData(
        tab
          ? new CollabStageInvokeDataValue({ tabInfo: tab })
          : undefined,
      ),
    });
  }

  static from(options: CollabStageActionOptions) {
    const msteams = options.data.msteams as IInvokeSubmitActionData | undefined;
    const value = msteams?.value as ICollabStageInvokeDataValue | undefined;
    return new CollabStageAction(value?.tabInfo, options);
  }

  withData(value: IInvokeSubmitActionData) {
    super.withData(new SubmitActionData({ msteams: value }));
    return this;
  }

  withValue(value: ITabInfo) {
    const msteams = this.data.msteams as IInvokeSubmitActionData | undefined;
    if (msteams) {
      msteams.value = new CollabStageInvokeDataValue({ tabInfo: value });
    }
    return this;
  }
}
