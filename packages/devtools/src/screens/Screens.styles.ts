import { makeStyles, tokens } from '@fluentui/react-components';

const useScreensClasses = makeStyles({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
  },
  scrollbarContainer: {
    flex: 1,
    overflowY: 'auto',
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    scrollbarGutter: 'stable',
    height: '100%',
  },
});

export default useScreensClasses;
