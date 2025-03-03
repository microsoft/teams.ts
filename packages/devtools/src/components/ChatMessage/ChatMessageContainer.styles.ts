import { makeStyles, tokens } from '@fluentui/react-components';

export const useClasses = makeStyles({
  messageRow: {
    display: 'flex',
    marginLeft: tokens.spacingHorizontalL,
    marginRight: tokens.spacingHorizontalL,
    alignItems: 'flex-end',
    padding: '0.5rem',
  },
  messageGroupSent: {
    justifyContent: 'flex-end',
  },
  messageGroupReceived: {
    justifyContent: 'flex-start',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
  },
  badgeMessageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: tokens.spacingHorizontalM,
  },
  sentTime: {
    textAlign: 'right',
  },
  timestamp: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginBottom: tokens.spacingVerticalS,
  },
  timeMessageContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.2s',
  },
});
