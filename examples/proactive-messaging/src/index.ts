/**
 * Proactive Messaging Example
 *
 * Demonstrates sending messages without running a server using app.initialize().
 * Note: If using app.start(), you can call app.send() directly without app.initialize().
 */

import { App } from '@microsoft/teams.apps';
import { ActionSet, AdaptiveCard, OpenUrlAction, TextBlock } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common/logging';

async function sendProactiveMessage(app: App, conversationId: string, message: string) {
  console.log(`Sending proactive message to conversation: ${conversationId}`);
  console.log(`Message: ${message}`);

  const result = await app.send(conversationId, message);

  console.log(`✓ Message sent successfully! Activity ID: ${result.id}`);
}

async function sendProactiveCard(app: App, conversationId: string) {
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
  const conversationId = process.argv[2];

  if (!conversationId) {
    console.error('Error: Missing conversation ID argument');
    console.error('Usage: npm start <CONVERSATION_ID>');
    console.error('       npm run dev <CONVERSATION_ID>');
    process.exit(1);
  }

  const app = new App({
    logger: new ConsoleLogger('@examples/proactive-messaging', { level: 'info' })
  });

  // Initialize without starting HTTP server
  // Note: If using app.start(), skip this and call app.send() directly
  // Without a server, you can only send messages - you cannot receive incoming messages
  console.log('Initializing app (without starting server)...');
  await app.initialize();
  console.log('✓ App initialized\n');

  await sendProactiveMessage(
    app,
    conversationId,
    'Hello! This is a proactive message sent without a running server 🚀'
  );

  await new Promise(resolve => setTimeout(resolve, 2000));

  await sendProactiveCard(app, conversationId);

  console.log('\n✓ All proactive messages sent successfully!');
}

main().catch(console.error);
