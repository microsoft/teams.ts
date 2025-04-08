import { makeStyles, tokens } from '@fluentui/react-components';

const useMessageClasses = makeStyles({
  feedbackContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    padding: '0.25rem 0',
    marginTop: '0.5rem',
  },
  feedbackButton: {
    minWidth: 'auto',
    padding: 0,
  },
  feedbackText: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase100,
    marginLeft: tokens.spacingHorizontalM,
  },
  feedbackIcon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  dialogSurface: {
    maxWidth: '37.5rem',
    minWidth: '30rem',
  },
  headerIcon: {
    color: tokens.colorBrandForeground1,
    fontSize: '1.25rem',
  },
  dialogTitle: {
    gap: tokens.spacingHorizontalM,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    marginBottom: tokens.spacingVerticalL,
    minWidth: 0,
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    padding: 0,
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: tokens.spacingVerticalL,
  },
});

export default useMessageClasses;
