import { IConversationUpdateActivity } from './conversation-update';
import { IEndOfConversationActivity } from './end-of-conversation';

export type ConversationActivity = IConversationUpdateActivity | IEndOfConversationActivity;

export * from './conversation-update';
export * from './end-of-conversation';
