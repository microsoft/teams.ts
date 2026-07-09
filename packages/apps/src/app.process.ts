import {
  Activity,
  ActivityLike,
  ApiClientSettings,
  ChannelID,
  ConversationReference,
  InvokeResponse,
  isInvokeResponse,
} from '@microsoft/teams.api';
import { Client as HttpClient, ILogger, IStorage } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from './api';
import { EventManager } from './app.events';
import { ActivityContext, IActivityContext } from './contexts';
import { IActivityEvent } from './events';
import { Router } from './router';
import { TokenManager } from './token-manager';
import { IActivitySender, IPlugin, StreamCancelledError } from './types';
import { PluginAdditionalContext } from './types/app-routing';

/**
 * Dependencies the {@link ActivityProcessor} needs to turn an inbound activity
 * into a response. The owning {@link App} constructs the processor and passes
 * these in, which is what lets `App` keep these primitives private instead of
 * exposing them just so a free `this: App`-bound `$process` function could reach
 * them.
 */
export interface IActivityProcessorOptions<TPlugin extends IPlugin = IPlugin> {
  readonly router: Router<PluginAdditionalContext<TPlugin>>;
  readonly plugins: ReadonlyArray<TPlugin>;
  readonly eventManager: EventManager<TPlugin>;
  readonly tokenManager: TokenManager;
  readonly activitySender: IActivitySender;
  readonly api: ApiClient;
  readonly client: HttpClient;
  readonly storage: IStorage;
  readonly log: ILogger;
  readonly getId: () => string | undefined;
  readonly getConnectionName: () => string;
  readonly apiClientSettings?: ApiClientSettings;
  readonly graphBaseUrl?: string;
}

/**
 * Encapsulates inbound activity processing: building the activity context,
 * running the middleware/route chain, wiring streaming + send events, and
 * producing the {@link InvokeResponse}.
 *
 * This replaces the `this: App`-bound `$process` free function. All of its
 * collaborators are supplied via the constructor so the processor can be
 * reasoned about (and tested) without reaching into `App` internals.
 */
export class ActivityProcessor<TPlugin extends IPlugin = IPlugin> {
  constructor(private readonly options: IActivityProcessorOptions<TPlugin>) { }

  /**
   * activity handler called when an inbound activity is received
   * @param event the received activity event
   */
  async process(event: IActivityEvent): Promise<InvokeResponse> {
    const { token, body } = event;

    if (!body) {
      throw new Error('Activity body is required');
    }

    // TODO: We currently simply cast the models to Activity,
    // but we should probably be validating this conversion
    const activity = body as Activity;

    this.options.log.debug(
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

    const client = this.options.client.clone();
    const apiClient = new ApiClient(
      serviceUrl,
      this.options.client.clone({ token: () => this.options.tokenManager.getBotToken() }),
      this.options.apiClientSettings
    );
    const userGraph = new GraphClient(
      client.clone({ token: () => userToken }),
      { baseUrlRoot: this.options.graphBaseUrl }
    );
    const appGraph = new GraphClient(
      client.clone({ token: () => this.options.tokenManager.getGraphToken(activity.conversation.tenantId ?? 'common') }),
      { baseUrlRoot: this.options.graphBaseUrl }
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

    const routes = this.options.router.select(activity);

    // Collect plugin contexts BEFORE creating the activity context
    let pluginContexts: {} = {};
    for (let i = this.options.plugins.length - 1; i > -1; i--) {
      const plugin = this.options.plugins[i];

      if (plugin.onActivity) {
        const additionalPluginContext = await plugin.onActivity({
          ...ref,
          activity,
          token,
        });

        if (additionalPluginContext) {
          for (const key in additionalPluginContext) {
            if (key in pluginContexts) {
              this.options.log.warn(`Plugin context key "${key}" already exists. Overriding.`);
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

    const context = new ActivityContext({
      activity,
      next,
      api: apiClient,
      userGraph,
      appGraph,
      appId: this.options.getId() || '',
      log: this.options.log,
      userToken: userToken,
      ref,
      storage: this.options.storage,
      isSignedIn: !!userToken,
      connectionName: this.options.getConnectionName(),
      activitySender: this.options.activitySender,
      ...pluginContexts
    });

    const send = context.send.bind(context);
    context.send = async (activity: ActivityLike, conversationRef?: ConversationReference) => {
      const res = await send(activity, conversationRef ?? ref);

      this.options.eventManager.onActivitySent({
        ...(conversationRef ?? ref),
        activity: res,
      });

      return res;
    };

    context.stream.events.on('chunk', (activity) => {
      this.options.eventManager.onActivitySent({
        ...ref,
        activity,
      });
    });

    context.stream.events.on('close', (activity) => {
      this.options.eventManager.onActivitySent({
        ...ref,
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

      this.options.eventManager.onActivityResponse({
        ...ref,
        activity,
        response: res,
      });
    } catch (error: any) {
      if (error instanceof StreamCancelledError || error?.name === 'StreamCancelledError') {
        this.options.log.debug('stream canceled, returning 200');
        await context.stream.close();
        response = { status: 200 };
      } else {
        response = { status: 500 };
        this.options.eventManager.onError({ error, activity });
      }

      this.options.eventManager.onActivityResponse({
        ...ref,
        activity,
        response: response,
      });
    }

    return response;
  }

  /**
   * fetch the user's token for the given channel/user, if signed in
   */
  private async getUserToken(channelId: ChannelID, userId: string) {
    const res = await this.options.api.users.getToken({
      channelId,
      userId,
      connectionName: this.options.getConnectionName(),
    });

    return res.token;
  }
}
