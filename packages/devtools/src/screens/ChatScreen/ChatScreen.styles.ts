import { makeStyles, tokens } from '@fluentui/react-components';

const useClasses = makeStyles({
  messagesList: {
    maxWidth: '65.125rem',
    minWidth: '31rem',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: '10px 0',
    flex: 1,
    overflowY: 'auto',
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
    height: '30px',
    paddingLeft: '50px',
  },
  bannerContainer: {
    backgroundColor: tokens.colorSubtleBackground,
    margin: '0.5rem 0',
  },
});

export default useClasses;
