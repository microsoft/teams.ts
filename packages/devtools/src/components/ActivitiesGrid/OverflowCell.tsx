import { FC, memo } from 'react';
import { Tooltip, makeStyles } from '@fluentui/react-components';
import { useIsOverflowing } from '../../hooks/useIsOverflowing';

const useStyles = makeStyles({
  cell: {
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

interface OverflowCellProps {
  content: string;
  className?: string;
  subtractSelector?: string;
}

const OverflowCell: FC<OverflowCellProps> = ({ content, className, subtractSelector }) => {
  const styles = useStyles();
  const { ref, isOverflowing } = useIsOverflowing({ subtractSelector });

  const cell = (
    <span ref={ref} className={`${styles.cell} ${className || ''}`}>
      {content}
    </span>
  );

  if (!isOverflowing) {
    return cell;
  }

  return (
    <Tooltip content={content} relationship="label" positioning="above">
      {cell}
    </Tooltip>
  );
};

OverflowCell.displayName = 'OverflowCell';
export default memo(OverflowCell);
