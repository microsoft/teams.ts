/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * Proactive messaging with Agent 365 agentic identity.
 *
 * Demonstrates both `app.send(..., { agenticIdentity })` and a
 * lower-level conversation activity API client configured with an
 * agentic identity. In both cases the API layer asks the auth provider
 * for the right Agent ID token.
 *
 * Usage:
 *   npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agentic-app-id> <agentic-user-id>
 */

import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

async function main() {
  const [conversationId, agenticAppId, agenticUserId] = process.argv.slice(2);

  if (!conversationId || !agenticAppId || !agenticUserId) {
    console.error(
      'Usage: npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agentic-app-id> <agentic-user-id>'
    );
    process.exit(1);
  }

  const app = new App({
    logger: new ConsoleLogger('@examples/agent365', { level: 'debug' }),
  });

  await app.initialize();

  const agenticIdentity = app.getAgenticIdentity(agenticAppId, agenticUserId);

  // 1. High-level app.send with agentic identity
  const sent = await app.send(
    conversationId,
    new MessageActivity('Hello from app.send with an AgenticIdentity.'),
    { agenticIdentity },
  );
  console.log(`Sent activity through app.send. Activity ID: ${sent.id}`);

  // 2. Lower-level conversation activity API with agentic identity
  const agenticApi = app.api.fromAgenticIdentity({ agenticIdentity });
  const apiSent = await agenticApi.conversations.activities(conversationId).create(
    { type: 'message', text: 'Hello from the conversation activity API with an AgenticIdentity.' },
  );
  console.log(`Sent activity through app.api. Activity ID: ${apiSent.id}`);
}

main().catch(console.error);
