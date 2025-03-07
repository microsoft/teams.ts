import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { Message } from '@microsoft/spark.api';

import { formatMessageTime } from '../../utils/date-format';
import { useClasses } from './ChatMessageContainer.styles';
import ChatAvatarWrapper from './ChatAvatarWrapper';

export interface MessageProps {
  readonly value: Message;
  readonly isConnected?: boolean;
  readonly children?: React.ReactNode;
}

const ChatMessageContainer: FC<MessageProps> = ({ value, isConnected = false, children }) => {
  const classes = useClasses();
  const sendDirection = value.from?.user?.id === 'devtools' ? 'sent' : 'received';
  const ariaLabel = sendDirection === 'sent' ? 'Sent message at' : 'Received message at';

  return (
    <article
      id={`chat-message-row-${value.id}`}
      className={mergeClasses(
        classes.messageRow,
        sendDirection === 'sent' ? classes.messageGroupSent : classes.messageGroupReceived
      )}
    >
      <div className={classes.messageContainer}>
        <div className={classes.badgeMessageContainer}>
          {sendDirection === 'received' && <ChatAvatarWrapper isConnected={isConnected} />}
          <div className={classes.timeMessageContainer}>
            <time
              aria-label={ariaLabel}
              id={value.id}
              className={mergeClasses(
                classes.timestamp,
                sendDirection === 'sent' && classes.sentTime
              )}
            >
              {value.createdDateTime && formatMessageTime(value.createdDateTime)}
            </time>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ChatMessageContainer;
