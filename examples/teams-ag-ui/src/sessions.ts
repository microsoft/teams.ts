import { randomUUID } from 'crypto';

import { AbstractAgent } from '@ag-ui/client';

import { buildAgent } from './agent';

const SYSTEM_PROMPT =
  process.env.AGENT_SYSTEM_PROMPT ?? 'You are a helpful assistant.';

/**
 * One AG-UI agent per Teams conversation. The agent holds the running
 * `messages` array (history) in memory, so we keep one instance alive
 * per `conversation.id` for the lifetime of the process.
 *
 * Typed as `AbstractAgent` — callers shouldn't care which concrete
 * adapter (LangChain, LangGraph, HttpAgent, …) is behind it.
 *
 * For production: persist messages to real storage and rehydrate on demand.
 */
const agents = new Map<string, AbstractAgent>();

export function getAgentForConversation(conversationId: string): AbstractAgent {
  let agent = agents.get(conversationId);
  if (!agent) {
    agent = buildAgent(conversationId);
    // Seed the conversation with a real system message. We do this here
    // instead of via LangChainAgent's `prompt` option (see agent.ts).
    agent.messages.push({
      id: randomUUID(),
      role: 'system',
      content: SYSTEM_PROMPT,
    });
    agents.set(conversationId, agent);
  }
  return agent;
}
