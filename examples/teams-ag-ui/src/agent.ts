import { AbstractAgent } from '@ag-ui/client';
import { LangChainAgent } from '@ag-ui/langchain';
import { AzureChatOpenAI, ChatOpenAI } from '@langchain/openai';

import { InterruptMiddleware } from './interrupts/middleware';

/**
 * Build an AG-UI agent backed by a LangChain chat model, wrapped with the
 * InterruptMiddleware so any tool tagged `requiresApproval` triggers the
 * spec's interrupt-aware lifecycle (polyfilled — see ./interrupts/).
 *
 * Returned as `AbstractAgent` on purpose: the rest of the app only talks
 * to the AG-UI seam (`runAgent` + `AgentSubscriber`).
 *
 * Required env (one of):
 *   AZURE_OPENAI_API_KEY + AZURE_OPENAI_ENDPOINT + AZURE_OPENAI_API_VERSION
 *     + AZURE_OPENAI_MODEL_DEPLOYMENT_NAME    (Azure OpenAI)
 *   OPENAI_API_KEY [+ OPENAI_MODEL]           (vanilla OpenAI)
 */
export function buildAgent(threadId?: string): AbstractAgent {
  // Note: do NOT pass `prompt` here. @ag-ui/langchain@0.0.1 inserts the
  // system prompt as a duck-typed `{content, getType: () => 'system'}`
  // object, which newer @langchain/core versions refuse to coerce. We
  // prepend a proper system-role message to `agent.messages` instead
  // (see sessions.ts).
  const agent = new LangChainAgent({ model: buildChatModel() });
  if (threadId) agent.threadId = threadId;
  agent.use(new InterruptMiddleware());
  return agent;
}

function buildChatModel() {
  if (process.env.AZURE_OPENAI_API_KEY && process.env.AZURE_OPENAI_ENDPOINT) {
    return new AzureChatOpenAI({
      azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
      azureOpenAIEndpoint: process.env.AZURE_OPENAI_ENDPOINT,
      azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
      azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_MODEL_DEPLOYMENT_NAME,
      streaming: true,
    });
  }
  if (process.env.OPENAI_API_KEY) {
    return new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
      streaming: true,
    });
  }
  throw new Error(
    'No model creds set. Provide AZURE_OPENAI_* env vars or OPENAI_API_KEY.'
  );
}
