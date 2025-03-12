import { makeStyles, tokens } from '@fluentui/react-components';

const useNewCardsScreenClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100%',
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
  },
  iframe: {
    border: '0px solid transparent',
  },
});

export default useNewCardsScreenClasses;
