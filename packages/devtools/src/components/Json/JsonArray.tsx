import { FC, memo } from 'react';

import { JsonValue } from '../../types/JsonValue';

import JsonObject from './JsonObject';

interface JsonArrayProps {
  readonly value: JsonValue[];
  readonly level?: number;
  readonly path?: JsonValue[];
}

const JsonArray: FC<JsonArrayProps> = (props) => {
  const arrayAsObject = props.value.reduce<Record<string, JsonValue>>((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});

  return <JsonObject {...props} value={arrayAsObject} isArray />;
};

JsonArray.displayName = 'JsonArray';
export default memo(JsonArray);
