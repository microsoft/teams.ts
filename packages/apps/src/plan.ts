import {
  ActivityParams,
  Client,
  ConversationReference,
  getPlanInfo,
  IMessageActivityInput,
  MessageActivityInput,
  PlanType,
  SentActivity,
  Step,
} from '@microsoft/teams.api';

export class Plan {
  private readonly ref: ConversationReference;
  private readonly api: Client;

  /**
   * @param replyToId Original prompt activity ID, not the answer or stream ID.
   */
  constructor(api: Client, ref: ConversationReference, private readonly replyToId: string) {
    if (!replyToId) throw new TypeError('A Plan requires a prompt replyToId.');
    this.ref = structuredClone(ref);
    this.api = api.fromServiceUrl({ serviceUrl: this.ref.serviceUrl });
  }

  async start(steps: readonly Step[]): Promise<void> {
    await this.sendUpdate('start', steps);
  }

  async update(steps: readonly Step[]): Promise<void> {
    await this.sendUpdate('continue', steps);
  }

  async stop(): Promise<void> {
    await this.sendUpdate('stop');
  }

  async error(): Promise<void> {
    await this.sendUpdate('error');
  }

  /** Complete with an answer, preserving metadata. */
  async completePlan(message: string | IMessageActivityInput): Promise<SentActivity> {
    const input = typeof message === 'string'
      ? new MessageActivityInput(message)
      : MessageActivityInput.from(structuredClone(message));
    const plan = getPlanInfo(input);
    if (plan && plan.planType !== 'complete') {
      throw new TypeError('completePlan() cannot send non-complete Plan operations.');
    }
    if (!plan) input.addEntity({ type: 'planInfo', planType: 'complete' });
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
      from: structuredClone(this.ref.bot),
      conversation: structuredClone(this.ref.conversation),
    };
    const result = await this.api.conversations.createActivity(this.ref.conversation.id, payload);
    return { ...payload, ...result };
  }
}
