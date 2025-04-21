import { FC, memo, useCallback, useMemo, useState } from 'react';
import { Image } from '@fluentui/react-components';
import { Attachment } from '@microsoft/teams.api';

import { AttachmentType } from '../../types/Attachment';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';
import Logger from '../Logger/Logger';

const childLog = Logger.child('MessageAttachments');

const SUPPORTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'] as const;
type SupportedImageType = (typeof SUPPORTED_IMAGE_TYPES)[number];

const isValidImageType = (type: string | undefined): type is SupportedImageType => {
  return !!type && SUPPORTED_IMAGE_TYPES.includes(type as SupportedImageType);
};

const isValidAttachment = (attachment: Attachment): boolean => {
  return !!attachment && typeof attachment === 'object' && 'contentType' in attachment;
};

export interface MessageAttachmentsProps {
  attachments: Attachment[];
  classes: Record<string, string>;
  onRemoveAttachment?: (index: number) => void;
  showRemoveButtons?: boolean;
}

const MessageAttachments: FC<MessageAttachmentsProps> = memo(
  ({ attachments, classes, onRemoveAttachment = () => {}, showRemoveButtons = false }) => {
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

    const handleImageError = useCallback((attachment: Attachment) => {
      const id = attachment.id || `${attachment.name}-${attachment.contentUrl}`;
      childLog.error(`Failed to load image attachment: ${id}`, { attachment });
      setFailedImages((prev) => new Set(prev).add(id));
    }, []);

    const renderAttachment = useCallback(
      (attachment: Attachment) => {
        if (!isValidAttachment(attachment)) {
          childLog.warn('Invalid attachment object', { attachment });
          return null;
        }

        const imageId = attachment.id || `${attachment.name}-${attachment.contentUrl}`;
        if (failedImages.has(imageId)) {
          return null;
        }

        if (!isValidImageType(attachment.contentType)) {
          childLog.warn(`Unsupported image type: ${attachment.contentType}`);
          return null;
        }

        return (
          <Image
            key={imageId}
            src={attachment.contentUrl}
            alt={attachment.name || 'Untitled image attachment'}
            className={classes.attachmentImage}
            onError={() => handleImageError(attachment)}
          />
        );
      },
      [classes.attachmentImage, failedImages, handleImageError]
    );

    const { imageAttachments, nonImageAttachments } = useMemo(() => {
      const validAttachments = attachments.filter(isValidAttachment);
      return {
        imageAttachments: validAttachments.filter((a) => isValidImageType(a.contentType)),
        nonImageAttachments: validAttachments
          .filter((a) => !isValidImageType(a.contentType))
          .map((attachment): AttachmentType => {
            if (attachment.contentType?.startsWith('application/vnd.microsoft.card.')) {
              return {
                type: 'card',
                content: attachment.content || null,
                name: attachment.name || 'Untitled card',
              };
            }

            return {
              type: 'file',
              content: attachment.contentUrl || attachment.content || null,
              name: attachment.name || 'Untitled file',
            };
          }),
      };
    }, [attachments]);

    if (!attachments.length) {
      return null;
    }

    return (
      <>
        {imageAttachments.length > 0 && (
          <div className={classes.attachments}>{imageAttachments.map(renderAttachment)}</div>
        )}
        {nonImageAttachments.length > 0 && (
          <AttachmentsContainer
            attachments={nonImageAttachments}
            onRemoveAttachment={onRemoveAttachment}
            showRemoveButtons={showRemoveButtons}
          />
        )}
      </>
    );
  }
);

MessageAttachments.displayName = 'MessageAttachments';

export default MessageAttachments;
