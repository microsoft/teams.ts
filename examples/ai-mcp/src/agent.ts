import { AIProjectClient } from '@azure/ai-projects';
import { TokenCredential } from '@azure/core-auth';

import { IStreamer } from '@microsoft/teams.apps';
import type { AdaptiveCard } from '@microsoft/teams.cards';
import { ILogger } from '@microsoft/teams.common';


import { CitationCollector } from './citation-collector';
import {
  buildClarificationCard,
  CLARIFICATION_FUNCTION_TOOL,
  CLARIFICATION_TOOL_NAME,
  ClarificationArgs,
} from './local-tools';

import type OpenAI from 'openai';

const AGENT_NAME = 'teams-ai-mcp-bot';
const MS_LEARN_MCP_URL = 'https://learn.microsoft.com/api/mcp';

const SYSTEM_PROMPT = `\
You are a Teams docs assistant that can search Microsoft Learn (Teams, .NET, TypeScript, Microsoft Graph, Azure)
and explain bot concepts (streaming, Adaptive Cards, citations, feedback).

When you use information from a search tool, cite your sources inline using a 1-based numeric marker for each result
you reference (e.g. [1], [2]). Use the same number consistently for the same source within a reply.
Do not add a references or sources list at the end of your response — citations are displayed separately in the UI.

If the user's request is ambiguous or could mean two or more things, call the request_clarification tool with a short
question and 2-4 candidate interpretations rather than guessing. The user's chosen option will arrive as that
function's return value.`;

const FOLLOW_UPS_PROMPT = `\
Produce 2 specific prompts the user might want to ask next, based on the conversation so far.

Each prompt MUST:
- Be phrased in the first person, as the user would type.
- Stay under 8 words.

Drill into a concrete topic, API, or concept that just came up — or, if the conversation just started, suggest
prompts that showcase what you can help with.`;

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

export type AgentCreateOptions = {
  projectEndpoint: string;
  credential: TokenCredential;
  deploymentName: string;
  log: ILogger;
};

/**
 * Wraps a Foundry agent. The agent is created in Azure at startup (one version
 * per process lifetime) and deleted on shutdown.
 *
 * Foundry abstracts the tool-call loop entirely for MCP (`require_approval:
 * "never"` means Azure executes MCP calls server-side and folds the results
 * back into the response). Only our local function tool needs client-side
 * handling, and that handling is *deliberately* non-loop: when the agent
 * calls `request_clarification`, we surface the card to the user and resume
 * the conversation asynchronously when they pick an option — the user's
 * choice becomes the function's return value.
 *
 * Conversation memory lives in Azure (one Foundry `conversation` per Teams
 * conversation id). We keep a `Map<teamsConvId, foundryConvId>` so successive
 * turns chain via the same Foundry conversation.
 *
 * Per-conversation turn ordering is enforced by chaining each turn onto the
 * previous turn's promise — clarification-submit races with new user input
 * would otherwise interleave Foundry inputs.
 */
export class Agent {
  private readonly _project: AIProjectClient;
  private readonly _openAI: OpenAI;
  private readonly _deploymentName: string;
  private readonly _agentName: string;
  private readonly _agentVersion: string;
  private readonly _log: ILogger;
  private readonly _conversations = new Map<string, string>();
  private readonly _conversationsPending = new Map<string, Promise<string>>();
  private readonly _locks = new Map<string, Promise<unknown>>();

  private constructor(
    project: AIProjectClient,
    openAI: OpenAI,
    deploymentName: string,
    agentName: string,
    agentVersion: string,
    log: ILogger
  ) {
    this._project = project;
    this._openAI = openAI;
    this._deploymentName = deploymentName;
    this._agentName = agentName;
    this._agentVersion = agentVersion;
    this._log = log;
  }

  static async create(opts: AgentCreateOptions): Promise<Agent> {
    const project = new AIProjectClient(opts.projectEndpoint, opts.credential);
    const openAI = project.getOpenAIClient();

    opts.log.info(`Registering Foundry agent "${AGENT_NAME}" on model "${opts.deploymentName}"...`);
    const agent = await project.agents.createVersion(AGENT_NAME, {
      kind: 'prompt',
      model: opts.deploymentName,
      instructions: SYSTEM_PROMPT,
      tools: [
        CLARIFICATION_FUNCTION_TOOL,
        {
          type: 'mcp',
          server_label: 'ms_learn',
          server_url: MS_LEARN_MCP_URL,
          require_approval: 'never',
        },
      ],
    });
    opts.log.info(`Agent ready (name: ${agent.name}, version: ${agent.version}).`);

    return new Agent(project, openAI, opts.deploymentName, agent.name, agent.version, opts.log);
  }

  /** Delete the Foundry agent version this process created. Safe to call multiple times. */
  async cleanup(): Promise<void> {
    try {
      await this._project.agents.deleteVersion(this._agentName, this._agentVersion);
      this._log.info(`Deleted agent version (${this._agentName}@${this._agentVersion}).`);
    } catch (err) {
      this._log.warn(`Agent cleanup failed: ${(err as Error).message}`);
    }
  }

  /** Run a user message against the agent and stream the reply. */
  async run(teamsConvId: string, userText: string, stream: IStreamer): Promise<AgentRunResult> {
    return this._queue(teamsConvId, () => this._execute(teamsConvId, userText, stream));
  }

  /**
   * Resume an in-flight clarification call by submitting the user's chosen
   * option as the function's return value. Triggers a new agent turn that
   * the model can ground on the choice.
   */
  async submitClarification(
    teamsConvId: string,
    callId: string,
    choice: string,
    stream: IStreamer
  ): Promise<AgentRunResult> {
    const input: OpenAI.Responses.ResponseInputItem[] = [
      { type: 'function_call_output', call_id: callId, output: choice },
    ];
    return this._queue(teamsConvId, () => this._execute(teamsConvId, input, stream));
  }

  private _queue<T>(teamsConvId: string, task: () => Promise<T>): Promise<T> {
    const previous = this._locks.get(teamsConvId) ?? Promise.resolve();
    const next = previous.then(task);
    this._locks.set(
      teamsConvId,
      next.catch(() => {})
    );
    return next;
  }

  private async _execute(
    teamsConvId: string,
    input: string | OpenAI.Responses.ResponseInputItem[],
    stream: IStreamer
  ): Promise<AgentRunResult> {
    const foundryConvId = await this._ensureConversation(teamsConvId);

    stream.update('Thinking...');

    const responseStream = this._openAI.responses.stream(
      { conversation: foundryConvId, input },
      { body: { agent_reference: { name: this._agentName, type: 'agent_reference' } } }
    );

    let fullText = '';
    let completedResponse: OpenAI.Responses.Response | null = null;

    for await (const event of responseStream) {
      if (event.type === 'response.output_text.delta') {
        fullText += event.delta;
        stream.emit(event.delta);
      } else if (event.type === 'response.completed') {
        completedResponse = event.response;
      }
    }

    const citations = new CitationCollector();
    let pendingCard: AdaptiveCard | null = null;

    for (const item of completedResponse?.output ?? []) {
      if (isFunctionCallItem(item) && item.name === CLARIFICATION_TOOL_NAME) {
        const args = safeParseArgs<ClarificationArgs>(item.arguments);
        this._log.info(
          `[tool] request_clarification(question=${args.question ?? ''}, ` +
            `options=[${(args.options ?? []).join(', ')}])`
        );
        if (args.question && Array.isArray(args.options)) {
          pendingCard = buildClarificationCard(
            { question: args.question, options: args.options },
            item.call_id
          );
        }
      } else if (isMcpCallItem(item)) {
        this._log.info(`[mcp] ${item.name}(${item.arguments ?? ''})`);
        if (typeof item.output === 'string') {
          citations.tryExtract(item.output);
        }
      }
    }

    // If the agent emitted a clarification card, discard any streamed text —
    // the card is the bot's reply, same as the .NET sample's pendingCards path.
    if (pendingCard) fullText = '';

    const followUps = pendingCard
      ? []
      : await this._generateFollowUps(completedResponse?.id);

    return { fullText, pendingCard, citations, followUps };
  }

  /**
   * Lazily create a Foundry conversation for a Teams conversation, dedup'd
   * so concurrent first-turns don't open two conversations for the same
   * Teams thread.
   */
  private async _ensureConversation(teamsConvId: string): Promise<string> {
    const existing = this._conversations.get(teamsConvId);
    if (existing) return existing;

    const inflight = this._conversationsPending.get(teamsConvId);
    if (inflight) return inflight;

    const pending = (async () => {
      const conv = await this._openAI.conversations.create();
      this._conversations.set(teamsConvId, conv.id);
      this._log.info(`Created Foundry conversation ${conv.id} for Teams ${teamsConvId}.`);
      return conv.id;
    })();

    this._conversationsPending.set(teamsConvId, pending);
    try {
      return await pending;
    } finally {
      this._conversationsPending.delete(teamsConvId);
    }
  }

  /**
   * Generates two follow-up prompts using a plain (non-agent) responses
   * call. We pass `previous_response_id` so the model has the conversation
   * context but doesn't go through the tool-using agent for what's a tiny
   * structured-output classification task. Any failure degrades to no chips.
   */
  private async _generateFollowUps(previousResponseId: string | undefined): Promise<string[]> {
    if (!previousResponseId) return [];

    try {
      const response = await this._openAI.responses.create({
        model: this._deploymentName,
        previous_response_id: previousResponseId,
        input: FOLLOW_UPS_PROMPT,
        text: {
          format: {
            type: 'json_schema',
            name: 'follow_ups',
            schema: FOLLOW_UPS_SCHEMA,
            strict: true,
          },
        },
      });

      const parsed = JSON.parse(response.output_text) as { prompt1?: string; prompt2?: string };
      return [parsed.prompt1, parsed.prompt2].filter(
        (s): s is string => typeof s === 'string' && s.length > 0
      );
    } catch (err) {
      this._log.warn(`Follow-up generation failed: ${(err as Error).message}`);
      return [];
    }
  }
}

function isFunctionCallItem(
  item: OpenAI.Responses.ResponseOutputItem
): item is OpenAI.Responses.ResponseFunctionToolCall {
  return item.type === 'function_call';
}

type McpCallItem = {
  type: 'mcp_call';
  name: string;
  arguments?: string;
  output?: string | null;
};

function isMcpCallItem(item: OpenAI.Responses.ResponseOutputItem): item is McpCallItem & OpenAI.Responses.ResponseOutputItem {
  return (item as { type?: string }).type === 'mcp_call';
}

function safeParseArgs<T>(raw: string | undefined): Partial<T> {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Partial<T>;
  } catch {
    return {};
  }
}
