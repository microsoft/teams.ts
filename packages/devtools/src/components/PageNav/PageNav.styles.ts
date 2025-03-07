import { makeStyles, tokens } from '@fluentui/react-components';

const usePageNavClasses = makeStyles({
  pageNavContainer: {
    flex: '0 0 auto',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButtonContainer: {
    display: 'flex',
    flexShrink: 1,
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    marginRight: tokens.spacingHorizontalL,
  },
});

export default usePageNavClasses;
