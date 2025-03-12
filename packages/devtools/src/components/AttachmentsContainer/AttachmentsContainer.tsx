import { memo, useCallback } from 'react';
import { Button, Image } from '@fluentui/react-components';
import { Dismiss20Regular } from '@fluentui/react-icons/lib/fonts';

import { AttachmentType } from '../../types/Attachment';
import AdaptiveCard from '../Card/AdaptiveCard';
import { useClasses } from './AttachmentsContainer.styles';

const AttachmentItem = memo(
  ({
    attachment,
    index,
    onRemove,
    showRemoveButton = true,
  }: {
    attachment: AttachmentType;
    index: number;
    onRemove: (index: number) => void;
    showRemoveButton?: boolean;
  }) => {
    const classes = useClasses();

    const renderAttachmentContent = useCallback(() => {
      switch (attachment.type) {
        case 'card':
          return attachment.content && <AdaptiveCard value={attachment.content} />;
        case 'image':
          return (
            <Image
              src={attachment.content}
              alt={attachment.name || 'Image attachment'}
              className={classes.attachmentImage}
            />
          );
        case 'file':
          return (
            <div className={classes.fileAttachment}>{attachment.name || 'File attachment'}</div>
          );
        default:
          return <div>{attachment.name || 'Attachment'}</div>;
      }
    }, [attachment.content, attachment.type, attachment.name, classes]);

    return (
      <div className={classes.inlineAttachmentCard}>
        {showRemoveButton && (
          <Button
            appearance="transparent"
            icon={<Dismiss20Regular />}
            onClick={() => onRemove(index)}
            aria-label="Remove attachment"
            className={classes.removeAttachmentButton}
          />
        )}
        <div className={classes.inlineCardContent}>{renderAttachmentContent()}</div>
      </div>
    );
  }
);

// Memoized attachments container
const AttachmentsContainer = memo(
  ({
    attachments,
    onRemoveAttachment,
    showRemoveButtons = true,
  }: {
    attachments: AttachmentType[];
    onRemoveAttachment: (index: number) => void;
    showRemoveButtons?: boolean;
  }) => {
    const classes = useClasses();

    if (attachments.length === 0) {
      return null;
    }

    return (
      <div className={classes.inlineAttachmentsContainer}>
        {attachments.map((attachment, index) => (
          <AttachmentItem
            key={`${attachment.type}-${index}`}
            attachment={attachment}
            index={index}
            onRemove={onRemoveAttachment}
            showRemoveButton={showRemoveButtons}
          />
        ))}
      </div>
    );
  }
);

export default AttachmentsContainer;
