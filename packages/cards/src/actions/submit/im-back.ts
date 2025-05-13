import { ISubmitAction, SubmitAction, SubmitActionOptions } from '../../core';

import { MSTeamsData } from './ms-teams-data';

export type IMBackActionOptions = SubmitActionOptions & { data: MSTeamsData<IIMBackData> };

export interface IIMBackAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IIMBackData>;
}

export class IMBackAction extends SubmitAction implements IIMBackAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<IIMBackData>;

  constructor(value: string, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = { msteams: new IMBackData(value) };
  }

  static from(options: IMBackActionOptions) {
    return new IMBackAction(options.data.msteams.value, options);
  }

  withData(value: IIMBackData) {
    super.withData({ msteams: value });
    return this;
  }

  withValue(value: string) {
    this.data.msteams.value = value;
    return this;
  }
}

export interface IIMBackData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;
}

export class IMBackData implements IIMBackData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;

  constructor(value: string) {
    this.type = 'imBack';
    this.value = value;
  }
}
