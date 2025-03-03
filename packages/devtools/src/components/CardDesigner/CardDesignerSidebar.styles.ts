import { makeStyles, tokens } from '@fluentui/react-components';

export const useCardDesignerSidebarClasses = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorNeutralBackground1,
    gap: tokens.spacingVerticalL,
    boxShadow: tokens.shadow4,
  },

  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },

  addIcon: {
    margin: 'auto 0',
    marginLeft: tokens.spacingHorizontalS,
    visibility: 'hidden',
    transition: `visibility ${tokens.durationNormal}`,
  },
});
