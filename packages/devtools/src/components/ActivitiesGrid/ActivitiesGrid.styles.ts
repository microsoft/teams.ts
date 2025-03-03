import { makeStyles, tokens } from '@fluentui/react-components';

export type ColumnId = 'type' | 'chat' | 'from' | 'timestamp';

export const GRID_COLUMNS = [
  {
    id: 'type' as const,
    label: 'Type',
    width: '25%',
    minWidth: '150px',
  },
  {
    id: 'chat' as const,
    label: 'Chat',
    width: '20%',
    minWidth: '100px',
  },
  {
    id: 'from' as const,
    label: 'From',
    width: '25%',
    minWidth: '150px',
  },
  {
    id: 'timestamp' as const,
    label: 'Timestamp',
    width: '30%',
    minWidth: '180px',
  },
] as const;

const useActivitiesGridClasses = makeStyles({
  tableContainer: {
    display: 'inline-block',
    maxWidth: '100%',
    margin: '2rem',
  },
  table: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderCollapse: 'collapse',
    border: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
    margin: tokens.spacingHorizontalS,
    color: tokens.colorNeutralForeground2,
    width: 'auto',
    boxShadow: tokens.shadow16,
  },
  tableHeader: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  // Column-level styles
  columnType: {
    width: GRID_COLUMNS[0].width,
    minWidth: GRID_COLUMNS[0].minWidth,
    textAlign: 'left',
  },
  columnChat: {
    width: GRID_COLUMNS[1].width,
    minWidth: GRID_COLUMNS[1].minWidth,
  },
  columnFrom: {
    width: GRID_COLUMNS[2].width,
    minWidth: GRID_COLUMNS[2].minWidth,
  },
  columnTimestamp: {
    width: GRID_COLUMNS[3].width,
    minWidth: GRID_COLUMNS[3].minWidth,
  },
  // Row-level styles
  tableRow: {
    borderBottom: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
    '&:hover': {
      backgroundColor: tokens.colorBrandBackground2Hover,
      cursor: 'pointer',
    },
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
  // Cell and cell content styles
  cell: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalS}`,
    whiteSpace: 'nowrap',
  },
  headerCell: {
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    whiteSpace: 'nowrap',
  },
  pathContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    maxWidth: '100%',
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: tokens.spacingHorizontalS,
    flexShrink: 0,
  },
  pathText: {
    fontWeight: tokens.fontSizeBase600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  conversationType: {
    display: 'inline-block',
  },
  fromName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    display: 'block',
  },
  timestampContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  spinner: {
    animation: 'spin 1s linear infinite',
    border: '3px solid currentColor',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    height: tokens.spacingHorizontalM,
    width: tokens.spacingHorizontalM,
  },
  // Menu styles
  menuContainer: {
    display: 'inline-flex',
    width: 'auto',
    maxWidth: '100%',
    justifyContent: 'flex-start',
  },
  menuButton: {
    display: 'inline-flex',

    minWidth: 'auto',
    width: 'auto',
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuPopover: {
    padding: tokens.spacingHorizontalXXS,
    borderRadius: '0.375rem',
    boxShadow: tokens.shadow16,
  },
  typeLabel: {
    flex: '1 1 auto',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingRight: tokens.spacingHorizontalS,
  },
  emptyTable: {
    textAlign: 'center',
    padding: tokens.spacingHorizontalS,
  },
});

export default useActivitiesGridClasses;
