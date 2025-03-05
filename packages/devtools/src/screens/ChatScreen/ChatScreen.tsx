import { Attachment } from '@microsoft/spark.api';
import { FC, useCallback, useContext, useState } from 'react';

import Chat from '../../components/Chat/Chat';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import ChatMessageContainer from '../../components/ChatMessage/ChatMessageContainer';
import ComposeBox from '../../components/ComposeBox/ComposeBox';
import TypingIndicator from '../../components/TypingIndicator/TypingIndicator';
import useLogger from '../../hooks/useLogger';
import useSparkApi from '../../hooks/useSparkApi';
import { ChatContext } from '../../stores/ChatStore';
import { useDevModeSendMessage } from '../../utils/dev';

import useClasses from './ChatScreen.styles';
import useScreensClasses from '../Screens.styles';

const MAX_HISTORY = 5;

interface ChatScreenProps {
  isConnected: boolean;
}

const ChatScreen: FC<ChatScreenProps> = ({ isConnected }) => {
  const classes = useClasses();
  const screenClasses = useScreensClasses();
  const { chat, feedback, messages, streaming, typing } = useContext(ChatContext);
  const [messageHistory, setMessageHistory] = useState<string[]>([]);
  const log = useLogger();
  const childLog = log.child('ChatScreen');

  const sparkApi = useSparkApi();

  const handleSendMessage = useCallback(
    async (message: string, messageAttachments?: Attachment[]) => {
      try {
        await sparkApi.conversations.activities(chat.id).create({
          type: 'message',
          text: message,
          attachments: messageAttachments || [],
        });
      } catch (err) {
        childLog.error('Error sending message:', err);
      }
    },
    [sparkApi, chat?.id, childLog]
  );

  const handleMessageSent = useCallback((message: string) => {
    setMessageHistory((prev) => [message, ...prev].slice(0, MAX_HISTORY));
  }, []);

  // Use the hook to automatically send a message in development mode
  // This will be a no-op in production builds
  useDevModeSendMessage((message: string, attachments?: Attachment[]) => {
    handleSendMessage(message, attachments);
    if (message.trim()) {
      handleMessageSent(message.trim());
    }
  });

  return (
    <Chat className={screenClasses.screenContainer}>
      <div className={screenClasses.scrollbarContainer}>
        <div className={classes.messagesList}>
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
            onSend={handleSendMessage}
            messageHistory={messageHistory}
            onMessageSent={handleMessageSent}
          />
        </div>
      </div>
    </Chat>
  );
};

export default ChatScreen;
