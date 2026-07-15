import {
  Account,
  Attachment,
  AttachmentLayout,
  cardAttachment,
  CardAttachmentType,
  CardAttachmentTypes,
  DeliveryMode,
  Importance,
  InputHint,
  MentionEntity,
  QuotedReplyEntity,
  SuggestedActions,
  TextFormat,
} from '../../models';
import { Activity, ActivityInput, IActivity, IActivityInput } from '../activity';
import { stripMentionsText, StripMentionsTextOptions } from '../utils';

export interface IMessageActivity extends IActivity<'message'> {
  /**
   * The text content of the message.
   */
  text: string;

  /**
   * The text to speak.
   * @deprecated This will be removed by end of summer 2026.
   */
  speak?: string;

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
   * @deprecated This will be removed by end of summer 2026.
   */
  inputHint?: InputHint;

  /**
   * The text to display if the channel cannot render cards.
   */
  summary?: string;

  /**
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml', 'extendedmarkdown'. See {@link TextFormat} for all values
   */
  textFormat?: TextFormat;

  /**
   * The layout hint for multiple attachments. Default: list. Possible values include: 'list',
   * 'carousel'
   */
  attachmentLayout?: AttachmentLayout;

  /**
   * Attachments
   */
  attachments?: Attachment[];

  /**
   * The suggested actions for the activity.
   */
  suggestedActions?: SuggestedActions;

  /**
   * The importance of the activity. Possible values include: 'low', 'normal', 'high'
   * @deprecated This will be removed by end of summer 2026.
   */
  importance?: Importance;

  /**
   * A delivery hint to signal to the recipient alternate delivery paths for the activity.
   * The default delivery mode is "default". Possible values include: 'normal', 'notification'
   */
  deliveryMode?: DeliveryMode;

  /**
   * The time at which the activity should be considered to be "expired" and should not be
   * presented to the recipient.
   * @deprecated This will be removed by end of summer 2026.
   */
  expiration?: Date;

  /**
   * A value that is associated with the activity.
   */
  value?: any;

  /**
   * remove "\<at>...\</at>" text from an activity
   */
  stripMentionsText(options?: StripMentionsTextOptions): IMessageActivity;

  /**
   * is the recipient account mentioned
   */
  isRecipientMentioned(): boolean;

  /**
   * get a mention by the account id if exists
   */
  getAccountMention(accountId: string): MentionEntity | undefined;

  /**
   * get all quoted reply entities from this message
   */
  getQuotedMessages(): QuotedReplyEntity[];
}

/**
 * OUTBOUND message activity — what the app SENDS.
 *
 * All server-populated base fields optional (via {@link IActivityInput}) and the
 * message-specific fields optional too, so both a plain `{ type: 'message', text }`
 * literal and a {@link MessageActivityInput} builder instance are assignable. The message
 * fields are copied here instead of derived from {@link IMessageActivity}, keeping the
 * outbound input shape independent from the inbound activity interface. Use
 * {@link MessageActivityInputOptions} to include unmodeled extension fields when constructing
 * a {@link MessageActivityInput}.
 */
export interface IMessageActivityInput extends IActivityInput<'message'> {
  /**
   * Message text.
   */
  text?: string;

  /**
   * Format of the message text.
   */
  textFormat?: TextFormat;

  /**
   * Layout hint for multiple attachments.
   */
  attachmentLayout?: AttachmentLayout;

  /**
   * Attachments sent with the message.
   */
  attachments?: Attachment[];

  /**
   * Suggested actions presented with the message.
   */
  suggestedActions?: SuggestedActions;
}

/**
 * Constructor fields for {@link MessageActivityInput}.
 *
 * This accepts modeled outbound message fields plus channel/service extension fields that
 * should serialize at the top level of the outbound activity payload. The constructor owns
 * the `type` discriminator and message `text`; pass text as the first constructor argument
 * or set it with {@link MessageActivityInput.withText}.
 */
export type MessageActivityInputOptions = Omit<Partial<IMessageActivityInput>, 'type' | 'text'> &
  Record<string, unknown>;

/**
 * Builder for outbound message activities.
 */
export class MessageActivityInput extends ActivityInput<'message'> implements IMessageActivityInput {
  /**
   * Message text.
   */
  text?: string;

  /**
   * Format of the message text.
   */
  textFormat?: TextFormat;

  /**
   * Layout hint for multiple attachments.
   */
  attachmentLayout?: AttachmentLayout;

  /**
   * Attachments sent with the message.
   */
  attachments?: Attachment[];

  /**
   * Suggested actions presented with the message.
   */
  suggestedActions?: SuggestedActions;

  /**
   * Create an outbound message activity input.
   * @param text - Initial message text.
   * @param value - Initial modeled input fields and unmodeled extension fields to serialize.
   */
  constructor(text: string = '', value: MessageActivityInputOptions = {}) {
    super('message');

    const { type: _type, text: _text, ...fields } = value;

    Object.assign(this, fields, { text });
  }

  /**
   * Copy outbound-safe fields from a message-like activity input.
   * @param activity - Message input to copy.
   */
  static from(activity: IMessageActivity): MessageActivityInput;
  static from(activity: IMessageActivityInput): MessageActivityInput;
  static from(activity: IMessageActivity | IMessageActivityInput): MessageActivityInput;
  static from(activity: IMessageActivity | IMessageActivityInput) {
    const text = activity.text ?? '';
    const {
      type: _type,
      text: _text,
      from: _from,
      conversation: _conversation,
      channelId: _channelId,
      serviceUrl: _serviceUrl,
      timestamp: _timestamp,
      localTimestamp: _localTimestamp,
      relatesTo: _relatesTo,
      stripMentionsText: _stripMentionsText,
      isRecipientMentioned: _isRecipientMentioned,
      getAccountMention: _getAccountMention,
      getQuotedMessages: _getQuotedMessages,
      ...value
    } = activity as Partial<IMessageActivity> & Record<string, unknown>;

    return new MessageActivityInput(text, value);
  }

  /**
   * Set the message text.
   * @param value - Message text.
   */
  withText(value: string) {
    this.text = value;
    return this;
  }

  /**
   * Append text to the message.
   * @param value - Text to append.
   */
  addText(value: string) {
    this.text = `${this.text || ''}${value}`;
    return this;
  }

  /**
   * Set the message text format.
   * @param value - Text format.
   */
  withTextFormat(value: TextFormat) {
    this.textFormat = value;
    return this;
  }

  /**
   * Set the attachment layout.
   * @param value - Attachment layout.
   */
  withAttachmentLayout(value: AttachmentLayout) {
    this.attachmentLayout = value;
    return this;
  }

  /**
   * Set suggested actions for the message.
   * @param value - Suggested actions.
   */
  withSuggestedActions(value: SuggestedActions) {
    this.suggestedActions = value;
    return this;
  }

  /**
   * Add attachments to the message.
   * @param value - Attachments to add.
   */
  addAttachments(...value: Attachment[]) {
    if (!this.attachments) {
      this.attachments = [];
    }

    this.attachments.push(...value);
    return this;
  }

  /**
   * Add a card attachment to the message.
   * @param type - Card attachment type.
   * @param content - Card content.
   */
  addCard<T extends CardAttachmentType>(type: T, content: CardAttachmentTypes[T]['content']) {
    return this.addAttachments(cardAttachment(type, content));
  }

  /**
   * Add a mention entity and optionally append mention text.
   * @param account - Account being mentioned.
   * @param options - Mention options.
   */
  addMention(account: Account, options: AddMentionOptions = {}) {
    const text = options.text || account.name;

    if (options.addText !== false) {
      this.addText(`<at>${text}</at>`);
    }

    return this.addEntity({
      type: 'mention',
      mentioned: account,
      text: `<at>${text}</at>`,
    });
  }

  /**
   * Mark the message as the final activity in a stream.
   */
  addStreamFinal() {
    if (!this.channelData) {
      this.channelData = {};
    }

    const streamId = this.channelData.streamId || this.id || '';
    const streamSequence = this.channelData.streamSequence ?? 1;

    this.channelData.streamId = streamId;
    this.channelData.streamType = 'final';
    this.channelData.streamSequence = streamSequence;

    this.addEntity({
      type: 'streaminfo',
      streamId,
      streamType: 'final',
      streamSequence,
    });

    return this;
  }

  /**
   * Add a quoted message reference and append a `<quoted messageId="..."/>` placeholder to text.
   * Teams renders the quoted message as a preview bubble above the response text.
   * If text is provided, it is appended to the quoted message placeholder.
   * @param messageId - The ID of the message to quote
   * @param text - Optional text, appended to the quoted message placeholder
   * @returns this instance for chaining
   */
  addQuote(messageId: string, text?: string): this {
    if (!this.entities) {
      this.entities = [];
    }
    this.entities.push({
      type: 'quotedReply',
      quotedReply: { messageId },
    });
    this.addText(`<quoted messageId="${messageId}"/>`);
    if (text) {
      this.addText(` ${text}`);
    }
    return this;
  }

  /**
   * Prepend a quotedReply entity and `<quoted messageId="..."/>` placeholder
   * before existing text. Used by reply()/quote() for quote-above-response.
   * @param messageId - The IC3 message ID of the message to quote
   */
  prependQuote(messageId: string): this {
    if (!this.entities) {
      this.entities = [];
    }
    this.entities.push({
      type: 'quotedReply',
      quotedReply: { messageId },
    });
    const placeholder = `<quoted messageId="${messageId}"/>`;
    const hasText = !!this.text?.trim();
    this.text = hasText ? `${placeholder} ${this.text}` : placeholder;
    return this;
  }
}

// Extends the full inbound Activity shape for backcompat; send() converts instances to MessageActivityInput.
export class MessageActivity extends Activity<'message'> implements IMessageActivity {
  /**
   * The text content of the message.
   */
  text!: string;

  /**
   * The text to speak.
   * @deprecated This will be removed by end of summer 2026.
   */
  speak?: string;

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
   * @deprecated This will be removed by end of summer 2026.
   */
  inputHint?: InputHint;

  /**
   * The text to display if the channel cannot render cards.
   */
  summary?: string;

  /**
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml', 'extendedmarkdown'. See {@link TextFormat} for all values
   */
  textFormat?: TextFormat;

  /**
   * The layout hint for multiple attachments. Default: list. Possible values include: 'list',
   * 'carousel'
   */
  attachmentLayout?: AttachmentLayout;

  /**
   * Attachments
   */
  attachments?: Attachment[];

  /**
   * The suggested actions for the activity.
   */
  suggestedActions?: SuggestedActions;

  /**
   * The importance of the activity. Possible values include: 'low', 'normal', 'high'
   * @deprecated This will be removed by end of summer 2026.
   */
  importance?: Importance;

  /**
   * A delivery hint to signal to the recipient alternate delivery paths for the activity.
   * The default delivery mode is "default". Possible values include: 'normal', 'notification'
   */
  deliveryMode?: DeliveryMode;

  /**
   * The time at which the activity should be considered to be "expired" and should not be
   * presented to the recipient.
   * @deprecated This will be removed by end of summer 2026.
   */
  expiration?: Date;

  /**
   * A value that is associated with the activity.
   */
  value?: any;

  constructor(text: string = '', value: Omit<Partial<IMessageActivity>, 'type'> = {}) {
    super({
      ...value,
      type: 'message',
    });

    Object.assign(this, { text, ...value });
  }

  /**
   * initialize from interface
   */
  static from(activity: IMessageActivity) {
    return new MessageActivity(activity.text, activity);
  }

  /**
   * convert to interface
   */
  toInterface(): IMessageActivity {
    return Object.assign(
      {
        stripMentionsText: this.stripMentionsText.bind(this),
        isRecipientMentioned: this.isRecipientMentioned.bind(this),
        getAccountMention: this.getAccountMention.bind(this),
        getQuotedMessages: this.getQuotedMessages.bind(this),
      },
      this
    );
  }

  /**
   * copy to a new instance
   */
  clone(options: Omit<Partial<IMessageActivity>, 'type'> = {}) {
    return new MessageActivity(this.text, {
      ...this.toInterface(),
      ...options,
    });
  }

  /**
   * The text content of the message.
   */
  withText(value: string) {
    this.text = value;
    return this;
  }

  /**
   * The text to speak.
   * @deprecated This will be removed by end of summer 2026.
   */
  withSpeak(value: string) {
    this.speak = value;
    return this;
  }

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
   * @deprecated This will be removed by end of summer 2026.
   */
  withInputHint(value: InputHint) {
    this.inputHint = value;
    return this;
  }

  /**
   * The text to display if the channel cannot render cards.
   */
  withSummary(value: string) {
    this.summary = value;
    return this;
  }

  /**
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml', 'extendedmarkdown'. See {@link TextFormat} for all values
   */
  withTextFormat(value: TextFormat) {
    this.textFormat = value;
    return this;
  }

  /**
   * The layout hint for multiple attachments. Default: list. Possible values include: 'list',
   * 'carousel'
   */
  withAttachmentLayout(value: AttachmentLayout) {
    this.attachmentLayout = value;
    return this;
  }

  /**
   * The suggested actions for the activity.
   */
  withSuggestedActions(value: SuggestedActions) {
    this.suggestedActions = value;
    return this;
  }

  /**
   * The importance of the activity. Possible values include: 'low', 'normal', 'high'
   * @deprecated This will be removed by end of summer 2026.
   */
  withImportance(value: Importance) {
    this.importance = value;
    return this;
  }

  /**
   * A delivery hint to signal to the recipient alternate delivery paths for the activity.
   * The default delivery mode is "default". Possible values include: 'normal', 'notification'
   */
  withDeliveryMode(value: DeliveryMode) {
    this.deliveryMode = value;
    return this;
  }

  /**
   * The time at which the activity should be considered to be "expired" and should not be
   * presented to the recipient.
   * @deprecated This will be removed by end of summer 2026.
   */
  withExpiration(value: Date) {
    this.expiration = value;
    return this;
  }

  /**
   * Append text
   */
  addText(text: string) {
    this.text += text;
    return this;
  }

  /**
   * Attachments
   */
  addAttachments(...value: Attachment[]) {
    if (!this.attachments) {
      this.attachments = [];
    }

    this.attachments.push(...value);
    return this;
  }

  /**
   * `@mention` an account
   * @param account the account to mention
   * @param options options to customize the mention
   */
  addMention(account: Account, options: AddMentionOptions = {}) {
    const text = options.text || account.name;
    const addText = options.addText ?? true;

    if (addText) {
      this.addText(`<at>${text}</at>`);
    }

    return this.addEntity({
      type: 'mention',
      mentioned: account,
      text: `<at>${text}</at>`,
    });
  }

  /**
   * Add a card attachment
   */
  addCard<T extends CardAttachmentType>(type: T, content: CardAttachmentTypes[T]['content']) {
    return this.addAttachments(cardAttachment(type, content));
  }

  /**
   * remove "\<at>...\</at>" text from an activity
   */
  stripMentionsText(options: StripMentionsTextOptions = {}) {
    this.text = stripMentionsText(this, options);
    return this;
  }

  /**
   * is the recipient account mentioned
   */
  isRecipientMentioned() {
    return (this.entities || [])
      .filter((e) => e.type === 'mention')
      .some((e) => e.mentioned.id === this.recipient.id);
  }

  /**
   * get a mention by the account id if exists
   */
  getAccountMention(accountId: string) {
    return (this.entities || [])
      .filter((e) => e.type === 'mention')
      .find((e) => e.mentioned.id === accountId);
  }

  /**
   * get all quoted reply entities from this message
   */
  getQuotedMessages(): QuotedReplyEntity[] {
    return (this.entities ?? []).filter(
      (e): e is QuotedReplyEntity => e.type === 'quotedReply'
    );
  }

  /**
   * Add stream info, making
   * this a final stream message
   */
  addStreamFinal() {
    if (!this.channelData) {
      this.channelData = {};
    }

    this.channelData.streamId = this.id;
    this.channelData.streamType = 'final';

    return this.addEntity({
      type: 'streaminfo',
      streamId: this.id,
      streamType: 'final',
    });
  }

  /**
   * Set the recipient of this message, optionally marking it as a targeted (ephemeral) message.
   * Targeted messages are only visible to the specified recipient in a shared conversation.
   * @param account - The recipient account
   * @param isTargeted - If true, marks this as a targeted message visible only to the recipient
   * @returns this instance for chaining
   *
   * Diagnostic: ExperimentalTeamsTargeted
   */
  withRecipient(account: Account, isTargeted: boolean = false): this {
    super.withRecipient(account, isTargeted);
    return this;
  }

  /**
   * Add a quoted message reference and append a `<quoted messageId="..."/>` placeholder to text.
   * Teams renders the quoted message as a preview bubble above the response text.
   * If text is provided, it is appended to the quoted message placeholder.
   * @param messageId - The ID of the message to quote
   * @param text - Optional text, appended to the quoted message placeholder
   * @returns this instance for chaining
   */
  addQuote(messageId: string, text?: string): this {
    if (!this.entities) {
      this.entities = [];
    }
    this.entities.push({
      type: 'quotedReply',
      quotedReply: { messageId },
    });
    this.addText(`<quoted messageId="${messageId}"/>`);
    if (text) {
      this.addText(` ${text}`);
    }
    return this;
  }

  /**
   * Prepend a quotedReply entity and `<quoted messageId="..."/>` placeholder
   * before existing text. Used by reply()/quote() for quote-above-response.
   * @param messageId - The IC3 message ID of the message to quote
   */
  prependQuote(messageId: string): this {
    if (!this.entities) {
      this.entities = [];
    }
    this.entities.push({
      type: 'quotedReply',
      quotedReply: { messageId },
    });
    const placeholder = `<quoted messageId="${messageId}"/>`;
    const hasText = !!this.text?.trim();
    this.text = hasText ? `${placeholder} ${this.text}` : placeholder;
    return this;
  }
}

/**
 * options for adding a mention
 * to an activity
 */
export type AddMentionOptions = {
  /**
   * if `true`, append the mention `text` to the `activity.text`
   * @default true
   */
  readonly addText?: boolean;

  /**
   * the `text` to use for the mention
   *
   * @default `account.name`
   * @remark
   * this text should not include `<at>` or `</at>`
   */
  readonly text?: string;
};
