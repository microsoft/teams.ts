import { makeStyles, tokens } from "@fluentui/react-components";

const useAttachmentsContainerClasses = makeStyles({
  root: {
    // Card width breakpoints
    "--card-width-very-narrow": "13.375rem", // 214px
    "--card-width-narrow": "21.4375rem", // 343px
    "--card-width-standard": "31.125rem", // 498px
  },
  inlineAttachmentsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    padding: tokens.spacingHorizontalS,
    userSelect: "none",
  },
  inlineAttachmentCard: {
    overflow: "hidden",
    position: "relative",
    height: "fit-content",
  },
  removeAttachmentButton: {
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground6,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
    position: "absolute",
    top: tokens.spacingVerticalXXS,
    right: tokens.spacingHorizontalXXS,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  inlineCardContent: {
    width: "var(--card-width-standard)",
    overflow: "auto",
    '&[data-target-width="veryNarrow"]': {
      width: "var(--card-width-very-narrow)",
    },
    '&[data-target-width="narrow"]': {
      width: "var(--card-width-narrow)",
    },
    '&[data-target-width="standard"]': {
      width: "var(--card-width-standard)",
    },
    '&[data-target-width="wide"]': {
      width: "100%",
    },
    '&[data-target-width="atLeast:veryNarrow"]': {
      minWidth: "var(--card-width-very-narrow)",
    },
    '&[data-target-width="atLeast:narrow"]': {
      minWidth: "var(--card-width-narrow)",
    },
    '&[data-target-width="atLeast:standard"]': {
      minWidth: "var(--card-width-standard)",
    },
    '&[data-target-width="atMost:veryNarrow"]': {
      maxWidth: "var(--card-width-very-narrow)",
    },
    '&[data-target-width="atMost:narrow"]': {
      maxWidth: "var(--card-width-narrow)",
    },
    '&[data-target-width="atMost:standard"]': {
      maxWidth: "var(--card-width-standard)",
    },
  },
  attachmentImage: {
    borderRadius: tokens.borderRadiusSmall,
  },
  fileAttachment: {
    display: "inline-block",
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalS}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusSmall,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground1,
  },
});

export default useAttachmentsContainerClasses;
