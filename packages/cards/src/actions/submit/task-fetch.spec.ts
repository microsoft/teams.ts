import { TaskFetchAction, TaskFetchData } from './task-fetch';

describe('Actions.TaskFetch', () => {
  it('should build', () => {
    const action = new TaskFetchAction({ foo: 'bar' })
      .withData(new TaskFetchData({ val: 1 }))
      .withValue({ hello: 'world' });

    expect(action.data).toEqual({
      msteams: { type: 'task/fetch' },
      hello: 'world',
      val: 1,
    });
  });

  it('should build from interface', () => {
    const action = TaskFetchAction.from({
      data: new TaskFetchData({ hello: 'world' }),
    });

    expect(action.data).toEqual({
      msteams: {
        type: 'task/fetch',
      },
      hello: 'world',
    });
  });
});
