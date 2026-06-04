import {
  Account,
  AIMessageEntity,
  ChannelData,
  ChannelID,
  ChannelInfo,
  CitationAppearance,
  CitationEntity,
  ConversationAccount,
  ConversationReference,
  Entity,
  MeetingInfo,
  MessageEntity,
  NotificationInfo,
  TeamInfo,
} from '../models';

export interface IActivity<T extends string = string> {
  /**
   * Contains the type of the activity.
   */
  readonly type: T;

  /**
   * Contains an ID that uniquely identifies the activity on the channel.
   */
  id: string;

  /**
   * Contains the URL that specifies the channel's service endpoint. Set by the channel.
   */
  serviceUrl?: string;

  /**
   * Contains the date and time that the message was sent, in UTC, expressed in ISO-8601 format.
   */
  timestamp?: Date;

  /**
   * A locale name for the contents of the text field.
   * The locale name is a combination of an ISO 639 two- or three-letter culture code associated
   * with a language
   * and an ISO 3166 two-letter subculture code associated with a country or region.
   * The locale name can also correspond to a valid BCP-47 language tag.
   */
  locale?: string;

  /**
   * Contains the local date and time of the message, expressed in ISO-8601 format.
   *
   * For example, 2016-09-23T13:07:49.4714686-07:00.
   */
  localTimestamp?: Date;

  /**
   * Contains an ID that uniquely identifies the channel. Set by the channel.
   */
  channelId: ChannelID;

  /**
   * Identifies the sender of the message.
   */
  from: Account;

  /**
   * Identifies the conversation to which the activity belongs.
   */
  conversation: ConversationAccount;

  /**
   * A reference to another conversation or activity.
   * @deprecated This will be removed by end of summer 2026.
   */
  relatesTo?: ConversationReference;

  /**
   * Identifies the recipient of the message.
   */
  recipient: Account;

  /**
   * Contains the ID of the message to which this message is a reply.
   */
  replyToId?: string;

  /**
   * Represents the entities that were mentioned in the message.
   */
  entities?: Entity[];

  /**
   * Contains channel-specific content.
   */
  channelData?: ChannelData;

  /**
   * Information about the channel in which the message was sent.
   */
  get channel(): ChannelInfo | undefined;

  /**
   * Information about the team in which the message was sent.
   */
  get team(): TeamInfo | undefined;

  /**
   * Information about the tenant in which the message was sent.
   */
  get meeting(): MeetingInfo | undefined;

  /**
   * Notification settings for the message.
   */
  get notification(): NotificationInfo | undefined;

  /**
   * is this a streaming activity
   */
  isStreaming(): boolean;
}

export class Activity<T extends string = string> implements IActivity<T> {
  /**
   * Contains the type of the activity.
   */
  readonly type!: T;

  /**
   * Contains an ID that uniquely identifies the activity on the channel.
   */
  id!: string;

  /**
   * Contains the URL that specifies the channel's service endpoint. Set by the channel.
   */
  serviceUrl?: string;

  /**
   * Contains the date and time that the message was sent, in UTC, expressed in ISO-8601 format.
   */
  timestamp?: Date;

  /**
   * A locale name for the contents of the text field.
   * The locale name is a combination of an ISO 639 two- or three-letter culture code associated
   * with a language
   * and an ISO 3166 two-letter subculture code associated with a country or region.
   * The locale name can also correspond to a valid BCP-47 language tag.
   */
  locale?: string;

  /**
   * Contains the local date and time of the message, expressed in ISO-8601 format.
   *
   * For example, 2016-09-23T13:07:49.4714686-07:00.
   */
  localTimestamp?: Date;

  /**
   * Contains an ID that uniquely identifies the channel. Set by the channel.
   */
  channelId!: ChannelID;

  /**
   * Identifies the sender of the message.
   */
  from!: Account;

  /**
   * Identifies the conversation to which the activity belongs.
   */
  conversation!: ConversationAccount;

  /**
   * A reference to another conversation or activity.
   * @deprecated This will be removed by end of summer 2026.
   */
  relatesTo?: ConversationReference;

  /**
   * Identifies the recipient of the message.
   */
  recipient!: Account;

  /**
   * Contains the ID of the message to which this message is a reply.
   */
  replyToId?: string;

  /**
   * Represents the entities that were mentioned in the message.
   */
  entities?: Entity[];

  /**
   * Contains channel-specific content.
   */
  channelData?: ChannelData;

  /**
   * Information about the tenant in which the message was sent.
   */
  get tenant() {
    return this.channelData?.tenant;
  }

  /**
   * Information about the channel in which the message was sent.
   */
  get channel() {
    return this.channelData?.channel;
  }

  /**
   * Information about the team in which the message was sent.
   */
  get team() {
    return this.channelData?.team;
  }

  /**
   * Information about the tenant in which the message was sent.
   */
  get meeting() {
    return this.channelData?.meeting;
  }

  /**
   * Notification settings for the message.
   */
  get notification() {
    return this.channelData?.notification;
  }

  constructor(value: Pick<IActivity<T>, 'type'> & Partial<Omit<IActivity<T>, 'type'>>) {
    Object.assign(this, {
      channelId: 'msteams',
      ...value,
    });
  }

  static from(activity: IActivity) {
    return new Activity(activity);
  }

  toInterface(): IActivity {
    return Object.assign({}, this);
  }

  clone(options: Omit<Partial<IActivity>, 'type'> = {}) {
    return new Activity({
      ...this.toInterface(),
      ...options,
    });
  }

  withId(value: string) {
    this.id = value;
    return this;
  }

  withChannelId(value: ChannelID) {
    this.channelId = value;
    return this;
  }

  withFrom(value: Account) {
    this.from = value;
    return this;
  }

  withConversation(value: ConversationAccount) {
    this.conversation = value;
    return this;
  }

  /**
   * @deprecated This will be removed by end of summer 2026.
   */
  withRelatesTo(value: ConversationReference) {
    this.relatesTo = value;
    return this;
  }

  /**
   * Set the recipient of this activity, optionally marking it as a targeted message.
   * Targeted messages are ephemeral to the specified recipient in a shared conversation.
   * @param value - The recipient account
   * @param isTargeted - If true, marks this as a targeted message visible only to the recipient (default: false)
   * @returns this instance for chaining
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsTargeted
   */
  withRecipient(value: Account, isTargeted: boolean = false) {
    this.recipient = { ...value, isTargeted: isTargeted ? true : undefined };
    return this;
  }

  withServiceUrl(value: string) {
    this.serviceUrl = value;
    return this;
  }

  withTimestamp(value: Date) {
    this.timestamp = value;
    return this;
  }

  withLocale(value: string) {
    this.locale = value;
    return this;
  }

  withLocalTimestamp(value: Date) {
    this.localTimestamp = value;
    return this;
  }

  withChannelData(value: ChannelData) {
    const merged: ChannelData = { ...this.channelData, ...value };

    if (merged.feedbackLoop !== undefined) {
      merged.feedbackLoopEnabled = undefined;
    } else if (merged.feedbackLoopEnabled === true) {
      merged.feedbackLoop = { type: 'default' };
      merged.feedbackLoopEnabled = undefined;
    }

    this.channelData = merged;
    return this;
  }

  /**
   * Add an entity.
   */
  addEntity(value: Entity) {
    if (this.isRootLevelMessageEntity(value)) {
      this.mergeRootLevelMessageEntity(this.ensureSingleRootLevelMessageEntity(), value);
      return this;
    }

    if (!this.entities) {
      this.entities = [];
    }

    this.entities.push(value);
    return this;
  }

  /**
   * Add multiple entities
   */
  addEntities(...value: Entity[]) {
    for (const entity of value) {
      this.addEntity(entity);
    }

    return this;
  }

  /**
   * Add the `Generated By AI` label.
   */
  addAiGenerated() {
    const messageEntity: AIMessageEntity = this.ensureSingleRootLevelMessageEntity();
    if (messageEntity.additionalType?.includes('AIGeneratedContent')) {
      return this;
    }

    if (!messageEntity.additionalType) {
      messageEntity.additionalType = [];
    }

    messageEntity.additionalType.push('AIGeneratedContent');
    return this;
  }

  /**
   * Enable message feedback.
   * @param mode - `'default'` shows Teams' built-in thumbs up/down UI.
   *               `'custom'` triggers a `message/fetchTask` invoke so the bot can return its own task module dialog.
   */
  addFeedback(mode: 'default' | 'custom' = 'default') {
    if (!this.channelData) {
      this.channelData = {};
    }

    this.channelData.feedbackLoop = { type: mode };
    this.channelData.feedbackLoopEnabled = undefined;
    return this;
  }

  /**
   * Add citations
   */
  addCitation(position: number, appearance: CitationAppearance) {
    const messageEntity: CitationEntity = this.ensureSingleRootLevelMessageEntity();
    if (!messageEntity.citation) {
      messageEntity.citation = [];
    }

    messageEntity.citation.push({
      '@type': 'Claim',
      position,
      appearance: {
        '@type': 'DigitalDocument',
        abstract: appearance.abstract,
        name: appearance.name,
        encodingFormat: appearance.text ? 'application/vnd.microsoft.card.adaptive' : undefined,
        image: appearance.icon
          ? {
              '@type': 'ImageObject',
              name: appearance.icon,
            }
          : undefined,
        keywords: appearance.keywords,
        text: appearance.text,
        url: appearance.url,
        usageInfo: appearance.usageInfo,
      },
    });

    return this;
  }

  /**
   * Add a targeted message info entity for prompt preview.
   * Skips if already present. In reactive flows, `ctx.send()` and `ctx.reply()`
   * populate this automatically — use this helper for proactive or deferred sends.
   * An invalid or expired messageId causes APX to silently drop the preview
   * while still delivering the message.
   *
   * @param messageId the message ID of the targeted message (from the incoming activity's `id`)
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsTargeted
   */
  addTargetedMessageInfo(messageId: string) {
    if (this.entities) {
      this.entities = this.entities.filter((e) => e.type !== 'quotedReply');
    }

    if (this.type === 'message') {
      const msg = this as unknown as { text?: string };

      if (msg.text) {
        msg.text = msg.text.replace(`<quoted messageId="${messageId}"/>`, '').trim();
      }
    }

    if (this.entities?.some((e) => e.type === 'targetedMessageInfo')) {
      return this;
    }

    return this.addEntity({
      type: 'targetedMessageInfo',
      messageId,
    });
  }

  /**
   * is this a streaming activity
   */
  isStreaming() {
    return this.entities?.some((e) => e.type === 'streaminfo') || false;
  }

  /**
   * Get or create the base message entity.
   * There should only be one root level message entity.
   */
  private ensureSingleRootLevelMessageEntity(): MessageEntity {
    let messageEntity = this.entities?.find(
      (e) => this.isRootLevelMessageEntity(e)
    ) as MessageEntity | undefined;

    if (!messageEntity) {
      messageEntity = {
        type: 'https://schema.org/Message',
        '@type': 'Message',
        '@context': 'https://schema.org',
        '@id': '',
      };
      if (!this.entities) {
        this.entities = [];
      }
      this.entities.push(messageEntity);
    }

    return messageEntity;
  }

  private isRootLevelMessageEntity(entity: Entity): entity is MessageEntity {
    return entity.type === 'https://schema.org/Message' && entity['@type'] === 'Message';
  }

  private mergeRootLevelMessageEntity(target: MessageEntity, source: MessageEntity): MessageEntity {
    const merged: MessageEntity = {
      ...target,
      ...source,
    };

    if (target.additionalType || source.additionalType) {
      merged.additionalType = [
        ...new Set([...(target.additionalType || []), ...(source.additionalType || [])]),
      ];
    }

    if (target.citation || source.citation) {
      const dedupedCitations = new Map<number, NonNullable<typeof target.citation>[number]>();

      for (const citation of [...(target.citation || []), ...(source.citation || [])]) {
        dedupedCitations.set(citation.position, citation);
      }

      merged.citation = Array.from(dedupedCitations.values());
    }

    Object.assign(target, merged);
    return target;
  }
}
