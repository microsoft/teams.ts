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
import { Card } from '@microsoft/spark.cards';

import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import ContentEditableArea from '../ContentEditableArea/ContentEditableArea';
import Logger from '../Logger/Logger';

import ComposeBoxToolbar from './ComposeBoxToolbar/ComposeBoxToolbar';
import useEditComposeBoxClasses from './EditComposeBox.styles';

const childLog = Logger.child('EditComposeBox');

export interface EditComposeBoxProps {
  value?: string;
  defaultAttachments?: Attachment[];
  onComplete: (content: string, attachments: Attachment[]) => void;
  onCancel: () => void;
  disabled?: boolean;
  currentCard?: Card | null;
  onCardProcessed?: () => void;
}

const EditComposeBox: FC<EditComposeBoxProps> = memo(
  ({
    value = '',
    defaultAttachments = [],
    onComplete,
    onCancel,
    disabled = false,
    currentCard,
    onCardProcessed,
  }) => {
    const classes = useEditComposeBoxClasses();
    const contentEditableRef = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState(value);
    const [attachments, setAttachments] = useState<Attachment[]>(defaultAttachments);
    const processedCardsRef = useRef<Set<string>>(new Set());
    const mountedRef = useRef(false);

    // Update message when value prop changes
    useEffect(() => {
      setMessage(value);
    }, [value]);

    // Update attachments when defaultAttachments prop changes
    useEffect(() => {
      setAttachments(defaultAttachments);
    }, [defaultAttachments]);

    // Handle initial mount with a card already in the store
    useEffect(() => {
      mountedRef.current = true;
      return () => {
        mountedRef.current = false;
      };
    }, []);

    // Process currentCard only once when it changes
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

    // Cleanup on unmount or when canceling
    useEffect(() => {
      const processedCards = processedCardsRef.current;
      return () => {
        setMessage('');
        setAttachments([]);
        processedCards.clear();
      };
    }, []);

    const handleComplete = useCallback(() => {
      const trimmedMessage = message.trim();
      if (trimmedMessage || attachments.length > 0) {
        onComplete(trimmedMessage, attachments);
      }
    }, [message, attachments, onComplete]);

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
        // Convert <br> and <div> to newlines for markdown
        const content = target.innerHTML
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<div>/gi, '\n')
          .replace(/<\/div>/gi, '')
          .replace(/&nbsp;/g, ' ');

        // Create a temporary div to strip HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        setMessage(tempDiv.textContent || '');
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

    const handleDefaultValue = useCallback(
      (defaultValue: string) => {
        if (disabled) return;
        setMessage(defaultValue);
      },
      [disabled]
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
    const uiAttachments = useMemo(
      () =>
        attachments.map((attachment) => {
          if (attachment.contentType?.startsWith('application/vnd.microsoft.card.')) {
            return {
              type: 'card' as const,
              content: attachment.content,
              name: attachment.name,
            };
          }
          if (attachment.contentType?.startsWith('image/')) {
            return {
              type: 'image' as const,
              content: attachment.contentUrl || attachment.content,
              name: attachment.name,
            };
          }
          return {
            type: 'file' as const,
            content: attachment.contentUrl || attachment.content,
            name: attachment.name,
          };
        }),
      [attachments]
    );

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
      <div className={classes.editComposeContainer}>
        <ContentEditableArea
          ref={contentEditableRef}
          className={classes.composeInput}
          value={message}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onDefaultValue={handleDefaultValue}
          placeholder=""
          toolbar={memoizedToolbar}
          disabled={disabled}
        >
          <AttachmentsContainer
            attachments={uiAttachments}
            onRemoveAttachment={handleRemoveAttachment}
            showRemoveButtons={!disabled}
          />
        </ContentEditableArea>
      </div>
    );
  }
);

EditComposeBox.displayName = 'EditComposeBox';
export default EditComposeBox;
