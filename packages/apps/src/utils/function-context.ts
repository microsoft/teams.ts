import { ILogger } from '@microsoft/teams.common';

import { App } from '../app';
import { IFunctionContext } from '../contexts';
import { IPlugin } from '../types';

export function getConversationIdResolver<TPlugin extends IPlugin>(
  app: App<TPlugin>,
  log: ILogger,
  context: Pick<
    IFunctionContext,
    'channelId' | 'chatId' | 'meetingId' | 'userId' | 'userName' | 'tenantId'
  >
): () => Promise<string | undefined> {
  let state: { id?: string } | undefined;

  const { userId, userName, tenantId } = context;
  const conversationId = context.chatId ?? context.channelId;

  return async () => {
    if (state) {
      // This conversation has already been resolved.
      return state.id;
    }

    if (!conversationId) {
      // Conversation ID can be missing if the app is running in a personal scope. In this case, create
      // a conversation between the bot and the user. This will either create a new conversation or return
      // a pre-existing one.
      try {
        const conversation = await app.api.conversations.create({
          bot: { id: app.id },
          members: [{ id: userId, role: 'user', name: userName }],
          tenantId: tenantId,
          isGroup: false,
        });
        state = { id: conversation.id };
      } catch {
        state = { id: undefined };
        log.error('failed to create conversation with user', {
          userId,
        });
      }
    } else {
      // Validate that the bot and user are both members of the conversation.
      try {
        const member = await app.api.conversations
          .members(conversationId)
          .getById(userId);
        state = { id: !member ? undefined : conversationId };
      } catch {
        state = { id: undefined };
      }

      if (!state.id) {
        log.warn('either the bot or the user are not in this conversation', {
          conversationId,
          userId,
        });
      }
    }

    return state.id;
  };
}
