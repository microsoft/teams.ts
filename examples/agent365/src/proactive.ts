/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * Proactive messaging as an Agentic User.
 *
 * Demonstrates both `app.send(..., { agenticIdentity })` and a
 * lower-level conversation activity API client configured with an
 * Agentic User identity. In both cases the API layer asks the auth provider
 * for the right Agentic User token.
 *
 * Usage:
 *   npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agentic-app-instance-id> <agentic-user-id>
 */

import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

async function main() {
  const [conversationId, agenticAppInstanceId, agenticUserId] = process.argv.slice(2);

  if (!conversationId || !agenticAppInstanceId || !agenticUserId) {
    console.error(
      'Usage: npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agentic-app-instance-id> <agentic-user-id>'
    );
    process.exit(1);
  }

  const app = new App({
    logger: new ConsoleLogger('@examples/agentic-blueprint', { level: 'debug' }),
  });

  await app.initialize();

  const agenticUser = app.getAgenticUser(agenticAppInstanceId, agenticUserId);

  // 1. High-level app.send as an Agentic User
  const sent = await app.send(
    conversationId,
    new MessageActivity('Hello from app.send as an Agentic User.'),
    { agenticIdentity: agenticUser },
  );
  console.log(`Sent activity through app.send. Activity ID: ${sent.id}`);

  // 2. Lower-level conversation activity API as an Agentic User
  const agenticUserApi = app.api.fromAgenticIdentity({ agenticIdentity: agenticUser });
  const apiSent = await agenticUserApi.conversations.activities(conversationId).create(
    { type: 'message', text: 'Hello from the conversation activity API as an Agentic User.' },
  );
  console.log(`Sent activity through app.api. Activity ID: ${apiSent.id}`);
}

main().catch(console.error);
