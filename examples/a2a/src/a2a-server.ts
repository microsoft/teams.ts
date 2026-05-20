import { Client as TeamsApiClient } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ILogger } from '@microsoft/teams.common';

import { Agent } from './agent';
import { Config, HandoffMessage, isHandoffMessage } from './types';

import type {
  AgentExecutor,
  ExecutionEventBus,
  RequestContext,
} from '@a2a-js/sdk/server';

/**
 * Inbound A2A. Implements `AgentExecutor` from `@a2a-js/sdk` — the SDK calls
 * `execute()` for every inbound A2A message. We:
 *   1. Pull the HandoffMessage out of the inbound DataPart.
 *   2. Create a fresh 1:1 conversation with the user via the user's
 *      `serviceUrl` (matches the .NET sample's explicit-serviceUrl flow).
 *   3. Ask the agent to seed that conversation's history with the handoff
 *      context + greeting, then send the greeting as a proactive message.
 *   4. Publish a short ack back through the A2A event bus so the sending
 *      bot's `sendMessage` call resolves.
 *
 * Knows about Teams (creates the proactive DM) but nothing about the LLM —
 * the agent owns that.
 */
export class HandoffAgentExecutor implements AgentExecutor {
  private readonly _app: App;
  private readonly _agent: Agent;
  private readonly _config: Config;
  private readonly _log: ILogger;

  constructor(app: App, agent: Agent, config: Config, log: ILogger) {
    this._app = app;
    this._agent = agent;
    this._config = config;
    this._log = log;
  }

  execute = async (ctx: RequestContext, bus: ExecutionEventBus): Promise<void> => {
    try {
      const handoff = this._extractHandoff(ctx);

      if (!handoff) {
        this._publishText(bus, ctx, 'Unsupported or incomplete handoff message.');
        bus.finished();
        return;
      }

      this._log.info(
        `[${this._config.name}/A2A] received handoff: from=${handoff.from} user=${handoff.userName} aadId=${handoff.aadObjectId} tenant=${handoff.tenantId}`
      );

      const newConvId = await this._openDmWithUser(handoff);

      // Run the LLM with the handoff context so the greeting answers the
      // question that came in the summary. The LLM's turn is stored in the
      // per-conversation history, so subsequent user replies continue.
      const greeting = await this._agent.greetWithHandoff(newConvId, handoff);

      await this._app.send(newConvId, greeting);
      this._log.info(`[${this._config.name}/A2A] proactive greeting sent (conv=${newConvId})`);

      this._publishText(
        bus,
        ctx,
        `Handoff received and ${handoff.userName} contacted directly.`
      );
      bus.finished();
    } catch (err) {
      this._log.error(`[${this._config.name}/A2A] handoff failed: ${(err as Error).message}`);
      this._publishText(bus, ctx, `Handoff failed: ${(err as Error).message}`);
      bus.finished();
    }
  };

  cancelTask = async (): Promise<void> => {
    // Handoffs are single-shot; nothing to cancel.
  };

  private _extractHandoff(ctx: RequestContext): HandoffMessage | null {
    const dataPart = ctx.userMessage.parts.find((p) => p.kind === 'data');
    if (!dataPart || dataPart.kind !== 'data') return null;
    return isHandoffMessage(dataPart.data) ? dataPart.data : null;
  }

  /**
   * Creates a 1:1 with the user against THEIR serviceUrl (taken from the
   * inbound activity the peer bot saw).
   */
  private async _openDmWithUser(handoff: HandoffMessage): Promise<string> {
    const api = new TeamsApiClient(handoff.serviceUrl, this._app.api.http);
    const conv = await api.conversations.create({
      tenantId: handoff.tenantId,
      members: [
        { id: handoff.aadObjectId, role: 'user', name: handoff.userName },
      ],
    });
    if (!conv.id) {
      throw new Error('CreateConversation returned no id.');
    }
    return conv.id;
  }

  private _publishText(bus: ExecutionEventBus, ctx: RequestContext, text: string): void {
    bus.publish({
      kind: 'message',
      role: 'agent',
      messageId: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
      contextId: ctx.contextId,
      parts: [{ kind: 'text', text }],
    });
  }
}
