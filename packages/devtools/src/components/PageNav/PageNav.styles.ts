import { makeStyles, tokens } from '@fluentui/react-components';

const usePageNavClasses = makeStyles({
  pageNavContainer: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0.5rem 0',
  },
  navButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    marginRight: tokens.spacingHorizontalL,
  },
});

export default usePageNavClasses;
