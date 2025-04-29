import { ISubmitAction, MSTeamsData, SubmitAction, SubmitActionOptions } from './submit';

export type InvokeActionOptions = SubmitActionOptions & { data: MSTeamsData<IInvokeData> };

export interface IInvokeAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IInvokeData>;
}

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

export interface IInvokeData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: any;
}

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
