import { ComponentProps } from 'react';
import { useJsonBoolClasses } from './Json.styles';

export interface JsonBoolProps extends ComponentProps<'div'> {
  readonly value: boolean;
}

export default function JsonBool(props: JsonBoolProps) {
  const classes = useJsonBoolClasses();
  return (
    <div {...props} className={classes.bool}>
      {props.value === true ? 'true' : 'false'}
    </div>
  );
}
