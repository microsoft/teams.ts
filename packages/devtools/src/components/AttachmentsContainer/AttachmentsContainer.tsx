import { FC, memo, useCallback } from "react";
import { Button, Image, Tooltip } from "@fluentui/react-components";
import {
  bundleIcon,
  DismissFilled,
  DismissRegular,
  FluentIcon,
} from "@fluentui/react-icons/lib/fonts";

import { AttachmentType } from "../../types/Attachment";
import AdaptiveCard from "../Card/AdaptiveCard";

import useAttachmentsContainerClasses from "./AttachmentsContainer.styles";

const DismissIcon = bundleIcon(
  DismissFilled as FluentIcon,
  DismissRegular as FluentIcon,
);

interface AttachmentItemProps {
  attachment: AttachmentType;
  index: number;
  onRemove: (index: number) => void;
  showRemoveButton?: boolean;
}

const AttachmentItem: FC<AttachmentItemProps> = memo(
  ({ attachment, index, onRemove, showRemoveButton = true }) => {
    const classes = useAttachmentsContainerClasses();

    const renderAttachmentContent = useCallback(() => {
      switch (attachment.type) {
        case "card":
          return (
            attachment.content && <AdaptiveCard card={attachment.content} />
          );
        case "image":
          return (
            <Image
              src={attachment.content}
              alt={attachment.name || "Image attachment"}
              className={classes.attachmentImage}
            />
          );
        case "file":
          return (
            <div className={classes.fileAttachment}>
              {attachment.name || "File attachment"}
            </div>
          );
        default:
          return <div>{attachment.name || "Attachment"}</div>;
      }
    }, [attachment.content, attachment.type, attachment.name, classes]);

    return (
      <div contentEditable={false} className={classes.inlineAttachmentCard}>
        {showRemoveButton && (
          <Tooltip content="Remove" relationship="label">
            <Button
              appearance="transparent"
              icon={<DismissIcon />}
              onClick={() => onRemove(index)}
              aria-label="Remove attachment"
              className={classes.removeAttachmentButton}
            />
          </Tooltip>
        )}
        <div
          contentEditable={false}
          className={classes.inlineCardContent}
          data-target-width={
            attachment.type === "card"
              ? attachment.content?.msteams?.targetWidth
              : undefined
          }
        >
          {renderAttachmentContent()}
        </div>
      </div>
    );
  },
);

interface AttachmentsContainerProps {
  attachments: AttachmentType[];
  onRemoveAttachment: (index: number) => void;
  showRemoveButtons?: boolean;
}

const AttachmentsContainer: FC<AttachmentsContainerProps> = ({
  attachments,
  onRemoveAttachment,
  showRemoveButtons = true,
}) => {
  const classes = useAttachmentsContainerClasses();

  if (attachments.length === 0) {
    return null;
  }

  // TODO: attachmentLayout
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
};

export default AttachmentsContainer;
