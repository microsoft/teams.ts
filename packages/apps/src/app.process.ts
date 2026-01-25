import { ActivityLike, ConversationReference, InvokeResponse, isInvokeResponse } from '@microsoft/teams.api';

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
): Promise<InvokeResponse> {
  const { token, activity } = event;

  this.log.debug(
    `activity/${activity.type}${activity.type === 'invoke' ? `/${activity.name}` : ''}`
  );

  let serviceUrl = activity.serviceUrl || token.serviceUrl;

  if (serviceUrl.endsWith('/')) {
    serviceUrl = serviceUrl.slice(0, serviceUrl.length - 1);
  }

  let userToken: string | undefined;

  try {
    userToken = await this.getUserToken(activity.channelId, activity.from.id);
  } catch (err) {
    // noop
  }

  const client = this.client.clone();
  const apiClient = new ApiClient(serviceUrl, this.client.clone({ token: () => this.getBotToken() }), this.options.apiClientSettings);
  const userGraph = new GraphClient(
    client.clone({ token: () => userToken })
  );
  const appGraph = new GraphClient(
    client.clone({ token: () => this.getAppGraphToken(activity.conversation.tenantId ?? 'common') })
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

  // Collect plugin contexts BEFORE creating the activity context
  let pluginContexts: {} = {};
  for (let i = this.plugins.length - 1; i > -1; i--) {
    const plugin = this.plugins[i];

    if (plugin.onActivity) {
      const additionalPluginContext = await plugin.onActivity({
        ...ref,
        sender: sender,
        activity,
        token,
      });

      if (additionalPluginContext) {
        for (const key in additionalPluginContext) {
          if (key in pluginContexts) {
            this.log.warn(`Plugin context key "${key}" already exists. Overriding.`);
          }
        }
        pluginContexts = {
          ...pluginContexts,
          ...additionalPluginContext,
        };
      }
    }
  }

  let i = -1;
  let data: any = undefined;

  const next = async (ctx?: IActivityContext) => {
    if (i === routes.length - 1) return data;
    i++;

    const mergedContext = ctx || {
      ...context.toInterface(),
      ...pluginContexts,
    };
    const res = await routes[i](mergedContext);

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
    userToken: userToken,
    ref,
    storage: this.storage,
    isSignedIn: !!userToken,
    connectionName: this.oauth.defaultConnectionName,
  });

  const send = context.send.bind(context);
  context.send = async (activity: ActivityLike, conversationRef?: ConversationReference) => {
    const res = await send(activity, conversationRef);

    this.onActivitySent(sender, {
      ...(conversationRef ?? ref),
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

  let response: InvokeResponse;
  try {
    const res = await next();

    await context.stream.close();

    if (isInvokeResponse(res)) {
      response = res;
    } else {
      response = { status: 200, body: res };
    }

    this.onActivityResponse(sender, {
      ...ref,
      sender,
      activity,
      response: res,
    });
  } catch (error: any) {
    response = { status: 500 };
    this.onError({ error, activity, sender });
    this.onActivityResponse(sender, {
      ...ref,
      sender,
      activity,
      response: response,
    });
  }

  return response;
}
