import { makeStyles, tokens } from '@fluentui/react-components';

const useChatMessageStyles = makeStyles({
  // Main container
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    '&:focus': {
      outline: 'none',
    },
    borderRadius: tokens.borderRadiusMedium,
  },

  // Message body styles
  messageBody: {
    display: 'block',
    position: 'relative',
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    border: `${tokens.strokeWidthThick} solid ${tokens.colorSubtleBackground}`,
    width: '100%',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    '&:focus': {
      outline: `${tokens.strokeWidthThick} solid ${tokens.colorNeutralForeground2Link}`,
      borderRadius: tokens.borderRadiusMedium,
    },
    '& a': {
      color: tokens.colorBrandForegroundLink,
      borderRadius: tokens.borderRadiusMedium,
      '&:hover': {
        color: tokens.colorBrandForegroundLinkHover,
      },
      '&:active': {
        color: tokens.colorBrandForegroundLinkPressed,
      },
      '&:focus': {
        color: tokens.colorBrandForegroundLinkSelected,
      },
    },
  },

  // Message content and text
  messageContent: {
    display: 'block',
  },
  messageText: {
    display: 'block',
    whiteSpace: 'pre-wrap',
  },
  messageDeleted: {
    fontStyle: 'italic',
  },

  messageDeletedLink: {
    marginLeft: '0.75rem',
    paddingInlineEnd: '0.75rem',
    paddingInlineStart: '0.75rem',
  },
  // Message direction variants
  received: {
    alignSelf: 'flex-start',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorNeutralForeground1,
  },
  tooltipText: {
    textTransform: 'capitalize',
  },
  // Streaming state styles
  streaming: {
    border: `${tokens.strokeWidthThick} solid ${tokens.colorSubtleBackground}`,
    borderRadius: tokens.borderRadiusMedium,
    // TODO: Use proper Teams colors
    animationName: {
      '0%': {
        border: `${tokens.strokeWidthThick} solid rgba(70, 79, 235, 1)`,
      },
      '25%': {
        border: `${tokens.strokeWidthThick} solid rgba(71, 207, 250, 1)`,
      },
      '50%': {
        border: `${tokens.strokeWidthThick} solid rgba(180, 124, 248, 1)`,
      },
      '75%': {
        border: `${tokens.strokeWidthThick} solid rgba(71, 207, 250, 1)`,
      },
      '100%': {
        border: `${tokens.strokeWidthThick} solid rgba(70, 79, 235, 1)`,
      },
    },
    animationDuration: '4s',
    animationTimingFunction: 'linear',
    animationIterationCount: '3',
  },

  streamingCursor: {
    display: 'inline-block',
    backgroundColor: 'white',
    width: '0.25rem',
    height: '1rem',
    marginLeft: tokens.spacingHorizontalXXS,
    verticalAlign: 'text-bottom',
    animationName: {
      '0%, 100%': {
        opacity: 1,
      },
      '50%': {
        opacity: 0.3,
      },
    },
    animationDuration: '1s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },

  // Reactions styles
  reactionContainer: {
    display: 'flex',
    flexDirection: 'row',
    visibility: 'hidden',
    gap: tokens.spacingHorizontalS,
  },
  reactionContainerSent: {
    justifyContent: 'flex-end',
  },
  reactionContainerVisible: {
    visibility: 'visible',
  },
  reactionButton: {
    minHeight: '1rem',
    minWidth: '1rem',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    // Hardcoded margin value because griffel doesn't appear to respect negative spacing tokens
    marginTop: '-0.5rem',
  },
  reactionFromUser: {
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStrokeAccessibleSelected}`,
  },

  // Popover and feedback styles
  popoverSurface: {
    padding: '0',
  },
  feedbackContainer: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
  },

  // Attachments
  attachments: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXS,
  },
  attachmentImage: {
    maxWidth: '100%',
    borderRadius: tokens.borderRadiusSmall,
    marginTop: tokens.spacingVerticalS,
  },
});

export default useChatMessageStyles;
