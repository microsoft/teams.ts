import { makeStyles, tokens } from '@fluentui/react-components';

export const useCardDesignerEditorClasses = makeStyles({
  cardDesignerEditor: {
    display: 'flex',
    flex: 1,
    borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
    boxShadow: tokens.shadow8,
    minHeight: 0,
  },
  tabGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
    minWidth: 0,
    position: 'relative',
  },
  tabPanels: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
    maxWidth: '500px',
  },
  tabPanel: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
