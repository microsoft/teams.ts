import { FC, useCallback, useEffect, useState } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { Message, MessageActivityInput } from '@microsoft/teams.api';

import ChatMessageEdit from '../../components/ChatMessage/MessageUpdate/ChatMessageEdit';
import Chat from '../../components/Chat/Chat';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import ChatMessageContainer from '../../components/ChatMessage/ChatMessageContainer';
import ComposeBox from '../../components/ComposeBox/ComposeBox';
import Logger from '../../components/Logger/Logger';
import TypingIndicator from '../../components/TypingIndicator/TypingIndicator';
import useTeamsApi from '../../hooks/useTeamsApi';
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
  const { editingMessageId, clearCurrentCard, setEditingMessageId } = useCardStore();
  const [messageHistory, setMessageHistory] = useState<Partial<Message>[]>([]);
  const [currentlyEditingMessageId, setCurrentlyEditingMessageId] = useState<string | null>(null);
  const teamsApi = useTeamsApi();

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
        const { reactions = [] } = originalMessage;
        const existingReaction =
          action.type === 'messageReaction' && action.reactionType
            ? reactions.find((r) => r.type === action.reactionType)
            : undefined;

        switch (action.type) {
          case 'messageUpdate':
            if (action.eventType === 'undeleteMessage') {
              const messageBody = {
                body: {
                  content: originalMessage.body?.content || '',
                  contentType: 'text',
                },
                attachments: originalMessage.attachments || [],
              };

              await teamsApi.conversations.updateActivity(
                chat.id,
                action.id,
                new MessageActivityInput(originalMessage.body?.content || '', {
                  attachments: originalMessage.attachments || [],
                  value: messageBody,
                })
              );
              removeDeletedMessage(chat.id, action.id);
            } else if (!action.eventType) {
              // Regular edit
              setCurrentlyEditingMessageId(action.id);
            }
            break;

          case 'messageDelete':
            await teamsApi.conversations.deleteActivity(chat.id, action.id);
            addDeletedMessage(chat.id, originalMessage);
            break;

          case 'messageReaction':
            if (!action.reactionType) return;

            if (existingReaction) {
              await teamsApi.conversations.deleteReaction(chat.id, action.id, action.reactionType);
            } else {
              await teamsApi.conversations.addReaction(chat.id, action.id, action.reactionType);
            }
            break;
        }
      } catch (err) {
        childLog.error('Error handling message action:', err);
      }
    },
    [chat.id, getMessageById, teamsApi.conversations, addDeletedMessage, removeDeletedMessage]
  );

  const handleConfirmCancel = useCallback(() => {
    setCurrentlyEditingMessageId(null);
    setEditingMessageId(null);
  }, [setEditingMessageId]);

  const handleEditComplete = useCallback(
    async (messageId: string, updatedMessage: Partial<Message>) => {
      const originalMessage = getMessageById(messageId);
      if (
        originalMessage?.body?.content === updatedMessage.body?.content &&
        JSON.stringify(originalMessage?.attachments) === JSON.stringify(updatedMessage.attachments)
      ) {
        setCurrentlyEditingMessageId(null);
        setEditingMessageId(null);
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

        await teamsApi.conversations.updateActivity(
          chat.id,
          messageId,
          new MessageActivityInput(updatedMessage.body?.content || '', {
            attachments: updatedMessage.attachments || [],
            value: messageBody,
          })
        );
        setCurrentlyEditingMessageId(null);
        setEditingMessageId(null);
      } catch (err) {
        childLog.error('Error updating message:', err);
      }
    },
    [getMessageById, teamsApi.conversations, chat.id, setEditingMessageId]
  );

  const onSendMessage = useCallback(
    async (message: Partial<Message>) => {
      try {
        await teamsApi.conversations.activities(chat.id).create({
          type: 'message',
          text: message.body?.content || '',
          attachments: message.attachments || [],
        });
      } catch (err) {
        childLog.error('Error sending message:', err);
      }
    },
    [teamsApi, chat?.id]
  );

  const handleMessageHistory = useCallback((message: Partial<Message>) => {
    setMessageHistory((prev) => [message, ...prev].slice(0, MAX_HISTORY));
  }, []);

  // Use the hook to automatically send a message in development mode
  // This will be a no-op in production builds
  useDevModeSendMessage(onSendMessage);

  useEffect(() => {
    if (editingMessageId) {
      setCurrentlyEditingMessageId(editingMessageId);
    }
  }, [editingMessageId]);

  return (
    <div className={mergeClasses(screenClasses.screenContainer, classes.flexRow)}>
      <nav id="chat-sidebar" className={classes.sideBar} aria-label="Chat navigation"></nav>
      <Chat>
        <div className={mergeClasses(classes.chatContainer, screenClasses.scrollbarContainer)}>
          <div id="messages-list" className={classes.messagesList}>
            {chat &&
              (messages[chat.id] || []).map((message: Message) => (
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
