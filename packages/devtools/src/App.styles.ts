import { makeStyles, tokens } from '@fluentui/react-components';

const useAppClasses = makeStyles({
  default: {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  appContainer: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  sideBarAndMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
    height: '100%',
    minWidth: '175px',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRight: `1px solid ${tokens.colorNeutralStencil1}`,
  },
  header: {
    flexGrow: 1,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  pageNavContainer: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0.5rem 0',
  },
  navButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    marginRight: tokens.spacingHorizontalL,
  },
  mainLayout: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    overflow: 'hidden',
  },
  mainContent: {
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
  },
});

export default useAppClasses;
