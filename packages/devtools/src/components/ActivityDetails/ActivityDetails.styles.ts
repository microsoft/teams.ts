import { makeStyles } from '@fluentui/react-components';

const useActivityDetailsClasses = makeStyles({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '100%',
    overflow: 'auto',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  jsonContainer: {
    padding: '0.5rem',
    flex: '1 1 auto',
    overflow: 'auto',
    minHeight: 0,
  },
  json: {
    margin: '0.5rem',
  },
});

export default useActivityDetailsClasses;
