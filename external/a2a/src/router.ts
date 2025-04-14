import { EventHandler } from '@microsoft/spark.common';

import * as schema from './schema';
import { TaskContext } from './types';

export type TaskEvents = {
  task: TaskContext;
} & {
  [State in schema.Task['status']['state'] as `task.${State}`]: TaskContext;
};

type Route<Name extends keyof TaskEvents = keyof TaskEvents> = {
  readonly name?: Name;
  readonly select: (task: schema.Task) => boolean;
  readonly callback: EventHandler<TaskEvents[Name]>;
};

export class Router {
  protected readonly routes: Route[] = [];

  select(task: schema.Task) {
    return this.routes.filter((r) => r.select(task)).map((r) => r.callback);
  }

  register(route: Route) {
    this.routes.push(route);
    return this;
  }

  use(callback: EventHandler<TaskContext>) {
    this.register({
      select: () => true,
      callback,
    });

    return this;
  }

  on<Name extends keyof TaskEvents>(event: Name, callback: EventHandler<TaskEvents[Name]>) {
    this.register({
      name: event,
      select: (task) => {
        if (event === 'task') {
          return true;
        }

        return event === `task.${task.status.state}`;
      },
      callback,
    });

    return this;
  }
}
