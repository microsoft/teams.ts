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
  SuggestedActions,
  TextFormat,
} from '../../models';

import { IActivity, Activity } from '../activity';
import { removeMentionsText, RemoveMentionsTextOptions } from '../utils';

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

  constructor(text?: string, value: Omit<Partial<IMessageActivity>, 'type'> = {}) {
    super({
      ...value,
      type: 'message',
    });

    Object.assign(this, { text, ...value });
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
   */
  addMention(account: Account) {
    return this.addEntity({
      type: 'mention',
      mentioned: account,
      text: `<at>${account.name}</at>`,
    });
  }

  /**
   * remove "\<at>...\</at>" text from an activity
   */
  removeMentionsText(options: RemoveMentionsTextOptions = {}) {
    this.text = removeMentionsText(this, options);
    return this;
  }

  /**
   * Add a card attachment
   */
  addCard<T extends CardAttachmentType>(type: T, content: CardAttachmentTypes[T]['content']) {
    return this.addAttachments(cardAttachment(type, content));
  }
}
