import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';
import type { Span } from '@opentelemetry/api';
import type { AxiosResponse } from 'axios';

import {
  toActivityParams,
  type IMessageActivityInput,
  type ITypingActivityInput
} from '../../activities';
import {
  API_ATTRIBUTE_NAMES,
  OUTBOUND_OPERATIONS,
  type ConversationActivityOperation
} from '../../diagnostics/constants';
import { resolveAadObjectId, type DeprecatedInputActivity, type Resource, type TeamsChannelAccount } from '../../models';
import {
  ensureApiOutboundTelemetryMiddleware,
  withApiOutboundTelemetry
} from '../api-outbound-middleware';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from '../request-options';

function requestConfig(options?: RequestOptions): Record<string, unknown> | undefined {
  const config = agenticIdentityExtension(options);
  return Object.keys(config).length > 0 ? config : undefined;
}

/**
 * Payload accepted by the low-level conversation activity client.
 *
 * The OUTBOUND activity union: an app only sends message or typing activity inputs.
 * Kept as a named export for backwards compatibility.
 */
export type ActivityParams = IMessageActivityInput | ITypingActivityInput;
type ActivityParamsLike = ActivityParams | DeprecatedInputActivity;

function apiOutboundTelemetryConfig(
  operation: ConversationActivityOperation,
  serviceUrl: string,
  conversationId: string,
  activity: ActivityParams | undefined,
  requestOptions?: RequestOptions,
  options?: {
    readonly activityId?: string;
    readonly captureResponseActivityId?: boolean;
  }
) {
  const requestConfig = agenticIdentityExtension(requestOptions) as { extensions?: Record<string, unknown> };

  return {
    extensions: withApiOutboundTelemetry({
      operation,
      attributes: {
        [API_ATTRIBUTE_NAMES.operation]: operation,
        [API_ATTRIBUTE_NAMES.serviceUrl]: serviceUrl,
        [API_ATTRIBUTE_NAMES.conversationId]: conversationId,
        ...(activity?.type !== undefined ? { [API_ATTRIBUTE_NAMES.activityType]: activity.type } : {}),
        ...(options?.activityId !== undefined ? { [API_ATTRIBUTE_NAMES.activityId]: options.activityId } : {}),
      },
      ...(options?.captureResponseActivityId ? { onResponse: setResponseActivityId } : {}),
    }, requestConfig.extensions),
  };
}

function setResponseActivityId(span: Span, res: AxiosResponse): void {
  const id = getResponseActivityId(res.data);
  if (id) {
    span.setAttribute(API_ATTRIBUTE_NAMES.activityId, id);
  }
}

function getResponseActivityId(data: unknown): string | undefined {
  if (!data || typeof data !== 'object') {
    return undefined;
  }

  const id = (data as { id?: unknown }).id;
  return typeof id === 'string' && id ? id : undefined;
}

export class ConversationActivityClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    ensureApiOutboundTelemetryMiddleware(v);
    this._http = v;
  }
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: HttpClient | HttpClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = resolveServiceUrl(serviceUrl);

    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }
    ensureApiOutboundTelemetryMiddleware(this._http);

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async create(conversationId: string, params: DeprecatedInputActivity, options?: RequestOptions): Promise<Resource>;
  async create(conversationId: string, params: ActivityParams, options?: RequestOptions): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike, options?: RequestOptions): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike, options?: RequestOptions) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const res = await this.http.post<Resource>(
      `${serviceUrl}/v3/conversations/${conversationId}/activities`,
      activity,
      apiOutboundTelemetryConfig(OUTBOUND_OPERATIONS.create, serviceUrl, conversationId, activity, options, {
        captureResponseActivityId: true,
      })
    );
    return res.data;
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async update(conversationId: string, id: string, params: DeprecatedInputActivity, options?: RequestOptions): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const res = await this.http.put<Resource>(
      `${serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      activity,
      apiOutboundTelemetryConfig(OUTBOUND_OPERATIONS.update, serviceUrl, conversationId, activity, options, {
        activityId: id,
        captureResponseActivityId: true,
      })
    );
    return res.data;
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(conversationId: string, id: string, params: DeprecatedInputActivity, options?: RequestOptions): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    activity.replyToId = id;
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const res = await this.http.post<Resource>(
      `${serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      activity,
      apiOutboundTelemetryConfig(OUTBOUND_OPERATIONS.reply, serviceUrl, conversationId, activity, options, {
        captureResponseActivityId: true,
      })
    );
    return res.data;
  }

  async delete(conversationId: string, id: string, options?: RequestOptions) {
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const url = `${serviceUrl}/v3/conversations/${conversationId}/activities/${id}`;
    const res = await this.http.delete<void>(
      url,
      apiOutboundTelemetryConfig(
        OUTBOUND_OPERATIONS.delete,
        serviceUrl,
        conversationId,
        undefined,
        options,
        { activityId: id }
      )
    );
    return res.data;
  }

  async getMembers(conversationId: string, id: string, options?: RequestOptions): Promise<TeamsChannelAccount[]> {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}/members`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<TeamsChannelAccount[]>(url, config)
      : await this.http.get<TeamsChannelAccount[]>(url);
    return (res.data ?? []).map(resolveAadObjectId);
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async createTargeted(conversationId: string, params: DeprecatedInputActivity, options?: RequestOptions): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParams, options?: RequestOptions): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike, options?: RequestOptions): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike, options?: RequestOptions) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const res = await this.http.post<Resource>(
      `${serviceUrl}/v3/conversations/${conversationId}/activities?isTargetedActivity=true`,
      activity,
      apiOutboundTelemetryConfig(OUTBOUND_OPERATIONS.createTargeted, serviceUrl, conversationId, activity, options, {
        captureResponseActivityId: true,
      })
    );
    return res.data;
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async updateTargeted(conversationId: string, id: string, params: DeprecatedInputActivity, options?: RequestOptions): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const res = await this.http.put<Resource>(
      `${serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`,
      activity,
      apiOutboundTelemetryConfig(OUTBOUND_OPERATIONS.updateTargeted, serviceUrl, conversationId, activity, options, {
        activityId: id,
        captureResponseActivityId: true,
      })
    );
    return res.data;
  }

  async deleteTargeted(conversationId: string, id: string, options?: RequestOptions) {
    const serviceUrl = resolveServiceUrl(this.serviceUrl, options);
    const url = `${serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`;
    const res = await this.http.delete<void>(
      url,
      apiOutboundTelemetryConfig(
        OUTBOUND_OPERATIONS.deleteTargeted,
        serviceUrl,
        conversationId,
        undefined,
        options,
        { activityId: id }
      )
    );
    return res.data;
  }
}
