/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { MessageActivityInput } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { AdaptiveCard, TextBlock } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common';

const logger = new ConsoleLogger('@examples/stream', { level: 'debug' });

const app = new App({
  logger,
});

// Sample messages for the default single-stream demo.
const STREAM_MESSAGES = [
  '🚀 App installation detected! Starting stream...',
  '📊 Initializing data streams...',
  '✅ Connection established',
  '🔄 Processing background tasks...',
  '📈 System metrics looking good',
  '💡 Ready to assist you!',
  '🌟 All systems operational',
  '📋 Checking configurations...',
  '🔧 Optimizing performance...',
  '✨ Stream test complete!',
];

const FIRST_STREAM_MESSAGES = [
  '[stream 1] Starting the first streamed response. ',
  '[stream 1] This is using the default ctx.stream instance. ',
  '[stream 1] Next the handler will close the current streamed message.',
];

const SECOND_STREAM_MESSAGES = [
  '[stream 2] Reusing ctx.stream after emit reopens the closed stream. ',
  '[stream 2] This should render after stream 1\'s final Adaptive Card message. ',
  '[stream 2] The app processor will close this stream when the handler returns.',
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function normalize(text?: string): string {
  return (text ?? '').toLowerCase().replace(/-/g, ' ');
}

function shouldRunMultiStream(text?: string): boolean {
  return normalize(text).includes('multi stream');
}

function shouldSendSimpleCard(text?: string): boolean {
  return normalize(text).includes('simple card');
}

function createSimpleCard(): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock('Simple Adaptive Card', { weight: 'Bolder', size: 'Large', wrap: true }),
    new TextBlock('If you can see this card, basic Adaptive Card delivery is working.', { wrap: true })
  );
}

app.on('message', async ({ activity, stream, send, log }) => {
  // Send a minimal Adaptive Card outside the streaming flow.
  if (shouldSendSimpleCard(activity.text)) {
    const sentCard = await send(
      new MessageActivityInput('Sending a simple Adaptive Card.').addCard('adaptive', createSimpleCard())
    );
    log.info(`Sent simple adaptive card: ${sentCard.id}`);
    return;
  }

  // Emit an Adaptive Card as the first stream's final message, finalize it with
  // close(), then reuse the same ctx.stream instance for a second streamed response.
  if (shouldRunMultiStream(activity.text)) {
    stream.update('Starting stream 1...');
    await sleep(1000);

    for (const message of FIRST_STREAM_MESSAGES) {
      await sleep(500);
      stream.emit(message);
    }

    stream.emit(
      new MessageActivityInput('Adaptive Card emitted as part of stream 1.').addCard(
        'adaptive',
        createSimpleCard()
      )
    );
    const sentMessage = await stream.close();
    if (sentMessage) {
      log.info(`Sent stream 1 final message with adaptive card: ${sentMessage.id}`);
    }
    await sleep(2000);

    stream.update('Starting stream 2...');
    await sleep(1000);

    for (const message of SECOND_STREAM_MESSAGES) {
      await sleep(500);
      stream.emit(message);
    }
    return;
  }

  // Default single-stream demo with suggested actions on the final message.
  stream.update('Stream starting...');
  await sleep(1000);

  for (const message of STREAM_MESSAGES) {
    await sleep(Math.random() * 1000);
    stream.emit(message);
  }

  stream.emit(
    new MessageActivityInput().withSuggestedActions({
      to: [activity.from.id],
      actions: [
        { type: 'imBack', title: 'Run again', value: 'Run again' },
        { type: 'imBack', title: 'Show status', value: 'Show status' },
        { type: 'imBack', title: 'Help', value: 'Help' },
      ],
    })
  );
});

app.start().catch((err) => logger.error(err));
