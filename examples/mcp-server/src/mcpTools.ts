import { randomUUID } from 'crypto';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import type {
  AnySchema,
  SchemaOutput,
  ShapeOutput,
  ZodRawShapeCompat,
} from '@modelcontextprotocol/sdk/server/zod-compat.js';
import type { ToolAnnotations } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

import {
  AdaptiveCard,
  ExecuteAction,
  SubmitData,
  TextBlock,
  TextInput,
} from '@microsoft/teams.cards';

import { app } from './app';
import { graphClient } from './graphClient';
import { ApprovalStatus, AskStatus, PendingApproval, makeEvent, state } from './state';


async function getOrCreateConversation(userId: string): Promise<string> {
  const existing = state.conversations.get(userId);
  if (existing) return existing;

  // Proactively open a 1:1 — the user hasn't messaged the bot yet, so we have no cached id.
  const resource = await app.api.conversations.create({
    members: [{ id: userId, role: 'user', name: '' }],
    tenantId: process.env.TENANT_ID,
  });
  state.conversations.set(userId, resource.id);
  return resource.id;
}

// Each client session gets its own McpServer instance (the SDK binds a server
// to a single transport), so tools are registered via this factory rather than
// on a shared singleton.
export function createMcpServer(): McpServer {
  const mcpServer = new McpServer({ name: 'teams-bot', version: '0.0.0' });

  // Wrapper for tools whose return is a typed, structured payload.
  // The handler returns a plain value; we wrap it for MCP automatically.
  function structuredTool<In extends ZodRawShapeCompat, Out extends AnySchema>(
    name: string,
    config: {
      description: string;
      inputSchema: In;
      outputSchema: Out;
      annotations?: ToolAnnotations;
    },
    handler: (args: ShapeOutput<In>) => Promise<SchemaOutput<Out>>
  ) {
    mcpServer.registerTool(name, config, (async (args: ShapeOutput<In>) => {
      const value = await handler(args);
      return {
        structuredContent: value as Record<string, unknown>,
        content: [{ type: 'text' as const, text: JSON.stringify(value) }],
      };
    }) as any);
  }

  structuredTool(
  'notify',
  {
    description: 'Send a notification to a Teams user. No response expected.',
    inputSchema: {
      userId: z.string().describe('The AAD object id of the Teams user to notify.'),
      message: z.string().describe('The message text to send.'),
    },
    outputSchema: z.object({ notified: z.boolean(), userId: z.string() }),
  },
  async ({ userId, message }) => {
    const conversationId = await getOrCreateConversation(userId);
    await app.send(conversationId, message);
    return { notified: true, userId };
  }
);

structuredTool(
  'ask',
  {
    description:
      'Ask a Teams user a question via an Adaptive Card with a reply box. Returns a requestId — ' +
      'call wait_for_reply with it to get the answer. Multiple asks per user can be in flight.',
    inputSchema: {
      userId: z.string().describe('The AAD object id of the Teams user to ask.'),
      question: z.string().describe('The question to ask.'),
    },
    outputSchema: z.object({ requestId: z.string() }),
  },
  async ({ userId, question }) => {
    const conversationId = await getOrCreateConversation(userId);
    const requestId = randomUUID();

    // Build an Adaptive Card with a text-input reply box so multiple asks
    // per user can be in flight simultaneously — each card carries its own
    // requestId and the reply is routed back via the ask_reply card action.
    const card = new AdaptiveCard(
      new TextBlock(question, { weight: 'Bolder', size: 'Medium', wrap: true }),
      new TextInput()
        .withId('reply')
        .withPlaceholder('Type your reply...')
        .withIsMultiline(true)
        .withIsRequired(true)
    ).withActions(
      new ExecuteAction({ title: 'Send' })
        .withData(new SubmitData('ask_reply', { request_id: requestId }))
        .withAssociatedInputs('auto')
    );

    // Record the pending ask BEFORE sending, so a fast reply is never lost.
    state.pendingAsks.set(requestId, { userId, status: 'pending', event: makeEvent() });
    try {
      await app.send(conversationId, card);
    } catch (err) {
      state.pendingAsks.delete(requestId);
      throw err;
    }
    return { requestId };
  }
);

structuredTool(
  'wait_for_reply',
  {
    description:
      'Wait for the user\'s reply to an earlier ask. Blocks up to timeoutSeconds (default 30). ' +
      'Returns the reply when it arrives, or status=\'pending\' if the timeout fires.',
    inputSchema: {
      requestId: z.string().describe('The requestId returned from ask.'),
      timeoutSeconds: z.number().optional().default(30).describe('Max seconds to wait before returning (default 30).'),
    },
    outputSchema: z.object({
      status: z.enum(['pending', 'answered']),
      reply: z.string().nullable(),
    }),
  },
  async ({ requestId, timeoutSeconds }): Promise<{ status: AskStatus; reply: string | null }> => {
    const entry = state.pendingAsks.get(requestId);
    if (!entry) {
      throw new Error(`No ask found with requestId ${requestId}.`);
    }
    if (entry.status !== 'pending') {
      return { status: entry.status, reply: entry.reply ?? null };
    }

    const ms = (timeoutSeconds ?? 30) * 1000;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    await Promise.race([
      entry.event.promise,
      new Promise<void>((resolve) => { timeoutHandle = setTimeout(resolve, ms); }),
    ]);
    clearTimeout(timeoutHandle);

    return { status: entry.status, reply: entry.reply ?? null };
  }
);

structuredTool(
  'request_approval',
  {
    description:
      'Send an approval request to a Teams user. Returns an approvalId — ' +
      'call wait_for_approval with it to get the decision.',
    inputSchema: {
      userId: z.string().describe('The AAD object id of the Teams user to ask for approval.'),
      title: z.string().describe('Title of the approval request.'),
      description: z.string().describe('Description of what is being approved.'),
    },
    outputSchema: z.object({ approvalId: z.string() }),
  },
  async ({ userId, title, description }) => {
    const conversationId = await getOrCreateConversation(userId);
    const approvalId = randomUUID();
    const card = new AdaptiveCard(
      new TextBlock(title, { weight: 'Bolder', size: 'Large', wrap: true }),
      new TextBlock(description, { wrap: true })
    ).withActions(
      new ExecuteAction({ title: 'Approve' }).withData(
        new SubmitData('approval_response', { approval_id: approvalId, decision: 'approved' })
      ),
      new ExecuteAction({ title: 'Reject' }).withData(
        new SubmitData('approval_response', { approval_id: approvalId, decision: 'rejected' })
      )
    );
    // Record state BEFORE sending so a fast click is never lost.
    const approval: PendingApproval = { userId, status: 'pending', event: makeEvent() };
    state.pendingApprovals.set(approvalId, approval);
    try {
      await app.send(conversationId, card);
    } catch (err) {
      state.pendingApprovals.delete(approvalId);
      throw err;
    }
    return { approvalId };
  }
);

structuredTool(
  'wait_for_approval',
  {
    description:
      'Wait for an approval decision. Blocks up to timeoutSeconds (default 30). ' +
      'Returns \'approved\' or \'rejected\' when the user clicks, or \'pending\' if the timeout fires.',
    inputSchema: {
      approvalId: z.string().describe('The approvalId returned from request_approval.'),
      timeoutSeconds: z.number().optional().default(30).describe('Max seconds to wait before returning (default 30).'),
    },
    outputSchema: z.object({
      approvalId: z.string(),
      status: z.enum(['pending', 'approved', 'rejected']),
    }),
  },
  async ({ approvalId, timeoutSeconds }): Promise<{ approvalId: string; status: ApprovalStatus }> => {
    const approval = state.pendingApprovals.get(approvalId);
    if (!approval) {
      throw new Error(`No approval found with approvalId ${approvalId}.`);
    }
    if (approval.status !== 'pending') {
      return { approvalId, status: approval.status };
    }

    const ms = (timeoutSeconds ?? 30) * 1000;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    await Promise.race([
      approval.event.promise,
      new Promise<void>((resolve) => { timeoutHandle = setTimeout(resolve, ms); }),
    ]);
    clearTimeout(timeoutHandle);

    return { approvalId, status: approval.status };
  }
);

structuredTool(
  'find_user',
  {
    description:
      'Find users in this tenant by partial name, email, or UPN. ' +
      'Returns up to 5 matches with their AAD object ids — pass an id to ' +
      'notify, ask, or request_approval.',
    inputSchema: {
      query: z.string().describe('Name, email, or UPN fragment to search for.'),
    },
    outputSchema: z.object({
      matches: z.array(
        z.object({
          id: z.string(),
          displayName: z.string().nullable(),
          userPrincipalName: z.string().nullable(),
        })
      ),
    }),
  },
  async ({ query }) => {
    const matches = await graphClient.searchUsers(query, 5);
    return { matches };
  }
);

  return mcpServer;
}
