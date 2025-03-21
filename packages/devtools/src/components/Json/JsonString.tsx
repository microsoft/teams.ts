import { ComponentProps, FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import useJsonClasses from './Json.styles';
import OverflowTooltip from './OverflowTooltip';

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
