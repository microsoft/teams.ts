import { makeStyles, tokens } from '@fluentui/react-components';

const useContentEditableAreaClasses = makeStyles({
  base: {
    '--ce-area-padding': tokens.spacingHorizontalMNudge,
    '--ce-area-border': tokens.strokeWidthThin,
    '--ce-area-radius': tokens.borderRadiusMedium,
    '--content-min-height-small': '2.5rem',
    '--content-max-height-small': '12.5rem',
    '--content-min-height-medium': '2.75rem',
    '--content-max-height-medium': '16.25rem',
    '--content-min-height-large': '4rem',
    '--content-max-height-large': '20rem',
    '--transition-duration-normal': tokens.durationNormal,
    '--transition-duration-fast': tokens.durationUltraFast,
    '--transition-delay-in': tokens.curveDecelerateMid,
    '--transition-delay-out': tokens.curveAccelerateMid,
    '--transition-duration-reduced': '0.01ms',
    '--transition-delay-reduced': '0.01ms',
    boxSizing: 'border-box',
    position: 'relative',
    margin: '0',
    minWidth: 0,
    borderRadius: 'var(--ce-area-radius)',
    width: '100%',
  },

  // Shared layout styles
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  // Focus state styles
  focusState: {
    '::after': {
      boxSizing: 'border-box',
      content: '""',
      position: 'absolute',
      left: '-1px',
      bottom: '-1px',
      right: '-1px',
      height: `max(${tokens.strokeWidthThick}, var(--ce-area-radius))`,
      borderBottomLeftRadius: 'var(--ce-area-radius)',
      borderBottomRightRadius: 'var(--ce-area-radius)',
      borderBottom: `${tokens.strokeWidthThick} solid ${tokens.colorCompoundBrandStroke}`,
      clipPath: `inset(calc(100% - ${tokens.strokeWidthThick}) 0 0 0)`,
      transform: 'scaleX(0)',
      transitionProperty: 'transform',
      transitionDuration: 'var(--transition-duration-fast)',
      transitionDelay: 'var(--transition-delay-out)',
    },
    ':focus-within::after': {
      transform: 'scaleX(1)',
      transitionProperty: 'transform',
      transitionDuration: 'var(--transition-duration-normal)',
      transitionDelay: 'var(--transition-delay-in)',
    },
    ':focus-within:active::after': {
      borderBottomColor: tokens.colorCompoundBrandStrokePressed,
    },
    ':focus-within': {
      outlineWidth: tokens.strokeWidthThick,
      outlineStyle: 'solid',
      outlineColor: 'transparent',
    },
    '@media screen and (prefers-reduced-motion: reduce)': {
      '&, &::after, &:focus-within, &:focus-within::after': {
        transitionDuration: 'var(--transition-duration-reduced)',
        transitionDelay: 'var(--transition-delay-reduced)',
      },
    },
  },

  // Placeholder styles
  placeholder: {
    '&[data-is-empty="true"]::before': {
      content: 'attr(data-placeholder)',
      position: 'absolute',
      color: tokens.colorNeutralForeground4,
      pointerEvents: 'none',
      userSelect: 'none',
      minHeight: '1.5rem',
    },
  },

  container: {
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    minWidth: 0,
    '&.editMode': {
      flex: '1 1 100%',
    },
  },

  disabled: {
    backgroundColor: tokens.colorTransparentBackground,
    border: `var(--ce-area-border) solid ${tokens.colorNeutralStrokeDisabled}`,
    '@media (forced-colors: active)': {
      border: `var(--ce-area-border) solid Gray`,
    },
  },

  interactive: {
    '::after': {
      boxSizing: 'border-box',
      content: '""',
      position: 'absolute',
      left: '-1px',
      bottom: '-1px',
      right: '-1px',
      height: `max(${tokens.strokeWidthThick}, var(--ce-area-radius))`,
      borderBottomLeftRadius: 'var(--ce-area-radius)',
      borderBottomRightRadius: 'var(--ce-area-radius)',
      borderBottom: `${tokens.strokeWidthThick} solid ${tokens.colorCompoundBrandStroke}`,
      clipPath: `inset(calc(100% - ${tokens.strokeWidthThick}) 0 0 0)`,
      transform: 'scaleX(0)',
      transitionProperty: 'transform',
      transitionDuration: 'var(--transition-duration-fast)',
      transitionDelay: 'var(--transition-delay-out)',
    },
    ':focus-within::after': {
      transform: 'scaleX(1)',
      transitionProperty: 'transform',
      transitionDuration: 'var(--transition-duration-normal)',
      transitionDelay: 'var(--transition-delay-in)',
    },
    ':focus-within:active::after': {
      borderBottomColor: tokens.colorCompoundBrandStrokePressed,
    },
    ':focus-within': {
      outlineWidth: tokens.strokeWidthThick,
      outlineStyle: 'solid',
      outlineColor: 'transparent',
    },
    '@media screen and (prefers-reduced-motion: reduce)': {
      '&, &::after, &:focus-within, &:focus-within::after': {
        transitionDuration: 'var(--transition-duration-reduced)',
        transitionDelay: 'var(--transition-delay-reduced)',
      },
    },
  },

  filled: {
    border: `var(--ce-area-border) solid ${tokens.colorTransparentStroke}`,
    ':hover,:focus-within': {
      border: `var(--ce-area-border) solid ${tokens.colorTransparentStroke}`,
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
    border: `var(--ce-area-border) solid ${tokens.colorNeutralStroke1}`,
    borderBottomColor: tokens.colorNeutralStrokeAccessible,
  },

  outlineInteractive: {
    ':hover': {
      border: `var(--ce-area-border) solid ${tokens.colorNeutralStroke1Hover}`,
      borderBottomColor: tokens.colorNeutralStrokeAccessibleHover,
    },
    ':active': {
      border: `var(--ce-area-border) solid ${tokens.colorNeutralStroke1Pressed}`,
      borderBottomColor: tokens.colorNeutralStrokeAccessiblePressed,
    },
    ':focus-within': {
      border: `var(--ce-area-border) solid ${tokens.colorNeutralStroke1Pressed}`,
      borderBottomColor: tokens.colorCompoundBrandStroke,
    },
  },

  invalid: {
    ':not(:focus-within),:hover:not(:focus-within)': {
      border: `var(--ce-area-border) solid ${tokens.colorPaletteRedBorder2}`,
    },
  },

  contentWrapper: {
    flex: '1 1 auto',
    minWidth: 0,
    maxHeight: 'inherit',
    overflowY: 'auto',
    padding: 'var(--ce-area-padding)',
    alignSelf: 'stretch',
    '& > *:not(:first-child)': {
      marginTop: tokens.spacingVerticalS,
    },
    '&.editMode': {
      flex: '1 0 auto',
      minWidth: '100%',
    },
  },

  fullWidth: {
    flex: '1 1 100%',
  },

  toolbarWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    alignSelf: 'flex-end',
  },

  contentEditableBase: {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    margin: '0',
    backgroundColor: tokens.colorSubtleBackground,
    boxSizing: 'border-box',
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    position: 'relative',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    minHeight: '1.5rem',
    overflowY: 'auto',
  },

  editMode: {
    minHeight: '3rem',
  },
  contentEditableDisabled: {
    color: tokens.colorNeutralForegroundDisabled,
    cursor: 'not-allowed',
  },

  small: {
    minHeight: 'var(--content-min-height-small)',
    maxHeight: 'var(--content-max-height-small)',
    fontSize: tokens.fontSizeBase200,
    lineHeight: 'calc(var(--content-min-height-small) - var(--ce-area-padding) * 2)',
    fontWeight: tokens.fontWeightRegular,
  },

  medium: {
    minHeight: 'var(--content-min-height-medium)',
    maxHeight: 'var(--content-max-height-medium)',
    fontSize: tokens.fontSizeBase300,
    lineHeight: 'calc(var(--content-min-height-medium) - var(--ce-area-padding) * 2)',
    fontWeight: tokens.fontWeightRegular,
  },

  large: {
    minHeight: 'var(--content-min-height-large)',
    maxHeight: 'var(--content-max-height-large)',
    fontSize: tokens.fontSizeBase400,
    lineHeight: 'calc(var(--content-min-height-large) - var(--ce-area-padding) * 2)',
    fontWeight: tokens.fontWeightRegular,
  },
});

export default useContentEditableAreaClasses;
