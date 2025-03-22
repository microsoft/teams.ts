import { makeStyles, tokens } from '@fluentui/react-components';

export const useClasses = makeStyles({
  inlineAttachmentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    padding: '0.5rem',
    userSelect: 'none',
  },
  inlineAttachmentCard: {
    borderRadius: tokens.borderRadiusSmall,
    marginBottom: '0.25rem',
    overflow: 'hidden',
    position: 'relative',
  },
  removeAttachmentButton: {
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground6,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
    position: 'absolute',
    top: '0.25rem',
    right: '0.25rem',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  inlineCardContent: {
    // TODO: media queries for max-width
    padding: '0.5rem',
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
