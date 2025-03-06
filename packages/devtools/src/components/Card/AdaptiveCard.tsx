import { ComponentProps } from 'react';
import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
import * as cards from '@microsoft/spark.cards';

import Card from './Card';
import ActionCard from './Actions/ActionCard';

export interface AdaptiveCardProps extends ComponentProps<'div'> {
  readonly value: cards.ICard;
}

const useAdaptiveCardStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    padding: '0.75rem',
    backgroundColor: tokens.colorNeutralBackground6,
    boxShadow: tokens.shadow16,
    gap: tokens.spacingVerticalS,
  },
});

export default function AdaptiveCard({ value }: AdaptiveCardProps) {
  console.log('AC value', value);
  const classes = useAdaptiveCardStyles();
  return (
    <div className={mergeClasses(classes.root)}>
      {value.body && value.body.length > 0 && (
        <div>
          {value.body.map((item, index) => {
            return <Card key={`body-item-${index}`} value={item} />;
          })}
        </div>
      )}

      {value.actions && value.actions.length > 0 && (
        <div>
          {value.actions.map((action, index) => {
            return <ActionCard key={`action-item-${index}`} value={action} />;
          })}
        </div>
      )}
    </div>
  );
}
