import { makeStyles, tokens } from '@fluentui/react-components';

const useComposeBoxClasses = makeStyles({
  composeBoxContainer: {
    margin: '1rem 3.125rem',
    width: 'auto',
  },
  composeInput: {
    width: '100%',
  },
  error: {
    border: `${tokens.strokeWidthThin} solid ${tokens.colorPaletteRedBorder2}`,
    '&:focus-within': {
      border: `${tokens.strokeWidthThin} solid ${tokens.colorPaletteRedBorder2}`,
    },
  },
  errorMessage: {
    color: tokens.colorPaletteRedForeground1,
    fontSize: tokens.fontSizeBase200,
    marginTop: tokens.spacingVerticalXXS,
    marginBottom: tokens.spacingVerticalXXS,
  },
});

export default useComposeBoxClasses;
