import { AgentCard, Message, Task } from '@a2a-js/sdk';
import { A2AClient } from '@a2a-js/sdk/client';

import { ILogger } from '@microsoft/teams.common';

/**
 * New types that use SDK's AgentCard and A2AClient instead of internal schema types
 */

export type BuildFunctionMetadata = (card: AgentCard) => { name: string; description: string };

export type AgentPromptParams = {
  card: AgentCard;
  client: A2AClient;
};

export type BuildPrompt = (
  systemPrompt: string | undefined,
  agentDetails: AgentPromptParams[]
) => string | undefined;

export type BuildMessageForAgent = (
  card: AgentCard,
  input: string,
  metadata?: Record<string, any>
) => Message | string;

export type BuildMessageFromAgentResponse = (
  card: AgentCard,
  response: Task | Message,
  originalInput: string
) => string;

/**
 * Options for constructing an A2AClientPlugin using the official SDK.
 */
export type A2AClientPluginOptions = {
  /**
   * Optional function to customize the function name and description for each agent card.
   */
  buildFunctionMetadata?: BuildFunctionMetadata;
  /**
   * Optional function to customize the prompt given all agent cards.
   */
  buildPrompt?: BuildPrompt;
  /**
   * Optional function to customize the message format sent to each agent.
   */
  buildMessageForAgent?: BuildMessageForAgent;
  /**
   * Optional function to customize how agent responses are processed into strings.
   */
  buildMessageFromAgentResponse?: BuildMessageFromAgentResponse;

  /**
   * Logger
   */
  logger?: ILogger
};

/**
 * Parameters for registering an agent with the A2AClientPlugin.
 * Usage: new ChatPrompt(..., [new A2AClientPlugin(...)]).usePlugin('a2a', A2APluginUseParams)
 */
export type A2APluginUseParams = {
  /**
   * Unique key to identify this agent
   */
  key: string;
  /**
   * URL to the agent's card endpoint
   */
  cardUrl: string;
  /**
   * Custom function metadata builder for this specific agent
   */
  buildFunctionMetadata?: BuildFunctionMetadata;
  /**
   * Custom message builder for this specific agent
   */
  buildMessageForAgent?: BuildMessageForAgent;
  /**
   * Custom response processor for this specific agent
   */
  buildMessageFromAgentResponse?: BuildMessageFromAgentResponse;
};

