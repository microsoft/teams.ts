import { makeStyles, tokens } from '@fluentui/react-components';

const useScreensClasses = makeStyles({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100%',
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
  },
  scrollbarContainer: {
    flex: 1,
    overflowY: 'auto',
    minHeight: 0,
    scrollbarGutter: 'stable',
    position: 'relative',
  },
});

export default useScreensClasses;
