import { makeStyles, tokens } from '@fluentui/react-components';

const useChatContainerClasses = makeStyles({
  messageRow: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: tokens.spacingVerticalS,
    marginLeft: tokens.spacingHorizontalL,
    marginRight: tokens.spacingHorizontalL,
  },

  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
  },

  messageGroupSent: {
    justifyContent: 'flex-end',
  },
  messageGroupReceived: {
    justifyContent: 'flex-start',
  },

  badgeMessageContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: tokens.spacingHorizontalM,
  },

  timeMessageContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  // Visual styles
  timestamp: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginBottom: tokens.spacingVerticalS,
  },
  sentTime: {
    textAlign: 'right',
  }
});

export default useChatContainerClasses;
