import camelCase from 'camelcase';

import { Function as ChatFunction, ChatPromptPlugin } from '@microsoft/teams.ai';

import { A2AAgentManager, AgentCardWithDetails } from '../client/a2a-agent-manager';
import * as schema from '../common/schema';
import { generateRequestId } from '../common/uuid';

export type A2APluginParams = {
  agentAlias: string;
  url: string;
  agentCard?: schema.AgentCard;
  buildFunctionMetadata?: BuildFunctionMetadata;
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

export class A2AClientPlugin implements ChatPromptPlugin<'a2a', A2APluginParams> {
  readonly name = 'a2a';
  protected _manager: A2AAgentManager;
  protected buildFunctionMetadata?: BuildFunctionMetadata;
  protected buildPrompt?: (systemPrompt: string | undefined, agentCards: schema.AgentCard[]) => string | undefined;
  protected buildTaskSendParams?: BuildTaskSendParams;
  protected _agentConfig: Map<string, Partial<A2APluginParams>> = new Map();

  constructor(options: A2APluginOptions = {}) {
    this._manager = options.manager ?? new A2AAgentManager();
    this.buildFunctionMetadata = options.buildFunctionMetadata;
    this.buildPrompt = options.buildPrompt;
    this.buildTaskSendParams = options.buildTaskSendParams;
  }

  onUsePlugin(args: A2APluginParams) {
    this._manager.use(args.agentAlias, args.url, args.agentCard);
    // Store per-agent config (excluding agentCard and url)
    const { agentAlias, url, agentCard, ...rest } = args;
    this._agentConfig.set(agentAlias, rest);
  }

  async onBuildFunctions(functions: ChatFunction[]): Promise<ChatFunction[]> {
    const cards: AgentCardWithDetails[] = await this._manager.getAgentCards();
    const allFunctions: ChatFunction[] = [];
    for (const { alias, card } of cards) {
      const agentConfig = this._agentConfig.get(alias) || {};
      const buildFunctionMetadata = agentConfig.buildFunctionMetadata || this.buildFunctionMetadata || this._defaultFunctionMetadata;
      const buildTaskSendParams = agentConfig.buildTaskSendParams || this.buildTaskSendParams || this._defaultBuildTaskSendParams;
      const { name, description } = buildFunctionMetadata(card);
      allFunctions.push({
        name,
        description,
        parameters: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Message to send to the agent',
            },
          },
          required: ['message'],
        },
        handler: async (args: { message: string }) => {
          const agentMessage = args.message;
          if (!agentMessage) {
            throw new Error(`An input message is required to call Agent ${name}!`);
          }
          const sendParams = buildTaskSendParams(card, agentMessage);
          const result = await this._manager.sendTask(alias, sendParams);
          return result;
        },
      });
    }
    return functions.concat(allFunctions);
  }

  /**
   * Modify the system prompt before it is sent to the model.
   * If the user supplies a buildPrompt function, it is used. Otherwise, a default is built.
   */
  async onBuildPrompt(systemPrompt: string | undefined): Promise<string | undefined> {
    const cardsWithMeta: AgentCardWithDetails[] = await this._manager.getAgentCards();
    const agentCards = cardsWithMeta.map(({ card }) => card);
    // If user supplied a buildPrompt, use it
    if (typeof this.buildPrompt === 'function') {
      return this.buildPrompt(systemPrompt, agentCards);
    }
    // Default: append agent details for each agent
    return (systemPrompt || '') + '\n' + this._defaultBuildPrompt(agentCards);
  }

  private _defaultFunctionMetadata(card: schema.AgentCard): { name: string; description: string } {
    const name = `message${camelCase(card.name, { pascalCase: true })}`;
    const description = card.description || `Interact with agent at ${card.url}`;
    return { name, description };
  }

  private _defaultBuildPrompt(agentCards: schema.AgentCard[]): string {
    let details = 'Here are details about available agents that you can message. Determine the best phrasing to use when you are attempting to message them.';
    for (const card of agentCards) {
      details += '<Agent Details>\n';
      details += `<Name>\n${card.name || card.url}\n</Name>\n`;
      if (card.description) {
        details += `<Description>\n${card.description}\n</Description>\n`;
      }
      for (const skill of card.skills || []) {
        details += `<SKILL name=${skill.name} description=${skill.description} />\n`;
        if (skill.examples) {
          details += `<EXAMPLES>\n${skill.examples.join('\n')}\n</EXAMPLES>\n`;
        }
        details += '</SKILL>\n';
      }
      details += '</Agent Details>\n';
    }

    return details;
  }

  private _defaultBuildTaskSendParams(_card: schema.AgentCard, message: string): schema.TaskSendParams {
    return buildTaskSendParams(message);
  }
}

export const buildTaskSendParams = (message: string, metadata?: Record<string, any>): schema.TaskSendParams => {
  return {
    id: generateRequestId().toString(),
    message: { role: 'user', parts: [{ type: 'text' as const, text: message }] },
    metadata,
  };
};