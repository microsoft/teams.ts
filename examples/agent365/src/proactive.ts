/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * PROACTIVE flow: messaging a conversation as an Agentic User.
 *
 * There is no inbound activity here, so the job opens its own baggage scope
 * with `createAgent365Scope` instead of the SDK establishing one.
 *
 * Usage:
 *   npx tsx -r dotenv/config src/proactive.ts <conversation-id> <agentic-app-instance-id> <agentic-user-id>
 */

import { InvokeAgentScope } from '@microsoft/opentelemetry';
import { MessageActivity } from '@microsoft/teams.api';
import { App, createAgent365Scope } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { flushAgent365Spans, useAgent365Exporter } from './observability';

// Shared by the `App` and the scope opener so the personal-data policy cannot
// drift between them.
const agent365 = {
  include: ['agentName', 'agentEmail'],
  operationSource: 'Microsoft.Teams.Apps',
  channelName: 'msteams',
} as const;

const withAgent365Scope = createAgent365Scope(agent365);

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
    telemetry: { agent365 },
  });

  useAgent365Exporter(app.tokenProvider);
  await app.initialize();

  const agenticUser = app.getAgenticUser(agenticAppInstanceId, agenticUserId);

  // Everything inside this scope — the invoke_agent span, the sends, and the
  // SDK's own api.client and auth.outbound spans — carries the same identity.
  try {
    await withAgent365Scope({ agenticUser, conversationId }, async () => {
      const scope = InvokeAgentScope.start(
        { content: 'Scheduled digest' },
        {},
        { agentId: agenticUser.agenticAppInstanceId, tenantId: agenticUser.tenantId }
      );

      try {
        await scope.withActiveSpanAsync(async () => {
          // 1. High-level app.send as an Agentic User.
          const sent = await app.send(
            conversationId,
            new MessageActivity('Hello from app.send as an Agentic User.'),
            { agenticUser }
          );
          console.log(`Sent activity through app.send. Activity ID: ${sent.id}`);

          // 2. Lower-level conversation activity API. Still attributed, because
          //    the scope — not the send — established the baggage.
          const agenticUserApi = app.api.fromAgenticUser({ agenticUser });
          const apiSent = await agenticUserApi.conversations
            .activities(conversationId)
            .create({
              type: 'message',
              text: 'Hello from the conversation activity API as an Agentic User.',
            });
          console.log(`Sent activity through app.api. Activity ID: ${apiSent.id}`);

          scope.recordOutputMessages('Proactive digest sent.');
        });
      } finally {
        scope.dispose();
      }
    });
  } finally {
    // Spans are batched, so a job that exits — normally or by throwing — would
    // take its span with it; flush in finally so failures still export.
    await flushAgent365Spans();
  }
}

main().catch(console.error);
