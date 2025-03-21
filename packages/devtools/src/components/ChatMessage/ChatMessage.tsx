import { FC, memo, useEffect, useState, useCallback, useMemo } from 'react';
import {
  Button,
  mergeClasses,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  PositioningShorthand,
  Tooltip,
  Image,
} from '@fluentui/react-components';
import {
  Message,
  MessageReaction,
  MessageUser,
  Attachment,
  MessageDeleteActivity,
  MessageUpdateActivity,
} from '@microsoft/spark.api';

import useSparkApi from '../../hooks/useSparkApi';
import { useChatStore } from '../../stores/ChatStore';
import { AttachmentType } from '../../types/Attachment';
import { MessageActionUIPayload } from '../../types/MessageActionUI';
import { messageReactions } from '../../types/MessageReactionsEmoji';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import Logger from '../Logger/Logger';
import MessageActionsToolbar from '../MessageActionsToolbar/MessageActionsToolbar';
import { MarkdownContent } from '../MarkdownContent';

import { useChatMessageStyles } from './ChatMessage.styles';
import ChatMessageDeleted from './ChatMessageDeleted';

interface ChatMessageProps {
  content: string;
  feedback: boolean;
  sendDirection: 'sent' | 'received';
  streaming: boolean;
  value: Message;
}

const ChatMessage: FC<ChatMessageProps> = memo(
  ({ content, streaming = false, feedback = false, sendDirection, value }) => {
    const classes = useChatMessageStyles();
    const childLog = Logger.child('ChatMessage');
    const { chat, messages } = useChatStore();
    const sparkApi = useSparkApi();
    const labelId = `message-${value.id}`;
    const [html, setHtml] = useState<string>(
      (value.body?.contentType === 'text' && value.body?.content) || ''
    );
    const [reactions, setReactions] = useState<MessageReaction[]>(value.reactions || []);
    const [reactionSender, setReactionSender] = useState<MessageUser | undefined>(undefined);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [openedByKeyboard, setOpenedByKeyboard] = useState(false);
    const [deletedMessages, setDeletedMessages] = useState<Message[]>([]);

    const handleMessageKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
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
      },
      [value.id]
    );

    const handleFocus = useCallback(() => {
      if (!isPopoverOpen) {
        setIsPopoverOpen(true);
      }
    }, [isPopoverOpen]);

    const handleBlur = useCallback(
      (event: React.FocusEvent) => {
        // Only close if we're not moving focus into the popover
        if (!event.relatedTarget?.closest(`[data-message-toolbar="${value.id}"]`)) {
          setIsPopoverOpen(false);
        }
      },
      [value.id]
    );

    const handlePopoverChange = useCallback((_e: any, data: { open: boolean }) => {
      if (!data.open) {
        setOpenedByKeyboard(false);
      }
      setIsPopoverOpen(data.open);
    }, []);

    const handleMessageDelete = useCallback(
      async (action: MessageActionUIPayload, message: Message) => {
        try {
          const deleteActivity = new MessageDeleteActivity({
            id: action.id,
            channelData: { eventType: 'softDeleteMessage' },
          });
          await sparkApi.conversations.activities(chat.id).create(deleteActivity);
          setDeletedMessages((prev) => [...prev, message]);
        } catch (err) {
          childLog.error('Error on messageUpdate/softDeleteMessage:', err);
        }
      },
      [chat.id, childLog, sparkApi]
    );

    const handleMessageUpdate = useCallback(
      async (uiAction: MessageActionUIPayload, message: Message) => {
        const { id, eventType } = uiAction;
        if (!eventType) {
          childLog.error('No event type provided for messageUpdate. Unable to update message.');
          return;
        }

        try {
          const updateActivity = new MessageUpdateActivity(eventType, {
            id,
            text: message.body?.content || '',
          });
          await sparkApi.conversations.activities(chat.id).create(updateActivity);
          if (eventType === 'undeleteMessage') {
            setDeletedMessages((prev) => prev.filter((m) => m.id !== id));
          }
        } catch (err) {
          childLog.error('Error updating message:', err);
        }
      },
      [chat.id, childLog, sparkApi.conversations]
    );

    const handleMessageReaction = useCallback(
      async (id: string, newReactionActivity: MessageReaction) => {
        const message = messages[chat.id].find((m) => m.id === id);
        if (!message) return;

        const { type, user } = newReactionActivity;
        setReactionSender(user);
        const added: Array<MessageReaction> = [];
        const removed: Array<MessageReaction> = [];
        const reaction = (message.reactions || []).find(
          (r: MessageReaction) => r.type === type && r.user?.id === user?.id
        );

        if (reaction) {
          removed.push(reaction);
          setReactions((prev) => prev.filter((r) => !(r.type === type && r.user?.id === user?.id)));
        } else {
          const newReaction = {
            type,
            user,
            createdDateTime: new Date().toUTCString(),
          };
          added.push(newReaction);
          setReactions((prev) => [...prev, newReaction]);
        }

        try {
          await sparkApi.conversations.activities(chat.id).create({
            id,
            type: 'messageReaction',
            reactionsAdded: added,
            reactionsRemoved: removed,
          });
        } catch (err) {
          childLog.error(err);
          // Revert on error
          if (added.length) {
            setReactions((prev) => prev.filter((r) => r !== added[0]));
          } else if (removed.length) {
            setReactions((prev) => [...prev, removed[0]]);
          }
        }
      },
      [chat.id, childLog, messages, sparkApi]
    );

    const onMessageAction = useCallback(
      async (action: MessageActionUIPayload) => {
        const message = messages[chat.id].find((m) => m.id === action.id);
        if (!message) return;

        try {
          switch (action.type) {
            case 'messageUpdate':
              handleMessageUpdate(action, message);
              break;
            case 'messageDelete':
              handleMessageDelete(action, message);
              break;
            // TODO: Implement reply with quote
            // case 'replyWithQuote':
            //   break;
            case 'messageReaction':
              if (action.reactionType && action.user) {
                handleMessageReaction(action.id, {
                  type: action.reactionType,
                  user: action.user,
                  createdDateTime: new Date().toUTCString(),
                });
              }
          }
        } catch (err) {
          childLog.error('Error handling message action:', err);
        }
      },
      [chat.id, messages, childLog, handleMessageReaction, handleMessageDelete, handleMessageUpdate]
    );

    const renderAttachment = useCallback(
      (attachment: Attachment) => {
        if (!attachment) return null;

        switch (attachment.contentType) {
          case 'image/png':
          case 'image/jpeg':
          case 'image/gif':
          case 'image/jpg':
            return (
              <Image
                key={attachment.id}
                src={attachment.contentUrl}
                alt={attachment.name || 'Image attachment'}
                className={classes.attachmentImage}
              />
            );
          default:
            return null;
        }
      },
      [classes.attachmentImage]
    );

    const convertToAttachmentType = useCallback((attachment: Attachment): AttachmentType => {
      if (attachment.contentType?.startsWith('application/vnd.microsoft.card.')) {
        return {
          type: 'card',
          content: attachment.content,
          name: attachment.name,
        };
      }

      if (attachment.contentType?.startsWith('image/')) {
        return {
          type: 'image',
          content: attachment.contentUrl || attachment.content,
          name: attachment.name,
        };
      }

      return {
        type: 'file',
        content: attachment.contentUrl || attachment.content,
        name: attachment.name,
      };
    }, []);

    const nonImageAttachments = useMemo(() => {
      if (!value.attachments) return [];
      return value.attachments
        .filter((attachment) => !attachment.contentType?.startsWith('image/'))
        .map(convertToAttachmentType);
    }, [value.attachments, convertToAttachmentType]);

    const hasAttachments = useMemo(
      () => value.attachments && value.attachments.length > 0,
      [value.attachments]
    );

    const messageBodyClasses = useMemo(
      () =>
        mergeClasses(
          classes.messageBody,
          sendDirection === 'sent' ? classes.sent : classes.received,
          streaming && classes.streaming
        ),
      [
        classes.messageBody,
        classes.received,
        classes.sent,
        classes.streaming,
        sendDirection,
        streaming,
      ]
    );

    const reactionContainerClasses = useMemo(
      () =>
        mergeClasses(
          classes.reactionContainer,
          reactions.length > 0 && classes.reactionContainerVisible,
          sendDirection === 'sent' && classes.reactionContainerSent
        ).trim(),
      [
        classes.reactionContainer,
        classes.reactionContainerSent,
        classes.reactionContainerVisible,
        reactions.length,
        sendDirection,
      ]
    );

    useEffect(() => {
      if (value.body?.contentType === 'text') {
        setHtml(value.body?.content || '');
      }
      setReactions(value.reactions || []);
    }, [value]);

    if (value.deleted && deletedMessages.includes(value)) {
      return (
        <ChatMessageDeleted
          id={value.id}
          sendDirection={sendDirection}
          onMessageAction={onMessageAction}
        />
      );
    }
    return (
      <>
        <div id={labelId} aria-labelledby={labelId} className={classes.messageContainer}>
          <Popover
            open={isPopoverOpen}
            onOpenChange={handlePopoverChange}
            openOnHover
            mouseLeaveDelay={100}
            positioning={'above-end' as PositioningShorthand}
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
                className={messageBodyClasses}
              >
                <div className={classes.messageContent}>
                  <span className={classes.messageText}>
                    {html ? <MarkdownContent content={html} /> : content}
                    {hasAttachments && (
                      <div className={classes.attachments}>
                        {value.attachments &&
                          value.attachments
                            .filter((attachment) => attachment.contentType?.startsWith('image/'))
                            .map(renderAttachment)}
                      </div>
                    )}
                    {nonImageAttachments.length > 0 && (
                      <AttachmentsContainer
                        attachments={nonImageAttachments}
                        onRemoveAttachment={() => {}}
                        showRemoveButtons={false}
                      />
                    )}
                    {streaming && <span className={classes.streamingCursor} />}
                  </span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverSurface className={classes.popoverSurface} data-message-toolbar={value.id}>
              <MessageActionsToolbar
                userSentMessage={sendDirection === 'sent'}
                value={value}
                size="small"
                onMessageAction={onMessageAction}
                reactionSender={reactionSender}
              />
            </PopoverSurface>
          </Popover>
          {reactions.length > 0 && (
            <div data-tid="reactions-container" className={reactionContainerClasses}>
              {reactions.map((reaction) => (
                <Tooltip
                  content={<span className={classes.tooltipText}>{reaction.type}</span>}
                  relationship="label"
                  key={reaction.type}
                  positioning={'below-end' as PositioningShorthand}
                >
                  <Button
                    className={mergeClasses(
                      classes.reactionButton,
                      reaction.user?.id === reactionSender?.id && classes.reactionFromUser
                    ).trim()}
                    key={reaction.type}
                    onClick={() => handleMessageReaction(value.id, reaction)}
                    shape="circular"
                    size="small"
                  >
                    {messageReactions.find((r) => r.reaction === reaction.type)?.label}
                  </Button>
                </Tooltip>
              ))}
            </div>
          )}
        </div>
        {feedback && (
          <div className={classes.feedbackContainer}>{/* TODO: Add feedback UI here */}</div>
        )}
      </>
    );
  }
);

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
