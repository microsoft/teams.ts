import type { Span, SpanAttributes } from '@opentelemetry/api';

import {
  Activity,
  ActivityLike,
  ApiClientSettings,
  AgenticIdentity,
  AgenticUser,
  Account,
  ChannelID,
  ConversationReference,
  DeprecatedInputActivity,
  InvokeResponse,
  isInvokeResponse,
  IToken,
} from '@microsoft/teams.api';
import { Client as HttpClient, ILogger, IStorage } from '@microsoft/teams.common';

import { ActivitySender } from './activity-sender';
import { type ApiClient, GraphClient } from './api';
import { EventManager } from './app.events';
import { ActivityContext, IActivityContext } from './contexts';
import {
  agent365BaggageFromActivity,
  withAgent365Baggage,
  type IAgent365BaggageOptions
} from './diagnostics/agent365-baggage';
import { APP_ATTRIBUTE_NAMES, APP_HANDLER_DISPATCH, APP_SPAN_NAMES } from './diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotActivityReceived,
  recordTeamsBotApplicationException,
  recordTeamsBotHandlerDispatched,
  recordTeamsBotHandlerDuration,
  recordTeamsBotHandlerFailure,
  recordTeamsBotHandlerUnmatched,
  recordTeamsBotActivityProcessDuration
} from './diagnostics/helpers';
import { IActivityEvent } from './events';
import { Router } from './router';
import type { Route } from './router/route';
import { IRoutes } from './routes';
import { IActivitySender, IPlugin, RouteHandler, StreamCancelledError } from './types';
import { PluginAdditionalContext } from './types/app-routing';

function getAgenticUser(account?: Account): AgenticUser | undefined {
  if (!account?.agenticAppId || !account.agenticUserId) {
    return undefined;
  }
  return {
    agenticAppInstanceId: account.agenticAppId,
    agenticUserId: account.agenticUserId,
    tenantId: account.tenantId,
    agenticBlueprintId: account.agenticAppBlueprintId,
  };
}

/**
 * Dependencies the {@link ActivityProcessor} needs to process an inbound activity
 * into a response. The owning {@link App} constructs the processor and passes
 * these in, which is what lets `App` keep these primitives private instead of
 * exposing them just so a free `this: App`-bound `$process` function could reach
 * them.
 */
export interface IActivityProcessorOptions<TPlugin extends IPlugin = IPlugin> {
  readonly router: Router<PluginAdditionalContext<TPlugin>>;
  readonly plugins: ReadonlyArray<TPlugin>;
  readonly eventManager: EventManager<TPlugin>;
  /**
  /**
   * Acquires an app-only Microsoft Graph token for a tenant, or `null` when the
   * app has no credentials configured.
   */
  readonly getAppGraphToken: (tenantId?: string) => Promise<IToken | null>;
  readonly activitySender: IActivitySender;
  readonly api: ApiClient;
  readonly client: HttpClient;
  readonly storage: IStorage;
  readonly log: ILogger;
  readonly getId: () => string | undefined;
  readonly getConnectionName: () => string;
  /**
   * whether to eagerly look up the user's OAuth token on the inbound activity.
   * the token is used to compute `ctx.isSignedIn` and `ctx.userToken`, and to authenticate
   * `ctx.userGraph` (which is always constructed regardless of this setting).
   */
  readonly shouldFetchUserToken: () => boolean;
  readonly apiClientSettings?: ApiClientSettings;
  readonly graphBaseUrl?: string;
  /**
   * Agent365 baggage settings, or `false` to disable the bridge.
   */
  readonly agent365Baggage?: IAgent365BaggageOptions | false;
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

    // Establish Agent365 baggage before any span starts, so every span in the
    // turn observes the same identity. A route-level middleware runs too late:
    // the root span already exists by then.
    return this.withActivityBaggage(activity, () => traceActivityProcess(activity, serviceUrl, async (activityProcessSpan) => {
      const agenticIdentity = getAgenticUser(activity.recipient);
      const apiClient = this.options.api.clone({
        serviceUrl,
        agenticIdentity,
      });

      let userToken: string | undefined;
      // Skipped unless configured (see OAuthSettings.fetchUserToken / auto-detection) to avoid
      // a wasted user-token request on every activity when the app never reads ctx.userGraph.
      if (this.options.shouldFetchUserToken()) {
        try {
          userToken = await this.getUserToken(apiClient, activity.channelId, activity.from.id);
        } catch (err) {
          // noop
        }
      }

      const client = this.options.client.clone();
      const apiClientFactory = (senderServiceUrl: string, senderAgenticIdentity?: AgenticIdentity) => apiClient.clone({
        serviceUrl: senderServiceUrl,
        agenticIdentity: senderAgenticIdentity ?? agenticIdentity,
      });
      const userGraph = new GraphClient(
        client.clone({ token: () => userToken }),
        { baseUrlRoot: this.options.graphBaseUrl }
      );
      const appGraph = new GraphClient(
        client.clone({
          // The token provider returns null when the app has no credentials, but
          // the HTTP token contract treats only undefined as "no token"; coerce
          // so null is never forwarded as an auth header.
          token: async () =>
            (await this.options.getAppGraphToken(activity.conversation.tenantId ?? 'common')) ??
            undefined,
        }),
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

      const routes = this.options.router.selectRoutes(activity);
      if (routes.length === 0) {
        recordTeamsBotHandlerUnmatched(activity.type, getInvokeName(activity));
      }

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
        const route = routes[i];
        const handler = route.callback as RouteHandler<IActivityContext, any>;
        const res = await traceHandler(activity, route, async () => handler(mergedContext));

        if (res) {
          data = res;
        }

        return data;
      };

      const activitySender = new ActivitySender(this.options.log, apiClientFactory);

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
        activitySender,
        ...pluginContexts
      });

      const send = context.send.bind(context);
      context.send = async (activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference) => {
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
        if (isStreamCancelledError(error)) {
          this.options.log.debug('stream canceled, returning 200');
          await context.stream.close();
          response = { status: 200 };
        } else {
          response = { status: 500 };
          recordTeamsBotApplicationException(activityProcessSpan, error);
          this.options.eventManager.onError({ error, activity });
        }

        this.options.eventManager.onActivityResponse({
          ...ref,
          activity,
          response: response,
        });
      }

      return response;
    }));
  }

  /**
   * Runs the inbound turn inside an Agent365 baggage scope derived from the
   * activity, unless the bridge is disabled.
   */
  private withActivityBaggage<T>(activity: Activity, execute: () => Promise<T>): Promise<T> {
    const options = this.options.agent365Baggage;
    if (options === false) {
      return execute();
    }

    return withAgent365Baggage(agent365BaggageFromActivity(activity, options ?? {}), execute);
  }

  /**
   * fetch the user's token for the given channel/user, if signed in
   */
  private async getUserToken(apiClient: ApiClient, channelId: ChannelID, userId: string) {
    const res = await apiClient.users.getToken({
      channelId,
      userId,
      connectionName: this.options.getConnectionName(),
    });

    return res.token;
  }
}

function getInvokeName(activity: Activity): string | undefined {
  return activity.type === 'invoke' ? activity.name : undefined;
}

function getHandlerType(activity: Activity): string {
  return getInvokeName(activity) ?? activity.type;
}

function getHandlerDispatch<TPlugin extends IPlugin>(
  activity: Activity,
  route: Route<keyof IRoutes, PluginAdditionalContext<TPlugin>>
): string {
  if (!route.name) {
    return APP_HANDLER_DISPATCH.catchall;
  }

  if (route.name === 'activity') {
    return APP_HANDLER_DISPATCH.catchall;
  }

  if (route.name === activity.type) {
    return APP_HANDLER_DISPATCH.type;
  }

  if (activity.type === 'invoke') {
    return APP_HANDLER_DISPATCH.invoke;
  }

  return APP_HANDLER_DISPATCH.catchall;
}

function getActivityProcessAttributes(activity: Activity, serviceUrl: string): SpanAttributes {
  const attributes: SpanAttributes = {
    [APP_ATTRIBUTE_NAMES.activityType]: activity.type,
  };

  if (activity.id) {
    attributes[APP_ATTRIBUTE_NAMES.activityId] = activity.id;
  }

  if (activity.conversation?.id) {
    attributes[APP_ATTRIBUTE_NAMES.conversationId] = activity.conversation.id;
  }

  if (activity.channelId) {
    attributes[APP_ATTRIBUTE_NAMES.channelId] = activity.channelId;
  }

  if (activity.recipient?.id) {
    attributes[APP_ATTRIBUTE_NAMES.botId] = activity.recipient.id;
  }

  if (serviceUrl) {
    attributes[APP_ATTRIBUTE_NAMES.serviceUrl] = serviceUrl;
  }

  return attributes;
}

function isStreamCancelledError(error: any): boolean {
  return error instanceof StreamCancelledError || error?.name === 'StreamCancelledError';
}

async function traceActivityProcess<T>(activity: Activity, serviceUrl: string, execute: (span: Span) => Promise<T>): Promise<T> {
  const activityType = activity.type;
  const startedAt = Date.now();
  recordTeamsBotActivityReceived(activityType);

  return getTeamsBotApplicationTracer().startActiveSpan(
    APP_SPAN_NAMES.activityProcess,
    { attributes: getActivityProcessAttributes(activity, serviceUrl) },
    async (span) => {
      try {
        return await execute(span);
      } catch (error) {
        recordTeamsBotApplicationException(span, error);
        throw error;
      } finally {
        recordTeamsBotActivityProcessDuration(activityType, Date.now() - startedAt);
        span.end();
      }
    }
  );
}

async function traceHandler<TPlugin extends IPlugin, T>(
  activity: Activity,
  route: Route<keyof IRoutes, PluginAdditionalContext<TPlugin>>,
  execute: () => Promise<T>
): Promise<T> {
  if (route.type === 'system') {
    return execute();
  }

  const handlerType = getHandlerType(activity);
  const handlerDispatch = getHandlerDispatch(activity, route);
  const startedAt = Date.now();
  recordTeamsBotHandlerDispatched(handlerType, handlerDispatch);

  return getTeamsBotApplicationTracer().startActiveSpan(
    APP_SPAN_NAMES.handler,
    {
      attributes: {
        [APP_ATTRIBUTE_NAMES.handlerType]: handlerType,
        [APP_ATTRIBUTE_NAMES.handlerDispatch]: handlerDispatch,
      },
    },
    async (span) => {
      try {
        return await execute();
      } catch (error) {
        if (!isStreamCancelledError(error)) {
          recordTeamsBotHandlerFailure(handlerType, handlerDispatch);
          recordTeamsBotApplicationException(span, error);
        }
        throw error;
      } finally {
        recordTeamsBotHandlerDuration(handlerType, handlerDispatch, Date.now() - startedAt);
        span.end();
      }
    }
  );
}
