import express from 'express';

import { AdaptiveCardActionCardResponse, AdaptiveCardActionMessageResponse } from '@microsoft/teams.api';
import { App, ExpressAdapter } from '@microsoft/teams.apps';
import { AdaptiveCard, TextBlock } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common';

import { state, ApprovalStatus } from './state';

// Own the Express app so we can mount /mcp alongside /api/messages
// and manage the http.Server lifecycle in index.ts.
export const expressApp = express();

export const app = new App({
  logger: new ConsoleLogger('@examples/mcp-server', { level: 'debug' }),
  httpServerAdapter: new ExpressAdapter(expressApp),
});

app.on('message', async ({ activity, send }) => {
  const userId = activity.from.aadObjectId;
  const conversationId = activity.conversation.id;

  if (activity.conversation.conversationType === 'personal' && userId) {
    // cache the personal conversation_id so MCP tools can DM this user later.
    state.conversations.set(userId, conversationId);
  }

  app.log.info(
    `Received message from user ${userId} in conversation ${conversationId}. Replies to asks now arrive via adaptive card actions.`
  );
  await send('Hi! I\'ll let you know if I need anything.');
});

app.on('card.action.approval_response', async ({ activity }) => {
  const { approval_id: approvalId, decision } = activity.value.action.data as {
    approval_id?: string;
    decision?: string;
  };

  if (
    approvalId &&
    state.pendingApprovals.has(approvalId) &&
    (decision === 'approved' || decision === 'rejected')
  ) {
    const approval = state.pendingApprovals.get(approvalId)!;
    approval.status = decision as ApprovalStatus;
    // Signal any wait_for_approval callers.
    approval.event.set();
    const label = decision === 'approved' ? 'Approved ✅' : 'Rejected ❌';
    const color = decision === 'approved' ? 'Good' : 'Attention';
    return {
      statusCode: 200,
      type: 'application/vnd.microsoft.card.adaptive',
      value: new AdaptiveCard(
        new TextBlock(label, { weight: 'Bolder', color }),
      ),
    } satisfies AdaptiveCardActionCardResponse;
  }

  return {
    statusCode: 200,
    type: 'application/vnd.microsoft.activity.message',
    value: 'Unable to record response. The approval request may be invalid or expired.',
  } satisfies AdaptiveCardActionMessageResponse;
});

app.on('card.action.ask_reply', async ({ activity }) => {
  const { request_id: requestId, reply } = activity.value.action.data as {
    request_id?: string;
    reply?: string;
  };

  if (requestId) {
    const entry = state.pendingAsks.get(requestId);
    if (entry?.status === 'pending') {
      entry.status = 'answered';
      entry.reply = reply ?? '';
      // Signal any wait_for_reply callers.
      entry.event.set();
      return {
        statusCode: 200,
        type: 'application/vnd.microsoft.card.adaptive',
        value: new AdaptiveCard(
          new TextBlock('Reply recorded', { weight: 'Bolder', color: 'Good' }),
          new TextBlock(reply ?? '', { wrap: true }),
        ),
      } satisfies AdaptiveCardActionCardResponse;
    }
  }

  return {
    statusCode: 200,
    type: 'application/vnd.microsoft.activity.message',
    value: 'Unable to record reply. The ask may be invalid or expired.',
  } satisfies AdaptiveCardActionMessageResponse;
});
