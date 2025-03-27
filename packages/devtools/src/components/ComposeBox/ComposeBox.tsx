import {
  FC,
  FormEvent,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Attachment, Message } from '@microsoft/spark.api';

import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import ContentEditableArea from '../ContentEditableArea/ContentEditableArea';
import Logger from '../Logger/Logger';

import ComposeBoxToolbar from './ComposeBoxToolbar/ComposeBoxToolbar';
import useComposeBoxClasses from './ComposeBox.styles';
import { convertAttachmentsForUI, processMessageContent } from './ComposeBoxUtils';

export interface ComposeBoxProps {
  onSend: (message: Partial<Message>, attachments?: Attachment[]) => void;
  messageHistory: Partial<Message>[];
  onMessageSent: (message: Partial<Message>) => void;
  currentCard?: any;
  onCardProcessed?: () => void;
}

const childLog = Logger.child('ComposeBox');

// Use sessionStorage to persist state across navigation
const STORAGE_KEY = 'composeBoxState';

const ComposeBox: FC<ComposeBoxProps> = memo(
  ({ onSend, messageHistory, onMessageSent, currentCard, onCardProcessed }) => {
    const classes = useComposeBoxClasses();
    const [message, setMessage] = useState(() => {
      try {
        const savedState = sessionStorage.getItem(STORAGE_KEY);
        if (savedState) {
          const { message: savedMessage } = JSON.parse(savedState);
          return savedMessage || '';
        }
      } catch (error) {
        childLog.error('Error loading saved state:', error);
      }
      return '';
    });
    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const contentEditableRef = useRef<HTMLDivElement>(null);
    const processedCardsRef = useRef<Set<string>>(new Set());
    const mountedRef = useRef(false);
    const cardProcessedRef = useRef(false);

    // Save state to sessionStorage when it changes
    useEffect(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ message }));
      } catch (error) {
        childLog.error('Error saving state:', error);
      }
    }, [message]);

    useEffect(() => {
      if (contentEditableRef.current) {
        contentEditableRef.current.focus();
      }
    }, []);

    // Handle initial mount with a card already in the store
    useEffect(() => {
      mountedRef.current = true;
      return () => {
        mountedRef.current = false;
        cardProcessedRef.current = false;
      };
    }, []);

    // Process currentCard only once when it changes and not in edit mode
    useEffect(() => {
      if (currentCard && mountedRef.current) {
        childLog.info('Current card:', currentCard);

        const currentCardStr = JSON.stringify(currentCard);

        if (!processedCardsRef.current.has(currentCardStr)) {
          childLog.info('Processing new card:', currentCard);

          const newAttachment: Attachment = {
            contentType: 'application/vnd.microsoft.card.adaptive',
            content: currentCard,
          };

          setAttachments((prev) => {
            // Don't add the attachment if it already exists
            if (prev.some((a) => JSON.stringify(a.content) === currentCardStr)) {
              childLog.info('Card already exists in attachments, skipping');
              return prev;
            }
            const newAttachments = [...prev, newAttachment];
            // Process the card after we've successfully added it
            processedCardsRef.current.add(currentCardStr);
            onCardProcessed?.();
            return newAttachments;
          });
        } else {
          childLog.info('Card already processed, skipping');
        }
      }
    }, [currentCard, onCardProcessed]);

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
        processedCardsRef.current.clear();
        cardProcessedRef.current = false;
        // Clear saved state after sending
        sessionStorage.removeItem(STORAGE_KEY);
      }
    }, [message, attachments, onSend, onMessageSent]);

    const handleDefaultValue = useCallback((defaultValue: string) => {
      setMessage(defaultValue);
    }, []);

    const handleInputChange = useCallback((e: FormEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      setMessage(processMessageContent(target.innerHTML));
    }, []);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
          if (!e.shiftKey) {
            e.preventDefault();
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
      [handleSendMessage, historyIndex, message, messageHistory]
    );

    const handleAttachment = useCallback((attachment: any) => {
      setAttachments((prev) => [...prev, attachment]);
    }, []);

    const handleRemoveAttachment = useCallback((index: number) => {
      setAttachments((prev) => prev.filter((_, i) => i !== index));
    }, []);

    const hasContent = message.trim().length > 0 || attachments.length > 0;

    const uiAttachments = useMemo(() => convertAttachmentsForUI(attachments), [attachments]);

    const memoizedToolbar = useMemo(
      () => (
        <ComposeBoxToolbar
          onAttachment={handleAttachment}
          onSendMessage={handleSendMessage}
          hasContent={hasContent}
        />
      ),
      [handleAttachment, handleSendMessage, hasContent]
    );

    return (
      <div className={classes.composeBoxContainer}>
        <ContentEditableArea
          title="Compose box"
          ref={contentEditableRef}
          className={classes.composeInput}
          value={message}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onDefaultValue={handleDefaultValue}
          placeholder="Type a message..."
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
  }
);

export default ComposeBox;
ComposeBox.displayName = 'ComposeBox';
