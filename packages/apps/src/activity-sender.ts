import {
  ActivityParams,
  AgentUser,
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
 * Creates an API client for a sender operation, optionally scoped to an Agent
 * User identity.
 */
export type ActivitySenderClientFactory = (serviceUrl: string, agentUser?: AgentUser) => Client;

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
    const params = toActivityParams(activity);

    // Merge activity with conversation reference for the wire payload.
    const payload = {
      ...params,
      from: ref.bot,
      conversation: ref.conversation,
    };

    // Check if this is a targeted message
    const isTargeted = payload.recipient?.isTargeted === true;

    if (isTargeted && ref.conversation.conversationType === 'personal') {
      throw new Error('Targeted messages are not supported in 1:1 (personal) chats.');
    }

    const api = this.createClient(ref.serviceUrl, options?.agentUser);

    // Decide create vs update, with targeted variants
    if (payload.id) {
      const res = isTargeted
        ? await api.conversations.updateTargetedActivity(ref.conversation.id, payload.id, payload)
        : await api.conversations.updateActivity(ref.conversation.id, payload.id, payload);
      return { ...payload, ...res };
    }

    const res = isTargeted
      ? await api.conversations.createTargetedActivity(ref.conversation.id, payload)
      : await api.conversations.createActivity(ref.conversation.id, payload);
    return { ...payload, ...res };
  }

  createStream(ref: ConversationReference): IStreamer {
    return new HttpStream(this.createClient(ref.serviceUrl), ref, this.logger);
  }
}
