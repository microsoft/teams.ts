import { ConversationReference, InvokeResponse } from '@microsoft/spark.api';

import { App } from './app';
import { ApiClient } from './api';
import { IActivityReceivedEvent, ISenderPlugin } from './types';
import { ActivityContext, IActivityContext } from './contexts';

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

  let i = -1;
  let invokeResponse: InvokeResponse | undefined;

  const next = async (ctx?: IActivityContext) => {
    if (i === routes.length - 1) return invokeResponse;
    i++;

    const res = await routes[i](ctx || context.toInterface());

    if (res !== undefined) {
      invokeResponse = res;
    }

    return invokeResponse;
  };

  const context = await ActivityContext.new(sender, {
    ...event,
    next,
    plugin: sender.name,
    api,
    appId: this.id || '',
    log: this.log,
    tokens: this.tokens,
    ref,
    storage: this.storage,
    isSignedIn: !!userToken,
  });

  if (routes.length === 0) {
    return { status: 200 };
  }

  try {
    const res: InvokeResponse = (await next()) || { status: 200 };
    await context.stream.close();
    this.events.emit('activity.response', {
      plugin: sender.name,
      activity,
      ref,
      response: res,
    });
  } catch (err: any) {
    this.onActivityError({ ...context.toInterface(), err });
    this.events.emit('activity.response', {
      plugin: sender.name,
      activity,
      ref,
      response: { status: 500 },
    });
  }
}
