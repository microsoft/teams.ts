import { randomUUID } from 'crypto';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import { z } from 'zod';

import {
  AdaptiveCard,
  ExecuteAction,
  SubmitData,
  TextBlock,
} from '@microsoft/teams.cards';

import { app } from './app';
import { state } from './state';

import type {
  AnySchema,
  SchemaOutput,
  ShapeOutput,
  ZodRawShapeCompat,
} from '@modelcontextprotocol/sdk/server/zod-compat.js';
import type { ToolAnnotations } from '@modelcontextprotocol/sdk/types.js';

export const mcpServer = new McpServer({ name: 'teams-bot', version: '0.0.0' });

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

async function getOrCreateConversation(userId: string): Promise<string> {
  const existing = state.conversations.get(userId);
  if (existing) return existing;

  const resource = await app.api.conversations.create({
    members: [{ id: userId, role: 'user', name: '' }],
    tenantId: process.env.TENANT_ID,
  });
  state.conversations.set(userId, resource.id);
  return resource.id;
}

structuredTool(
  'notify',
  {
    description: 'Send a notification to a Teams user.',
    inputSchema: { userId: z.string(), message: z.string() },
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
      'Ask a Teams user a question. Returns a requestId — use getReply for their response.',
    inputSchema: { userId: z.string(), question: z.string() },
    outputSchema: z.object({ requestId: z.string() }),
  },
  async ({ userId, question }) => {
    const conversationId = await getOrCreateConversation(userId);
    const requestId = randomUUID();
    await app.send(conversationId, question);
    state.pendingAsks.set(requestId, { userId, status: 'pending' });
    state.userPendingAsk.set(userId, requestId);
    return { requestId };
  }
);

structuredTool(
  'getReply',
  {
    description:
      'Get the reply to a question sent with ask. Returns status \'pending\' until the user responds.',
    inputSchema: { requestId: z.string() },
    outputSchema: z.object({
      status: z.enum(['pending', 'answered']),
      reply: z.string().nullable(),
    }),
    annotations: { readOnlyHint: true, idempotentHint: true },
  },
  async ({ requestId }) => {
    const entry = state.pendingAsks.get(requestId);
    if (!entry) {
      throw new Error(`No ask found with requestId ${requestId}.`);
    }
    return { status: entry.status, reply: entry.reply ?? null };
  }
);

structuredTool(
  'requestApproval',
  {
    description:
      'Send an approval request to a Teams user. Returns an approvalId — use getApproval for the decision.',
    inputSchema: {
      userId: z.string(),
      title: z.string(),
      description: z.string(),
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
    await app.send(conversationId, card);
    state.approvals.set(approvalId, 'pending');
    return { approvalId };
  }
);

structuredTool(
  'getApproval',
  {
    description:
      'Get the status of an approval request. Returns \'pending\', \'approved\', or \'rejected\'.',
    inputSchema: { approvalId: z.string() },
    outputSchema: z.object({
      approvalId: z.string(),
      status: z.enum(['pending', 'approved', 'rejected']),
    }),
    annotations: { readOnlyHint: true, idempotentHint: true },
  },
  async ({ approvalId }) => {
    const status = state.approvals.get(approvalId);
    if (!status) {
      throw new Error(`No approval found with approvalId ${approvalId}.`);
    }
    return { approvalId, status };
  }
);
