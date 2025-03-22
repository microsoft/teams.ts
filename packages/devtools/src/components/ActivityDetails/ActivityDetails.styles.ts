import { makeStyles, tokens } from '@fluentui/react-components';

const useActivityDetailsClasses = makeStyles({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    height: '100%',
    overflow: 'auto',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  jsonContainer: {
    padding: tokens.spacingHorizontalS,
    flex: '1 1 auto',
    overflow: 'auto',
    minHeight: 0,
  },
});

export default useActivityDetailsClasses;
