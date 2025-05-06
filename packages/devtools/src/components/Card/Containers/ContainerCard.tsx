import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IContainer } from '@microsoft/teams.cards';

import Card from '../Card';

import useContainerClasses from './Containers.styles';

export interface ContainerCardProps {
  readonly value: IContainer;
}

const ContainerCard: FC<ContainerCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div className={mergeClasses(classes.container, classes[value.spacing ?? 'Default'])}>
      {value.items.map((item, index) => {
        return <Card key={`container-item-${index}`} value={item} />;
      })}
    </div>
  );
};

ContainerCard.displayName = 'ContainerCard';

export default ContainerCard;
