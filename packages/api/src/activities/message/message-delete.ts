import { ChannelData } from '../../models';
import { IActivity, Activity } from '../activity';

export interface IMessageDeleteActivity extends IActivity<'messageDelete'> {
  channelData: ChannelData & {
    eventType: 'softDeleteMessage';
  };
}

export class MessageDeleteActivity
  extends Activity<'messageDelete'>
  implements IMessageDeleteActivity
{
  declare channelData: ChannelData & {
    eventType: 'softDeleteMessage';
  };

  constructor(value: Omit<Partial<IMessageDeleteActivity>, 'type'> = {}) {
    super({
      ...value,
      type: 'messageDelete',
      channelData: {
        ...value.channelData,
        eventType: 'softDeleteMessage',
      },
    });

    Object.assign(this, {
      ...value,
      channelData: {
        ...value.channelData,
        eventType: 'softDeleteMessage',
      },
    });
  }

  /**
   * initialize from interface
   */
  static from(activity: IMessageDeleteActivity) {
    return new MessageDeleteActivity(activity);
  }

  /**
   * convert to interface
   */
  toInterface(): IMessageDeleteActivity {
    return Object.assign({}, this);
  }

  /**
   * copy to a new instance
   */
  clone(options: Omit<Partial<IMessageDeleteActivity>, 'type'> = {}) {
    return new MessageDeleteActivity({
      ...this.toInterface(),
      ...options,
    });
  }
}
