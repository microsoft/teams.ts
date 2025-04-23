import { ISubmitAction, MSTeamsData, SubmitAction, SubmitActionOptions } from './submit';

export type TaskFetchActionOptions = SubmitActionOptions & { data: MSTeamsData<ITaskFetchData> };

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

  constructor(value?: Record<string, any>, options: SubmitActionOptions = {}) {
    super(options);
    Object.assign(this, options);
    this.data = {
      ...value,
      msteams: {
        type: 'task/fetch',
      },
    };
  }

  static from(options: TaskFetchActionOptions) {
    return new TaskFetchAction(options.data, options);
  }

  withData(value: ITaskFetchData & { [key: string]: any } = { type: 'task/fetch' }) {
    super.withData(value);

    return this;
  }

  withValue(value: Record<string, any>) {
    const { msteams, ...rest } = value;
    Object.assign(this.data, rest);
    return this;
  }
}

export interface ITaskFetchData {
  type: 'task/fetch';
}

export class TaskFetchData implements MSTeamsData<ITaskFetchData> {
  msteams = {
    type: 'task/fetch' as const,
  };

  constructor(data?: Record<string, any>) {
    // omit the msteams property if it exists
    if (data) {
      const { msteams, ...rest } = data;
      Object.assign(this, rest);
    }
  }
}
