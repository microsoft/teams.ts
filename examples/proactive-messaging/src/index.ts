/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * Proactive Messaging Example
 * ===========================
 * This example demonstrates how to send proactive messages to Teams users
 * without running a server. This is useful for:
 * - Scheduled notifications
 * - Alert systems
 * - Background jobs that need to notify users
 * - Webhook handlers that send messages
 *
 * Key points:
 * - Uses app.initialize() instead of app.start() (no HTTP server)
 * - Directly sends messages using app.send()
 * - Requires a conversation ID (from previous interactions or from the Teams API)
 */

import { App } from '@microsoft/teams.apps';
import { ActionSet, AdaptiveCard, OpenUrlAction, TextBlock } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common/logging';

async function sendProactiveMessage(app: App, conversationId: string, message: string) {
  /**
   * Send a proactive message to a Teams conversation.
   *
   * Args:
   *   app: The initialized App instance
   *   conversationId: The Teams conversation ID to send the message to
   *   message: The message text to send
   */
  console.log(`Sending proactive message to conversation: ${conversationId}`);
  console.log(`Message: ${message}`);

  // Send the message
  const result = await app.send(conversationId, message);

  console.log(`✓ Message sent successfully! Activity ID: ${result.id}`);
}

async function sendProactiveCard(app: App, conversationId: string) {
  /**
   * Send a proactive Adaptive Card to a Teams conversation.
   *
   * Args:
   *   app: The initialized App instance
   *   conversationId: The Teams conversation ID to send the card to
   */
  // Create an Adaptive Card
  const card = new AdaptiveCard(
    new TextBlock('Proactive Notification', { size: 'Large', weight: 'Bolder' }),
    new TextBlock('This message was sent proactively without a server running!', { wrap: true }),
    new TextBlock('Status: Active • Priority: High • Time: Now', { wrap: true, isSubtle: true }),
    new ActionSet(
      new OpenUrlAction('https://aka.ms/teams-sdk', { title: 'Learn More' })
    )
  );

  console.log(`Sending proactive card to conversation: ${conversationId}`);

  const result = await app.send(conversationId, card);

  console.log(`✓ Card sent successfully! Activity ID: ${result.id}`);
}

async function main() {
  /**
   * Main function demonstrating proactive messaging.
   *
   * In a real application, you would:
   * 1. Store conversation IDs when users first interact with your bot
   * 2. Use those IDs later to send proactive messages
   * 3. Get conversation IDs from the Teams API or from previous interactions
   */
  const conversationId = process.argv[2];

  if (!conversationId) {
    console.error('Error: Missing conversation ID argument');
    console.error('Usage: npm start <CONVERSATION_ID>');
    console.error('       npm run dev <CONVERSATION_ID>');
    process.exit(1);
  }

  // Create app (no plugins needed for sending only)
  const app = new App({
    logger: new ConsoleLogger('@examples/proactive-messaging', { level: 'info' })
  });

  // Initialize the app without starting the HTTP server
  // This sets up credentials, token manager, and activity sender
  console.log('Initializing app (without starting server)...');
  await app.initialize();
  console.log('✓ App initialized\n');

  // Example 1: Send a simple text message
  await sendProactiveMessage(
    app,
    conversationId,
    'Hello! This is a proactive message sent without a running server 🚀'
  );

  // Wait a bit between messages
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Example 2: Send an Adaptive Card
  await sendProactiveCard(app, conversationId);

  console.log('\n✓ All proactive messages sent successfully!');
}

main().catch(console.error);
