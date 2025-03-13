import { ComponentProps, FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import { JsonValue } from '../../types/JsonValue';
import { isCircular } from './utils';
import JsonExpandButton from './JsonExpandButton';
import JsonKey from './JsonKey';
import JsonPrimitiveWrapper from './JsonPrimitiveWrapper';
import useJsonClasses from './Json.styles';
import ValueDisplay from './ValueDisplay';

interface JsonObjectRowProps extends ComponentProps<'div'> {
  readonly keyName: string;
  readonly value: JsonValue;
  readonly isArray: boolean;
  readonly isExpanded: boolean;
  readonly onToggleExpand: () => void;
  readonly path: JsonValue[];
}

const JsonObjectRow: FC<JsonObjectRowProps> = (props) => {
  const { keyName, value, isArray, isExpanded, onToggleExpand, path, className } = props;
  const classes = useJsonClasses();
  const isObject = typeof value === 'object' && value !== null;
  const isEmpty = isObject && Object.keys(value as object).length === 0;
  const isPrimitive = !isObject;
  const isCircularRef = isCircular(value, path);

  return (
    <div className={mergeClasses(classes.base, classes.row, className)}>
      <JsonExpandButton
        isEmpty={isEmpty}
        onClick={onToggleExpand}
        isExpanded={isExpanded}
        isPrimitive={isPrimitive}
      />
      <JsonKey isArray={isArray} keyName={keyName} />
      {isObject ? (
        <ValueDisplay
          value={value}
          isCircularRef={isCircularRef}
          isExpanded={isExpanded}
          isEmpty={isEmpty}
        />
      ) : (
        <JsonPrimitiveWrapper value={value} />
      )}
    </div>
  );
};

JsonObjectRow.displayName = 'JsonObjectRow';
export default memo(JsonObjectRow);
