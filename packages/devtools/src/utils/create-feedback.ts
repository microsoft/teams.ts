import type {
  Account,
  ChannelID,
  ConversationAccount,
  Entity,
  IMessageSubmitActionInvokeActivity,
} from '@microsoft/teams.api';

interface CreateFeedbackActivityParams {
  channelId?: ChannelID;
  from?: Partial<Account & { displayName?: string }>;
  conversation: ConversationAccount;
  recipient?: Partial<Account & { displayName?: string }>;
  locale?: string;
  reaction: 'like' | 'dislike';
  feedback: string;
  isStreaming?: boolean;
}

export const createFeedbackActivity = ({
  channelId = '',
  from,
  conversation,
  recipient,
  locale = navigator.language,
  reaction,
  feedback,
  isStreaming,
}: CreateFeedbackActivityParams): IMessageSubmitActionInvokeActivity => {
  const invokeFrom: Account & { displayName?: string } = {
    id: from?.id || '',
    name: from?.name || '',
    role: from?.role || 'user',
  };

  const invokeRecipient: Account & { displayName?: string } = {
    id: recipient?.id || '',
    name: recipient?.name || '',
    role: recipient?.role || 'bot',
  };

  const activity = {
    type: 'invoke' as const,
    name: 'message/submitAction' as const,
    channelId,
    from: invokeFrom,
    conversation: {
      ...conversation,
      conversationType: conversation.conversationType || 'personal',
    },
    recipient: invokeRecipient,
    localTimestamp: new Date(),
    locale,
    value: {
      actionName: 'feedback' as const,
      actionValue: {
        reaction,
        feedback,
      },
    },
    channelData: {},
    entities: [] as Entity[],
    // The following properties will be populated by the service based on channelData
    id: '',
    channel: undefined,
    team: undefined,
    meeting: undefined,
    notification: undefined,
    isStreaming() {
      return this.entities?.some((e) => e.type === 'streaminfo') || false;
    },
  } satisfies IMessageSubmitActionInvokeActivity;

  if (isStreaming) {
    activity.entities = [{ type: 'streaminfo' }];
  }

  return activity;
};
