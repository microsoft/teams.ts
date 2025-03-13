import { FC, memo } from 'react';
import { ComponentProps } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import useJsonClasses from './Json.styles';

interface JsonNumberProps extends ComponentProps<'div'> {
  readonly value: number;
}

const JsonNumber: FC<JsonNumberProps> = (props) => {
  const classes = useJsonClasses();
  return (
    <div {...props} className={mergeClasses(classes.base, classes.number, props.className)}>
      {props.value}
    </div>
  );
};

JsonNumber.displayName = 'JsonNumber';
export default memo(JsonNumber);
