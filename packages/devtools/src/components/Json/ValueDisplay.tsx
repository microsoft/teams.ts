import { FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import { JsonValue } from '../../types/JsonValue';
import { getCollapsedValue } from './utils';
import useJsonClasses from './Json.styles';

interface ValueDisplayProps {
  readonly value: JsonValue;
  readonly isCircularRef: boolean;
  readonly isExpanded: boolean;
  readonly isEmpty: boolean;
}

const ValueDisplay: FC<ValueDisplayProps> = ({ value, isCircularRef, isExpanded, isEmpty }) => {
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

ValueDisplay.displayName = 'ValueDisplay';
export default memo(ValueDisplay);
