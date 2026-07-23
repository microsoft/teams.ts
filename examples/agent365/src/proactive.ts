/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * Proactive messaging as an Agent User.
 *
 * Demonstrates both `app.send(..., { agentUser })` and a
 * lower-level conversation activity API client configured with an
 * Agent User identity. In both cases the API layer asks the auth provider
 * for the right Agent User token.
 *
 * Usage:
 *   npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agent-app-instance-id> <agent-user-id>
 */

import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

async function main() {
  const [conversationId, agentAppInstanceId, agentUserId] = process.argv.slice(2);

  if (!conversationId || !agentAppInstanceId || !agentUserId) {
    console.error(
      'Usage: npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agent-app-instance-id> <agent-user-id>'
    );
    process.exit(1);
  }

  const app = new App({
    logger: new ConsoleLogger('@examples/agent-identity-blueprint', { level: 'debug' }),
  });

  await app.initialize();

  const agentUser = app.getAgentUser(agentAppInstanceId, agentUserId);

  // 1. High-level app.send as an Agent User
  const sent = await app.send(
    conversationId,
    new MessageActivity('Hello from app.send as an Agent User.'),
    { agentUser },
  );
  console.log(`Sent activity through app.send. Activity ID: ${sent.id}`);

  // 2. Lower-level conversation activity API as an Agent User
  const agentUserApi = app.api.fromAgentUser({ agentUser });
  const apiSent = await agentUserApi.conversations.activities(conversationId).create(
    { type: 'message', text: 'Hello from the conversation activity API as an Agent User.' },
  );
  console.log(`Sent activity through app.api. Activity ID: ${apiSent.id}`);
}

main().catch(console.error);
