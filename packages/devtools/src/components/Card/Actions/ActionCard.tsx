import { FC } from 'react';
import { Action } from '@microsoft/spark.cards';

import ExecuteActionCard from './ExecuteActionCard';
import OpenUrlActionCard from './OpenUrlActionCard';

export interface ActionCardProps {
  readonly value: Action;
}

const ActionCard: FC<ActionCardProps> = ({ value }) => {
  switch (value.type) {
    case 'Action.Execute':
      return <ExecuteActionCard value={value} />;
    case 'Action.OpenUrl':
      return <OpenUrlActionCard value={value} />;
  }

  return <>not found</>;
};

ActionCard.displayName = 'ActionCard';

export default ActionCard;
