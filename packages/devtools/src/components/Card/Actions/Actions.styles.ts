import { makeStyles, tokens } from '@fluentui/react-components';

export const useExecuteActionCardClasses = makeStyles({
  button: {
    display: 'inline-flex',
    padding: '0.25rem 0.75rem',
    gap: '0.25rem',
    fontWeight: tokens.fontWeightSemibold,
  },
  positiveStyle: {
    backgroundColor: tokens.colorPaletteBlueBackground2,
    border: `1px solid ${tokens.colorPaletteBlueBorderActive}`,
    color: tokens.colorNeutralForegroundOnBrand,
    ':hover': {
      backgroundColor: tokens.colorPaletteRoyalBlueBorderActive,
    },
  },
  destructiveStyle: {
    backgroundColor: tokens.colorPaletteRedBackground2,
    border: `1px solid ${tokens.colorPaletteRedBorderActive}`,
    color: tokens.colorNeutralForeground1,
    ':hover': {
      backgroundColor: tokens.colorPaletteRedBackground3,
    },
  },
});

export const useOpenUrlActionCardClasses = makeStyles({
  positiveStyle: {
    color: tokens.colorNeutralForegroundOnBrand,
    ':hover': {
      backgroundColor: tokens.colorPaletteRoyalBlueBorderActive,
    },
  },
  destructiveStyle: {
    color: tokens.colorNeutralForeground1,
    ':hover': {
      color: tokens.colorPaletteRedForeground2,
    },
    ':active': {
      color: tokens.colorPaletteRedBorderActive,
    },
  },
});
