import { Activity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from './contexts';
import { EVENT_ALIASES, INVOKE_ALIASES, Routes } from './routes';
import { RouteHandler } from './types';

type Route<Name extends keyof Routes = keyof Routes, TExtraCtx extends Record<string, any> = Record<string, any>> = {
  readonly name?: Name;
  readonly select: (activity: Activity) => boolean;
  readonly callback: Routes<TExtraCtx>[Name];
};

export class Router<TExtraCtx extends Record<string, any> = Record<string, any>> {
  protected readonly routes: Route<keyof Routes, TExtraCtx>[] = [];

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
  register<Name extends keyof Routes>(route: Route<Name, TExtraCtx>) {
    this.routes.push(route);
    return this;
  }

  /**
   * register a middleware
   * @param callback the callback to invoke
   */
  use(callback: RouteHandler<IActivityContext<Activity, TExtraCtx>, void | InvokeResponse>) {
    this.register({
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
  on<Name extends keyof Routes>(event: Name, callback: Exclude<Routes<TExtraCtx>[Name], undefined>) {
    this.register({
      name: event,
      select: (activity) => {
        let ev = event as string;
        const channelPrefix = `${activity.channelId}.`;

        if (ev.startsWith(channelPrefix)) {
          ev = ev.substring(channelPrefix.length);
        }

        if (ev === 'activity') {
          return true;
        }

        if (ev === activity.type) {
          return true;
        }

        if (activity.type === 'conversationUpdate') {
          return ev === activity.channelData?.eventType;
        }

        if (activity.type === 'installationUpdate') {
          return ev === `install.${activity.action}`;
        }

        if (activity.type === 'messageDelete') {
          return ev === activity.channelData?.eventType;
        }

        if (activity.type === 'messageUpdate') {
          return ev === activity.channelData?.eventType;
        }

        if (activity.type === 'event') {
          return ev === EVENT_ALIASES[activity.name];
        }

        if (activity.type === 'invoke') {
          if (ev === INVOKE_ALIASES[activity.name]) {
            return true;
          }

          if (activity.name === 'fileConsent/invoke') {
            return ev === `file.consent.${activity.value.action}`;
          }

          if (activity.name === 'composeExtension/submitAction') {
            return ev === `message.ext.${activity.value.botMessagePreviewAction}`;
          }

          if (activity.name === 'message/submitAction') {
            return ev === `message.submit.${activity.value.actionName}`;
          }
        }

        // custom routes
        if (ev === 'mention' && activity.entities?.some((e) => e.type === 'mention')) {
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
