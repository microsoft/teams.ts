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
