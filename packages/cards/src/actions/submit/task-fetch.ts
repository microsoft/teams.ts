import { ISubmitAction, MSTeamsData, SubmitAction, SubmitActionOptions } from './submit';

export type TaskFetchActionOptions = SubmitActionOptions & { data: MSTeamsData<ITaskFetchAction> };

export interface ITaskFetchAction extends ISubmitAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ITaskFetchData>;
}

export class TaskFetchAction extends SubmitAction implements ITaskFetchAction {
  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data: MSTeamsData<ITaskFetchData>;

  constructor(value?: any, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = { msteams: new TaskFetchData(value) };
  }

  static from(options: TaskFetchActionOptions) {
    return new TaskFetchAction(options.data.msteams.data, options);
  }

  withData(value: ITaskFetchData) {
    this.data.msteams = value;
    return this;
  }

  withValue(value: any) {
    this.data.msteams.data = value;
  }
}

export interface ITaskFetchData {
  type: 'task/fetch';

  /**
   * The data value sent with the `task/fetch` invoke.
   */
  data?: any;
}

export class TaskFetchData implements ITaskFetchData {
  type: 'task/fetch';

  /**
   * The data value sent with the `task/fetch` invoke.
   */
  data?: any;

  constructor(data?: any) {
    this.type = 'task/fetch';
    this.data = data;
  }
}
