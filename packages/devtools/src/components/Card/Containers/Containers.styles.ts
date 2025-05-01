import { makeStyles, tokens } from '@fluentui/react-components';

const useContainerClasses = makeStyles({
  container: {
    flexWrap: 'wrap',
    flex: '1 1 auto',
  },
  None: {
    gap: '0',
  },
  ExtraSmall: {
    gap: '1px',
  },
  Small: {
    gap: '1px',
  },
  Default: {
    gap: tokens.spacingHorizontalXS,
  },
  Medium: {
    gap: tokens.spacingHorizontalS,
  },
  Large: {
    gap: tokens.spacingHorizontalM,
  },
  ExtraLarge: {
    gap: tokens.spacingHorizontalL,
  },
  Padding: {
    gap: tokens.spacingHorizontalXL,
  },
});

export default useContainerClasses;
