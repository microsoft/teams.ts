import { ConversationUpdateActivity } from './conversation-update';
import { EndOfConversationActivity } from './end-of-conversation';

export type ConversationActivity = ConversationUpdateActivity | EndOfConversationActivity;

export * from './conversation-update';
export * from './end-of-conversation';
