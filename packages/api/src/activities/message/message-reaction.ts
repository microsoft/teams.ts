import { MessageReaction } from '../../models';
import { IActivity, Activity } from '../activity';

export interface IMessageReactionActivity extends IActivity<'messageReaction'> {
  /**
   * The collection of reactions added to the conversation.
   */
  reactionsAdded?: MessageReaction[];

  /**
   * The collection of reactions removed from the conversation.
   */
  reactionsRemoved?: MessageReaction[];
}

export class MessageReactionActivity
  extends Activity<'messageReaction'>
  implements IMessageReactionActivity
{
  /**
   * The collection of reactions added to the conversation.
   */
  reactionsAdded?: MessageReaction[];

  /**
   * The collection of reactions removed from the conversation.
   */
  reactionsRemoved?: MessageReaction[];

  constructor(value: Omit<Partial<IMessageReactionActivity>, 'type'> = {}) {
    super({
      ...value,
      type: 'messageReaction',
    });

    Object.assign(this, value);
  }

  /**
   * initialize from interface
   */
  static from(activity: IMessageReactionActivity) {
    return new MessageReactionActivity(activity);
  }

  /**
   * convert to interface
   */
  toInterface(): IMessageReactionActivity {
    return Object.assign({}, this);
  }

  /**
   * copy to a new instance
   */
  clone(options: Omit<Partial<IMessageReactionActivity>, 'type'> = {}) {
    return new MessageReactionActivity({
      ...this.toInterface(),
      ...options,
    });
  }
}
