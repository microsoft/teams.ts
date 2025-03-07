import { FC, useContext, useEffect, useState } from 'react';
import { MarkdownContent } from '../MarkdownContent';
import { useChatMessageStyles } from './ChatMessage.styles';
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
import { Message, MessageReaction, MessageUser, Attachment } from '@microsoft/spark.api';

import MessageActionsToolbar, {
  MessageReactionsEmoji,
} from '../MessageActionsToolbar/MessageActionsToolbar';
import { ChatContext } from '../../stores/ChatStore';
import useSparkApi from '../../hooks/useSparkApi';
import { AttachmentType } from '../../types/Attachment';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import Logger from '../Logger/Logger';

interface ChatMessageProps {
  content: string;
  feedback: boolean;
  sendDirection: 'sent' | 'received';
  streaming: boolean;
  value: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({
  content,
  streaming = false,
  feedback = false,
  sendDirection,
  value,
}) => {
  const classes = useChatMessageStyles();
  const childLog = Logger.child('ChatMessage');

  const { chat, messages } = useContext(ChatContext);
  const sparkApi = useSparkApi();
  const labelId = `message-${value.id}`;
  const [html, setHtml] = useState<string>(
    (value.body?.contentType === 'text' && value.body?.content) || ''
  );
  const [reactions, setReactions] = useState<MessageReaction[]>(value.reactions || []);
  const [reactionSender, setReactionSender] = useState<MessageUser | undefined>(undefined);
  const hasAttachments = value.attachments && value.attachments.length > 0;

  const handleMessageReaction = async (id: string, newReactionActivity: MessageReaction) => {
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
        user: user,
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
  };

  const renderAttachment = (attachment: Attachment) => {
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
  };

  const convertToAttachmentType = (attachment: Attachment): AttachmentType => {
    // Check if it's a card attachment
    if (attachment.contentType?.startsWith('application/vnd.microsoft.card.')) {
      return {
        type: 'card',
        content: attachment.content,
        name: attachment.name,
      };
    }

    // Handle image attachments
    if (attachment.contentType?.startsWith('image/')) {
      return {
        type: 'image',
        content: attachment.contentUrl || attachment.content,
        name: attachment.name,
      };
    }

    // Handle other file attachments
    return {
      type: 'file',
      content: attachment.contentUrl || attachment.content,
      name: attachment.name,
    };
  };

  const getNonImageAttachments = (): AttachmentType[] => {
    if (!value.attachments) return [];
    const nonImageAttachments = value.attachments
      .filter((attachment) => !attachment.contentType?.startsWith('image/'))
      .map(convertToAttachmentType);

    return nonImageAttachments;
  };

  const nonImageAttachments = getNonImageAttachments();

  useEffect(() => {
    if (value.body?.contentType === 'text') {
      setHtml(value.body?.content || '');
    }
    setReactions(value.reactions || []);
  }, [value]);

  return (
    <>
      <Popover
        closeOnScroll
        closeOnIframeFocus
        inertTrapFocus
        openOnHover
        positioning={'above-end' as PositioningShorthand}
        trapFocus
      >
        <PopoverTrigger disableButtonEnhancement>
          <div
            tabIndex={-1}
            id={labelId}
            aria-labelledby={labelId}
            className={classes.messageContainer}
          >
            <div
              tabIndex={0}
              className={mergeClasses(
                classes.messageBody,
                sendDirection === 'sent' ? classes.sent : classes.received,
                streaming && classes.streaming
              )}
            >
              <div className={classes.messageContent}>
                <span className={classes.messageText}>
                  {html ? <MarkdownContent content={html} /> : content}
                  {hasAttachments && (
                    <div className={classes.attachments}>
                      {value.attachments &&
                        value.attachments
                          .filter((attachment) => attachment.contentType?.startsWith('image/'))
                          .map((attachment) => renderAttachment(attachment))}
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
            {reactions.length > 0 && (
              <div
                data-tid="reactions-container"
                className={mergeClasses(
                  classes.reactionContainer,
                  reactions.length > 0 && classes.reactionContainerVisible,
                  sendDirection === 'sent' && classes.reactionContainerSent
                ).trim()}
              >
                {reactions.map((reaction) => (
                  // TODO: tab order needs to be combined with MessageActionsToolbar
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
                      {MessageReactionsEmoji.find((r) => r.reaction === reaction.type)?.label}
                    </Button>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverSurface className={classes.popoverSurface}>
          <MessageActionsToolbar
            sent={sendDirection === 'sent'}
            value={value}
            size="small"
            handleMessageReaction={handleMessageReaction}
            reactionSender={reactionSender}
          />
        </PopoverSurface>
      </Popover>
      {feedback && (
        <div className={classes.feedbackContainer}>{/* TODO: Add feedback UI here */}</div>
      )}
    </>
  );
};

export default ChatMessage;
