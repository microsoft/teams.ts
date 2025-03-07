import { Activity, ConversationReference, toActivityParams } from '@microsoft/spark.api';

import { App } from './app';
import { ApiClient } from './api';
import { IActivityReceivedEvent, ISenderPlugin } from './types';
import { IActivityContext, IMiddlewareContext } from './contexts';

/**
 * activity handler called when an inbound activity is received
 * @param sender the plugin to use for sending activities
 * @param event the received activity event
 */
export async function $process(this: App, sender: ISenderPlugin, event: IActivityReceivedEvent) {
  const { token, activity } = event;

  this.log.debug(
    `activity/${activity.type}${activity.type === 'invoke' ? `/${activity.name}` : ''}`
  );

  let serviceUrl = activity.serviceUrl || token.serviceUrl;

  if (serviceUrl.endsWith('/')) {
    serviceUrl = serviceUrl.slice(0, serviceUrl.length - 1);
  }

  let userToken: string | undefined;
  let appToken =
    this.tenantTokens.get(token.tenantId || 'common') || this._tokens.graph?.toString();

  try {
    const res = await this.api.users.token.get({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName: this.options.oauth?.graph || 'graph',
    });

    userToken = res.token;

    if (this.credentials && !appToken) {
      const { access_token } = await this.api.bots.token.getGraph({
        ...this.credentials,
        tenantId: event.token.tenantId,
      });

      appToken = access_token;
      this.tenantTokens.set(token.tenantId || 'common', access_token);
    }
  } catch (err) {
    // noop
  }

  const client = this.client.clone();
  const api = new ApiClient(
    serviceUrl,
    client.clone({ token: () => this.tokens.bot }),
    client.clone({ token: () => appToken }),
    client.clone({ token: () => userToken })
  );

  const ref: ConversationReference = {
    serviceUrl,
    activityId: activity.id,
    bot: activity.recipient,
    channelId: activity.channelId,
    conversation: activity.conversation,
    locale: activity.locale,
    user: activity.from,
  };

  const routes = this.router.select(activity);

  for (let i = this.plugins.length - 1; i > -1; i--) {
    const plugin = this.plugins[i];

    if (plugin.onActivity) {
      routes.unshift(plugin.onActivity.bind(plugin));
    }
  }

  const ctx: IActivityContext<Activity> = {
    ...event,
    plugin: sender.name,
    sender: undefined,
    api,
    appId: this.id || '',
    log: this.log,
    tokens: this.tokens,
    ref,
    storage: this.storage,
    isSignedIn: !!userToken,
  };

  let i = 0;
  const stream = sender.onStreamOpen ? await sender.onStreamOpen(ref) : undefined;
  const routeCtx: IMiddlewareContext<Activity> = {
    ...ctx,
    stream: {
      emit(activity) {
        stream?.emit(activity);
      },
      close() {
        stream?.close();
      },
    },
    next: (context) => {
      if (i === routes.length - 1) return;
      i++;
      return routes[i](context || routeCtx);
    },
    send: async (activity) => {
      const res = await sender.onSend(toActivityParams(activity), ref);
      return res;
    },
    reply: async (activity) => {
      activity = toActivityParams(activity);
      activity.replyToId = ctx.activity.id;
      const res = await sender.onSend(activity, ref);
      return res;
    },
    signin: this.onSignIn(ctx, sender),
    signout: this.onSignOut(ctx),
  };

  if (routes.length === 0) {
    return { status: 200 };
  }

  try {
    const res = (await routes[0](routeCtx)) || { status: 200 };
    await stream?.close();
    this.events.emit('activity.response', {
      plugin: sender.name,
      activity,
      ref,
      response: res,
    });
  } catch (err: any) {
    this.onActivityError({ ...routeCtx, err });
    this.events.emit('activity.response', {
      plugin: sender.name,
      activity,
      ref,
      response: { status: 500 },
    });
  }
}
