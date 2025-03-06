import { ChannelData } from '../../models';
import { IActivity, ActivityBaseBuilder } from '../activity';

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

export class MessageUpdateActivityBuilder extends ActivityBaseBuilder<IMessageUpdateActivity> {
  activity: Pick<IMessageUpdateActivity, 'type'> & Partial<IMessageUpdateActivity>;

  constructor(
    eventType: 'undeleteMessage' | 'editMessage',
    options?: Omit<Partial<IMessageUpdateActivity>, 'type'>
  ) {
    super();
    this.activity = {
      ...options,
      type: 'messageUpdate',
      channelData: {
        ...options?.channelData,
        eventType,
      },
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
   * The text to display if the channel cannot render cards.
   */
  summary(value: string) {
    this.activity.summary = value;
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
}

export function MessageUpdateActivity(
  eventType: 'undeleteMessage' | 'editMessage',
  options?: Omit<Partial<IMessageUpdateActivity>, 'type'>
) {
  return new MessageUpdateActivityBuilder(eventType, options);
}
