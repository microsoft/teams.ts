import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { Column } from '@microsoft/spark.cards';

import Card from '../Card';
import useContainerClasses from './Containers.styles';

export interface ColumnCardProps {
  readonly value: Column;
}

const ColumnCard: FC<ColumnCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div
      className={mergeClasses(
        classes.container,
        value.spacing ? classes[value.spacing] : classes.default
      )}
    >
      {value.items?.map((item, index) => {
        return <Card key={`column-item-${index}`} value={item} />;
      })}
    </div>
  );
};

export default ColumnCard;
