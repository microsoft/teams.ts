import { makeStyles, tokens } from '@fluentui/react-components';

const useChatScreenClasses = makeStyles({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
    height: '100%',
    width: '11rem',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRight: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStencil1}`,
    '@media (max-width: 43.75rem)': {
      display: 'none',
    },
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    minHeight: 0,
  },
  messagesList: {
    maxWidth: '65.125rem',
    minWidth: '31rem',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    flex: 1,
    '@media (max-width: 31rem)': {
      minWidth: 'unset',
      overflowX: 'hidden'
    }
  },
  composeContainer: {
    backgroundColor: tokens.colorNeutralBackground3,
    overflowX: 'hidden',
    position: 'sticky',
    bottom: 0,
    width: '100%',
  },
  composeInner: {
    maxWidth: '65.125rem',
    minWidth: '31rem',
    margin: '0 auto',
    '@media (max-width: 31rem)': {
      minWidth: 'unset'
    }
  },
  typingIndicator: {
    height: '1.875rem',
    paddingLeft: '1.875rem',
  },
  bannerContainer: {
    backgroundColor: tokens.colorSubtleBackground,
    margin: '0.5rem 0',
  },
});

export default useChatScreenClasses;
