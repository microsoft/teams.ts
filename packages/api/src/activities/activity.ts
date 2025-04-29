import {
  Account,
  ChannelData,
  ChannelID,
  ChannelInfo,
  CitationAppearance,
  ConversationAccount,
  ConversationReference,
  Entity,
  MeetingInfo,
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

  withReplyToId(value: string) {
    this.replyToId = value;
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

  withRelatesTo(value: ConversationReference) {
    this.relatesTo = value;
    return this;
  }

  withRecipient(value: Account) {
    this.recipient = value;
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
    this.channelData = { ...this.channelData, ...value };
    return this;
  }

  /**
   * Add an entity.
   */
  addEntity(value: Entity) {
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
    if (!this.entities) {
      this.entities = [];
    }

    this.entities.push(...value);
    return this;
  }

  /**
   * Add the `Generated By AI` label.
   */
  addAiGenerated() {
    return this.addEntity({
      type: 'https://schema.org/Message',
      '@type': 'Message',
      '@context': 'https://schema.org',
      additionalType: ['AIGeneratedContent'],
    });
  }

  /**
   * Enable message feedback
   */
  addFeedback() {
    if (!this.channelData) {
      this.channelData = {};
    }

    this.channelData.feedbackLoopEnabled = true;
    return this;
  }

  /**
   * Add citations
   */
  addCitation(position: number, appearance: CitationAppearance) {
    return this.addEntity({
      type: 'https://schema.org/Message',
      '@type': 'Claim',
      position,
      appearance: {
        '@type': 'DigitalDocument',
        abstract: appearance.abstract,
        name: appearance.name,
        encodingFormat: 'application/vnd.microsoft.card.adaptive',
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
  }

  /**
   * is this a streaming activity
   */
  isStreaming() {
    return this.entities?.some((e) => e.type === 'streaminfo') || false;
  }
}
