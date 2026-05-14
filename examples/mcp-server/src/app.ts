import express from 'express';

import { AdaptiveCardActionMessageResponse } from '@microsoft/teams.api';
import { App, ExpressAdapter } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

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

  // If this user has a pending ask, treat their next message as the answer.
  // Only one outstanding ask per user is supported (see README Limitations).
  const requestId = state.userPendingAsk.get(userId);
  if (requestId && state.pendingAsks.has(requestId)) {
    const entry = state.pendingAsks.get(requestId)!;
    entry.reply = activity.text ?? '';
    entry.status = 'answered';
    state.userPendingAsk.delete(userId);
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
