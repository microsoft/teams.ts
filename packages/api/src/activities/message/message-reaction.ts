import { MessageReaction } from '../../models';
import { IActivity, ActivityBaseBuilder } from '../activity';

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

export class MessageReactionActivityBuilder extends ActivityBaseBuilder<IMessageReactionActivity> {
  activity: Pick<IMessageReactionActivity, 'type'> & Partial<IMessageReactionActivity>;

  constructor(options?: Omit<Partial<IMessageReactionActivity>, 'type'>) {
    super();
    this.activity = {
      ...options,
      type: 'messageReaction',
    };
  }

  /**
   * Add a message reaction.
   */
  addReaction(reaction: MessageReaction) {
    if (!this.activity.reactionsAdded) {
      this.activity.reactionsAdded = [];
    }

    this.activity.reactionsAdded.push(reaction);
    return this;
  }

  /**
   * Remove a message reaction.
   */
  removeReaction(reaction: MessageReaction) {
    if (!this.activity.reactionsRemoved) {
      this.activity.reactionsRemoved = [];
    }

    if (this.activity.reactionsAdded) {
      const i = this.activity.reactionsAdded.findIndex(
        (r) => r.type === reaction.type && r.user?.id === reaction.user?.id
      );

      if (i > -1) {
        this.activity.reactionsAdded.splice(i, 1);
      }
    }

    this.activity.reactionsRemoved.push(reaction);
    return this;
  }
}

export function MessageReactionActivity(options?: Omit<Partial<IMessageReactionActivity>, 'type'>) {
  return new MessageReactionActivityBuilder(options);
}
