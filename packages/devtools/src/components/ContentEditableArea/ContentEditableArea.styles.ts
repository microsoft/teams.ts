import { makeStyles, tokens } from '@fluentui/react-components';

const useContentEditableAreaClasses = makeStyles({
  // Root styles (intended to match FluentUI's Textarea)
  base: {
    display: 'inline-flex',
    boxSizing: 'border-box',
    position: 'relative',
    padding: `0 0 ${tokens.strokeWidthThick} 0`,
    margin: '0',
    borderRadius: tokens.borderRadiusMedium,
    verticalAlign: 'top',
    width: '100%',

    '& div': {
      outline: 'none',
      '&:focus': {
        outline: 'none',
      },
      '&:active': {
        outline: 'none',
      },
    },
  },

  disabled: {
    backgroundColor: tokens.colorTransparentBackground,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStrokeDisabled}`,
    '@media (forced-colors: active)': {
      border: `${tokens.strokeWidthThin} solid Gray`,
    },
  },

  interactive: {
    // Intended to imitate FluentUI Textarea
    '::after': {
      boxSizing: 'border-box',
      content: '""',
      position: 'absolute',
      left: '-1px',
      bottom: '-1px',
      right: '-1px',
      height: `max(${tokens.strokeWidthThick}, ${tokens.borderRadiusMedium})`,
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
      borderBottom: `${tokens.strokeWidthThick} solid ${tokens.colorCompoundBrandStroke}`,
      clipPath: `inset(calc(100% - ${tokens.strokeWidthThick}) 0 0 0)`,
      transform: 'scaleX(0)',
      transitionProperty: 'transform',
      transitionDuration: tokens.durationUltraFast,
      transitionDelay: tokens.curveAccelerateMid,

      '@media screen and (prefers-reduced-motion: reduce)': {
        transitionDuration: '0.01ms',
        transitionDelay: '0.01ms',
      },
    },
    ':focus-within::after': {
      transform: 'scaleX(1)',
      transitionProperty: 'transform',
      transitionDuration: tokens.durationNormal,
      transitionDelay: tokens.curveDecelerateMid,

      '@media screen and (prefers-reduced-motion: reduce)': {
        transitionDuration: '0.01ms',
        transitionDelay: '0.01ms',
      },
    },
    ':focus-within:active::after': {
      borderBottomColor: tokens.colorCompoundBrandStrokePressed,
    },
    ':focus-within': {
      outlineWidth: tokens.strokeWidthThick,
      outlineStyle: 'solid',
      outlineColor: 'transparent',
    },
  },

  filled: {
    border: `${tokens.strokeWidthThin} solid ${tokens.colorTransparentStroke}`,
    ':hover,:focus-within': {
      border: `${tokens.strokeWidthThin} solid ${tokens.colorTransparentStroke}`,
    },
  },
  'filled-darker': {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  'filled-lighter': {
    backgroundColor: tokens.colorNeutralBackground1,
  },

  outline: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    borderBottomColor: tokens.colorNeutralStrokeAccessible,
  },
  outlineInteractive: {
    ':hover': {
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1Hover}`,
      borderBottomColor: tokens.colorNeutralStrokeAccessibleHover,
    },

    ':active': {
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1Pressed}`,
      borderBottomColor: tokens.colorNeutralStrokeAccessiblePressed,
    },

    ':focus-within': {
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1Pressed}`,
      borderBottomColor: tokens.colorCompoundBrandStroke,
    },
  },

  invalid: {
    ':not(:focus-within),:hover:not(:focus-within)': {
      border: `${tokens.strokeWidthThin} solid ${tokens.colorPaletteRedBorder2}`,
    },
  },

  // ContentEditable styles
  contentEditableBase: {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    margin: '0',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    color: tokens.colorNeutralForeground1,
    flexGrow: 1,
    fontFamily: tokens.fontFamilyBase,
    height: '100%',
    width: '100%',
    position: 'relative',

    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },

    // ContentEditable specific - make it look and behave like textarea
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    overflowY: 'auto',
    overflowX: 'hidden',

    // Empty state styling for placeholder
    '&:empty::before, &[data-is-empty="true"]::before': {
      content: 'attr(data-placeholder)',
      position: 'absolute',
      color: tokens.colorNeutralForeground4,
      pointerEvents: 'none',
      userSelect: 'none',
      left: '11px',
    },
  },

  contentEditableDisabled: {
    color: tokens.colorNeutralForegroundDisabled,
    cursor: 'not-allowed',
  },

  // Size variants - mimic textarea dimensions
  small: {
    minHeight: '40px',
    padding: `${tokens.spacingHorizontalM}`,
    maxHeight: '200px',
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightRegular,
  },
  medium: {
    minHeight: '44px',
    padding: `${tokens.spacingHorizontalM}`,
    maxHeight: '260px',
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightRegular,
  },
  large: {
    minHeight: '64px',
    padding: `${tokens.spacingHorizontalM}`,
    maxHeight: '320px',
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightRegular,
  },
});

export default useContentEditableAreaClasses;
