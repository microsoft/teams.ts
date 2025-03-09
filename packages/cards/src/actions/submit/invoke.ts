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
