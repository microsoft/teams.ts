import {
  Message,
  $MessageActivity,
  IMessageDeleteActivity,
  IMessageReactionActivity,
  IMessageActivity,
  IMessageUpdateActivity,
  ITypingActivity,
} from '@microsoft/teams.api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Chat } from '../types/Chat';
import { ActivityEvent } from '../types/Event';

const typingTimers: Record<string, NodeJS.Timeout> = {};
const streamingTimers: Record<string, NodeJS.Timeout> = {};

const DEFAULT_TIMER_DURATION = 3000;

interface MessageBase {
  id: string;
  replyToId?: string;
  messageType: 'message';
  body: {
    content: string;
    contentType: 'text';
    textContent: string;
  };
  from: {
    conversation: {
      id: string;
      displayName: string;
    };
    user?: {
      id: string;
      displayName: string;
    };
  };
  createdDateTime: string;
}

const createMessageBase = (
  event: ActivityEvent<IMessageActivity | ITypingActivity>
): MessageBase => {
  const streamId = event.body.entities?.find((e) => e.type === 'streaminfo')?.streamId;

  return {
    id: streamId || event.body.id,
    replyToId: event.body.replyToId,
    messageType: 'message',
    body: {
      content: event.body.text || '',
      contentType: 'text',
      textContent: event.body.text || '',
    },
    from: {
      conversation: {
        id: event.body.conversation.id,
        displayName: event.body.conversation.name || event.chat.name || '??',
      },
      user: event.body.from
        ? {
            id: event.body.from.id,
            displayName: event.body.from.name,
          }
        : undefined,
    },
    createdDateTime: (event.body.timestamp || new Date()).toUTCString(),
  };
};

const getFeedbackState = (event: ActivityEvent<any>) => ({
  feedbackLoopEnabled: event.body.channelData?.feedbackLoopEnabled ? true : false,
});

const clearTimer = (timers: Record<string, NodeJS.Timeout>, id: string) => {
  if (timers[id]) {
    clearInterval(timers[id]);
    delete timers[id];
  }
};

export interface ChatStore {
  readonly chat: Chat;
  readonly messages: Record<string, Array<Message>>;
  readonly typing: Record<string, boolean>;
  readonly streaming: Record<string, boolean>;
  readonly feedback: Record<string, boolean>;
  readonly deletedMessages: Record<string, Array<Message>>;

  readonly put: (chatId: string, message: Message) => void;
  readonly getMessageById: (messageId: string) => Message | undefined;
  readonly addDeletedMessage: (chatId: string, message: Message) => void;
  readonly removeDeletedMessage: (chatId: string, messageId: string) => void;

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
      deletedMessages: {},
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
      addDeletedMessage: (chatId: string, message: Message) =>
        set((state) => {
          const deletedMessages = state.deletedMessages[chatId] || [];
          if (!deletedMessages.some((m) => m.id === message.id)) {
            deletedMessages.unshift(message);
          }
          return {
            ...state,
            deletedMessages: {
              ...state.deletedMessages,
              [chatId]: deletedMessages,
            },
          };
        }),
      removeDeletedMessage: (chatId: string, messageId: string) =>
        set((state) => {
          const deletedMessages = state.deletedMessages[chatId] || [];
          return {
            ...state,
            deletedMessages: {
              ...state.deletedMessages,
              [chatId]: deletedMessages.filter((m) => m.id !== messageId),
            },
          };
        }),
      onActivity: (event: ActivityEvent) =>
        set((state) => {
          if (event.type !== 'activity.received' && event.type !== 'activity.sent') {
            return state;
          }

          const newState = {
            ...state,
            feedback: {
              ...state.feedback,
              [event.body.id]: getFeedbackState(event).feedbackLoopEnabled,
            },
          };

          switch (event.body.type) {
            case 'typing':
              return state.onTypingActivity({ ...event, body: event.body }, newState);
            case 'message':
            case 'messageUpdate':
            case 'messageReaction':
            case 'messageDelete':
              return state.onMessageActivity({ ...event, body: event.body }, newState);
          }

          return newState;
        }),
      onTypingActivity: (event, state) => {
        clearTimer(typingTimers, event.chat.id);

        typingTimers[event.chat.id] = setTimeout(() => {
          clearTimer(typingTimers, event.chat.id);
          state.typing[event.chat.id] = false;

          set((state) => ({
            ...state,
            typing: { ...state.typing },
          }));
        }, DEFAULT_TIMER_DURATION);

        state.typing[event.chat.id] = true;

        const streamEntity = event.body.entities?.find((e) => e.type === 'streaminfo');
        if (streamEntity?.streamType === 'streaming') {
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

        const streamEntity = event.body.entities?.find((e) => e.type === 'streaminfo');
        if (streamEntity?.streamType === 'final') {
          return state.onStreamMessageActivity(event, state);
        }

        const baseMessage = createMessageBase(event);
        state.put(event.chat.id, {
          ...baseMessage,
          attachments: event.body.attachments,
          attachmentLayout: event.body.attachmentLayout,
          reactions: [],
          channelData: {
            ...event.body.channelData,
            ...getFeedbackState(event),
          },
        } as Message);

        return {
          ...state,
          feedback: {
            ...state.feedback,
            [event.body.id]: getFeedbackState(event).feedbackLoopEnabled,
          },
        };
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
        const streamEntity = event.body.entities?.find((e) => e.type === 'streaminfo');
        const streamId = streamEntity?.streamId || event.body.id;

        clearTimer(streamingTimers, streamId);

        streamingTimers[streamId] = setTimeout(() => {
          clearTimer(streamingTimers, streamId);

          set((state) => ({
            ...state,
            streaming: {
              ...state.streaming,
              [streamId]: false,
            },
            feedback: {
              ...state.feedback,
              [streamId]: getFeedbackState(event).feedbackLoopEnabled,
            },
          }));
        }, DEFAULT_TIMER_DURATION);

        const baseMessage = createMessageBase(event);
        state.put(event.chat.id, {
          ...baseMessage,
          channelData: {
            ...event.body.channelData,
            ...getFeedbackState(event),
          },
        } as Message);

        return {
          ...state,
          streaming: {
            ...state.streaming,
            [streamId]: true,
          },
          feedback: {
            ...state.feedback,
            [streamId]: getFeedbackState(event).feedbackLoopEnabled,
          },
        };
      },
      onStreamMessageActivity: (event, state) => {
        const streamEntity = event.body.entities?.find((e) => e.type === 'streaminfo');
        const streamId = streamEntity?.streamId || event.body.id;
        const baseMessage = createMessageBase(event);

        clearTimer(streamingTimers, streamId);

        state.put(event.chat.id, {
          ...baseMessage,
          attachments: event.body.attachments,
          attachmentLayout: event.body.attachmentLayout,
          channelData: {
            ...event.body.channelData,
            ...getFeedbackState(event),
          },
        } as Message);

        return {
          ...state,
          streaming: {
            ...state.streaming,
            [streamId]: false,
          },
          feedback: {
            ...state.feedback,
            [streamId]: getFeedbackState(event).feedbackLoopEnabled,
          },
        };
      },
    })
  )
);
