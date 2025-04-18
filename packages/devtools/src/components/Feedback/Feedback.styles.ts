import { makeStyles, tokens } from '@fluentui/react-components';

const useFeedbackClasses = makeStyles({
  feedbackContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingHorizontalM}`,
    paddingTop: 0,
  },
  feedbackButton: {
    minWidth: 'auto',
    padding: 0,
  },
  feedbackSentText: {
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
  headerIcon: {
    color: tokens.colorBrandForeground1,
    fontSize: '1.25rem',
  },
  dialogTitle: {
    gap: tokens.spacingHorizontalM,
    display: 'flex',
    alignItems: 'center',
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
  textarea: {
    width: '100%',
  },
});

export default useFeedbackClasses;
