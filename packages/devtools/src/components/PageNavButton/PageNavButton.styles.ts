import { makeStyles, tokens } from '@fluentui/react-components';

export const useClasses = makeStyles({
  pageNavButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: '0.5rem',
    color: tokens.colorNeutralForeground2Link,
    border: `2px solid transparent`,
    '&:hover': {
      color: tokens.colorBrandForegroundLinkHover,
      textDecorationLine: 'none',
    },
    '&:active': {
      color: tokens.colorBrandForegroundLinkSelected,
      textDecorationLine: 'none',
    },
    '&:visited': {
      textDecorationLine: 'none',
    },
    '&:focus-visible': {
      border: `2px solid ${tokens.colorNeutralForeground2Link}`,
      borderRadius: '5px',
      outline: 'none',
    },
    '& i': {
      marginRight: '0.3rem',
    },
  },
  activeRoute: {
    color: tokens.colorBrandForegroundLink,
    textDecorationLine: 'none',
  },
  linkWithIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    '&:active': {
      textDecorationLine: 'none',
    },
  },
});
