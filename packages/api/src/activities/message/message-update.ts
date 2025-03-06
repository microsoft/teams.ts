import { ChannelData } from '../../models';
import { IActivity, Activity } from '../activity';

export interface IMessageUpdateActivity extends IActivity<'messageUpdate'> {
  /**
   * The text content of the message.
   */
  text: string;

  /**
   * The text to speak.
   */
  speak?: string;

  /**
   * The text to display if the channel cannot render cards.
   */
  summary?: string;

  /**
   * The time at which the activity should be considered to be "expired" and should not be
   * presented to the recipient.
   */
  expiration?: Date;

  /**
   * A value that is associated with the activity.
   */
  value?: any;

  channelData: ChannelData & {
    eventType: 'undeleteMessage' | 'editMessage';
  };
}

export class MessageUpdateActivity
  extends Activity<'messageUpdate'>
  implements IMessageUpdateActivity
{
  /**
   * The text content of the message.
   */
  text!: string;

  /**
   * The text to speak.
   */
  speak?: string;

  /**
   * The text to display if the channel cannot render cards.
   */
  summary?: string;

  /**
   * The time at which the activity should be considered to be "expired" and should not be
   * presented to the recipient.
   */
  expiration?: Date;

  /**
   * A value that is associated with the activity.
   */
  value?: any;

  declare channelData: ChannelData & {
    eventType: 'undeleteMessage' | 'editMessage';
  };

  constructor(
    eventType: 'undeleteMessage' | 'editMessage',
    value: Omit<Partial<IMessageUpdateActivity>, 'type'> = {}
  ) {
    super({
      ...value,
      type: 'messageUpdate',
      channelData: {
        ...value?.channelData,
        eventType,
      },
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
   * The text to display if the channel cannot render cards.
   */
  withSummary(value: string) {
    this.summary = value;
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
}
