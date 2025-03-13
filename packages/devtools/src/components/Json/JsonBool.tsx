import { FC, memo } from 'react';
import { ComponentProps } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import useJsonClasses from './Json.styles';

interface JsonBoolProps extends ComponentProps<'div'> {
  readonly value: boolean;
}

const JsonBool: FC<JsonBoolProps> = (props) => {
  const classes = useJsonClasses();
  return (
    <div {...props} className={mergeClasses(classes.base, classes.bool, props.className)}>
      {String(props.value)}
    </div>
  );
};

JsonBool.displayName = 'JsonBool';
export default memo(JsonBool);
