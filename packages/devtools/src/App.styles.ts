import { makeStyles, tokens } from '@fluentui/react-components';

const useAppClasses = makeStyles({
  default: {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minHeight: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

export default useAppClasses;
