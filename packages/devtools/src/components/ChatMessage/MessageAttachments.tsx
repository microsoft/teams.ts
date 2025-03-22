import { FC, memo, useCallback, useMemo } from 'react';
import { Image } from '@fluentui/react-components';
import { Attachment } from '@microsoft/spark.api';

import { AttachmentType } from '../../types/Attachment';
import AttachmentsContainer from '../AttachmentsContainer/AttachmentsContainer';

export interface MessageAttachmentsProps {
  attachments: Attachment[];
  classes: Record<string, string>;
}

const MessageAttachments: FC<MessageAttachmentsProps> = memo(({ attachments, classes }) => {
  const renderAttachment = useCallback(
    (attachment: Attachment) => {
      if (!attachment) return null;

      switch (attachment.contentType) {
        case 'image/png':
        case 'image/jpeg':
        case 'image/gif':
        case 'image/jpg':
          return (
            <Image
              key={attachment.id}
              src={attachment.contentUrl}
              alt={attachment.name || 'Image attachment'}
              className={classes.attachmentImage}
            />
          );
        default:
          return null;
      }
    },
    [classes.attachmentImage]
  );

  const imageAttachments = useMemo(
    () => attachments.filter((a) => a.contentType?.startsWith('image/')),
    [attachments]
  );

  const nonImageAttachments = useMemo(() => {
    return attachments
      .filter((a) => !a.contentType?.startsWith('image/'))
      .map((attachment): AttachmentType => {
        if (attachment.contentType?.startsWith('application/vnd.microsoft.card.')) {
          return {
            type: 'card',
            content: attachment.content,
            name: attachment.name,
          };
        }

        return {
          type: 'file',
          content: attachment.contentUrl || attachment.content,
          name: attachment.name,
        };
      });
  }, [attachments]);

  return (
    <>
      {imageAttachments.length > 0 && (
        <div className={classes.attachments}>{imageAttachments.map(renderAttachment)}</div>
      )}
      {nonImageAttachments.length > 0 && (
        <AttachmentsContainer
          attachments={nonImageAttachments}
          onRemoveAttachment={() => {}}
          showRemoveButtons={false}
        />
      )}
    </>
  );
});

MessageAttachments.displayName = 'MessageAttachments';

export default MessageAttachments;
