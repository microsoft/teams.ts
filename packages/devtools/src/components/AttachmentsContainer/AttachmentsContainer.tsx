import { memo } from 'react';
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

    // Create a stable key based on content
    const contentKey =
      typeof attachment.content === 'object'
        ? JSON.stringify(attachment.content).substring(0, 20)
        : String(attachment.content).substring(0, 20);

    const renderAttachmentContent = () => {
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
    };

    return (
      <div key={`attachment-${index}-${contentKey}`} className={classes.inlineAttachmentCard}>
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
            key={index}
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
