import { makeStyles, tokens } from '@fluentui/react-components';

const useJsonClasses = makeStyles({
  base: {
    fontSize: tokens.fontSizeBase300,
  },
  baseText: {
    color: tokens.colorNeutralForeground1,
  },
  collapsedPreview: {
    color: tokens.colorNeutralForeground2,
    fontStyle: 'italic',
  },
  pre: {
    fontFamily: 'monospace',
  },
  bool: {
    color: tokens.colorPalettePinkForeground2,
  },
  number: {
    color: tokens.colorPaletteMarigoldForeground1,
  },
  string: {
    color: tokens.colorPaletteBlueForeground2,
  },
  object: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    width: '100%',
    overflow: 'hidden',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  expandButton: {
    display: 'flex',
    padding: 0,
    minWidth: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1rem',
    flexShrink: 0,
    marginRight: tokens.spacingHorizontalXS,
  },
  expandButtonDisabled: {
    color: tokens.colorNeutralForegroundDisabled,
    cursor: 'default',
    ':hover, :active': {
      backgroundColor: 'transparent',
      color: tokens.colorNeutralForegroundDisabled,
      cursor: 'default',
    },
  },
  key: {
    color: tokens.colorPaletteBlueBorderActive,
    paddingRight: tokens.spacingHorizontalS,
    fontWeight: tokens.fontWeightRegular,
    minWidth: '1.25rem',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow: 'visible',
  },
  value: {
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    flexGrow: 1,
    minWidth: 0,
  },
  expandedValue: {
    width: 'calc(100% - 1.5rem)',
    paddingLeft: tokens.spacingHorizontalS,
    borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
    marginLeft: tokens.spacingHorizontalS,
  },
  expandedValueCompact: {
    marginLeft: tokens.spacingHorizontalXS,
  },
  nestedLevel: {
    paddingLeft: tokens.spacingHorizontalS,
    width: '100%',
    overflow: 'hidden',
  },
  emptyObject: {
    color: tokens.colorNeutralForeground2,
    fontStyle: 'italic',
  },
  circularRef: {
    color: tokens.colorPaletteRedForeground2,
  },
  arrayContainer: {
    position: 'relative',
    paddingLeft: tokens.spacingHorizontalM,
    overflow: 'hidden',
  },
  arrayIndex: {
    color: tokens.colorPaletteDarkOrangeForeground2,
    minWidth: '1.25rem',
    display: 'inline-block',
    flexShrink: 0,
  },
});

export default useJsonClasses;
