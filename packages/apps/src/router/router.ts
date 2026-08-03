import { Activity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { AGENT_LIFECYCLE_ALIASES, EVENT_ALIASES, INVOKE_ALIASES, IRoutes } from '../routes';
import { RouteHandler } from '../types';

import { Route, RouteType } from './route';

export class Router<TExtraCtx extends Record<string, any> = Record<string, any>> {
  protected readonly routes: Route<keyof IRoutes, TExtraCtx>[] = [];

  /**
   * select routes that match the inbound activity
   * @param activity the inbound activity
   */
  select(activity: Activity) {
    return this.selectRoutes(activity)
      .map((r) => r.callback as RouteHandler<IActivityContext, any>);
  }

  /**
   * @internal
   * Select route entries that match the inbound activity while preserving route metadata.
   * Runtime instrumentation uses this so public route callbacks keep their existing shape.
   */
  selectRoutes(activity: Activity) {
    return this.routes.filter((r) => r.select(activity));
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
          if (
            activity.name === 'agentLifecycle' &&
            event === AGENT_LIFECYCLE_ALIASES[
              activity.valueType as keyof typeof AGENT_LIFECYCLE_ALIASES
            ]
          ) {
            return true;
          }

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

          if (activity.name === 'task/fetch' && activity.value?.data?.dialog_id) {
            return event === `dialog.open.${activity.value.data.dialog_id}`;
          }

          if (activity.name === 'task/submit' && activity.value?.data?.action) {
            return event === `dialog.submit.${activity.value.data.action}`;
          }

          if (activity.name === 'adaptiveCard/action' && activity.value?.action?.data?.action) {
            return event === `card.action.${activity.value.action.data.action}`;
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
