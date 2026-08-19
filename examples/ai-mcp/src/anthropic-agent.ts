import Anthropic from '@anthropic-ai/sdk';

import { IStreamer } from '@microsoft/teams.apps';
import { AdaptiveCard } from '@microsoft/teams.cards';
import { ILogger } from '@microsoft/teams.common';

import type { IAgentRunner, AgentRunResult } from './agent';
import { CitationCollector } from './citation-collector';
import {
  CLARIFICATION_TOOL_NAME,
  CLARIFICATION_TOOL_SCHEMA,
  executeClarificationTool,
} from './local-tools';
import { McpToolSet } from './mcp-tools';
import { FOLLOW_UPS_PROMPT, SYSTEM_PROMPT } from './prompts';

const MAX_TOOL_ROUNDS = 8;

/**
 * Configuration for the Anthropic-backed agent.
 */
export type AnthropicAgentOptions = {
  /** Anthropic SDK client authenticated with the developer's API key. */
  client: Anthropic;
  /** Claude model identifier sent with every Messages API request. */
  model: string;
  /** Maximum output tokens allowed for each model request. */
  maxTokens?: number;
  /** Connected MCP tool set shared across conversations. */
  mcpTools: McpToolSet;
  /** Logger used for provider and tool diagnostics. */
  log: ILogger;
};

/**
 * Anthropic Messages API implementation of the provider-neutral Teams agent contract.
 */
export class AnthropicAgent implements IAgentRunner {
  private readonly _client: Anthropic;
  private readonly _model: string;
  private readonly _maxTokens: number;
  private readonly _mcpTools: McpToolSet;
  private readonly _log: ILogger;
  private readonly _histories = new Map<string, Anthropic.MessageParam[]>();
  private readonly _locks = new Map<string, Promise<unknown>>();

  constructor(options: AnthropicAgentOptions) {
    this._client = options.client;
    this._model = options.model;
    this._maxTokens = options.maxTokens ?? 4096;
    this._mcpTools = options.mcpTools;
    this._log = options.log;
  }

  async run(
    teamsConvId: string,
    userText: string,
    stream: IStreamer
  ): Promise<AgentRunResult> {
    const previous = this._locks.get(teamsConvId) ?? Promise.resolve();
    const turn = previous.then(() => this._runTurn(teamsConvId, userText, stream));
    this._locks.set(
      teamsConvId,
      turn.catch(() => {})
    );
    return turn;
  }

  private async _runTurn(
    teamsConvId: string,
    userText: string,
    stream: IStreamer
  ): Promise<AgentRunResult> {
    const history = this._getOrCreateHistory(teamsConvId);
    history.push({ role: 'user', content: userText });

    const citations = new CitationCollector();
    const pendingCards: AdaptiveCard[] = [];

    stream.update('Thinking...');

    const fullText = await this._streamWithTools(history, pendingCards, citations, stream);
    const pendingCard = pendingCards[0] ?? null;
    const replyText = pendingCard ? '' : fullText;
    const followUps = pendingCard ? [] : await this._generateFollowUps(history);

    return { fullText: replyText, pendingCard, citations, followUps };
  }

  private async _streamWithTools(
    history: Anthropic.MessageParam[],
    pendingCards: AdaptiveCard[],
    citations: CitationCollector,
    teamsStream: IStreamer
  ): Promise<string> {
    const tools = this._buildTools();
    let fullText = '';

    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      const modelStream = this._client.messages
        .stream({
          model: this._model,
          max_tokens: this._maxTokens,
          system: SYSTEM_PROMPT,
          messages: history,
          tools,
        })
        .on('text', (text) => {
          fullText += text;
          teamsStream.emit(text);
        });

      const response = await modelStream.finalMessage();
      const assistantContent = toAssistantContent(response.content);
      history.push({ role: 'assistant', content: assistantContent });

      const toolUses = response.content.filter(
        (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use'
      );
      if (toolUses.length === 0) {
        return fullText;
      }

      const toolResults = await Promise.all(
        toolUses.map((toolUse) => this._executeTool(toolUse, pendingCards, citations))
      );
      history.push({ role: 'user', content: toolResults });
    }

    throw new Error(`Anthropic tool loop exceeded ${MAX_TOOL_ROUNDS} rounds.`);
  }

  private _buildTools(): Anthropic.Tool[] {
    return [
      {
        name: CLARIFICATION_TOOL_NAME,
        description:
          'Show an Adaptive Card asking the user to clarify an ambiguous request. ' +
          'Use this when two or more interpretations are plausible.',
        input_schema: {
          ...CLARIFICATION_TOOL_SCHEMA,
          type: 'object',
        },
      },
      ...this._mcpTools.tools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        input_schema: {
          ...tool.parameters,
          type: 'object' as const,
        },
      })),
    ];
  }

  private async _executeTool(
    toolUse: Anthropic.ToolUseBlock,
    pendingCards: AdaptiveCard[],
    citations: CitationCollector
  ): Promise<Anthropic.ToolResultBlockParam> {
    try {
      const content =
        toolUse.name === CLARIFICATION_TOOL_NAME
          ? await executeClarificationTool(toolUse.input, pendingCards, this._log)
          : await this._mcpTools.execute(toolUse.name, toRecord(toolUse.input), citations);

      return {
        type: 'tool_result',
        tool_use_id: toolUse.id,
        content,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this._log.error(`Tool ${toolUse.name} failed: ${message}`);
      return {
        type: 'tool_result',
        tool_use_id: toolUse.id,
        content: `Tool error: ${message}`,
        is_error: true,
      };
    }
  }

  private _getOrCreateHistory(teamsConvId: string): Anthropic.MessageParam[] {
    let history = this._histories.get(teamsConvId);
    if (!history) {
      history = [];
      this._histories.set(teamsConvId, history);
    }
    return history;
  }

  private async _generateFollowUps(history: Anthropic.MessageParam[]): Promise<string[]> {
    try {
      const response = await this._client.messages.create({
        model: this._model,
        max_tokens: 200,
        system: `${SYSTEM_PROMPT}\n\nReturn valid JSON only with string properties "prompt1" and "prompt2".`,
        messages: [...history, { role: 'user', content: FOLLOW_UPS_PROMPT }],
      });
      const raw = response.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('');
      const json = raw.match(/\{[\s\S]*\}/)?.[0];
      if (!json) {
        throw new Error('Claude did not return a JSON object.');
      }

      const parsed = JSON.parse(json) as { prompt1?: unknown; prompt2?: unknown };
      return [parsed.prompt1, parsed.prompt2].filter(
        (prompt): prompt is string => typeof prompt === 'string' && prompt.length > 0
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this._log.warn(`Follow-up generation failed: ${message}`);
      return [];
    }
  }
}

function toAssistantContent(
  content: Anthropic.ContentBlock[]
): Anthropic.ContentBlockParam[] {
  return content.flatMap((block): Anthropic.ContentBlockParam[] => {
    if (block.type === 'text') {
      return [{ type: 'text', text: block.text }];
    }
    if (block.type === 'tool_use') {
      return [{
        type: 'tool_use',
        id: block.id,
        name: block.name,
        input: block.input,
      }];
    }
    return [];
  });
}

function toRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('Tool input must be a JSON object.');
  }
  return value as Record<string, unknown>;
}
