import { FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import { JsonValue } from '../../types/JsonValue';
import Json from './Json';
import OverflowTooltip from './OverflowTooltip';
import useJsonClasses from './Json.styles';

interface JsonPrimitiveWrapperProps {
  readonly value: JsonValue;
}

const JsonPrimitiveWrapper: FC<JsonPrimitiveWrapperProps> = ({ value }) => {
  const classes = useJsonClasses();

  return (
    <OverflowTooltip content={String(value)}>
      <div className={mergeClasses(classes.base, classes.baseText, classes.value)}>
        <Json value={value} />
      </div>
    </OverflowTooltip>
  );
};

JsonPrimitiveWrapper.displayName = 'JsonPrimitiveWrapper';
export default memo(JsonPrimitiveWrapper);
