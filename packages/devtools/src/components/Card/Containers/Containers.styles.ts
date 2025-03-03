import { makeStyles, tokens } from '@fluentui/react-components';

const useContainerClasses = makeStyles({
  container: {
    flexWrap: 'wrap',
    flex: '1 1 auto',
  },
  none: {
    gap: '0',
  },
  small: {
    gap: '1px',
  },
  default: {
    gap: tokens.spacingHorizontalXS,
  },
  medium: {
    gap: tokens.spacingHorizontalS,
  },
  large: {
    gap: tokens.spacingHorizontalM,
  },
  extraLarge: {
    gap: tokens.spacingHorizontalL,
  },
  padding: {
    gap: tokens.spacingHorizontalXL,
  },
});

export default useContainerClasses;
