import { AgentManager, AgentManagerOptions } from '../client/agent-manager';
import * as schema from '../common/schema';
import { TaskAndHistory } from '../server/types/a2a-types';

/**
 * Parameters for registering an agent with the A2A plugin.
 * usage: new ChatPrompt(..., [new A2APlugin(...)]).use(A2APluginParams)
 */
export type A2APluginUseParams = {
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

export type AgentPromptParams = {
    card: schema.AgentCard;
    latestTask?: TaskAndHistory | null;
};

export type BuildFunctionMetadata = (card: schema.AgentCard) => { name: string; description: string };
export type BuildTaskSendParams = (card: schema.AgentCard, input: string, continueTaskId?: string | null, metadata?: Record<string, any>) => schema.TaskSendParams;
export type BuildPrompt = (incomingSystemPrompt: string | undefined, agentDetails: AgentPromptParams[]) => string | undefined;

/**
 * Options for constructing an A2APlugin.
 */
export type A2APluginOptions = {
    /**
     * Optional A2AAgentManager instance to use for agent management.
     */
    manager?: AgentManager | AgentManagerOptions;
    /**
     * Optional function to customize the function name and description for each agent card.
     */
    buildFunctionMetadata?: BuildFunctionMetadata;
    /**
     * Optional function to customize the prompt given all agent cards.
     */
    buildPrompt?: BuildPrompt;
    /**
     * Optional function to customize TaskSendParams given the input and context.
     */
    buildTaskSendParams?: BuildTaskSendParams;
};
