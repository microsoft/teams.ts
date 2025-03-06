import { ICard, Card } from '@microsoft/spark.cards';
import AdaptiveCard from '../Card/AdaptiveCard';
import { useCardDesignerContentClasses } from './CardDesignerContent.styles';

export interface CardDesignerContentProps {
  readonly value?: ICard;
}

export default function CardDesignerContent({ value }: CardDesignerContentProps) {
  const classes = useCardDesignerContentClasses();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <AdaptiveCard value={value || new Card()} />
      </div>
    </div>
  );
}
