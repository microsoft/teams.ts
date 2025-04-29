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
  SuggestedActions,
  TextFormat,
} from '../../models';
import { IActivity, Activity } from '../activity';
import { stripMentionsText, StripMentionsTextOptions } from '../utils';

export interface IMessageActivity extends IActivity<'message'> {
  /**
   * The text content of the message.
   */
  text: string;

  /**
   * The text to speak.
   */
  speak?: string;

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
   */
  inputHint?: InputHint;

  /**
   * The text to display if the channel cannot render cards.
   */
  summary?: string;

  /**
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml'
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
}

export class MessageActivity extends Activity<'message'> implements IMessageActivity {
  /**
   * The text content of the message.
   */
  text!: string;

  /**
   * The text to speak.
   */
  speak?: string;

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
   */
  inputHint?: InputHint;

  /**
   * The text to display if the channel cannot render cards.
   */
  summary?: string;

  /**
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml'
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
   */
  withSpeak(value: string) {
    this.speak = value;
    return this;
  }

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
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
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml'
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
    const addText = options.addText || true;

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
