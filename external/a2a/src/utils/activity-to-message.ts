import { Activity } from '@microsoft/spark.api';

import { Message, Part } from '../schema';

export function activityToMessage(activity: Activity): Message {
  const parts: Array<Part> = [];

  if (activity.type === 'message' || activity.type === 'typing') {
    if (activity.text) {
      parts.push({ type: 'text', text: activity.text });
    }
  }

  if (activity.type === 'message') {
    for (const attachment of activity.attachments || []) {
      parts.push({
        type: 'file',
        file: {
          mimeType: attachment.contentType,
          name: attachment.name,
          bytes: attachment.content,
          uri: attachment.contentUrl,
        },
      });
    }
  }

  return { role: 'agent', parts };
}
