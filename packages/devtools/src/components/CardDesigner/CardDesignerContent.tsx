import { FC, memo } from 'react';
import { IAdaptiveCard, AdaptiveCard } from '@microsoft/teams.cards';

import AdaptiveCardComponent from '../Card/AdaptiveCard';

import { useCardDesignerContentClasses } from './CardDesignerContent.styles';

export interface CardDesignerContentProps {
  readonly value?: IAdaptiveCard;
}

const CardDesignerContent: FC<CardDesignerContentProps> = memo(({ value }) => {
  const classes = useCardDesignerContentClasses();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <AdaptiveCardComponent value={value || new AdaptiveCard()} />
      </div>
    </div>
  );
});

CardDesignerContent.displayName = 'CardDesignerContent';

export default CardDesignerContent;
