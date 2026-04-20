import {
  AdaptiveCardActionErrorResponse,
  AdaptiveCardActionMessageResponse,
} from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';


import { state } from './state';

export const app = new App({
  logger: new ConsoleLogger('@examples/mcp-server', { level: 'debug' }),
});

app.on('message', async ({ activity, send }) => {
  const userId = activity.from.id;
  const conversationId = activity.conversation.id;

  if (activity.conversation.conversationType === 'personal') {
    state.conversations.set(userId, conversationId);
  }

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

app.on('card.action', async ({ activity }) => {
  const data = activity.value?.action?.data as
    | { action?: string; approval_id?: string; decision?: string }
    | undefined;

  if (data?.action !== 'approval_response') {
    return {
      statusCode: 400,
      type: 'application/vnd.microsoft.error',
      value: {
        code: 'BadRequest',
        message: 'Unknown action',
        innerHttpError: {
          statusCode: 400,
          body: { error: 'Unknown action' },
        },
      },
    } satisfies AdaptiveCardActionErrorResponse;
  }

  const { approval_id: approvalId, decision } = data;
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
