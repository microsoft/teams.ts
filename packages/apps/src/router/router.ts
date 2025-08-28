import { Activity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { EVENT_ALIASES, INVOKE_ALIASES, IRoutes } from '../routes';
import { RouteHandler } from '../types';

import { Route, RouteType } from './route';

export class Router<TExtraCtx extends Record<string, any> = Record<string, any>> {
  protected readonly routes: Route<keyof IRoutes, TExtraCtx>[] = [];

  /**
   * select routes that match the inbound activity
   * @param activity the inbound activity
   */
  select(activity: Activity) {
    return this.routes
      .filter((r) => r.select(activity))
      .map((r) => r.callback as RouteHandler<IActivityContext, any>);
  }

  /**
   * register a new route
   * @param route the route to register
   */
  register<Name extends keyof IRoutes>(route: Route<Name, TExtraCtx>) {
    // replace system registered (default) route implementation
    // if developer registers replacement
    if (route.type === 'user') {
      const i = this.routes.findIndex(r => r.name === route.name && r.type === 'system');

      if (i > -1) {
        this.routes.splice(i, 1);
      }
    }

    this.routes.push(route);
    return this;
  }

  /**
   * register a middleware
   * @param callback the callback to invoke
   */
  use(callback: RouteHandler<IActivityContext<Activity, TExtraCtx>, void | InvokeResponse>, type?: RouteType) {
    this.register({
      type: type || 'user',
      select: () => true,
      callback,
    });

    return this;
  }

  /**
   * register an activity route
   * @param event event to subscribe to
   * @param callback the callback to invoke
   */
  on<Name extends keyof IRoutes>(event: Name, callback: Exclude<IRoutes<TExtraCtx>[Name], undefined>, type?: RouteType) {
    this.register({
      name: event,
      type: type || 'user',
      select: (activity) => {
        if (event === 'activity') {
          return true;
        }

        if (event === activity.type) {
          return true;
        }

        if (activity.type === 'conversationUpdate') {
          return event === activity.channelData?.eventType;
        }

        if (activity.type === 'installationUpdate') {
          return event === `install.${activity.action}`;
        }

        if (activity.type === 'messageDelete') {
          return event === activity.channelData?.eventType;
        }

        if (activity.type === 'messageUpdate') {
          return event === activity.channelData?.eventType;
        }

        if (activity.type === 'event') {
          return event === EVENT_ALIASES[activity.name];
        }

        if (activity.type === 'invoke') {
          if (event === INVOKE_ALIASES[activity.name]) {
            return true;
          }

          if (activity.name === 'fileConsent/invoke') {
            return event === `file.consent.${activity.value.action}`;
          }

          if (activity.name === 'composeExtension/submitAction') {
            return event === `message.ext.${activity.value.botMessagePreviewAction}`;
          }

          if (activity.name === 'message/submitAction') {
            return event === `message.submit.${activity.value.actionName}`;
          }
        }

        // custom routes
        if (event === 'mention' && activity.entities?.some((e) => e.type === 'mention')) {
          return (
            activity.entities?.find(
              (e) => e.type === 'mention' && e.mentioned.id === activity.recipient.id
            ) !== undefined
          );
        }

        return false;
      },
      callback,
    });

    return this;
  }
}
