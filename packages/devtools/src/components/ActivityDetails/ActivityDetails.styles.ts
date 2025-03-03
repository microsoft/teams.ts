import { makeStyles } from '@fluentui/react-components';

const useActivityDetailsClasses = makeStyles({
  selectedContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectedHeader: {
    display: 'flex',
    padding: '0.5rem 1rem',
    alignItems: 'center',
    gap: '0.5rem',
  },
  jsonContainer: {
    overflowY: 'auto',
    padding: '0.5rem',
  },
  json: {
    margin: '0.5rem',
  },
});

export default useActivityDetailsClasses;
