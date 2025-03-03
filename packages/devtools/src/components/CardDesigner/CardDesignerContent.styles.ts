import { makeStyles, tokens } from '@fluentui/react-components';

export const useCardDesignerContentClasses = makeStyles({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: tokens.colorNeutralBackground3,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '36rem',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: '0.5rem',
    boxShadow: tokens.shadow16,
    overflow: 'auto',
  },
});
