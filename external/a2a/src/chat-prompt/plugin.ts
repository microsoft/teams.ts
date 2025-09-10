import { AgentCard, Message, MessageSendParams, Task, TextPart } from '@a2a-js/sdk';
import { A2AClient } from '@a2a-js/sdk/client';
import camelCase from 'lodash.camelcase';
import { v4 as uuidv4 } from 'uuid';

import {
  Function as ChatFunction,
  ChatPromptPlugin,
} from '@microsoft/teams.ai';

import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import {
  A2AClientPluginOptions,
  A2APluginUseParams,
  AgentPromptParams,
  BuildFunctionMetadata,
  BuildMessageForAgent,
  BuildMessageFromAgentResponse,
  BuildPrompt,
} from './types';

interface IAgentConfig {
  key: string;
  cardUrl: string;
  buildFunctionMetadata?: BuildFunctionMetadata;
  buildMessageForAgent?: BuildMessageForAgent;
  buildMessageFromAgentResponse?: BuildMessageFromAgentResponse;
}

interface IAgentClientInfo extends IAgentConfig {
  client: A2AClient;
  agentCard: AgentCard;
}

const pascalCase = (str: string) => {
  return camelCase(str).replace(/^(.)/, (match) => match.toUpperCase());
};

export class A2AClientPlugin
  implements ChatPromptPlugin<'a2a', A2APluginUseParams> {
  readonly name = 'a2a';

  public readonly log: ILogger;
  protected _agentConfigs: Map<string, IAgentConfig> = new Map();
  protected _clients: Map<string, IAgentClientInfo> = new Map();

  protected buildFunctionMetadata?: BuildFunctionMetadata;
  protected buildPrompt?: BuildPrompt;
  protected buildMessageForAgent?: BuildMessageForAgent;
  protected buildMessageFromAgentResponse?: BuildMessageFromAgentResponse;

  constructor(options: A2AClientPluginOptions = {}) {
    this.buildFunctionMetadata = options.buildFunctionMetadata;
    this.buildPrompt = options.buildPrompt;
    this.buildMessageForAgent = options.buildMessageForAgent;
    this.buildMessageFromAgentResponse = options.buildMessageFromAgentResponse;
    this.log = options.logger ?? new ConsoleLogger('a2a:client');
  }

  onUsePlugin(args: A2APluginUseParams) {
    // Just store the config, defer client creation to onBuildFunctions
    this._agentConfigs.set(args.key, {
      key: args.key,
      cardUrl: args.cardUrl,
      buildFunctionMetadata: args.buildFunctionMetadata,
      buildMessageForAgent: args.buildMessageForAgent,
      buildMessageFromAgentResponse: args.buildMessageFromAgentResponse,
    });
  }

  async onBuildFunctions(functions: ChatFunction[]): Promise<ChatFunction[]> {
    const allFunctions: ChatFunction[] = [];

    for (const [key, config] of this._agentConfigs) {
      try {
        const agentCard = await this._getAgentCard(key, config);
        if (!agentCard) {
          continue; // Skip if we couldn't get the agent card
        }

        // Use custom function metadata builder or default
        const buildMetadata =
          config.buildFunctionMetadata ||
          this.buildFunctionMetadata ||
          this._defaultFunctionMetadata;

        const { name, description } = buildMetadata(agentCard);

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
          handler: (async (args: { message: string }) => {
            try {
              const agentMessage = args.message;

              // Use custom message builder if provided, otherwise use default
              const buildMessage =
                config.buildMessageForAgent ||
                this.buildMessageForAgent ||
                this._defaultBuildMessage.bind(this);

              const messageOrString = buildMessage(agentCard, agentMessage);

              // Handle both Message and string returns
              const message: Message = typeof messageOrString === 'string'
                ? this._createMessage(messageOrString, agentCard)
                : messageOrString;

              const sendParams: MessageSendParams = { message };

              // Get the client info to send the message
              const clientInfo = this._clients.get(key);
              if (!clientInfo) {
                throw new Error(`Client not found for agent ${key}`);
              }

              this.log.debug(`Calling agent ${agentCard.name} with ${JSON.stringify(messageOrString)}`);
              const response = await clientInfo.client.sendMessage(sendParams);
              this.log.debug(`Got response from ${agentCard.name}`);

              if ('error' in response) {
                return response.error.message;
              }

              const result = response.result;

              // Use custom response builder if provided, otherwise use default
              const buildResponse =
                config.buildMessageFromAgentResponse ||
                this.buildMessageFromAgentResponse ||
                this._defaultBuildMessageFromAgentResponse.bind(this);

              return buildResponse(agentCard, result, agentMessage);
            } catch (e) {
              console.error(e);
              throw e;
            }
          }).bind(this),
        });
        this.log.debug(`Added function in ChatPrompt to call ${agentCard.name}`);
      } catch (error) {
        console.error(`Failed to build function for agent ${key}:`, error);
        // Continue with other agents even if one fails
      }
    }

    return functions.concat(allFunctions);
  }

  async onBuildPrompt(
    systemPrompt: string | undefined
  ): Promise<string | undefined> {
    // Collect agent details for prompt building
    const agentPromptParams: AgentPromptParams[] = [];

    for (const [key, config] of this._agentConfigs) {
      try {
        const agentCard = await this._getAgentCard(key, config);
        if (agentCard) {
          const clientInfo = this._clients.get(key);
          if (clientInfo) {
            agentPromptParams.push({
              card: agentCard,
              client: clientInfo.client,
            });
          }
        }
      } catch (error) {
        console.error(`Failed to get agent card for ${key}:`, error);
      }
    }

    // Use custom buildPrompt if provided, otherwise use default
    if (this.buildPrompt) {
      return this.buildPrompt(systemPrompt, agentPromptParams);
    }

    // Default prompt building
    if (agentPromptParams.length === 0) {
      return systemPrompt;
    }

    const agentDetails = agentPromptParams
      .map(({ card }) => {
        let details = `<Agent Details>\n<Name>\n${card.name}\n</Name>\n`;
        if (card.description) {
          details += `<Description>\n${card.description}\n</Description>\n`;
        }
        if (card.skills?.length) {
          for (const skill of card.skills) {
            details += `<SKILL name="${skill.name}" description="${skill.description}" />\n`;
            if (skill.examples?.length) {
              details += `<EXAMPLES>\n${skill.examples.join('\n')}\n</EXAMPLES>\n`;
            }
          }
        }
        // Could add client-specific info here if needed
        details += '</Agent Details>\n';
        return details;
      })
      .join('');

    const prompt = (systemPrompt || '') +
      '\n\nHere are details about available agents that you can message:\n' +
      agentDetails;

    return prompt;
  }

  private _defaultFunctionMetadata(
    card: AgentCard
  ): { name: string; description: string } {
    const name = `message${pascalCase(card.name)}`;
    const description = card.description || `Interact with ${card.name} agent`;
    return { name, description };
  }

  private _defaultBuildMessage(
    card: AgentCard,
    input: string,
    metadata?: Record<string, any>
  ): Message {
    return this._createMessage(input, card, metadata);
  }

  private _createMessage(
    text: string,
    _card?: AgentCard,
    metadata?: Record<string, any>
  ): Message {
    return {
      messageId: uuidv4(),
      role: 'user', // Messages TO agents are from user perspective
      parts: [{ kind: 'text', text }],
      kind: 'message',
      // Include metadata if provided
      ...(metadata && { metadata }),
    };
  }

  private _defaultBuildMessageFromAgentResponse(
    _card: AgentCard,
    response: Message | Task,
    _originalInput: string
  ): string {
    // Extract text from response parts
    if (response.kind === 'message') {
      const textParts = response.parts
        .filter((part): part is TextPart => part.kind === 'text')
        .map(part => part.text);
      return textParts.join(' ') || 'Agent responded with no text content.';
    } else {
      return 'Agent responded with non-message content.';
    }
  }

  private async _getAgentCard(key: string, config: IAgentConfig): Promise<AgentCard | null> {
    // Return cached client info if it exists
    let clientInfo = this._clients.get(key);
    if (clientInfo) {
      return clientInfo.agentCard;
    }

    // Create new client and get agent card
    try {
      const client = await A2AClient.fromCardUrl(config.cardUrl);

      // Get the agent card from the client
      const agentCard = await client.getAgentCard();

      clientInfo = {
        ...config,
        client,
        agentCard,
      };

      this._clients.set(key, clientInfo);
      return agentCard;
    } catch (error) {
      console.error(`Error creating client or fetching agent card for ${key}:`, error);
      return null;
    }
  }
}
