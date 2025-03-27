import { makeStyles, tokens } from '@fluentui/react-components';

const useAttachmentsContainerClasses = makeStyles({
  inlineAttachmentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    padding: tokens.spacingHorizontalS,
    userSelect: 'none',
  },
  inlineAttachmentCard: {
    backgroundColor: tokens.colorNeutralBackground2,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusSmall,
    marginBottom: tokens.spacingVerticalXXS,
    overflow: 'hidden',
    position: 'relative',
  },
  removeAttachmentButton: {
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground6,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
    position: 'absolute',
    top: tokens.spacingVerticalXXS,
    right: tokens.spacingHorizontalXXS,
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  inlineCardContent: {
    // TODO: media queries for max-width
    padding: tokens.spacingHorizontalS,
    width: '31.125rem',
    overflow: 'auto',
  },
  attachmentImage: {
    borderRadius: tokens.borderRadiusSmall,
  },
  fileAttachment: {
    display: 'inline-block',
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalS}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusSmall,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground1,
  },
});

export default useAttachmentsContainerClasses;
