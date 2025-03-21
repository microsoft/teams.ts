import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IContainer } from '@microsoft/spark.cards';

import Card from '../Card';

import useContainerClasses from './Containers.styles';

export interface ContainerCardProps {
  readonly value: IContainer;
}

const ContainerCard: FC<ContainerCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div
      className={mergeClasses(
        classes.container,
        value.spacing ? classes[value.spacing] : classes.default
      )}
    >
      {value.items.map((item, index) => {
        return <Card key={`container-item-${index}`} value={item} />;
      })}
    </div>
  );
};

export default ContainerCard;
