import { makeStyles, tokens } from '@fluentui/react-components';

const useActionCardStyles = makeStyles({
  button: {
    display: 'inline-flex',
    padding: `${tokens.spacingVerticalXXS}, ${tokens.spacingHorizontalM}`,
    gap: tokens.spacingHorizontalXXS,
    fontWeight: tokens.fontWeightSemibold,
  },
  positiveStyle: {
    backgroundColor: tokens.colorPaletteBlueBackground2,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorPaletteBlueBorderActive}`,
    color: tokens.colorNeutralForegroundOnBrand,
    ':hover': {
      backgroundColor: tokens.colorPaletteRoyalBlueBorderActive,
    },
  },
  destructiveStyle: {
    backgroundColor: tokens.colorPaletteRedBackground2,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorPaletteRedBorderActive}`,
    color: tokens.colorNeutralForeground1,
    ':hover': {
      backgroundColor: tokens.colorPaletteRedBackground3,
    },
  },
  openUrlPositiveStyle: {
    color: tokens.colorNeutralForegroundOnBrand,
    ':hover': {
      backgroundColor: tokens.colorPaletteRoyalBlueBorderActive,
    },
  },
  openUrlDestructiveStyle: {
    color: tokens.colorNeutralForeground1,
    ':hover': {
      color: tokens.colorPaletteRedForeground2,
    },
    ':active': {
      color: tokens.colorPaletteRedBorderActive,
    },
  },
});

export default useActionCardStyles;
