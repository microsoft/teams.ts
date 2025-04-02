import { makeStyles } from '@fluentui/react-components';

export const useCBToolbarClasses = makeStyles({
  toolbar: {
    height: '100%',
    marginRight: '0.25rem',
  },
  toolbarButton: {
    minWidth: '0',
    width: '2rem',
    height: '2rem',
    padding: '0',
  },
  // For dialog to paste JSON to be converted to a card
  jsonTextarea: {
    minHeight: '15.625rem',
    height: '100%',
    overflowY: 'hidden',
    overflowX: 'hidden',
    width: '100%',
    fontFamily: 'monospace',
  },
});
