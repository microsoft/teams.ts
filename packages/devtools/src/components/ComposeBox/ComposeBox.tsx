import {
  FC,
  useState,
  KeyboardEvent,
  FormEvent,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from 'react';
import { Attachment, Message } from '@microsoft/spark.api';

import { useCardStore } from '../../stores/CardStore';
import { AttachmentType } from '../../types/Attachment';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import ContentEditableArea from '../ContentEditableArea/ContentEditableArea';
import Logger from '../Logger/Logger';

import NewMessageToolbar from './ComposeBoxToolbar/ComposeBoxToolbar';
import useComposeBoxClasses from './ComposeBox.styles';

export interface ComposeBoxProps {
  onSend: (message: Partial<Message>, attachments?: Attachment[]) => void;
  messageHistory: Partial<Message>[];
  onMessageSent: (message: Partial<Message>) => void;
}
const childLog = Logger.child('ComposeBox');

const ComposeBox: FC<ComposeBoxProps> = memo(({ onSend, messageHistory, onMessageSent }) => {
  const classes = useComposeBoxClasses();
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [uiAttachments, setUiAttachments] = useState<AttachmentType[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const { currentCard, clearCurrentCard } = useCardStore();
  const processedCardRef = useRef<any>(null);
  const [isDisabled] = useState(false);

  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.focus();
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
  }, [currentCard, clearCurrentCard]);

  // Handle sending message with text and attachments
  const handleSendMessage = useCallback(() => {
    const trimmedMessage = message.trim();
    if (trimmedMessage || attachments.length > 0) {
      const messageObj: Partial<Message> = {
        body: {
          content: trimmedMessage,
          contentType: 'text',
        },
        attachments,
      };
      onSend(messageObj);
      if (trimmedMessage) {
        onMessageSent(messageObj);
      }
      setMessage('');
      setAttachments([]);
      setHistoryIndex(-1);
      processedCardRef.current = null;
    }
  }, [message, attachments, onSend, onMessageSent]);

  const insertLineBreak = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    if (range) {
      const br = document.createElement('br');
      range.insertNode(br);

      // Create a zero-width space after the br to ensure the cursor has a text node to sit in
      const space = document.createTextNode('\u200B');
      br.parentNode?.insertBefore(space, br.nextSibling);

      // Move the cursor after the space
      range.setStartAfter(space);
      range.setEndAfter(space);
      selection.removeAllRanges();
      selection.addRange(range);

      // Trigger input event to update state
      const event = new Event('input', { bubbles: true });
      contentEditableRef.current?.dispatchEvent(event);
    }
  }, []);

  const handleDefaultValue = useCallback((defaultValue: string) => {
    setMessage(defaultValue);
  }, []);

  // Memoized message input handler to prevent re-renders
  const handleInputChange = useCallback(
    (e: FormEvent<HTMLDivElement>) => {
      if (isDisabled) return;

      const target = e.target as HTMLDivElement;
      setMessage(target.innerText);
    },
    [isDisabled]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (isDisabled) return;

      if (e.key === 'Enter') {
        // Don't interfere with form submission (when Enter pressed in a form without Shift)
        if (contentEditableRef.current?.closest('form') && !e.shiftKey) {
          return;
        }
        e.preventDefault();

        if (e.shiftKey) {
          // Insert a line break at the caret position
          insertLineBreak();
        } else {
          handleSendMessage();
        }
      } else if (e.key === 'ArrowUp' && !e.shiftKey && (message === '' || historyIndex !== -1)) {
        e.preventDefault();
        if (messageHistory.length > 0) {
          const newIndex =
            historyIndex === -1 ? 0 : Math.min(historyIndex + 1, messageHistory.length - 1);
          if (newIndex < messageHistory.length) {
            setHistoryIndex(newIndex);
            const historyMessage = messageHistory[newIndex];
            setMessage(historyMessage.body?.content || '');
            if (historyMessage.attachments) {
              setAttachments(historyMessage.attachments);
            }
          }
        }
      } else if (e.key === 'ArrowDown' && !e.shiftKey && historyIndex !== -1) {
        e.preventDefault();
        const newIndex = historyIndex - 1;
        if (newIndex >= 0) {
          setHistoryIndex(newIndex);
          const historyMessage = messageHistory[newIndex];
          setMessage(historyMessage.body?.content || '');
          if (historyMessage.attachments) {
            setAttachments(historyMessage.attachments);
          }
        } else {
          setHistoryIndex(-1);
          setMessage('');
          setAttachments([]);
        }
      }
    },
    [isDisabled, message, historyIndex, insertLineBreak, messageHistory, handleSendMessage]
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
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  const handleRemoveAttachment = useCallback(
    (index: number) => {
      const newAttachments = [...attachments];
      newAttachments.splice(index, 1);
      setAttachments(newAttachments);
    },
    [attachments]
  );

  // Check if there's content to send
  const hasContent = message.trim().length > 0 || attachments.length > 0;

  const memoizedToolbar = useMemo(
    () => <NewMessageToolbar onSend={handleToolbarAction} hasContent={hasContent} />,
    [handleToolbarAction, hasContent]
  );

  return (
    <div className={classes.composeBoxContainer}>
      <ContentEditableArea
        ref={contentEditableRef}
        className={classes.composeInput}
        placeholder="Type a message..."
        value={message}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        onDefaultValue={handleDefaultValue}
        toolbar={memoizedToolbar}
      >
        <AttachmentsContainer
          attachments={uiAttachments}
          onRemoveAttachment={handleRemoveAttachment}
          showRemoveButtons={true}
        />
      </ContentEditableArea>
    </div>
  );
});

ComposeBox.displayName = 'ComposeBox';
export default ComposeBox;
