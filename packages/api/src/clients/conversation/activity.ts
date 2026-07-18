import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';
import { SpanKind } from '@opentelemetry/api';
import type { Span, SpanAttributes } from '@opentelemetry/api';

import {
  toActivityParams,
  type IMessageActivityInput,
  type ITypingActivityInput
} from '../../activities';
import {
  getTeamsApiTracer,
  recordTeamsApiException,
  recordTeamsApiOutboundCall,
  recordTeamsApiOutboundError
} from '../../diagnostics/helpers';
import {
  API_ATTRIBUTE_NAMES,
  API_SPAN_NAMES,
  OUTBOUND_OPERATIONS,
  type ConversationActivityOperation
} from '../../diagnostics/constants';
import { resolveAadObjectId, type DeprecatedInputActivity, type Resource, type TeamsChannelAccount } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { normalizeServiceUrl } from '../service-url';

/**
 * Payload accepted by the low-level conversation activity client.
 *
 * The OUTBOUND activity union: an app only sends message or typing activity inputs.
 * Kept as a named export for backwards compatibility.
 */
export type ActivityParams = IMessageActivityInput | ITypingActivityInput;
type ActivityParamsLike = ActivityParams | DeprecatedInputActivity;

async function traceConversationActivity<T>(
  operation: ConversationActivityOperation,
  serviceUrl: string,
  conversationId: string,
  execute: (span: Span) => Promise<T>
): Promise<T> {
  const attributes: SpanAttributes = {
    [API_ATTRIBUTE_NAMES.operation]: operation,
    [API_ATTRIBUTE_NAMES.serviceUrl]: serviceUrl,
    [API_ATTRIBUTE_NAMES.conversationId]: conversationId,
  };

  return getTeamsApiTracer().startActiveSpan(
    API_SPAN_NAMES.conversationClient,
    { kind: SpanKind.CLIENT, attributes },
    async (span) => {
      try {
        return await execute(span);
      } catch (error) {
        recordTeamsApiOutboundError(operation);
        recordTeamsApiException(span, error);
        throw error;
      } finally {
        span.end();
      }
    }
  );
}

function setActivityType(span: Span, activity: ActivityParams): void {
  span.setAttribute(API_ATTRIBUTE_NAMES.activityType, activity.type);
}

function setActivityId(span: Span, id: string | undefined): void {
  if (id) {
    span.setAttribute(API_ATTRIBUTE_NAMES.activityId, id);
  }
}

export class ConversationActivityClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: HttpClient | HttpClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = normalizeServiceUrl(serviceUrl);

    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async create(conversationId: string, params: DeprecatedInputActivity): Promise<Resource>;
  async create(conversationId: string, params: ActivityParams): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.create, this.serviceUrl, conversationId, async (span) => {
      // TODO: Will be deprecated alongside accessor in ConversationClient
      const activity = toActivityParams(params);
      setActivityType(span, activity);
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.create);
      const res = await this.http.post<Resource>(
        `${this.serviceUrl}/v3/conversations/${conversationId}/activities`,
        activity
      );
      setActivityId(span, res.data?.id);
      return res.data;
    });
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async update(conversationId: string, id: string, params: DeprecatedInputActivity): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParams): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.update, this.serviceUrl, conversationId, async (span) => {
      setActivityId(span, id);
      // TODO: Will be deprecated alongside accessor in ConversationClient
      const activity = toActivityParams(params);
      setActivityType(span, activity);
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.update);
      const res = await this.http.put<Resource>(
        `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
        activity
      );
      setActivityId(span, res.data?.id);
      return res.data;
    });
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(conversationId: string, id: string, params: DeprecatedInputActivity): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParams): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.reply, this.serviceUrl, conversationId, async (span) => {
      // TODO: Will be deprecated alongside accessor in ConversationClient
      const activity = toActivityParams(params);
      activity.replyToId = id;
      setActivityType(span, activity);
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.reply);
      const res = await this.http.post<Resource>(
        `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
        activity
      );
      setActivityId(span, res.data?.id);
      return res.data;
    });
  }

  async delete(conversationId: string, id: string) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.delete, this.serviceUrl, conversationId, async (span) => {
      setActivityId(span, id);
      const url = `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`;
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.delete);
      const res = await this.http.delete<void>(url);
      return res.data;
    });
  }

  async getMembers(conversationId: string, id: string): Promise<TeamsChannelAccount[]> {
    const url = `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}/members`;
    const res = await this.http.get<TeamsChannelAccount[]>(url);
    return (res.data ?? []).map(resolveAadObjectId);
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async createTargeted(conversationId: string, params: DeprecatedInputActivity): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParams): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.createTargeted, this.serviceUrl, conversationId, async (span) => {
      // TODO: Will be deprecated alongside accessor in ConversationClient
      const activity = toActivityParams(params);
      setActivityType(span, activity);
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.createTargeted);
      const res = await this.http.post<Resource>(
        `${this.serviceUrl}/v3/conversations/${conversationId}/activities?isTargetedActivity=true`,
        activity
      );
      setActivityId(span, res.data?.id);
      return res.data;
    });
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async updateTargeted(conversationId: string, id: string, params: DeprecatedInputActivity): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParams): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.updateTargeted, this.serviceUrl, conversationId, async (span) => {
      setActivityId(span, id);
      // TODO: Will be deprecated alongside accessor in ConversationClient
      const activity = toActivityParams(params);
      setActivityType(span, activity);
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.updateTargeted);
      const res = await this.http.put<Resource>(
        `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`,
        activity
      );
      setActivityId(span, res.data?.id);
      return res.data;
    });
  }

  async deleteTargeted(conversationId: string, id: string) {
    return traceConversationActivity(OUTBOUND_OPERATIONS.deleteTargeted, this.serviceUrl, conversationId, async (span) => {
      setActivityId(span, id);
      const url = `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`;
      recordTeamsApiOutboundCall(OUTBOUND_OPERATIONS.deleteTargeted);
      const res = await this.http.delete<void>(url);
      return res.data;
    });
  }
}
