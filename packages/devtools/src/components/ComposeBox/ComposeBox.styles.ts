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
    padding: '10px 0',
    paddingRight: '100px',
  },
  textareaContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
});

export default useComposeBoxClasses;