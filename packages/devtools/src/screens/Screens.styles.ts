import { makeStyles, tokens } from '@fluentui/react-components';

export const useScreensClasses = makeStyles({
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
