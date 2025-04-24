import { FC, memo } from 'react';
import { ICard, Card } from '@microsoft/teams.cards';

import AdaptiveCard from '../Card/AdaptiveCard';

import { useCardDesignerContentClasses } from './CardDesignerContent.styles';

export interface CardDesignerContentProps {
  readonly value?: ICard;
}

const CardDesignerContent: FC<CardDesignerContentProps> = memo(({ value }) => {
  const classes = useCardDesignerContentClasses();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <AdaptiveCard value={value || new Card()} />
      </div>
    </div>
  );
});

CardDesignerContent.displayName = 'CardDesignerContent';

export default CardDesignerContent;
