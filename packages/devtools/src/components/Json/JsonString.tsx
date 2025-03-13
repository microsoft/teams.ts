import { ComponentProps, FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import OverflowTooltip from './OverflowTooltip';
import useJsonClasses from './Json.styles';

interface JsonStringProps extends ComponentProps<'div'> {
  readonly value: string;
}

const JsonString: FC<JsonStringProps> = (props) => {
  const classes = useJsonClasses();
  const displayValue = `"${props.value}"`;

  return (
    <OverflowTooltip content={displayValue}>
      <div
        {...props}
        className={mergeClasses(classes.base, classes.string, classes.value, props.className)}
      >
        {displayValue}
      </div>
    </OverflowTooltip>
  );
};

JsonString.displayName = 'JsonString';
export default memo(JsonString);
