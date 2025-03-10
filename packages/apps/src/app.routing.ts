import { InvokeResponse } from '@microsoft/spark.api';

import { App } from './app';
import { IActivityContext } from './contexts';
import { IRoutes } from './routes';
import { RouteHandler } from './types';

/**
 * subscribe to an event
 * @param name event to subscribe to
 * @param cb callback to invoke
 */
export function on<Name extends keyof IRoutes>(
  this: App,
  name: Name,
  cb: Exclude<IRoutes[Name], undefined>
) {
  this.router.on(name, cb);
  return this;
}

/**
 * subscribe to a message event for a specific pattern
 * @param pattern pattern to match against message text
 * @param cb callback to invoke
 */
export function message(
  this: App,
  pattern: string | RegExp,
  cb: Exclude<IRoutes['message'], undefined>
) {
  this.router.register<'message'>({
    select: (activity) => {
      if (activity.type !== 'message') {
        return false;
      }

      return new RegExp(pattern).test(activity.text);
    },
    callback: cb,
  });

  return this;
}

/**
 * register a middleware
 * @param cb callback to invoke
 */
export function use(this: App, cb: RouteHandler<IActivityContext, void | InvokeResponse>) {
  this.router.use(cb);
  return this;
}
