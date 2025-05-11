

import { A2AAgentManager } from '../client/a2a-agent-manager';
import * as schema from '../common/schema';

/**
 * Parameters for registering an agent with the A2A plugin.
 * usage: new ChatPrompt(..., [new A2APlugin(...)]).use(A2APluginParams)
 */
export type A2APluginParams = {
    /**
     * Unique key for this agent (used for config and lookup)
     */
    key: string;
    /**
     * The agent's base URL
     */
    url: string;
    /**
     * Optional agent card for the agent
     */
    agentCard?: schema.AgentCard;
    /**
     * Optional function to customize function metadata for this agent
     */
    buildFunctionMetadata?: BuildFunctionMetadata;
    /**
     * Optional function to customize TaskSendParams for this agent
     */
    buildTaskSendParams?: BuildTaskSendParams;
};

export type BuildFunctionMetadata = (card: schema.AgentCard) => { name: string; description: string };
export type BuildTaskSendParams = (card: schema.AgentCard, input: string) => schema.TaskSendParams;

/**
 * Options for constructing an A2APlugin.
 */
export type A2APluginOptions = {
    /**
     * Optional A2AAgentManager instance to use for agent management.
     */
    manager?: A2AAgentManager;
    /**
     * Optional function to customize the function name and description for each agent card.
     */
    buildFunctionMetadata?: BuildFunctionMetadata;
    /**
     * Optional function to customize the prompt given all agent cards.
     */
    buildPrompt?: (systemPrompt: string | undefined, agentCards: schema.AgentCard[]) => string | undefined;
    /**
     * Optional function to customize TaskSendParams given the input and context.
     */
    buildTaskSendParams?: BuildTaskSendParams;
};
