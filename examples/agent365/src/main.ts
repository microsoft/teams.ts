/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * Reactive echo agent demonstrating Agent 365 agentic identity.
 *
 * Incoming messages are handled normally; the inbound service URL and
 * agentic identity are carried by the context/API layer automatically.
 */

import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

const app = new App({
  logger: new ConsoleLogger('@examples/agent365', { level: 'debug' }),
});

app.on('message', async ({ send, reply, activity, api, log }) => {
  log.info(`[Agent365 reactive] Message received: ${activity.text}`);
  log.info(`[Agent365 reactive] From: ${activity.from?.id}`);
  log.info(`[Agent365 reactive] Recipient: ${activity.recipient?.id}`);

  await reply({ type: 'typing' });

  const text = activity.text?.toLowerCase() ?? '';

  if (text.includes('react')) {
    await api.reactions.add(
      activity.conversation.id,
      activity.id,
      'like'
    );
    await reply('Added a like reaction to your message.');
    return;
  }

  if (text.includes('reply')) {
    await reply('Hello! How can I assist you today?');
  } else {
    await send(`You said "${activity.text}"`);
  }
});

app.start().catch(console.error);
