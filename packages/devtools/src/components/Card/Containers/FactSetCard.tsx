import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IFactSet } from '@microsoft/teams.cards';

import useContainerClasses from './Containers.styles';
import FactCard from './FactCard';

export interface FactSetCardProps {
  readonly value: IFactSet;
}

const FactSetCard: FC<FactSetCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div className={mergeClasses(classes.container, classes[value.spacing ?? 'Default'])}>
      {value.facts?.map((fact, index) => {
        return <FactCard key={`fact-${index}`} value={fact} />;
      })}
    </div>
  );
};

export default FactSetCard;
