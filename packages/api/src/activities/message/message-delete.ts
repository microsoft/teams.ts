import { ChannelData } from '../../models';
import { IActivity, ActivityBaseBuilder } from '../activity';

export interface IMessageDeleteActivity extends IActivity<'messageDelete'> {
  channelData: ChannelData & {
    eventType: 'softDeleteMessage';
  };
}

export class MessageDeleteActivityBuilder extends ActivityBaseBuilder<IMessageDeleteActivity> {
  activity: Pick<IMessageDeleteActivity, 'type'> & Partial<IMessageDeleteActivity>;

  constructor(options?: Omit<Partial<IMessageDeleteActivity>, 'type'>) {
    super();
    this.activity = {
      ...options,
      type: 'messageDelete',
      channelData: {
        ...options?.channelData,
        eventType: 'softDeleteMessage',
      },
    };
  }
}

export function MessageDeleteActivity(options?: Omit<Partial<IMessageDeleteActivity>, 'type'>) {
  return new MessageDeleteActivityBuilder(options);
}
