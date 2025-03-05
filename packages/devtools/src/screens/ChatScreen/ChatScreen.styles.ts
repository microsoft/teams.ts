import { makeStyles, tokens } from '@fluentui/react-components';

const useClasses = makeStyles({
  messagesList: {
    maxWidth: '1042px',
    minWidth: '495px',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    padding: '10px 0',
    flex: 1,
    overflowY: 'auto',
    scrollbarGutter: 'smooth',
  },
  composeContainer: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  composeInner: {
    maxWidth: '1042px',
    minWidth: '495px',
    margin: '0 auto',
  },
  typingIndicator: {
    height: '30px',
    paddingLeft: '50px',
  },
  bannerContainer: {
    backgroundColor: tokens.colorSubtleBackground,
    margin: '10px 0',
  },
});

export default useClasses;
