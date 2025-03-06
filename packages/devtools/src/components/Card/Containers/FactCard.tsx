import { Body1, Subtitle2 } from '@fluentui/react-components';
import { IFact } from '@microsoft/spark.cards';

import useContainerClasses from './Containers.styles';

export interface FactCardProps {
  readonly value: IFact;
}

export default function FactCard({ value }: FactCardProps) {
  const classes = useContainerClasses();
  return (
    <div className={classes.container}>
      <Subtitle2>{value.title}</Subtitle2>

      <Body1>{value.value}</Body1>
    </div>
  );
}
