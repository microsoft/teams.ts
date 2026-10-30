import {
  ActivityParams,
  Client,
  getPlanInfo,
  IMessageActivityInput,
  MessageActivityInput,
  PlanType,
  SentActivity,
  Step,
} from '@microsoft/teams.api';
import { EventEmitter } from '@microsoft/teams.common';

/**
 * Bind a Plan to its originating prompt and inject the runtime client.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export type PlanOptions = {
  /** Conversation ID, including any thread suffix, used for every Plan send. */
  readonly conversationId: string;
  /** Original prompt activity ID, not a later event, answer, or stream ID. */
  readonly replyToId: string;
  /** Runtime-only client, already scoped to the conversation's service URL and caller. */
  readonly apiClient: Client;
};

/**
 * Sends prompt-bound Plan activities; the application owns ordering and concurrency.
 * Serialize the IDs with JSON.stringify() and inject a client when reconstructing.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export class Plan {
  /**
   * Emits the SentActivity once after a successful send, before the method returns.
   * Listeners are runtime-only and are not serialized.
   */
  readonly events = new EventEmitter<{ sent: SentActivity }>();

  /** Conversation ID to which this Plan is bound. */
  readonly conversationId: string;

  /** Original prompt ID to which all Plan activities reply. */
  readonly replyToId: string;

  private readonly api: Client;

  /** Create a Plan from saved IDs and a configured client; no request or client cloning occurs. */
  constructor(options: PlanOptions) {
    this.conversationId = options.conversationId;
    this.replyToId = options.replyToId;
    this.api = options.apiClient;
  }

  /** Serialize only the prompt binding, excluding the client, credentials, and listeners. */
  toJSON(): Pick<PlanOptions, 'conversationId' | 'replyToId'> {
    return { conversationId: this.conversationId, replyToId: this.replyToId };
  }

  /** Start the bound Plan with the supplied ordered steps; API failures propagate. */
  async start(steps: readonly Step[]): Promise<void> {
    await this.sendUpdate('start', steps);
  }

  /** Send new or changed steps, with versions incremented by the application. */
  async update(steps: readonly Step[]): Promise<void> {
    await this.sendUpdate('continue', steps);
  }

  /** Stop the displayed Plan without canceling application-owned work. */
  async stop(): Promise<void> {
    await this.sendUpdate('stop');
  }

  /** Report a failed Plan without canceling application-owned work. */
  async error(): Promise<void> {
    await this.sendUpdate('error');
  }

  /**
   * Build a fresh completion message without sending or changing this Plan.
   * Emit it last on a stream for the same conversation, then explicitly close the stream.
   * The original prompt ID is preserved; use the returned builder to add final metadata.
   */
  completion(): MessageActivityInput {
    return new MessageActivityInput('', {
      replyToId: this.replyToId,
      entities: [{ type: 'planInfo', planType: 'complete' }],
    });
  }

  /** Complete with an answer, preserving metadata and rejecting non-complete Plan operations. */
  async complete(message: string | IMessageActivityInput): Promise<SentActivity> {
    const input = typeof message === 'string'
      ? new MessageActivityInput(message)
      : MessageActivityInput.from(structuredClone(MessageActivityInput.from(message)));
    if (input.entities?.some((entity) => entity.type === 'planInfo' && entity.planType !== 'complete')) {
      throw new TypeError('complete() cannot send non-complete Plan operations.');
    }
    if (!getPlanInfo(input)) input.addEntity({ type: 'planInfo', planType: 'complete' });
    return this.send(input);
  }

  private async sendUpdate(planType: PlanType, steps?: readonly Step[]) {
    return this.send({
      type: 'typing',
      entities: [{ type: 'planInfo', planType, ...(steps === undefined ? {} : { steps: [...steps] }) }],
    });
  }

  private async send(activity: ActivityParams): Promise<SentActivity> {
    const payload = {
      ...structuredClone(activity),
      replyToId: this.replyToId,
      conversation: { id: this.conversationId },
    };
    const result = await this.api.conversations.createActivity(this.conversationId, payload);
    const sent = { ...payload, ...result };
    this.events.emit('sent', sent);
    return sent;
  }
}
