import { makeStyles, tokens } from '@fluentui/react-components';

const useActivitiesGridClasses = makeStyles({
  gridContainer: {
    maxWidth: '100%',
    margin: '2rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: 0,
    scrollbarGutter: 'stable',
    overscrollBehavior: 'contain',
    scrollPadding: '2rem',
    paddingRight: '1rem'
  },

  row: {
    borderBottom: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
    '&:hover': {
      backgroundColor: tokens.colorBrandBackground2Hover,
      cursor: 'pointer',
    },
  },

  grid: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderCollapse: 'collapse',
    border: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
    margin: tokens.spacingHorizontalS,
    color: tokens.colorNeutralForeground2,
    width: 'auto',
    minWidth: '32rem',
    tableLayout: 'auto',
    boxShadow: tokens.shadow16,
    '&:last-child': {
      borderBottom: `1px solid ${tokens.colorTransparentStroke}`,
    },
  },
  header: {
    textTransform: 'uppercase',
    '& button': {
      textTransform: 'uppercase',
      fontWeight: 'inherit',
      padding: 0,
      gap: tokens.spacingHorizontalXS,
    },
  },

  directionIcon: {
    marginRight: tokens.spacingHorizontalS,
    flexShrink: 0,
  },

  menuPopover: {
    padding: tokens.spacingHorizontalXXS,
    borderRadius: '0.375rem',
    boxShadow: tokens.shadow16,
  },

  timestamp: {
    minWidth: '11.25rem',
  },

  // // Row styles
  oddRow: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  evenRow: {
    backgroundColor: tokens.colorNeutralBackground6,
  },
  selectedRow: {
    backgroundColor: tokens.colorBrandBackground2,
    '&:hover': {
      backgroundColor: tokens.colorBrandBackground2,
    },
  },
  errorRow: {
    backgroundColor: tokens.colorPaletteRedBackground1,
    color: tokens.colorPaletteRedForeground1,
  },
  cell: {
    minWidth: '6rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  empty: {
    textAlign: 'center',
    padding: tokens.spacingVerticalL,
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase300,
    borderBottom: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
  },
  hideSelection: {
    visibility: 'hidden',
  },
});

export default useActivitiesGridClasses;
