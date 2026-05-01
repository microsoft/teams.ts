import express from 'express';

import { AdaptiveCardActionMessageResponse } from '@microsoft/teams.api';
import { App, ExpressAdapter } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';

import { state } from './state';

// Own the Express app so we can mount /mcp alongside /api/messages
// and manage the http.Server lifecycle in index.ts.
export const expressApp = express();

export const app = new App({
  logger: new ConsoleLogger('@examples/mcp-server', { level: 'debug' }),
  httpServerAdapter: new ExpressAdapter(expressApp),
});

app.on('message', async ({ activity, send }) => {
  const userId = activity.from.id;
  const conversationId = activity.conversation.id;

  if (activity.conversation.conversationType === 'personal') {
    // cache the personal conversation_id so MCP tools can DM this user later.
    state.conversations.set(userId, conversationId);
  }

  // Match the inbound message to a pending ask by replyToId. The user must
  // use Teams' Reply action on the question message; a free-typed message
  // has no replyToId and won't match (allowing many concurrent open asks).
  const replyToId = activity.replyToId;
  if (replyToId && state.pendingAsks.has(replyToId)) {
    const entry = state.pendingAsks.get(replyToId)!;
    entry.reply = activity.text ?? '';
    entry.status = 'answered';
    await send('Got it, thank you!');
    return;
  }

  app.log.info(
    `Received message from user ${userId} in conversation ${conversationId}, but no pending ask found.`
  );
  await send('Hi! Will let you know if I need anything.');
});

app.on('card.action.approval_response', async ({ activity }) => {
  const { approval_id: approvalId, decision } = activity.value.action.data as {
    approval_id?: string;
    decision?: string;
  };

  if (
    approvalId &&
    state.approvals.has(approvalId) &&
    (decision === 'approved' || decision === 'rejected')
  ) {
    state.approvals.set(approvalId, decision);
  }

  return {
    statusCode: 200,
    type: 'application/vnd.microsoft.activity.message',
    value: 'Response recorded',
  } satisfies AdaptiveCardActionMessageResponse;
});
