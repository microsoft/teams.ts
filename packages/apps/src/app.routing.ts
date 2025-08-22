import { Activity, InvokeResponse } from '@microsoft/teams.api';

import { App } from './app';
import { IActivityContext } from './contexts';
import { Routes } from './routes';
import { IPlugin, RouteHandler } from './types';
import { PluginAdditionalContext } from './types/app-routing';

/**
 * subscribe to an event
 * @param name event to subscribe to
 * @param cb callback to invoke
 */
export function on<TPlugin extends IPlugin, Name extends keyof Routes>(
  this: App<TPlugin>,
  name: Name,
  cb: Exclude<Routes<PluginAdditionalContext<TPlugin>>[Name], undefined>
) {
  this.router.on(name, cb);
  return this;
}

/**
 * subscribe to a message event for a specific pattern
 * @param pattern pattern to match against message text
 * @param cb callback to invoke
 */
export function message<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  pattern: string | RegExp,
  cb: Exclude<Routes<PluginAdditionalContext<TPlugin>>['message'], undefined>
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
export function use<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  cb: RouteHandler<IActivityContext<Activity, PluginAdditionalContext<TPlugin>>, void | InvokeResponse>
) {
  this.router.use(cb);
  return this;
}
