import { makeStyles, tokens } from '@fluentui/react-components';

const useClasses = makeStyles({
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
  flexRow: {
    flexDirection: 'row',
  },
  chatContainer: {
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
    flex: 1,
  },
  messagesList: {
    maxWidth: '65.125rem',
    minWidth: '31rem',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: '1.5rem',
    flex: 1,
  },
  composeContainer: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  composeInner: {
    maxWidth: '65.125rem',
    minWidth: '31rem',
    margin: '0 auto',
  },
  typingIndicator: {
    height: '1.875rem',
    paddingLeft: '3.125rem',
  },
  bannerContainer: {
    backgroundColor: tokens.colorSubtleBackground,
    margin: '0.5rem 0',
  },
});

export default useClasses;
