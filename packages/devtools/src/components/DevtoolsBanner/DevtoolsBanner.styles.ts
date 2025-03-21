import { makeStyles, tokens } from '@fluentui/react-components';

const useDevtoolsBannerClasses = makeStyles({
  devtoolsLandmark: {
    fontWeight: tokens.fontWeightSemibold,
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
    alignItems: 'center',
    padding: '12px 0',
    color: tokens.colorNeutralForeground1,
    position: 'relative',
    width: '11rem',
    borderRight: `1px solid ${tokens.colorNeutralStencil1}`,
    flexShrink: 0,
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamsImg: {
    width: '2.5rem',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  devButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    opacity: 0,
    zIndex: 1,
    padding: 0,
  },
  badge: {
    position: 'relative',
    margin: 'auto 10px',
    opacity: 1,
  },
  pingAnimation: {
    position: 'absolute',
    display: 'inline-flex',
    backgroundColor: tokens.colorPaletteLightGreenBackground3,
    width: '12px',
    height: '12px',
    borderRadius: '100%',
    opacity: 0.75,
    animationName: {
      '0%': {
        transform: 'scale(1)',
        opacity: 0.75,
      },
      '50%': {
        transform: 'scale(1.5)',
        opacity: 0.5,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.75,
      },
    },
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    animationIterationCount: 'infinite',
    animationDelay: '0s',
  },
  betaBadge: {
    position: 'absolute',
    right: '2.3rem',
    bottom: '0',
    border: `1px solid ${tokens.colorNeutralStencil1}`,
  },
});

export default useDevtoolsBannerClasses;
