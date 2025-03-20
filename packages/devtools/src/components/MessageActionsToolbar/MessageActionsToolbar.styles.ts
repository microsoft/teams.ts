import { makeStyles, tokens } from '@fluentui/react-components';

const useMessageActionsToolbarStyles = makeStyles({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    margin: 0,
  },
  emojiButtonSelected: {},
  toolbarButton: {
    minWidth: '0',
    width: '2.5rem',
    height: '2.5rem',
    padding: '0',
    border: `1px solid ${tokens.colorSubtleBackground}`,
    fontSize: tokens.fontSizeBase400,
    ':hover:not(:focus-visible)': {
      outline: 'none',
    },
  },
  tooltipText: {
    textTransform: 'capitalize',
  },
});

export default useMessageActionsToolbarStyles;
