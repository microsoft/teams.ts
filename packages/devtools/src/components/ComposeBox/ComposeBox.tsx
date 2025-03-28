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

import { useCardStore } from '../../stores/CardStore';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import ContentEditableArea from '../ContentEditableArea/ContentEditableArea';
import Logger from '../Logger/Logger';

import ComposeBoxToolbar from './ComposeBoxToolbar/ComposeBoxToolbar';
import useComposeBoxClasses from './ComposeBox.styles';
import { processMessageContent, convertAttachmentsForUI } from './ComposeBoxUtils';

export interface ComposeBoxProps {
  onSend: (message: Partial<Message>, attachments?: Attachment[]) => void;
  messageHistory: Partial<Message>[];
  onMessageSent: (message: Partial<Message>) => void;
  onCardProcessed?: () => void;
}

const childLog = Logger.child('ComposeBox');

const ComposeBox: FC<ComposeBoxProps> = memo(
  ({ onSend, messageHistory, onMessageSent, onCardProcessed }) => {
    const classes = useComposeBoxClasses();
    const {
      currentCard,
      targetComponent,
      processedCardIds,
      addProcessedCardId,
      clearCurrentCard,
      clearProcessedCardIds,
      setCurrentCard,
    } = useCardStore();

    const [message, setMessage] = useState('');
    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const contentEditableRef = useRef<HTMLDivElement>(null);
    const mountedRef = useRef(false);

    // Focus on input and mark as mounted when component mounts
    useEffect(() => {
      if (contentEditableRef.current) {
        contentEditableRef.current.focus();
      }
      mountedRef.current = true;
      return () => {
        mountedRef.current = false;
      };
    }, []);

    // Set as active component when focused
    useEffect(() => {
      const handleFocus = () => {
        if (currentCard && mountedRef.current) {
          setCurrentCard(currentCard, 'compose');
        }
      };

      const composeBox = contentEditableRef.current;
      if (composeBox) {
        composeBox.addEventListener('focus', handleFocus);
        return () => {
          composeBox.removeEventListener('focus', handleFocus);
        };
      }
    }, [currentCard, setCurrentCard]);

    // Process currentCard only once when it changes and when this component is the target
    useEffect(() => {
      if (currentCard && targetComponent === 'compose' && mountedRef.current) {
        childLog.info('Current card:', currentCard);

        const currentCardStr = JSON.stringify(currentCard);

        if (!processedCardIds.has(currentCardStr)) {
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

            addProcessedCardId(currentCardStr);
            onCardProcessed?.();
            return [...prev, newAttachment];
          });
        } else {
          childLog.info('Card already processed, skipping');
        }
      }
    }, [currentCard, targetComponent, processedCardIds, addProcessedCardId, onCardProcessed]);

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

        // Clear card state
        clearCurrentCard();
        clearProcessedCardIds();
      }
    }, [message, attachments, onSend, onMessageSent, clearCurrentCard, clearProcessedCardIds]);

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

    // Convert API attachments to UI attachment types
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
          title="Compose message"
          ref={contentEditableRef}
          className={classes.composeInput}
          value={message}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
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

ComposeBox.displayName = 'ComposeBox';
export default ComposeBox;
