import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IActionSet } from '@microsoft/teams.cards';

import ActionCard from '../Actions/ActionCard';

import useContainerClasses from './Containers.styles';

export interface ActionSetCardProps {
  readonly value: IActionSet;
}

const ActionSetCard: FC<ActionSetCardProps> = ({ value }) => {
  const classes = useContainerClasses();

  return (
    <div className={mergeClasses(classes.container, classes[value.spacing ?? 'Default'])}>
      {value.actions?.map((action, index) => {
        return <ActionCard key={`action-${index}`} value={action} />;
      })}
    </div>
  );
};

ActionSetCard.displayName = 'ActionSetCard';
export default ActionSetCard;
