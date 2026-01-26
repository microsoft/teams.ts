import { ActivityParams, Client, ConversationReference, SentActivity } from '@microsoft/teams.api';
import * as $http from '@microsoft/teams.common/http';
import { ILogger } from '@microsoft/teams.common/logging';

import { HttpStream } from './http-stream';
import { IActivitySender, IStreamer } from './types';

/**
 * Handles sending activities to the Bot Framework
 * Separate from transport concerns (HTTP, WebSocket, etc.)
 */
export class ActivitySender implements IActivitySender {
  constructor(
    private client: $http.Client,
    private logger: ILogger
  ) { }

  async send(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity> {
    // Create API client for this conversation's service URL
    const api = new Client(ref.serviceUrl, this.client);

    // Merge activity with conversation reference
    activity = {
      ...activity,
      from: ref.bot,
      conversation: ref.conversation,
    };

    // Decide create vs update
    if (activity.id) {
      const res = await api.conversations
        .activities(ref.conversation.id)
        .update(activity.id, activity);
      return { ...activity, ...res };
    }

    const res = await api.conversations.activities(ref.conversation.id).create(activity);
    return { ...activity, ...res };
  }

  createStream(ref: ConversationReference): IStreamer {
    // Create API client for this conversation's service URL
    const api = new Client(ref.serviceUrl, this.client);
    return new HttpStream(api, ref, this.logger);
  }
}
