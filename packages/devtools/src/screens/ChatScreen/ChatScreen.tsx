import { FC, useCallback, useState } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { Message } from '@microsoft/spark.api';

import Chat from '../../components/Chat/Chat';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import ChatMessageContainer from '../../components/ChatMessage/ChatMessageContainer';
import ComposeBox from '../../components/ComposeBox/ComposeBox';
import Logger from '../../components/Logger/Logger';
import TypingIndicator from '../../components/TypingIndicator/TypingIndicator';
import useSparkApi from '../../hooks/useSparkApi';
import { useChatStore } from '../../stores/ChatStore';
import { useDevModeSendMessage } from '../../utils/devUtils';
import useScreensClasses from '../Screens.styles';

import useChatScreenClasses from './ChatScreen.styles';

interface ChatScreenProps {
  isConnected: boolean;
}

const MAX_HISTORY = 5;

const ChatScreen: FC<ChatScreenProps> = ({ isConnected }) => {
  const classes = useChatScreenClasses();
  const screenClasses = useScreensClasses();
  const { chat, feedback, messages, streaming, typing } = useChatStore();
  const [messageHistory, setMessageHistory] = useState<Partial<Message>[]>([]);
  const log = Logger;
  const childLog = log.child('ChatScreen');

  const sparkApi = useSparkApi();

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
    [sparkApi, chat?.id, childLog]
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
      <Chat id="screen-container" className={screenClasses.screenContainer}>
        <div id="scrollbar-container" className={screenClasses.scrollbarContainer}>
          <div id="messages-container" className={classes.messagesList}>
            {chat &&
              (messages[chat.id] || []).map((message) => (
                <ChatMessageContainer key={message.id} value={message} isConnected={isConnected}>
                  <ChatMessage
                    content={message.body?.content || ''}
                    feedback={feedback[message.id]}
                    sendDirection={message.from?.user?.id === 'devtools' ? 'sent' : 'received'}
                    streaming={streaming[message.id]}
                    value={message}
                  />
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
            />
          </div>
        </div>
      </Chat>
    </div>
  );
};

ChatScreen.displayName = 'ChatScreen';
export default ChatScreen;
