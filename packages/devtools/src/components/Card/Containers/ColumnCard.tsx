import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IColumn } from '@microsoft/teams.cards';

import Card from '../Card';

import useContainerClasses from './Containers.styles';

export interface ColumnCardProps {
  readonly value: IColumn;
}

const ColumnCard: FC<ColumnCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div className={mergeClasses(classes.container, classes[value.spacing ?? 'Default'])}>
      {value.items?.map((item, index) => {
        return <Card key={`column-item-${index}`} value={item} />;
      })}
    </div>
  );
};

export default ColumnCard;
