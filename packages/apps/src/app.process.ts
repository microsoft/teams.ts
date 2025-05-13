import { ActivityLike, ConversationReference, isInvokeResponse } from '@microsoft/teams.api';




import { ApiClient, GraphClient } from './api';
import { App } from './app';
import { ActivityContext, IActivityContext } from './contexts';
import { IActivityEvent } from './events';
import { IPlugin, ISender } from './types';

/**
 * activity handler called when an inbound activity is received
 * @param sender the plugin to use for sending activities
 * @param event the received activity event
 */
export async function $process<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  sender: ISender,
  event: IActivityEvent
) {
  const { token, activity } = event;

  this.log.debug(
    `activity/${activity.type}${activity.type === 'invoke' ? `/${activity.name}` : ''}`
  );

  let serviceUrl = activity.serviceUrl || token.serviceUrl;

  if (serviceUrl.endsWith('/')) {
    serviceUrl = serviceUrl.slice(0, serviceUrl.length - 1);
  }

  await this.refreshTokens();

  let userToken: string | undefined;
  let appToken =
    this.tenantTokens.get(token.tenantId || 'common') || this._tokens.graph?.toString();

  try {
    const res = await this.api.users.token.get({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName: this.oauth.defaultConnectionName,
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
  const apiClient = new ApiClient(serviceUrl, this.client.clone({ token: () => this.tokens.bot }));
  const userGraph = new GraphClient(
    client.clone({ token: () => userToken })
  );
  const appGraph = new GraphClient(
    client.clone({ token: () => appToken })
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
      routes.unshift(({ next }) => {
        plugin.onActivity!({
          ...ref,
          sender: sender,
          activity,
          token,
        });

        return next();
      });
    }
  }

  let i = -1;
  let data: any = undefined;

  const next = async (ctx?: IActivityContext) => {
    if (i === routes.length - 1) return data;
    i++;

    const res = await routes[i](ctx || context.toInterface());

    if (res) {
      data = res;
    }

    return data;
  };

  const context = new ActivityContext(sender, {
    ...event,
    next,
    api: apiClient,
    userGraph,
    appGraph,
    appId: this.id || '',
    log: this.log,
    tokens: this.tokens,
    ref,
    storage: this.storage,
    isSignedIn: !!userToken,
    connectionName: this.oauth.defaultConnectionName,
  });

  if (routes.length === 0) {
    return { status: 200 };
  }

  const send = context.send.bind(context);
  context.send = async (activity: ActivityLike) => {
    const res = await send(activity);

    this.onActivitySent(sender, {
      ...ref,
      sender,
      activity: res,
    });

    return res;
  };

  context.stream.events.on('chunk', (activity) => {
    this.onActivitySent(sender, {
      ...ref,
      sender,
      activity,
    });
  });

  context.stream.events.once('close', (activity) => {
    this.onActivitySent(sender, {
      ...ref,
      sender,
      activity,
    });
  });

  try {
    let res = await next();

    await context.stream.close();

    if (!res || !isInvokeResponse(res)) {
      res = { status: 200, body: res };
    }

    this.onActivityResponse(sender, {
      ...ref,
      sender,
      activity,
      response: res,
    });
  } catch (error: any) {
    this.onError({ error, activity, sender });
    this.onActivityResponse(sender, {
      ...ref,
      sender,
      activity,
      response: { status: 500 },
    });
  }
}
