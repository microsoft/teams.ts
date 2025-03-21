import { FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import { JsonValue } from '../../types/JsonValue';

import useJsonClasses from './Json.styles';
import { getCollapsedValue } from './utils';

interface JsonCollapsedValueProps {
  readonly value: JsonValue;
  readonly isCircularRef: boolean;
  readonly isExpanded: boolean;
  readonly isEmpty: boolean;
}

const JsonCollapsedValue: FC<JsonCollapsedValueProps> = ({
  value,
  isCircularRef,
  isExpanded,
  isEmpty,
}) => {
  const classes = useJsonClasses();

  if (isCircularRef) {
    return (
      <div className={mergeClasses(classes.base, classes.baseText, classes.circularRef)}>
        [Circular Reference]
      </div>
    );
  }

  if (!isExpanded || isEmpty) {
    return (
      <div
        className={mergeClasses(
          classes.base,
          classes.baseText,
          classes.value,
          classes.collapsedPreview
        )}
      >
        {getCollapsedValue(value)}
      </div>
    );
  }

  return null;
};

JsonCollapsedValue.displayName = 'JsonCollapsedValue';
export default memo(JsonCollapsedValue);
