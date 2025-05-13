import { ComponentProps, memo } from 'react';
import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
import * as cards from '@microsoft/teams.cards';

import ActionCard from './Actions/ActionCard';
import Card from './Card';

export interface AdaptiveCardProps extends ComponentProps<'div'> {
  readonly value: cards.IAdaptiveCard;
}

const useAdaptiveCardStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: tokens.borderRadiusLarge,
    padding: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackground6,
    boxShadow: tokens.shadow4,
    gap: tokens.spacingVerticalS,
  },
});

const AdaptiveCardComponent = memo(({ value }: AdaptiveCardProps) => {
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
});

AdaptiveCardComponent.displayName = 'AdaptiveCard';

export default AdaptiveCardComponent;
