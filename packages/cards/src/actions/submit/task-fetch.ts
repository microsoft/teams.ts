import { ISubmitAction, SubmitAction, SubmitActionOptions } from '../../core';

import { MSTeamsData } from './ms-teams-data';

export type TaskFetchActionOptions = SubmitActionOptions & { data: MSTeamsData<ITaskFetchData> };

export type TaskFetchDataValues = {
  [key: string]: any;
} & {
  /** type is special so we shouldn't allow overriding it */
  type?: never;
};

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

  constructor(value?: TaskFetchDataValues, options: SubmitActionOptions = {}) {
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

  withData(value: MSTeamsData<ITaskFetchData>) {
    this.data = value;
    return this;
  }

  withValue(value: TaskFetchDataValues) {
    super.withData({ ...this.data, ...value, msteams: { type: 'task/fetch' } });
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

  constructor(data?: TaskFetchDataValues) {
    // omit the msteams property if it exists
    if (data) {
      const { msteams, ...rest } = data;
      Object.assign(this, rest);
    }
  }
}
