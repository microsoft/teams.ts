import { ComponentProps } from 'react';

import { useJsonStringClasses } from './Json.styles';

export interface JsonStringProps extends ComponentProps<'div'> {
  readonly value: string;
}

export default function JsonString(props: JsonStringProps) {
  const classes = useJsonStringClasses();
  return (
    <div {...props} className={classes.string}>
      "{props.value}"
    </div>
  );
}
