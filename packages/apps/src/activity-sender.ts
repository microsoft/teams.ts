import { ActivityParams, ConversationReference, SentActivity } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { ApiClient } from './api';
import { HttpStream } from './http/http-stream';
import { IStreamer, IActivitySender } from './types';

/**
 * Handles sending activities to the Bot Framework
 * Separate from transport concerns (HTTP, WebSocket, etc.)
 */
export class ActivitySender implements IActivitySender {
  constructor(
    // ApiClient is serviceUrl-bound, so send/stream need a per-conversation client.
    private getApiClient: (serviceUrl: string) => ApiClient,
    private logger: ILogger
  ) { }

  async send(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity> {
    // Create API client for this conversation's service URL
    const api = this.getApiClient(ref.serviceUrl);

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
    // Create API client for this conversation's service URL
    const api = this.getApiClient(ref.serviceUrl);
    return new HttpStream(api, ref, this.logger);
  }
}
