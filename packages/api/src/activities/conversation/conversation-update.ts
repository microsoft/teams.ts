import { Account, ChannelData } from '../../models';
import { IActivity } from '../activity';

export interface IConversationUpdateActivity extends IActivity<'conversationUpdate'> {
  /**
   * The collection of members added to the conversation.
   */
  membersAdded?: Account[];

  /**
   * The collection of members removed from the conversation.
   */
  membersRemoved?: Account[];

  /**
   * The updated topic name of the conversation.
   */
  topicName?: string;

  /**
   * Indicates whether the prior history of the channel is disclosed.
   */
  historyDisclosed?: boolean;

  channelData: ChannelData & {
    eventType:
      | 'channelCreated'
      | 'channelDeleted'
      | 'channelRenamed'
      | 'channelRestored'
      | 'channelShared'
      | 'channelUnshared'
      | 'channelMemberAdded'
      | 'channelMemberRemoved'
      | 'teamArchived'
      | 'teamDeleted'
      | 'teamHardDeleted'
      | 'teamRenamed'
      | 'teamRestored'
      | 'teamUnarchived';
  };
}
