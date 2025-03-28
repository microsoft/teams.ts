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
import { Attachment } from '@microsoft/spark.api';

import { useCardStore } from '../../stores/CardStore';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import ContentEditableArea from '../ContentEditableArea/ContentEditableArea';
import Logger from '../Logger/Logger';

import ComposeBoxToolbar from './ComposeBoxToolbar/ComposeBoxToolbar';
import { processMessageContent, convertAttachmentsForUI } from './ComposeBoxUtils';

const childLog = Logger.child('EditComposeBox');

export interface EditComposeBoxProps {
  value?: string;
  defaultAttachments?: Attachment[];
  onComplete: (content: string, attachments: Attachment[]) => void;
  onCancel: () => void;
  disabled?: boolean;
  onCardProcessed?: () => void;
}

const EditComposeBox: FC<EditComposeBoxProps> = memo(
  ({
    value = '',
    defaultAttachments = [],
    onComplete,
    onCancel,
    disabled = false,
    onCardProcessed,
  }) => {
    const {
      currentCard,
      targetComponent,
      processedCardIds,
      addProcessedCardId,
      clearCurrentCard,
      clearProcessedCardIds,
      setCurrentCard,
    } = useCardStore();

    const contentEditableRef = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState(value);
    const [attachments, setAttachments] = useState<Attachment[]>(defaultAttachments);
    const mountedRef = useRef(false);

    useEffect(() => {
      setMessage(value);
    }, [value]);

    useEffect(() => {
      setAttachments(defaultAttachments);
    }, [defaultAttachments]);

    // Setup and cleanup
    useEffect(() => {
      mountedRef.current = true;
      return () => {
        mountedRef.current = false;
        clearCurrentCard();
        clearProcessedCardIds();
      };
    }, [clearCurrentCard, clearProcessedCardIds]);

    // Set as active component when focused
    useEffect(() => {
      const handleFocus = () => {
        if (currentCard && mountedRef.current) {
          setCurrentCard(currentCard, 'edit');
        }
      };

      const editBox = contentEditableRef.current;
      if (editBox) {
        editBox.addEventListener('focus', handleFocus);
        return () => {
          editBox.removeEventListener('focus', handleFocus);
        };
      }
    }, [currentCard, setCurrentCard]);

    // Process currentCard only once when it changes and this is the target component
    useEffect(() => {
      if (currentCard && targetComponent === 'edit' && mountedRef.current && !disabled) {
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
    }, [
      currentCard,
      targetComponent,
      disabled,
      processedCardIds,
      addProcessedCardId,
      onCardProcessed,
    ]);

    const handleComplete = useCallback(() => {
      const trimmedMessage = message.trim();
      if (trimmedMessage || attachments.length > 0) {
        onComplete(trimmedMessage, attachments);
        clearCurrentCard();
        clearProcessedCardIds();
      }
    }, [message, attachments, onComplete, clearCurrentCard, clearProcessedCardIds]);

    // Rest of the component remains unchanged
    const handleAttachment = useCallback((attachment: any) => {
      if (!attachment.contentType) {
        childLog.error('Invalid attachment: missing contentType');
        return;
      }
      setAttachments((prev) => [...prev, attachment]);
    }, []);

    const handleInputChange = useCallback(
      (e: FormEvent<HTMLDivElement>) => {
        if (disabled) return;
        const target = e.target as HTMLDivElement;
        setMessage(processMessageContent(target.innerHTML));
      },
      [disabled]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;
        if (e.key === 'Escape') {
          e.preventDefault();
          onCancel();
        } else if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleComplete();
        }
      },
      [disabled, onCancel, handleComplete]
    );

    const handleRemoveAttachment = useCallback(
      (index: number) => {
        if (disabled) return;
        setAttachments((prev) => prev.filter((_, i) => i !== index));
      },
      [disabled]
    );

    const hasContent = message.trim().length > 0 || attachments.length > 0;

    // Convert API attachments to UI attachment types
    const uiAttachments = useMemo(() => convertAttachmentsForUI(attachments), [attachments]);

    const memoizedToolbar = useMemo(
      () => (
        <ComposeBoxToolbar
          onAttachment={handleAttachment}
          onEditComplete={handleComplete}
          onEditCancel={onCancel}
          hasContent={hasContent}
          editMode={true}
          disabled={disabled}
        />
      ),
      [handleAttachment, handleComplete, onCancel, hasContent, disabled]
    );

    return (
      <ContentEditableArea
        title="Edit message"
        ref={contentEditableRef}
        defaultValue={value}
        value={message}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        toolbar={memoizedToolbar}
        disabled={disabled}
        appearance="outline"
      >
        {attachments && (
          <AttachmentsContainer
            attachments={uiAttachments}
            onRemoveAttachment={handleRemoveAttachment}
            showRemoveButtons={!disabled}
          />
        )}
      </ContentEditableArea>
    );
  }
);

EditComposeBox.displayName = 'EditComposeBox';
export default EditComposeBox;
