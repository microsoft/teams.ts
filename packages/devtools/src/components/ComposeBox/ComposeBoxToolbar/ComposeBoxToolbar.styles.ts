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
    height: 'auto',
    width: '100%',
    fontFamily: 'monospace',
  },
});
