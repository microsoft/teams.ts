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

import { ActivityBase, ActivityBaseBuilder } from '../base';

export interface MessageSendActivity extends ActivityBase {
  readonly type: 'message';

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

export class MessageSendActivityBuilder extends ActivityBaseBuilder<MessageSendActivity> {
  activity: Pick<MessageSendActivity, 'type'> & Partial<MessageSendActivity>;

  constructor(text: string, options?: Omit<Partial<MessageSendActivity>, 'type'>) {
    super();
    this.activity = {
      ...options,
      type: 'message',
      text,
    };
  }

  /**
   * The text content of the message.
   */
  text(value: string) {
    this.activity.text = value;
    return this;
  }

  /**
   * The text to speak.
   */
  speak(value: string) {
    this.activity.speak = value;
    return this;
  }

  /**
   * Indicates whether your bot is accepting,
   * expecting, or ignoring user input after the message is delivered to the client. Possible
   * values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
   */
  inputHint(value: InputHint) {
    this.activity.inputHint = value;
    return this;
  }

  /**
   * The text to display if the channel cannot render cards.
   */
  summary(value: string) {
    this.activity.summary = value;
    return this;
  }

  /**
   * Format of text fields Default:markdown. Possible values include: 'markdown', 'plain', 'xml'
   */
  textFormat(value: TextFormat) {
    this.activity.textFormat = value;
    return this;
  }

  /**
   * The layout hint for multiple attachments. Default: list. Possible values include: 'list',
   * 'carousel'
   */
  attachmentLayout(value: AttachmentLayout) {
    this.activity.attachmentLayout = value;
    return this;
  }

  /**
   * Attachments
   */
  attachment(value: Attachment) {
    if (!this.activity.attachments) {
      this.activity.attachments = [];
    }

    this.activity.attachments.push(value);
    return this;
  }

  /**
   * The suggested actions for the activity.
   */
  suggestedActions(value: SuggestedActions) {
    this.activity.suggestedActions = value;
    return this;
  }

  /**
   * The importance of the activity. Possible values include: 'low', 'normal', 'high'
   */
  importance(value: Importance) {
    this.activity.importance = value;
    return this;
  }

  /**
   * A delivery hint to signal to the recipient alternate delivery paths for the activity.
   * The default delivery mode is "default". Possible values include: 'normal', 'notification'
   */
  deliveryMode(value: DeliveryMode) {
    this.activity.deliveryMode = value;
    return this;
  }

  /**
   * The time at which the activity should be considered to be "expired" and should not be
   * presented to the recipient.
   */
  expiration(value: Date) {
    this.activity.expiration = value;
    return this;
  }

  /**
   * `@mention` an account
   */
  mention(account: Account) {
    return this.entity({
      type: 'mention',
      mentioned: account,
      text: `<at>${account.name}</at>`,
    });
  }

  /**
   * Add a card attachment
   */
  card<T extends CardAttachmentType>(type: T, content: CardAttachmentTypes[T]['content']) {
    return this.attachment(cardAttachment(type, content));
  }
}

export function MessageSendActivity(
  text: string,
  options?: Omit<Partial<MessageSendActivity>, 'type'>
) {
  return new MessageSendActivityBuilder(text, options);
}
