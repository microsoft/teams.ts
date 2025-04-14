import { Activity, Attachment, Entity, MessageActivity } from '@microsoft/spark.api';

import { Message } from '../schema';

export function messageToActivity(id: string, message: Message): Activity {
  const attachments = message.parts
    .map((part) => {
      switch (part.type) {
        case 'text':
          return { contentType: 'text/plain', content: part.text } as Attachment;
        case 'file':
          return {
            contentType: part.file.mimeType ?? 'text/plain',
            name: part.file.name,
            content: part.file.bytes,
            contentUrl: part.file.uri,
          } as Attachment;
        case 'data':
          return {
            contentType: 'application/json',
            content: part.data,
          } as Attachment;
      }
    })
    .filter((a) => !!a);

  const entities = message.parts.map((part) => {
    return {
      type: 'message',
      additionalType: part.metadata,
    } as Entity;
  });

  const text = message.parts
    .map((part) => {
      switch (part.type) {
        case 'text':
          return part.text;
        case 'data':
          return JSON.stringify(part.data);
      }
    })
    .filter((text) => !!text)
    .join('\n');

  return new MessageActivity(text, {
    id,
    channelId: 'msteams',
    attachments,
    entities,
    serviceUrl: id, // important so we can respond later
    from: {
      id: 'agent',
      name: 'agent',
      role: 'user',
    },
    conversation: {
      id: '',
      conversationType: 'personal',
      isGroup: false,
    },
    recipient: {
      id: '',
      name: '',
      role: 'bot',
    },
  });
}
