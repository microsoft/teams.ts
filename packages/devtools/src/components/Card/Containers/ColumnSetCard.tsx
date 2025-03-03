import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { ColumnSet } from '@microsoft/spark.cards';

import ColumnCard from './ColumnCard';
import useContainerClasses from './Containers.styles';

export interface ColumnSetCardProps {
  readonly value: ColumnSet;
}

const ColumnSetCard: FC<ColumnSetCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div
      className={mergeClasses(
        classes.container,
        value.spacing ? classes[value.spacing] : classes.default
      )}
    >
      {value.columns?.map((column, index) => {
        return <ColumnCard key={`column-${index}`} value={column} />;
      })}
    </div>
  );
};

export default ColumnSetCard;
