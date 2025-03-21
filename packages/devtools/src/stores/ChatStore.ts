import {
  Message,
  $MessageActivity,
  IMessageDeleteActivity,
  IMessageReactionActivity,
  IMessageActivity,
  IMessageUpdateActivity,
  ITypingActivity,
} from '@microsoft/spark.api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Chat } from '../types/Chat';
import { ActivityEvent } from '../types/Event';

const typingTimers: Record<string, NodeJS.Timeout> = {};
const streamingTimers: Record<string, NodeJS.Timeout> = {};

export interface ChatStore {
  readonly chat: Chat;
  readonly messages: Record<string, Array<Message>>;
  readonly typing: Record<string, boolean>;
  readonly streaming: Record<string, boolean>;
  readonly feedback: Record<string, boolean>;

  readonly put: (chatId: string, message: Message) => void;
  readonly getMessageById: (messageId: string) => Message | undefined;

  readonly onActivity: (event: ActivityEvent) => void;
  readonly onTypingActivity: (event: ActivityEvent<ITypingActivity>, state: ChatStore) => ChatStore;

  readonly onMessageActivity: (
    event: ActivityEvent<$MessageActivity>,
    state: ChatStore
  ) => ChatStore;
  readonly onMessageSendActivity: (
    event: ActivityEvent<IMessageActivity>,
    state: ChatStore
  ) => ChatStore;
  readonly onMessageUpdateActivity: (
    event: ActivityEvent<IMessageUpdateActivity>,
    state: ChatStore
  ) => ChatStore;
  readonly onMessageReactionActivity: (
    event: ActivityEvent<IMessageReactionActivity>,
    state: ChatStore
  ) => ChatStore;
  readonly onMessageDeleteActivity: (
    event: ActivityEvent<IMessageDeleteActivity>,
    state: ChatStore
  ) => ChatStore;

  readonly onStreamChunkActivity: (
    event: ActivityEvent<ITypingActivity>,
    state: ChatStore
  ) => ChatStore;
  readonly onStreamMessageActivity: (
    event: ActivityEvent<IMessageActivity>,
    state: ChatStore
  ) => ChatStore;
}

export const useChatStore = create<ChatStore>()(
  devtools(
    (set, get): ChatStore => ({
      chat: {
        id: 'devtools',
        name: 'Default',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      messages: {},
      typing: {},
      streaming: {},
      feedback: {},
      put: (chatId: string, message: Message) =>
        set((state) => {
          const messages = state.messages[chatId] || [];
          const i = messages.findIndex((m) => m.id === message.id);

          if (i === -1) {
            messages.unshift(message);
          } else {
            messages[i] = {
              ...messages[i],
              ...message,
            };
          }

          state.messages[chatId] = messages;
          return {
            ...state,
            messages: { ...state.messages },
          };
        }),
      getMessageById: (messageId: string) => {
        const currentState = get();
        for (const messages of Object.values(currentState.messages)) {
          const foundMessage = messages.find((message: Message) => message.id === messageId);
          if (foundMessage) return foundMessage;
        }
        return undefined;
      },
      onActivity: (event: ActivityEvent) =>
        set((state) => {
          if (event.type !== 'activity.received' && event.type !== 'activity.sent') return state;

          if (event.body.channelData?.feedbackLoopEnabled) {
            state.feedback[event.body.id] = true;
          } else {
            state.feedback[event.body.id] = false;
          }

          switch (event.body.type) {
            case 'typing':
              return state.onTypingActivity({ ...event, body: event.body }, state);
            case 'message':
            case 'messageUpdate':
            case 'messageReaction':
            case 'messageDelete':
              return state.onMessageActivity({ ...event, body: event.body }, state);
          }

          return { ...state };
        }),
      onTypingActivity: (event, state) => {
        if (typingTimers[event.chat.id]) {
          clearInterval(typingTimers[event.chat.id]);
          delete typingTimers[event.chat.id];
        }

        typingTimers[event.chat.id] = setTimeout(() => {
          if (typingTimers[event.chat.id]) {
            clearInterval(typingTimers[event.chat.id]);
            delete typingTimers[event.chat.id];
          }

          state.typing[event.chat.id] = false;

          set((state) => ({
            ...state,
            typing: { ...state.typing },
          }));
        }, 3000);

        state.typing[event.chat.id] = true;

        if (event.body.channelData?.streamType === 'streaming') {
          return state.onStreamChunkActivity(event, state);
        }

        return {
          ...state,
          typing: { ...state.typing },
        };
      },
      onMessageActivity: (event, state) => {
        switch (event.body.type) {
          case 'message':
            return state.onMessageSendActivity({ ...event, body: event.body }, state);
          case 'messageUpdate':
            return state.onMessageUpdateActivity({ ...event, body: event.body }, state);
          case 'messageReaction':
            return state.onMessageReactionActivity({ ...event, body: event.body }, state);
        }

        return state.onMessageDeleteActivity({ ...event, body: event.body }, state);
      },
      onMessageSendActivity: (event, state) => {
        state.typing[state.chat.id] = false;

        if (event.body.channelData?.streamType === 'final') {
          return state.onStreamMessageActivity(event, state);
        }

        state.put(event.chat.id, {
          id: event.body.id,
          replyToId: event.body.replyToId,
          messageType: 'message',
          attachments: event.body.attachments,
          attachmentLayout: event.body.attachmentLayout,
          reactions: [],
          body: {
            content: event.body.text,
            contentType: 'text',
            textContent: event.body.text,
          },
          from: {
            conversation: {
              id: event.body.conversation.id,
              displayName: event.body.conversation.name,
            },
            user: event.body.from
              ? {
                  id: event.body.from.id,
                  displayName: event.body.from.name,
                }
              : undefined,
          },
          createdDateTime: (event.body.timestamp
            ? new Date(event.body.timestamp)
            : new Date()
          ).toUTCString(),
        });

        return state;
      },
      onMessageUpdateActivity: (event, state) => {
        const messages = state.messages[event.chat.id] || [];
        const i = messages.findIndex((m) => m.id === event.body.id);

        if (i === -1) return state;

        const message = messages[i];

        if (event.body.text) {
          if (!message.body) {
            message.body = {};
          }

          message.body.content = event.body.text;
          message.body.textContent = event.body.text;
        }

        message.lastModifiedDateTime = (event.body.timestamp || new Date()).toUTCString();
        state.put(state.chat.id, message);
        return state;
      },
      onMessageReactionActivity: (event, state) => {
        const messages = state.messages[event.chat.id] || [];
        const i = messages.findIndex((m) => m.id === event.body.id);

        if (i === -1) return state;

        const reactions = messages[i].reactions || [];

        for (const removed of event.body.reactionsRemoved || []) {
          const j = reactions.findIndex(
            (r) => r.type === removed.type && r.user?.id === removed.user?.id
          );

          if (j === -1) continue;

          reactions.splice(j, 1);
        }

        for (const added of event.body.reactionsAdded || []) {
          reactions.push(added);
        }

        messages[i].reactions = reactions;
        state.messages[event.chat.id] = messages;

        return {
          ...state,
          messages: { ...state.messages },
        };
      },
      onMessageDeleteActivity: (event, state) => {
        const messages = state.messages[event.chat.id] || [];
        const i = messages.findIndex((m) => m.id === event.body.id);

        if (i === -1) return state;

        messages[i].deleted = true;
        state.messages[event.chat.id] = messages;

        return {
          ...state,
          messages: { ...state.messages },
        };
      },
      onStreamChunkActivity: (event, state) => {
        if (streamingTimers[event.body.id]) {
          clearInterval(streamingTimers[event.body.id]);
          delete streamingTimers[event.body.id];
        }

        streamingTimers[event.body.id] = setTimeout(() => {
          if (streamingTimers[event.body.id]) {
            clearInterval(streamingTimers[event.body.id]);
            delete streamingTimers[event.body.id];
          }

          set((state) => ({
            ...state,
            streaming: {
              ...state.streaming,
              [event.body.id]: false,
            },
          }));
        }, 3000);

        state.put(event.chat.id, {
          id: event.body.id,
          replyToId: event.body.replyToId,
          messageType: 'message',
          body: {
            content: event.body.text,
            contentType: 'text',
            textContent: event.body.text,
          },
          from: {
            conversation: {
              id: event.body.conversation.id,
              displayName: event.body.conversation.name,
            },
            user: event.body.from
              ? {
                  id: event.body.from.id,
                  displayName: event.body.from.name,
                }
              : undefined,
          },
          createdDateTime: (event.body.timestamp || new Date()).toUTCString(),
        });

        return {
          ...state,
          streaming: {
            ...state.streaming,
            [event.body.id]: true,
          },
        };
      },
      onStreamMessageActivity: (event, state) => {
        if (streamingTimers[event.body.id]) {
          clearInterval(streamingTimers[event.body.id]);
          delete streamingTimers[event.body.id];
        }

        state.put(event.chat.id, {
          id: event.body.id,
          replyToId: event.body.replyToId,
          messageType: 'message',
          attachments: event.body.attachments,
          attachmentLayout: event.body.attachmentLayout,
          body: {
            content: event.body.text,
            contentType: 'text',
            textContent: event.body.text,
          },
          from: {
            conversation: {
              id: event.body.conversation.id,
              displayName: event.body.conversation.name,
            },
            user: event.body.from
              ? {
                  id: event.body.from.id,
                  displayName: event.body.from.name,
                }
              : undefined,
          },
          createdDateTime: (event.body.timestamp || new Date()).toUTCString(),
        });

        return {
          ...state,
          streaming: {
            ...state.streaming,
            [event.body.id]: false,
          },
        };
      },
    })
  )
);
