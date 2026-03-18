import { ISubmitAction, SubmitAction, SubmitActionOptions } from '../../core';

import { MSTeamsData } from './ms-teams-data';

export type InvokeActionOptions = SubmitActionOptions & { data: MSTeamsData<IInvokeData> };

/**
 * @deprecated This type is deprecated. Please use {@link IInvokeSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export interface IInvokeAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IInvokeData>;
}

/**
 * @deprecated This class is deprecated. Please use {@link InvokeSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export class InvokeAction extends SubmitAction implements IInvokeAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IInvokeData>;

  constructor(value?: any, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = { msteams: new InvokeData(value) };
  }

  static from(options: InvokeActionOptions) {
    return new InvokeAction(options.data.msteams.value, options);
  }

  withData(value: IInvokeData) {
    super.withData({ msteams: value });
    return this;
  }

  withValue(value: any) {
    this.data.msteams.value = value;
    return this;
  }
}

/**
 * @deprecated This type is deprecated. Please use {@link IInvokeSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export interface IInvokeData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: any;
}

/**
 * @deprecated This class is deprecated. Please use {@link InvokeSubmitActionData} instead. This will be removed in a future version of the SDK.
 */
export class InvokeData implements IInvokeData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: any;

  constructor(value?: any) {
    this.type = 'invoke';
    this.value = value;
  }
}
