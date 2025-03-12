import { FC, KeyboardEvent, useRef } from 'react';
import {
  DataGridCellFocusMode,
  DataGridHeaderCell,
  DataGridHeaderCellProps,
  makeStyles,
} from '@fluentui/react-components';

interface CustomDataGridHeaderCellProps extends DataGridHeaderCellProps {
  focusMode?: DataGridCellFocusMode;
}
const useStyles = makeStyles({
  headerCell: {
    '&:has(:focus:not(&))': {
      outline: 'none',
      '&::after': {
        display: 'none',
      },
    },
  },
});
/**
 * CustomDataGridHeaderCell is a custom header cell for the DataGrid because focusMode is not supported for the default DataGridHeaderCell
 * @param focusMode: DataGridCellFocusMode how to handle focus on a header cell that has focusable elements
 * @returns DataGridHeaderCell
 */
const CustomDataGridHeaderCell: FC<CustomDataGridHeaderCellProps> = ({
  focusMode = 'cell',
  ...props
}) => {
  const classes = useStyles();
  const headerCellRef = useRef<HTMLTableCellElement>(null);
  return (
    <DataGridHeaderCell
      {...props}
      ref={headerCellRef}
      className={classes.headerCell}
      tabIndex={0}
      role={'rowheader'}
      onKeyDown={(e: KeyboardEvent<HTMLTableCellElement>) => {
        if (focusMode === 'group') {
          if (e.key === 'Enter' || e.key === ' ') {
            const firstFocusable = e.currentTarget.querySelector('[tabindex="0"]');
            headerCellRef.current?.setAttribute('tabindex', '-1');
            (firstFocusable as HTMLElement)?.focus();
          } else if (e.key === 'Escape') {
            const firstFocusable = e.currentTarget.querySelector<HTMLElement>('[tabindex="0"]');
            if (firstFocusable) {
              firstFocusable.setAttribute('tabindex', '-1');
              headerCellRef.current?.setAttribute('tabindex', '0');
              headerCellRef.current?.focus();
            }
          }
        }
        props.onKeyDown?.(e);
      }}
    />
  );
};

export default CustomDataGridHeaderCell;
