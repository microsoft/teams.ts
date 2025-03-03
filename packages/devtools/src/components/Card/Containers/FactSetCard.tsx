import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { FactSet } from '@microsoft/spark.cards';

import useContainerClasses from './Containers.styles';

import FactCard from './FactCard';

export interface FactSetCardProps {
  readonly value: FactSet;
}

const FactSetCard: FC<FactSetCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div
      className={mergeClasses(
        classes.container,
        value.spacing ? classes[value.spacing] : classes.default
      )}
    >
      {value.facts?.map((fact, index) => {
        return <FactCard key={`fact-${index}`} value={fact} />;
      })}
    </div>
  );
};

export default FactSetCard;
