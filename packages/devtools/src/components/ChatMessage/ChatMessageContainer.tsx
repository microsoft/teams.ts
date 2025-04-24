import { FC, memo } from 'react';
import { mergeClasses, Text, Tooltip } from '@fluentui/react-components';
import { Message } from '@microsoft/teams.api';

import {
  formatMessageDateTime,
  formatMessageTime,
  formatMessageTooltipTime,
} from '../../utils/date-format';

import useChatContainerClasses from './ChatMessageContainer.styles';
import ChatAvatarWrapper from './ChatAvatarWrapper';

export interface MessageProps {
  readonly value: Message;
  readonly isConnected?: boolean;
  readonly children?: React.ReactNode;
}

const ChatMessageContainer: FC<MessageProps> = memo(({ value, isConnected = false, children }) => {
  const classes = useChatContainerClasses();
  const sendDirection = value.from?.user?.id === 'devtools' ? 'sent' : 'received';
  const isSent = sendDirection === 'sent';
  const ariaLabel = isSent ? 'Sent message at' : 'Received message at';

  const messageRowClasses = mergeClasses(
    classes.messageRow,
    isSent ? classes.messageGroupSent : classes.messageGroupReceived
  );

  return (
    <article id={`chat-message-row-${value.id}`} className={messageRowClasses}>
      <div className={classes.messageContainer}>
        <div data-ed className={classes.badgeMessageContainer}>
          {sendDirection === 'received' && (
            <ChatAvatarWrapper id={`avatar-${value.id}`} isConnected={isConnected} />
          )}
          <div data-ed className={classes.timeMessageContainer}>
            <div
              className={mergeClasses(
                classes.timestampContainer,
                isSent && classes.messageGroupSent
              )}
            >
              {value.createdDateTime ? (
                <Tooltip
                  content={formatMessageTooltipTime(value.createdDateTime)}
                  relationship="label"
                >
                  <time
                    aria-label={ariaLabel}
                    dateTime={formatMessageDateTime(value.createdDateTime)}
                    id={value.id}
                    className={mergeClasses(
                      classes.timestamp,
                      sendDirection === 'sent' && classes.sentTime
                    )}
                  >
                    {formatMessageTime(value.createdDateTime)}
                  </time>
                </Tooltip>
              ) : null}
              {value.lastModifiedDateTime && (
                <Text
                  id={`edited-${value.id}-${value.lastModifiedDateTime}`}
                  title={`Edited ${formatMessageTooltipTime(value.lastModifiedDateTime)}`}
                  className={classes.timestamp}
                >
                  Edited
                </Text>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
});

ChatMessageContainer.displayName = 'ChatMessageContainer';
export default ChatMessageContainer;
