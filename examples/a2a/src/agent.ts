import { AsyncLocalStorage } from 'node:async_hooks';

import { AzureOpenAI } from 'openai';

import type { RunnableToolFunction } from 'openai/lib/RunnableFunction';

import type {
  ChatCompletionMessageParam,
} from 'openai/resources/chat/completions';

import { ILogger } from '@microsoft/teams.common';

import { A2APeerClient } from './a2a-client';
import { Config, HandoffMessage, TurnIdentity } from './types';


export type AgentOptions = {
  client: AzureOpenAI;
  deploymentName: string;
  config: Config;
  a2aClient: A2APeerClient;
  log: ILogger;
};


const TURN_STORAGE = new AsyncLocalStorage<TurnIdentity>();

/**
 * Bot LLM with a single `handoff_to_peer` tool. Keeps one
 * `ChatCompletionMessageParam[]` per Teams conversation, so a user's history
 * with this bot persists across turns. When a peer hands a user off to us,
 * the seeded greeting turn is recorded against the new DM's conversation ID
 * so that subsequent replies pick up coherently.
 *
 */
export class Agent {
  private readonly _client: AzureOpenAI;
  private readonly _deployment: string;
  private readonly _config: Config;
  private readonly _a2aClient: A2APeerClient;
  private readonly _log: ILogger;
  private readonly _histories = new Map<string, ChatCompletionMessageParam[]>();
  private readonly _locks = new Map<string, Promise<unknown>>();

  private _systemPromptPromise?: Promise<string>;

  constructor(opts: AgentOptions) {
    this._client = opts.client;
    this._deployment = opts.deploymentName;
    this._config = opts.config;
    this._a2aClient = opts.a2aClient;
    this._log = opts.log;
  }

  /**
   * Handle one user turn from Teams. Returns the assistant reply text.
   */
  async run(teamsConvId: string, identity: TurnIdentity, userText: string): Promise<string> {
    return this._serialize(teamsConvId, async () => {
      const history = await this._getOrCreateHistory(teamsConvId);
      history.push({ role: 'user', content: userText });
      return TURN_STORAGE.run(identity, () => this._runTurn(teamsConvId, history));
    });
  }

  /**
   * Generate the proactive opening message when a peer hands off a user.
   * Pushes the handoff context as a system instruction.
   * The resulting turn is left in the per-conversation history,
   * so subsequent user replies continue naturally.
   */
  async greetWithHandoff(teamsConvId: string, handoff: HandoffMessage): Promise<string> {
    const prompt =
      `[handoff context from ${handoff.from}] The user ${handoff.userName} was just handed off to you. ` +
      `They asked: "${handoff.summary}". ` +
      `Greet them warmly, acknowledge that ${handoff.from} connected you, and answer their question directly.`;

    // No TurnIdentity is set: a handoff greeting must not itself call
    // handoff_to_peer (that would ping-pong). The tool guards against it.
    return this._serialize(teamsConvId, async () => {
      const history = await this._getOrCreateHistory(teamsConvId);
      history.push({ role: 'system', content: prompt });
      return this._runTurn(teamsConvId, history);
    });
  }

  private async _runTurn(teamsConvId: string, history: ChatCompletionMessageParam[]): Promise<string> {
    const runner = this._client.chat.completions.runTools({
      model: this._deployment,
      messages: history,
      tools: [this._buildHandoffTool()],
    });

    const completion = await runner.finalChatCompletion();
    const fullText = completion.choices[0]?.message?.content ?? '';

    // Sync our history with the runner's view: it includes the system +
    // user + every tool_call / tool result / assistant message added
    // during the auto-loop, so the next turn sees the full prior context.
    this._histories.set(teamsConvId, runner.messages as ChatCompletionMessageParam[]);

    return fullText;
  }

  /**
   * Per-conversation history mutation is serialized by chaining each turn
   * onto the previous turn's promise — concurrent submits would otherwise
   * interleave assistant/tool messages.
   */
  private _serialize<T>(teamsConvId: string, fn: () => Promise<T>): Promise<T> {
    const previous = this._locks.get(teamsConvId) ?? Promise.resolve();
    const turn = previous.then(fn);
    this._locks.set(
      teamsConvId,
      turn.catch(() => {})
    );
    return turn;
  }

  private async _getOrCreateHistory(
    teamsConvId: string
  ): Promise<ChatCompletionMessageParam[]> {
    let history = this._histories.get(teamsConvId);
    if (!history) {
      history = [{ role: 'system', content: await this._getSystemPrompt() }];
      this._histories.set(teamsConvId, history);
    }
    return history;
  }

  private _getSystemPrompt(): Promise<string> {
    if (!this._systemPromptPromise) {
      this._systemPromptPromise = this._a2aClient
        .getPeerCard()
        .then((card) => card.description || '(no description)')
        .catch((err) => {
          this._log.warn(
            `Peer AgentCard unreachable at startup, falling back to env name only: ${(err as Error).message}`
          );
          return `(peer card not reachable; configured name: ${this._config.peerName})`;
        })
        .then((peerDescription) =>
          [
            `You are ${this._config.name}, a Teams bot. Your specialty: ${this._config.description}.`,
            '',
            'You have one peer:',
            `- ${this._config.peerName}: ${peerDescription}`,
            '',
            'Guidelines:',
            `- If the user's question fits ${this._config.peerName}'s specialty better than your own, call handoff_to_peer with a clear summary. Then briefly tell the user you're handing them over.`,
            '- Otherwise, answer directly.',
            '- If you see a "[handoff context from X]" note, the previous bot has already connected the user with you and described their question — greet the user warmly, briefly mention X sent them, and **answer the question directly** in the same message. Don\'t just ask "how can I help?" — the question is already in the context.',
            '- Keep replies short and conversational.',
          ].join('\n')
        );
    }
    return this._systemPromptPromise;
  }

  private _buildHandoffTool(): RunnableToolFunction<{ summary: string }> {
    return {
      type: 'function',
      function: {
        name: 'handoff_to_peer',
        description:
          'Hand off the current user to your peer when their expertise is a better fit. ' +
          'Pass a concise summary of the discussion so the peer can pick up cold. ' +
          'The peer will then message the user directly.',
        parameters: {
          type: 'object',
          properties: {
            summary: {
              type: 'string',
              description:
                'Concise summary of what\'s been discussed and the user\'s current question, written so the peer can pick up cold.',
            },
          },
          required: ['summary'],
          additionalProperties: false,
        },
        function: async (args: { summary: string }) => {
          const identity = TURN_STORAGE.getStore();
          if (!identity) {
            // Called from a handoff greeting (no identity) — guard against ping-pong.
            return 'handoff_to_peer is unavailable in this context.';
          }

          this._log.info(
            `[${this._config.name}] handoff_to_peer firing → peer=${this._config.peerName} user=${identity.userName} aadId=${identity.aadObjectId}`
          );

          const payload: HandoffMessage = {
            kind: 'handoff',
            from: this._config.name,
            userName: identity.userName,
            aadObjectId: identity.aadObjectId,
            tenantId: identity.tenantId,
            serviceUrl: identity.serviceUrl,
            summary: args.summary,
          };

          await this._a2aClient.sendHandoff(payload);
          this._log.info(`[${this._config.name}] handoff_to_peer OK`);
          return 'Handoff confirmed. The peer will message the user directly.';
        },
        parse: (raw: string) => JSON.parse(raw) as { summary: string },
      },
    };
  }
}
