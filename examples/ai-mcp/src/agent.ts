import type { AzureOpenAI } from 'openai';

import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

import { IStreamer } from '@microsoft/teams.apps';
import { AdaptiveCard } from '@microsoft/teams.cards';
import { ILogger } from '@microsoft/teams.common';


import { CitationCollector } from './citation-collector';
import { buildClarificationTool } from './local-tools';
import { McpToolSet } from './mcp-tools';
import { FOLLOW_UPS_PROMPT, SYSTEM_PROMPT } from './prompts';

const FOLLOW_UPS_SCHEMA = {
  type: 'object',
  properties: {
    prompt1: { type: 'string' },
    prompt2: { type: 'string' },
  },
  required: ['prompt1', 'prompt2'],
  additionalProperties: false,
} as const;

export type AgentRunResult = {
  fullText: string;
  pendingCard: AdaptiveCard | null;
  citations: CitationCollector;
  followUps: string[];
};

/**
 * Provider-neutral contract consumed by the Teams activity handlers.
 */
export interface IAgentRunner {
  /**
   * Runs one serialized conversation turn and streams its text into Teams.
   */
  run(teamsConvId: string, userText: string, stream: IStreamer): Promise<AgentRunResult>;
}

export type AgentOptions = {
  client: AzureOpenAI;
  deploymentName: string;
  mcpTools: McpToolSet;
  log: ILogger;
};

/**
 * Agent for one Teams bot. Holds the Azure OpenAI client, the MCP tool set,
 * and per-conversation chat history.
 *
 * The tool-call loop is driven by the OpenAI SDK's `runTools()` helper,
 * which auto-executes each `function` callback we declare on the tools and
 * re-prompts the model with the result until the model produces final text.
 * Per-turn side effects (pushing the clarification card, extracting MCP
 * citations) ride along inside those tool callbacks via closure-captured
 * buckets.
 *
 * Per-conversation history mutation is serialized by chaining each turn
 * onto the previous turn's promise — concurrent submits (e.g. clarification
 * race) would otherwise interleave assistant/tool messages.
 */
export class Agent implements IAgentRunner {
  private readonly _client: AzureOpenAI;
  private readonly _deployment: string;
  private readonly _mcpTools: McpToolSet;
  private readonly _log: ILogger;
  private readonly _histories = new Map<string, ChatCompletionMessageParam[]>();
  private readonly _locks = new Map<string, Promise<unknown>>();

  constructor(opts: AgentOptions) {
    this._client = opts.client;
    this._deployment = opts.deploymentName;
    this._mcpTools = opts.mcpTools;
    this._log = opts.log;
  }

  async run(teamsConvId: string, userText: string, stream: IStreamer): Promise<AgentRunResult> {
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
    // Card-only reply: discard the wrap-up text the model produced after
    // the clarification tool returned. The card itself is the bot's reply.
    const replyText = pendingCard ? '' : fullText;
    const followUps = pendingCard ? [] : await this._generateFollowUps(history);

    return { fullText: replyText, pendingCard, citations, followUps };
  }

  /**
   * Drives one chat-completions run with auto tool-calling and streaming.
   * Returns the accumulated assistant text. History is updated in place by
   * the runner; we copy `runner.messages` back into our map.
   */
  private async _streamWithTools(
    history: ChatCompletionMessageParam[],
    pendingCards: AdaptiveCard[],
    citations: CitationCollector,
    stream: IStreamer
  ): Promise<string> {
    const tools = [
      buildClarificationTool(pendingCards, this._log),
      ...this._mcpTools.asRunnableTools(citations),
    ];

    const runner = this._client.chat.completions.runTools({
      model: this._deployment,
      messages: history,
      tools,
      stream: true,
    });

    let fullText = '';
    runner.on('content', (delta: string) => {
      fullText += delta;
      stream.emit(delta);
    });

    await runner.done();

    // Sync our history with the runner's view: it includes the system +
    // user + every tool_call / tool result / assistant message added
    // during the auto-loop, so the next turn sees the full prior context.
    const ran = runner.messages as ChatCompletionMessageParam[];
    history.splice(0, history.length, ...ran);

    return fullText;
  }

  private _getOrCreateHistory(teamsConvId: string): ChatCompletionMessageParam[] {
    let history = this._histories.get(teamsConvId);
    if (!history) {
      history = [{ role: 'system', content: SYSTEM_PROMPT }];
      this._histories.set(teamsConvId, history);
    }
    return history;
  }

  /**
   * Generates two follow-up prompts via a separate non-streaming call with
   * a strict JSON schema. Any parse/network failure silently degrades to
   * no chips so the main reply still ships.
   */
  private async _generateFollowUps(history: ChatCompletionMessageParam[]): Promise<string[]> {
    try {
      const completion = await this._client.chat.completions.create({
        model: this._deployment,
        messages: [...history, { role: 'system', content: FOLLOW_UPS_PROMPT }],
        response_format: {
          type: 'json_schema',
          json_schema: {
            name: 'follow_ups',
            strict: true,
            schema: FOLLOW_UPS_SCHEMA,
          },
        },
      });

      const raw = completion.choices[0]?.message?.content ?? '';
      const parsed = JSON.parse(raw) as { prompt1?: string; prompt2?: string };
      return [parsed.prompt1, parsed.prompt2].filter(
        (s): s is string => typeof s === 'string' && s.length > 0
      );
    } catch (err) {
      this._log.warn(`Follow-up generation failed: ${(err as Error).message}`);
      return [];
    }
  }
}
