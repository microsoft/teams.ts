import { ComponentProps } from 'react';

import { useJsonNumberClasses } from './Json.styles';

export interface JsonNumberProps extends ComponentProps<'div'> {
  readonly value: number;
}

export default function JsonNumber(props: JsonNumberProps) {
  const classes = useJsonNumberClasses();
  return (
    <div {...props} className={classes.number}>
      {props.value}
    </div>
  );
}
