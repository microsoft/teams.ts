import {
  ActivityParams,
  AgenticIdentity,
  Client,
  ConversationReference,
  SentActivity,
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { HttpStream } from './http/http-stream';
import { ActivitySenderOptions, IStreamer, IActivitySender } from './types';

export type ActivitySenderClientFactory = (serviceUrl: string, agenticIdentity?: AgenticIdentity) => Client;

/**
 * Handles sending activities to the Bot Framework
 * Separate from transport concerns (HTTP, WebSocket, etc.)
 */
export class ActivitySender implements IActivitySender {
  constructor(
    api: Client,
    private logger: ILogger,
    private createClient: ActivitySenderClientFactory = () => api,
  ) { }

  async send(activity: ActivityParams, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity> {
    // Merge activity with conversation reference
    activity = {
      ...activity,
      from: ref.bot,
      conversation: ref.conversation,
    };

    // Check if this is a targeted message
    const isTargeted = activity.recipient?.isTargeted === true;

    if (isTargeted && ref.conversation.conversationType === 'personal') {
      throw new Error('Targeted messages are not supported in 1:1 (personal) chats.');
    }

    const api = this.createClient(ref.serviceUrl, options?.agenticIdentity);

    // Decide create vs update, with targeted variants
    if (activity.id) {
      const res = isTargeted
        ? await api.conversations.activities(ref.conversation.id).updateTargeted(activity.id, activity)
        : await api.conversations.activities(ref.conversation.id).update(activity.id, activity);
      return { ...activity, ...res };
    }

    const res = isTargeted
      ? await api.conversations.activities(ref.conversation.id).createTargeted(activity)
      : await api.conversations.activities(ref.conversation.id).create(activity);
    return { ...activity, ...res };
  }

  createStream(ref: ConversationReference): IStreamer {
    return new HttpStream(this.createClient(ref.serviceUrl), ref, this.logger);
  }
}
