import { makeStyles } from '@fluentui/react-components';

export const useClasses = makeStyles({
  toolbar: {
    position: 'absolute',
    right: '10px',
    top: '10px',
  },
  toolbarButton: {
    minWidth: '0',
    width: '2rem',
    height: '2rem',
    padding: '0',
  },
  jsonTextarea: {
    minHeight: '250px',
    height: '100%',
    overflowY: 'hidden',
    overflowX: 'hidden',
    width: '100%',
    fontFamily: 'monospace',
  },
});
