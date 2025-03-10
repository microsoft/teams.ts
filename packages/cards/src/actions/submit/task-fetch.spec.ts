import { TaskFetchAction, TaskFetchData } from './task-fetch';

describe('Actions.TaskFetch', () => {
  it('should build', () => {
    const action = new TaskFetchAction('test')
      .withData(new TaskFetchData(1))
      .withValue({ hello: 'world' });

    expect(action.data.msteams).toEqual({
      type: 'task/fetch',
      data: { hello: 'world' },
    });
  });

  it('should build from interface', () => {
    const action = TaskFetchAction.from({
      data: {
        msteams: new TaskFetchData({ hello: 'world' }),
      },
    });

    expect(action.data.msteams).toEqual({
      type: 'task/fetch',
      data: { hello: 'world' },
    });
  });
});
