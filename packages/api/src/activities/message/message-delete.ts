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
}
