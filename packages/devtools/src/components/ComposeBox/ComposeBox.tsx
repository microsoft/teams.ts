import {
  FC,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Textarea } from '@fluentui/react-components';
import { Attachment, Message } from '@microsoft/spark.api';

import { useCardStore } from '../../stores/CardStore';
import { AttachmentType } from '../../types/Attachment';
import Logger from '../Logger/Logger';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import NewMessageToolbar from './ComposeBoxToolbar/ComposeBoxToolbar';
import useComposeBoxClasses from './ComposeBox.styles';

export interface ComposeBoxProps {
  onSend: (message: Partial<Message>, attachments?: Attachment[]) => void;
  messageHistory: Partial<Message>[];
  onMessageSent: (message: Partial<Message>) => void;
}

const ComposeBox: FC<ComposeBoxProps> = ({ onSend, messageHistory, onMessageSent }) => {
  const classes = useComposeBoxClasses();
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [uiAttachments, setUiAttachments] = useState<AttachmentType[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { currentCard, clearCurrentCard } = useCardStore();
  const processedCardRef = useRef<any>(null);
  const childLog = Logger.child('ComposeBox');

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // Convert API Attachment to UI AttachmentType
  const convertToAttachmentType = (attachment: Attachment): AttachmentType => {
    // Check for card attachment
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

  // Update UI attachments when API attachments change
  useEffect(() => {
    setUiAttachments(attachments.map(convertToAttachmentType));
  }, [attachments]);

  // Process currentCard only once when it changes
  useEffect(() => {
    if (currentCard && JSON.stringify(processedCardRef.current) !== JSON.stringify(currentCard)) {
      childLog.info('Processing new card from CardStore:', currentCard);
      processedCardRef.current = currentCard;

      const newAttachment: Attachment = {
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: currentCard,
      };

      setAttachments((prev) => [...prev, newAttachment]);

      // Clear the current card from the store
      clearCurrentCard();
    }
  }, [currentCard, clearCurrentCard, childLog]);

  // Handle sending message with text and attachments
  const handleSendMessage = useCallback(() => {
    if (message.trim() || attachments.length > 0) {
      const messageObj: Partial<Message> = {
        body: {
          content: message,
          contentType: 'text',
        },
        attachments,
      };
      onSend(messageObj);
      if (message.trim()) {
        onMessageSent(messageObj);
      }
      setMessage('');
      setAttachments([]);
      setHistoryIndex(-1);
      processedCardRef.current = null;
    }
  }, [message, attachments, onSend, onMessageSent]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      } else if (e.key === 'ArrowUp' && !e.shiftKey && (message === '' || historyIndex !== -1)) {
        e.preventDefault();
        if (messageHistory.length > 0) {
          const newIndex =
            historyIndex === -1 ? 0 : Math.min(historyIndex + 1, messageHistory.length - 1);
          if (newIndex < messageHistory.length) {
            setHistoryIndex(newIndex);
            setMessage(messageHistory[newIndex].body?.content || '');
          }
        }
      } else if (e.key === 'ArrowDown' && !e.shiftKey && historyIndex !== -1) {
        e.preventDefault();
        const newIndex = historyIndex - 1;
        if (newIndex >= 0) {
          setHistoryIndex(newIndex);
          setMessage(messageHistory[newIndex].body?.content || '');
        } else {
          setHistoryIndex(-1);
          setMessage('');
        }
      }
    },
    [handleSendMessage, message, historyIndex, messageHistory]
  );

  // Handle toolbar actions
  const handleToolbarAction = useCallback(
    (toolbarAttachments?: any[]) => {
      if (toolbarAttachments && toolbarAttachments.length > 0) {
        childLog.info('Processing attachments from toolbar:', toolbarAttachments);

        // If we have new attachments, add them directly
        const newAttachments: Attachment[] = toolbarAttachments.map((attachment) => ({
          contentType:
            attachment.type === 'card'
              ? 'application/vnd.microsoft.card.adaptive'
              : attachment.type === 'image'
                ? 'image/png'
                : 'application/octet-stream',
          content: attachment.content,
          name: attachment.name,
        }));

        // Add attachments directly without checking for duplicates
        // This is safe because we're handling toolbar actions directly
        setAttachments((prev) => [...prev, ...newAttachments]);
      } else {
        // If no attachments, this is a send action
        // Only proceed if there's text content or existing attachments
        if (message.trim() || attachments.length > 0) {
          handleSendMessage();
        }
      }
    },
    [childLog, handleSendMessage, message, attachments]
  );

  const handleRemoveAttachment = useCallback(
    (index: number) => {
      const newAttachments = [...attachments];
      newAttachments.splice(index, 1);
      setAttachments(newAttachments);
    },
    [attachments]
  );

  // Memoized message input handler to prevent re-renders
  const handleMessageChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);

  // Check if there's content to send
  const hasContent = message.trim().length > 0 || attachments.length > 0;

  const memoizedToolbar = useMemo(
    () => <NewMessageToolbar onSend={handleToolbarAction} hasContent={hasContent} />,
    [handleToolbarAction, hasContent]
  );

  return (
    <div className={classes.composeBoxContainer}>
      <div className={classes.textareaContainer}>
        <Textarea
          ref={textareaRef}
          className={classes.composeInput}
          placeholder="Type a message..."
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />
        {memoizedToolbar}

        <AttachmentsContainer
          attachments={uiAttachments}
          onRemoveAttachment={handleRemoveAttachment}
          showRemoveButtons={true}
        />
      </div>
    </div>
  );
};

export default ComposeBox;
ComposeBox.displayName = 'ComposeBox';
