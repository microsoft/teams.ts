import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IColumnSet } from '@microsoft/teams.cards';

import useContainerClasses from './Containers.styles';
import ColumnCard from './ColumnCard';

export interface ColumnSetCardProps {
  readonly value: IColumnSet;
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

ColumnSetCard.displayName = 'ColumnSetCard';

export default ColumnSetCard;
