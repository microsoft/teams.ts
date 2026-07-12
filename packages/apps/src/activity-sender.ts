import { ActivityParams, Client, ConversationReference, SentActivity } from '@microsoft/teams.api';
import { Client as HttpClient, ILogger } from '@microsoft/teams.common';

import { HttpStream } from './http/http-stream';
import { IStreamer, IActivitySender } from './types';

/**
 * Handles sending activities to the Bot Framework
 * Separate from transport concerns (HTTP, WebSocket, etc.)
 */
export class ActivitySender implements IActivitySender {
  constructor(
    private client: HttpClient,
    private logger: ILogger
  ) { }

  async send(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity> {
    // Create API client for this conversation's service URL
    const api = new Client(ref.serviceUrl, this.client);

    // Merge activity with conversation reference for the wire payload.
    const payload = {
      ...activity,
      from: ref.bot,
      conversation: ref.conversation,
    };

    // Check if this is a targeted message
    const isTargeted = payload.recipient?.isTargeted === true;

    if (isTargeted && ref.conversation.conversationType === 'personal') {
      throw new Error('Targeted messages are not supported in 1:1 (personal) chats.');
    }

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
    // Create API client for this conversation's service URL
    const api = new Client(ref.serviceUrl, this.client);
    return new HttpStream(api, ref, this.logger);
  }
}
