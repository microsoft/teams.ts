import { makeStyles, tokens } from '@fluentui/react-components';

const useActivitiesScreenClasses = makeStyles({
  flexContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    gap: '1rem',
    overflow: 'hidden',
    '@media (max-width: 62.5rem)': {
      flexDirection: 'column',
      padding: '0.5rem',
      gap: '0.5rem',
    },
  },
  activitiesContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '1rem',
    overflow: 'hidden',
    '@media (max-width: 62.5rem)': {
      width: '100%',
      height: 'calc(100% - 20rem)',
      padding: '0.5rem',
    },
  },
  activityDetailsContainer: {
    width: '30rem',
    minWidth: '27rem',
    height: '100%',
    padding: '1rem',
    boxShadow: tokens.shadow16,
    '@media (max-width: 62.5rem)': {
      width: '100%',
      height: '20rem',
      padding: '0.5rem',
    },
  },
});

export default useActivitiesScreenClasses;
