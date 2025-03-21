import { makeStyles } from '@fluentui/react-components';

const useComposeBoxClasses = makeStyles({
  composeBoxContainer: {
    position: 'relative',
    margin: '1rem 3.125rem',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  composeInput: {
    width: '100%',
    paddingRight: '100px',
  },
});

export default useComposeBoxClasses;
