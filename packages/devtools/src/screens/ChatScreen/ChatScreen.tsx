import { FC, useCallback, useState } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import {
  Message,
  MessageUpdateActivity,
  MessageDeleteActivity,
  MessageReaction,
} from '@microsoft/spark.api';

import ChatMessageEdit from '../../components/ChatMessage/MessageUpdate/ChatMessageEdit';
import Chat from '../../components/Chat/Chat';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import ChatMessageContainer from '../../components/ChatMessage/ChatMessageContainer';
import ComposeBox from '../../components/ComposeBox/ComposeBox';
import Logger from '../../components/Logger/Logger';
import TypingIndicator from '../../components/TypingIndicator/TypingIndicator';
import useSparkApi from '../../hooks/useSparkApi';
import { useCardStore } from '../../stores/CardStore';
import { useChatStore } from '../../stores/ChatStore';
import { MessageActionUIPayload } from '../../types/MessageActionUI';
import { useDevModeSendMessage } from '../../utils/devUtils';
import useScreensClasses from '../Screens.styles';

import useChatScreenClasses from './ChatScreen.styles';

interface ChatScreenProps {
  isConnected: boolean;
}

const MAX_HISTORY = 5;
const childLog = Logger.child('ChatScreen');

const ChatScreen: FC<ChatScreenProps> = ({ isConnected }) => {
  const classes = useChatScreenClasses();
  const screenClasses = useScreensClasses();
  const {
    chat,
    feedback,
    getMessageById,
    messages,
    streaming,
    typing,
    addDeletedMessage,
    removeDeletedMessage,
  } = useChatStore();
  const { clearCurrentCard } = useCardStore();
  const [messageHistory, setMessageHistory] = useState<Partial<Message>[]>([]);
  const [currentlyEditingMessageId, setCurrentlyEditingMessageId] = useState<string | null>(null);
  const sparkApi = useSparkApi();

  const handleCardProcessed = useCallback(() => {
    childLog.info('Card processed, clearing from store');
    clearCurrentCard();
  }, [clearCurrentCard]);

  const handleMessageAction = useCallback(
    async (action: MessageActionUIPayload) => {
      const originalMessage = getMessageById(action.id);
      if (!originalMessage) {
        childLog.error('Could not find message:', action.id);
        return;
      }

      try {
        let messageBody;
        let updateActivity;
        let deleteActivity;
        const added: Array<MessageReaction> = [];
        const removed: Array<MessageReaction> = [];
        const { reactions = [] } = originalMessage;
        const existingReaction =
          action.type === 'messageReaction' && action.reactionType
            ? reactions.find((r) => r.type === action.reactionType)
            : undefined;

        switch (action.type) {
          case 'messageUpdate':
            if (action.eventType === 'undeleteMessage') {
              messageBody = {
                body: {
                  content: originalMessage.body?.content || '',
                  contentType: 'text',
                },
                attachments: originalMessage.attachments || [],
              };

              updateActivity = new MessageUpdateActivity('undeleteMessage', {
                id: action.id,
                text: originalMessage.body?.content || '',
                value: messageBody,
                channelData: {
                  eventType: 'undeleteMessage',
                },
                from: originalMessage.from?.user
                  ? {
                      id: originalMessage.from.user.id,
                      name: originalMessage.from.user.displayName || '',
                      role: 'user',
                    }
                  : undefined,
              });
              await sparkApi.conversations.activities(chat.id).create(updateActivity);
              removeDeletedMessage(chat.id, action.id);
            } else if (!action.eventType) {
              // Regular edit
              setCurrentlyEditingMessageId(action.id);
            }
            break;

          case 'messageDelete':
            deleteActivity = new MessageDeleteActivity({
              id: action.id,
              channelData: { eventType: 'softDeleteMessage' },
            });
            await sparkApi.conversations.activities(chat.id).create(deleteActivity);
            addDeletedMessage(chat.id, originalMessage);
            break;

          case 'messageReaction':
            if (!action.reactionType) return;

            if (existingReaction) {
              removed.push(existingReaction);
            } else {
              added.push({
                type: action.reactionType,
                createdDateTime: new Date().toUTCString(),
                user: action.user,
              });
            }

            await sparkApi.conversations.activities(chat.id).create({
              id: action.id,
              type: 'messageReaction',
              reactionsAdded: added,
              reactionsRemoved: removed,
            });
            break;
        }
      } catch (err) {
        childLog.error('Error handling message action:', err);
      }
    },
    [chat.id, getMessageById, sparkApi.conversations, addDeletedMessage, removeDeletedMessage]
  );

  const handleConfirmCancel = useCallback(() => {
    setCurrentlyEditingMessageId(null);
  }, []);

  const handleEditComplete = useCallback(
    async (messageId: string, updatedMessage: Partial<Message>) => {
      const originalMessage = getMessageById(messageId);
      if (
        originalMessage?.body?.content === updatedMessage.body?.content &&
        JSON.stringify(originalMessage?.attachments) === JSON.stringify(updatedMessage.attachments)
      ) {
        setCurrentlyEditingMessageId(null);
        return;
      }
      try {
        const messageBody = {
          body: {
            content: updatedMessage.body?.content || '',
            contentType: 'text',
          },
          attachments: updatedMessage.attachments || [],
        };

        const updateActivity = new MessageUpdateActivity('editMessage', {
          id: messageId,
          text: updatedMessage.body?.content || '',
          value: messageBody,
        });

        await sparkApi.conversations.activities(chat.id).create(updateActivity);
        setCurrentlyEditingMessageId(null);
      } catch (err) {
        childLog.error('Error updating message:', err);
      }
    },
    [getMessageById, sparkApi.conversations, chat.id]
  );

  const onSendMessage = useCallback(
    async (message: Partial<Message>) => {
      try {
        await sparkApi.conversations.activities(chat.id).create({
          type: 'message',
          text: message.body?.content || '',
          attachments: message.attachments || [],
        });
      } catch (err) {
        childLog.error('Error sending message:', err);
      }
    },
    [sparkApi, chat?.id]
  );

  const handleMessageHistory = useCallback((message: Partial<Message>) => {
    setMessageHistory((prev) => [message, ...prev].slice(0, MAX_HISTORY));
  }, []);

  // Use the hook to automatically send a message in development mode
  // This will be a no-op in production builds
  useDevModeSendMessage(onSendMessage);

  return (
    <div className={mergeClasses(screenClasses.screenContainer, classes.flexRow)}>
      <nav id="chat-sidebar" className={classes.sideBar} aria-label="Chat navigation"></nav>
      <Chat>
        <div className={mergeClasses(classes.chatContainer, screenClasses.scrollbarContainer)}>
          <div id="messages-list" className={classes.messagesList}>
            {chat &&
              (messages[chat.id] || []).map((message) => (
                <ChatMessageContainer key={message.id} value={message} isConnected={isConnected}>
                  {currentlyEditingMessageId === message.id ? (
                    <ChatMessageEdit
                      message={message}
                      onEditComplete={(messageId, content, attachments) =>
                        handleEditComplete(messageId, {
                          body: { content },
                          attachments,
                        })
                      }
                      onEditCancel={handleConfirmCancel}
                      isUpdating={false}
                      onCardProcessed={handleCardProcessed}
                    />
                  ) : (
                    <ChatMessage
                      content={message.body?.content || ''}
                      feedback={feedback[message.id]}
                      sendDirection={message.from?.user?.id === 'devtools' ? 'sent' : 'received'}
                      streaming={streaming[message.id]}
                      value={message}
                      onMessageAction={handleMessageAction}
                    />
                  )}
                </ChatMessageContainer>
              ))}
          </div>
        </div>
        <div className={classes.composeContainer}>
          <div className={classes.composeInner}>
            <div className={classes.typingIndicator}>{typing[chat.id] && <TypingIndicator />}</div>
            {/* <div className={classes.bannerContainer}>{/* TODO: Optional banner/toast content </div> */}
            <ComposeBox
              onSend={onSendMessage}
              messageHistory={messageHistory}
              onMessageSent={handleMessageHistory}
              onCardProcessed={handleCardProcessed}
            />
          </div>
        </div>
      </Chat>
    </div>
  );
};

ChatScreen.displayName = 'ChatScreen';
export default ChatScreen;
