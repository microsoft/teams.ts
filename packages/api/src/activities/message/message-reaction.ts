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
   * Add a message reaction.
   */
  addReaction(reaction: MessageReaction) {
    if (!this.reactionsAdded) {
      this.reactionsAdded = [];
    }

    this.reactionsAdded.push(reaction);
    return this;
  }

  /**
   * Remove a message reaction.
   */
  removeReaction(reaction: MessageReaction) {
    if (!this.reactionsRemoved) {
      this.reactionsRemoved = [];
    }

    if (this.reactionsAdded) {
      const i = this.reactionsAdded.findIndex(
        (r) => r.type === reaction.type && r.user?.id === reaction.user?.id
      );

      if (i > -1) {
        this.reactionsAdded.splice(i, 1);
      }
    }

    this.reactionsRemoved.push(reaction);
    return this;
  }
}
