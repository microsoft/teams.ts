import {
  ActivityParams,
  Client,
  ConversationReference,
  RequestOptions,
  SentActivity,
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { HttpStream } from './http/http-stream';
import { IStreamer, IActivitySender } from './types';

/**
 * Handles sending activities to the Bot Framework
 * Separate from transport concerns (HTTP, WebSocket, etc.)
 */
export class ActivitySender implements IActivitySender {
  constructor(
    private api: Client,
    private logger: ILogger,
  ) { }

  async send(activity: ActivityParams, ref: ConversationReference, options?: RequestOptions): Promise<SentActivity> {
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

    // Build options with ref's serviceUrl override
    const reqOptions: RequestOptions = {
      ...options,
      serviceUrl: ref.serviceUrl,
    };

    // Decide create vs update, with targeted variants
    if (activity.id) {
      const res = isTargeted
        ? await this.api.conversations.activities(ref.conversation.id).updateTargeted(activity.id, activity, reqOptions)
        : await this.api.conversations.activities(ref.conversation.id).update(activity.id, activity, reqOptions);
      return { ...activity, ...res };
    }

    const res = isTargeted
      ? await this.api.conversations.activities(ref.conversation.id).createTargeted(activity, reqOptions)
      : await this.api.conversations.activities(ref.conversation.id).create(activity, reqOptions);
    return { ...activity, ...res };
  }

  createStream(ref: ConversationReference): IStreamer {
    return new HttpStream(this.api, ref, this.logger);
  }
}
