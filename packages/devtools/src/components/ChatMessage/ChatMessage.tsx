import { FC, memo, useCallback, useRef, useState } from 'react';
import { mergeClasses, Popover, PopoverSurface, PopoverTrigger } from '@fluentui/react-components';
import { Message, MessageUser, MessageReaction } from '@microsoft/teams.api';

import { useChatStore } from '../../stores/ChatStore';
import { MessageActionUIPayload } from '../../types/MessageActionUI';
import { hasMarkdownContent } from '../../utils/markdown';
import Feedback from '../Feedback/Feedback';
import MessageActionsToolbar from '../MessageActionsToolbar/MessageActionsToolbar';
import { MarkdownContent } from '../MarkdownContent';

import ChatMessageDeleted from './MessageUpdate/ChatMessageDeleted';
import useChatMessageStyles from './ChatMessage.styles';
import MessageAttachments from './MessageAttachments';
import MessageReactionButton from './MessageReactionButton';

interface ChatMessageProps {
  content: string;
  feedback?: boolean;
  sendDirection: 'sent' | 'received';
  streaming?: boolean;
  value: Message;
  onMessageAction: (action: MessageActionUIPayload) => Promise<void>;
}

const ChatMessage: FC<ChatMessageProps> = memo(
  ({ content, streaming = false, feedback = false, sendDirection, value, onMessageAction }) => {
    const classes = useChatMessageStyles();
    const { deletedMessages, chat } = useChatStore();
    const isDeleted = deletedMessages[chat.id]?.some((m) => m.id === value.id);
    const labelId = `message-${value.id}`;
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [openedByKeyboard, setOpenedByKeyboard] = useState(false);
    const [reactionSender, setReactionSender] = useState<MessageUser | undefined>();
    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
    const feedbackRef = useRef(false);

    const handleMessageKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (!isFeedbackDialogOpen) {
            setOpenedByKeyboard(true);
            setIsPopoverOpen(true);
            // Use setTimeout to ensure the Popover is rendered before trying to focus
            setTimeout(() => {
              const toolbar = document.querySelector(`[data-message-toolbar="${value.id}"] button`);
              if (toolbar) {
                (toolbar as HTMLButtonElement).focus();
              }
            }, 100);
          }
        }
      },
      [value.id, isFeedbackDialogOpen]
    );

    const handleFocus = useCallback(() => {
      if (!isPopoverOpen && !isFeedbackDialogOpen) {
        setIsPopoverOpen(true);
      }
    }, [isPopoverOpen, isFeedbackDialogOpen]);

    const handleBlur = useCallback(
      (event: React.FocusEvent) => {
        // Only close if we're not moving focus into the popover
        if (!event.relatedTarget?.closest(`[data-message-toolbar="${value.id}"]`)) {
          setIsPopoverOpen(false);
        }
      },
      [value.id]
    );

    const handlePopoverChange = useCallback(
      (_e: any, data: { open: boolean }) => {
        if (!data.open) {
          setOpenedByKeyboard(false);
        }
        if (!isFeedbackDialogOpen) {
          setIsPopoverOpen(data.open);
        }
      },
      [isFeedbackDialogOpen]
    );

    const handleReactionClick = useCallback(
      (reaction: MessageReaction) => {
        const existingReaction = value.reactions?.find(
          (r) => r.type === reaction.type && r.user?.id === reaction.user?.id
        );
        if (existingReaction) {
          setReactionSender(existingReaction.user);
        } else {
          setReactionSender(sendDirection === 'sent' ? value.from?.user : undefined);
        }
        onMessageAction({
          id: value.id,
          type: 'messageReaction',
          reactionType: reaction.type,
        });
      },
      [value.id, value.reactions, value.from?.user, sendDirection, onMessageAction]
    );

    if (feedback && sendDirection === 'received') {
      feedbackRef.current = true;
    }

    if (isDeleted) {
      return (
        <ChatMessageDeleted
          id={value.id}
          sendDirection={sendDirection}
          onMessageAction={onMessageAction}
          user={value.from?.user}
        />
      );
    }

    const messageContent = hasMarkdownContent(content) ? (
      <MarkdownContent content={content} />
    ) : (
      <div className={classes.messageText}>{content}</div>
    );

    return (
      <>
        <div
          id={labelId}
          aria-labelledby={labelId}
          className={mergeClasses(
            classes.messageContainer,
            sendDirection === 'sent' ? classes.sent : classes.received
          )}
        >
          <Popover
            open={isPopoverOpen && !isFeedbackDialogOpen}
            onOpenChange={handlePopoverChange}
            openOnHover={!isFeedbackDialogOpen}
            mouseLeaveDelay={100}
            positioning={{ align: 'end', position: 'above' }}
            trapFocus={openedByKeyboard}
            unstable_disableAutoFocus={!openedByKeyboard}
          >
            <PopoverTrigger disableButtonEnhancement>
              <div
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded={isPopoverOpen}
                onKeyDown={handleMessageKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={mergeClasses(classes.messageBody, streaming && classes.streaming)}
              >
                <div className={classes.messageContent}>
                  {messageContent}
                  {value.attachments && value.attachments.length > 0 && (
                    <MessageAttachments attachments={value.attachments} classes={classes} />
                  )}
                </div>
              </div>
            </PopoverTrigger>
            <PopoverSurface className={classes.popoverSurface} data-message-toolbar={value.id}>
              <MessageActionsToolbar
                userSentMessage={sendDirection === 'sent'}
                value={value}
                onMessageAction={onMessageAction}
              />
            </PopoverSurface>
          </Popover>
          {feedbackRef.current && (
            <Feedback
              displayName={value.from?.application?.displayName || 'App'}
              onDialogOpenChange={setIsFeedbackDialogOpen}
              isFeedbackDialogOpen={isFeedbackDialogOpen}
              value={value}
              streaming={streaming}
            />
          )}
        </div>
        {value.reactions && value.reactions.length > 0 && (
          <div
            className={mergeClasses(
              classes.reactionContainer,
              value.reactions.length > 0 && classes.reactionContainerVisible,
              sendDirection === 'sent' && classes.reactionContainerSent
            )}
          >
            {value.reactions.map((reaction) => (
              <MessageReactionButton
                key={`${reaction.type}-${reaction.user?.id}`}
                reaction={reaction}
                isFromUser={reaction.user?.id === reactionSender?.id}
                onReactionClick={() => handleReactionClick(reaction)}
              />
            ))}
          </div>
        )}
      </>
    );
  }
);

ChatMessage.displayName = 'ChatMessage';
export default ChatMessage;
