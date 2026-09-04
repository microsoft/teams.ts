import {
  ActivityParams,
  AgenticIdentity,
  Client,
  ConversationReference,
  DeprecatedInputActivity,
  SentActivity,
  toActivityParams
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { HttpStream } from './http/http-stream';
import { ActivitySenderOptions, IStreamer, IActivitySender } from './types';

/**
 * Creates an API client for a sender operation, optionally scoped to an agentic
 * identity.
 */
export type ActivitySenderClientFactory = (serviceUrl: string, agenticIdentity?: AgenticIdentity) => Client;

/**
 * Handles sending activities to the Bot Framework
 * Separate from transport concerns (HTTP, WebSocket, etc.)
 */
export class ActivitySender implements IActivitySender {
  constructor(
    private logger: ILogger,
    private createClient: ActivitySenderClientFactory,
  ) { }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async send(activity: DeprecatedInputActivity, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;
  async send(activity: ActivityParams, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;
  async send(
    activity: ActivityParams | DeprecatedInputActivity,
    ref: ConversationReference,
    options?: ActivitySenderOptions
  ): Promise<SentActivity>;
  async send(
    activity: ActivityParams | DeprecatedInputActivity,
    ref: ConversationReference,
    options?: ActivitySenderOptions
  ): Promise<SentActivity> {
    return this.dispatch(activity, ref, options);
  }

  createStream(ref: ConversationReference): IStreamer {
    return new HttpStream(this.createClient(ref.serviceUrl), ref, this.logger);
  }

  private async dispatch(
    activity: ActivityParams | DeprecatedInputActivity,
    ref: ConversationReference,
    options?: ActivitySenderOptions
  ): Promise<SentActivity> {
    const params = toActivityParams(activity);
    const conversationId = ref.conversation.id;

    // Merge activity with conversation reference for the wire payload.
    const payload = {
      ...params,
      from: ref.bot,
      conversation: ref.conversation,
    };

    // Check if this is a targeted message
    const isTargeted = payload.recipient?.isTargeted === true;

    const api = this.createClient(ref.serviceUrl, options?.agenticIdentity);

    // Decide create vs update, with targeted variants
    if (payload.id) {
      if (isTargeted) {
        const { recipient: _recipient, ...targetedUpdate } = payload;
        const res = await api.conversations.updateTargetedActivity(
          conversationId,
          payload.id,
          targetedUpdate
        );
        return { ...payload, ...res };
      }

      const res = await api.conversations.updateActivity(conversationId, payload.id, payload);
      return { ...payload, ...res };
    }

    const res = options?.threadRootId
      ? isTargeted
        ? await api.conversations.replyToTargetedActivity(
          conversationId,
          options.threadRootId,
          payload
        )
        : await api.conversations.replyToActivity(conversationId, options.threadRootId, payload)
      : isTargeted
        ? await api.conversations.createTargetedActivity(conversationId, payload)
        : await api.conversations.createActivity(conversationId, payload);
    return { ...payload, ...res };
  }

}
