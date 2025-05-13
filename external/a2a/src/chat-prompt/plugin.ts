import camelCase from 'camelcase';

import {
  Function as ChatFunction,
  ChatPromptPlugin,
} from '@microsoft/teams.ai';

import { AgentCardWithDetails, AgentManager } from '../client/agent-manager';
import * as schema from '../common/schema';
import { generateRequestId } from '../common/uuid';

import {
  A2APluginOptions,
  A2APluginUseParams,
  AgentPromptParams,
  BuildFunctionMetadata,
  BuildPrompt,
  BuildTaskSendParams,
} from './types';

export class A2AClientPlugin
  implements ChatPromptPlugin<'a2a', A2APluginUseParams> {
  readonly name = 'a2a';
  protected _manager: AgentManager;
  protected buildFunctionMetadata?: BuildFunctionMetadata;
  protected buildPrompt?: BuildPrompt;
  protected buildTaskSendParams?: BuildTaskSendParams;
  protected _agentConfig: Map<string, Partial<A2APluginUseParams>> = new Map();

  constructor(options: A2APluginOptions = {}) {
    this._manager = options.manager instanceof AgentManager ? options.manager : new AgentManager(options.manager);
    this.buildFunctionMetadata = options.buildFunctionMetadata;
    this.buildPrompt = options.buildPrompt;
    this.buildTaskSendParams = options.buildTaskSendParams;
  }

  onUsePlugin(args: A2APluginUseParams) {
    this._manager.use(args.key, args.url, args.agentCard);
    // Store per-agent config (excluding agentCard and url)
    const { key, url, agentCard, ...rest } = args;
    this._agentConfig.set(key, rest);
  }

  async onBuildFunctions(functions: ChatFunction[]): Promise<ChatFunction[]> {
    const cards: (AgentCardWithDetails | null)[] = await this._manager.getAgentCards();
    const allFunctions: ChatFunction[] = [];
    for (const cardWithMeta of cards) {
      if (!cardWithMeta) {
        continue;
      }
      const { key, card } = cardWithMeta;
      const agentConfig = this._agentConfig.get(key) || {};
      const buildFunctionMetadata =
        agentConfig.buildFunctionMetadata ||
        this.buildFunctionMetadata ||
        this._defaultFunctionMetadata;
      const buildTaskSendParams =
        agentConfig.buildTaskSendParams ||
        this.buildTaskSendParams ||
        this._defaultBuildTaskSendParams;
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
            continueTaskId: {
              type: 'string',
              description:
                'If provided, continue an existing task with this ID (string). Otherwise send null or NONE to indicate a new task.',
            },
          },
          required: ['message'],
        },
        handler: async (args: {
          message: string;
          continueTaskId?: string | null;
        }) => {
          const agentMessage = args.message;
          if (!agentMessage) {
            throw new Error(
              `An input message is required to call Agent ${name}!`
            );
          }
          const continueTaskId =
            args.continueTaskId != null
              ? args.continueTaskId.toLowerCase() === 'none'
                ? null
                : args.continueTaskId || null
              : null;
          const sendParams = buildTaskSendParams(
            card,
            agentMessage,
            continueTaskId
          );
          const result = await this._manager.sendTask(key, sendParams);
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
  async onBuildPrompt(
    systemPrompt: string | undefined
  ): Promise<string | undefined> {
    const cardsWithMeta: (AgentCardWithDetails | null)[] =
      await this._manager.getAgentCards();

    // Lookup latest tasks for all agents first
    const agentsWithLatestTask: AgentPromptParams[] = [];
    for (const cardWithMeta of cardsWithMeta) {
      if (!cardWithMeta) {
        continue;
      }
      const { key, card } = cardWithMeta;
      const latestTask = await this._manager.getLatestTask(key);
      agentsWithLatestTask.push({ card, latestTask });
    }

    // If the user supplied a buildPrompt, use it
    if (this.buildPrompt) {
      return this.buildPrompt(systemPrompt, agentsWithLatestTask);
    }
    const prompt =
      (systemPrompt || '') +
      '\n' +
      this._defaultBuildPrompt(agentsWithLatestTask);
    return prompt;
  }

  private _defaultFunctionMetadata(card: schema.AgentCard): {
    name: string;
    description: string;
  } {
    const name = `message${camelCase(card.name, { pascalCase: true })}`;
    const description =
      card.description || `Interact with agent at ${card.url}`;
    return { name, description };
  }

  private _defaultBuildPrompt(agentDetails: AgentPromptParams[]): string {
    let details =
      'Here are details about available agents that you can message. Determine the best phrasing to use when you are attempting to message them.';
    for (const { card, latestTask } of agentDetails) {
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
      if (latestTask) {
        const lastMessage =
          latestTask.history && latestTask.history.length > 0
            ? latestTask.history[latestTask.history.length - 1].parts
              .map((p: schema.Part) =>
                p.type === 'text' ? p.text : '[non-text]'
              )
              .join(' ')
            : '';
        details += `<PREVIOUS_TASK_DETAILS taskId=${latestTask.task.id} state=${latestTask.task.status.state} lastMessage=${lastMessage}\n</PREVIOUS_TASK_DETAILS>`;
      }
      details += '</Agent Details>\n';
    }
    return details;
  }

  private _defaultBuildTaskSendParams(
    _card: schema.AgentCard,
    message: string,
    continueTaskId?: string | null,
    metadata?: Record<string, any>
  ): schema.TaskSendParams {
    return buildTaskSendParams(message, metadata, continueTaskId);
  }
}

export const buildTaskSendParams = (
  message: string,
  metadata?: Record<string, any>,
  continueTaskId?: string | null
): schema.TaskSendParams => {
  return {
    id: continueTaskId || generateRequestId().toString(),
    message: {
      role: 'user',
      parts: [{ type: 'text' as const, text: message }],
    },
    metadata,
  };
};
