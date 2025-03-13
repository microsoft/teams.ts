import { ComponentProps, FC, memo, useState } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import { JsonValue } from '../../types/JsonValue';
import { hasOnlyPrimitiveChildren } from './utils';
import Json from './Json';
import JsonObjectRow from './JsonObjectRow';
import useJsonClasses from './Json.styles';

interface JsonObjectProps extends ComponentProps<'div'> {
  readonly value: Record<string, JsonValue>;
  readonly level?: number;
  readonly path?: JsonValue[];
  readonly isArray?: boolean;
}

const JsonObject: FC<JsonObjectProps> = (props: JsonObjectProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const classes = useJsonClasses();
  const level = props.level || 0;
  const path = props.path || [];
  const isArray = props.isArray || false;
  const onlyPrimitives = hasOnlyPrimitiveChildren(props.value);

  if (Object.keys(props.value).length === 0) {
    return (
      <div
        className={mergeClasses(
          classes.base,
          classes.baseText,
          classes.emptyObject,
          props.className
        )}
      >
        {isArray ? '[]' : '{}'}
      </div>
    );
  }

  return (
    <div
      className={mergeClasses(
        classes.base,
        classes.object,
        level > 0 ? classes.nestedLevel : undefined,
        isArray ? classes.arrayContainer : undefined,
        props.className
      )}
    >
      {Object.entries(props.value).map(([key, value]) => {
        const isExpanded = !!expanded[key];
        const isObject = typeof value === 'object' && value !== null;

        return (
          <div key={key} className={classes.base}>
            <JsonObjectRow
              keyName={key}
              value={value}
              isArray={isArray}
              isExpanded={isExpanded}
              onToggleExpand={() => {
                setExpanded({
                  ...expanded,
                  [key]: !isExpanded,
                });
              }}
              path={path}
            />

            {isExpanded && isObject && (
              <div
                className={mergeClasses(
                  classes.base,
                  classes.expandedValue,
                  onlyPrimitives && classes.expandedValueCompact
                )}
              >
                <Json
                  value={value}
                  level={level + 1}
                  path={[...path, props.value]}
                  isArray={Array.isArray(value)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

JsonObject.displayName = 'JsonObject';
export default memo(JsonObject);
