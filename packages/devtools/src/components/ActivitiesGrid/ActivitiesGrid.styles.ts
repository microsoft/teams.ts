import { makeStyles, tokens } from '@fluentui/react-components';

const useActivitiesGridClasses = makeStyles({
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '100%',
    width: 'fit-content',
    minWidth: '100%',
    overflowY: 'auto',
    overflowX: 'auto',
  },
  title: {
    padding: '0.5rem',
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
    color: tokens.colorNeutralForeground2,
    width: '100%',
    minWidth: '34rem',
    maxWidth: '50rem',
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
  cell: {
    minWidth: '6rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  timestamp: {
    minWidth: '11.25rem',
  },
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
  filterOn: {
    color: tokens.colorBrandForeground1,
  },
  menuItem: {
    maxWidth: '12.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export default useActivitiesGridClasses;
