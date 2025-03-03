import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { ActionSet } from '@microsoft/spark.cards';

import ActionCard from '../Actions/ActionCard';
import useContainerClasses from './Containers.styles';

export interface ActionSetCardProps {
  readonly value: ActionSet;
}

const ActionSetCard: FC<ActionSetCardProps> = ({ value }) => {
  const classes = useContainerClasses();

  return (
    <div
      className={mergeClasses(
        classes.container,
        value.spacing ? classes[value.spacing] : classes.default
      )}
    >
      {value.actions?.map((action, index) => {
        return <ActionCard key={`action-${index}`} value={action} />;
      })}
    </div>
  );
};

export default ActionSetCard;
