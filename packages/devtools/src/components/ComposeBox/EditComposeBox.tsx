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
import { useLocation } from 'react-router';

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
  editingMessageId?: string;
}

const EditComposeBox: FC<EditComposeBoxProps> = memo(
  ({
    value = '',
    defaultAttachments = [],
    onComplete,
    onCancel,
    disabled = false,
    onCardProcessed,
    editingMessageId,
  }) => {
    const location = useLocation();
    const {
      currentCard,
      draftMessage,
      targetComponent,
      processedCardIds,
      addProcessedCardId,
      clearCurrentCard,
      clearProcessedCardIds,
      setCurrentCard,
      setDraftMessage,
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

    useEffect(() => {
      const isEditMode = location.state?.isEditing && targetComponent === 'edit';

      if (!isEditMode) {
        return;
      }

      // Use Promise to defer state updates to next microtask
      Promise.resolve().then(() => {
        if (!mountedRef.current) {
          mountedRef.current = true;
          if (currentCard) {
            setCurrentCard(currentCard, 'edit');
          }
        } else if (draftMessage && message !== draftMessage) {
          setMessage(draftMessage);
        }
      });
    }, [
      location.state?.isEditing,
      targetComponent,
      currentCard,
      draftMessage,
      message,
      setCurrentCard,
    ]);
    useEffect(() => {
      if (currentCard && targetComponent === 'edit' && mountedRef.current && !disabled) {
        childLog.info('Logging card to CardStore');
        const currentCardStr = JSON.stringify(currentCard);

        if (!processedCardIds.has(currentCardStr)) {
          childLog.info('Processing new card in CardStore');
          const newAttachment: Attachment = {
            contentType: 'application/vnd.microsoft.card.adaptive',
            content: currentCard,
          };

          setAttachments((prev) => {
            // Don't add the attachment if it already exists
            if (prev.some((a) => JSON.stringify(a.content) === currentCardStr)) {
              childLog.info('Card from CardStore already exists in attachments, skipping');
              return prev;
            }
            return [...prev, newAttachment];
          });
        } else {
          childLog.info('Card already processed, skipping');
        }
      }
    }, [currentCard, disabled, processedCardIds, targetComponent]);

    // Handle card processing separately
    useEffect(() => {
      if (currentCard && targetComponent === 'edit' && mountedRef.current && !disabled) {
        const currentCardStr = JSON.stringify(currentCard);
        if (!processedCardIds.has(currentCardStr)) {
          addProcessedCardId(currentCardStr);
          onCardProcessed?.();
        }
      }
    }, [
      currentCard,
      disabled,
      processedCardIds,
      targetComponent,
      addProcessedCardId,
      onCardProcessed,
    ]);

    const handleComplete = useCallback(() => {
      const trimmedMessage = message.trim();
      if (trimmedMessage || attachments.length > 0) {
        onComplete(trimmedMessage, attachments);
        setDraftMessage();
        clearCurrentCard();
        clearProcessedCardIds();
      }
    }, [
      attachments,
      clearCurrentCard,
      clearProcessedCardIds,
      message,
      onComplete,
      setDraftMessage,
    ]);

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
        setCurrentCard(null);
      },
      [disabled, setCurrentCard]
    );

    // Convert API attachments to UI attachment types
    const uiAttachments = useMemo(() => convertAttachmentsForUI(attachments), [attachments]);

    const toolbarProps = useMemo(
      () => ({
        onAttachment: handleAttachment,
        onEditComplete: handleComplete,
        onEditCancel: onCancel,
        editMode: true,
        disabled,
        editingMessageId,
        draftMessage: message,
        hasContent: Boolean(message.trim().length > 0 || attachments.length > 0),
      }),
      [
        handleAttachment,
        handleComplete,
        onCancel,
        disabled,
        editingMessageId,
        message,
        attachments.length,
      ]
    );
    const memoizedToolbar = useMemo(() => <ComposeBoxToolbar {...toolbarProps} />, [toolbarProps]);

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
