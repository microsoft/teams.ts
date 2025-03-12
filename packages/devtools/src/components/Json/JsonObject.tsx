import { ComponentProps, useState } from 'react';
import { Button, mergeClasses } from '@fluentui/react-components';
import { TriangleDownFilled, TriangleRightFilled } from '@fluentui/react-icons/lib/fonts';

import { useJsonObjectClasses } from './Json.styles';
import Json from './Json';

export interface JsonObjectProps extends ComponentProps<'div'> {
  readonly value: Record<string, any>;
  readonly level?: number;
  readonly path?: any[];
  readonly isArray?: boolean;
}

// Helper to detect circular references
const isCircular = (value: any, path: any[] = []): boolean => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return path.some((item) => item === value);
};

export default function JsonObject(props: JsonObjectProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const classes = useJsonObjectClasses();
  const level = props.level || 0;
  const path = props.path || [];
  const isArray = props.isArray || false;

  // Handle empty object/array
  if (Object.keys(props.value).length === 0) {
    return <div className={classes.emptyObject}>{isArray ? '[]' : '{}'}</div>;
  }

  return (
    <div
      className={mergeClasses(
        classes.object,
        level > 0 ? classes.nestedLevel : undefined,
        isArray ? classes.arrayContainer : undefined
      )}
    >
      {Object.entries(props.value).map(([key, value]) => {
        const isObject = typeof value === 'object' && value !== null;
        const isExpanded = !!expanded[key];
        const isCircularRef = isCircular(value, path);

        return (
          <div key={key}>
            <div className={classes.row}>
              <div className={classes.keyContainer}>
                {isObject && !isCircularRef ? (
                  <Button
                    appearance="transparent"
                    className={classes.expandButton}
                    onClick={() => {
                      setExpanded({
                        ...expanded,
                        [key]: !isExpanded,
                      });
                    }}
                  >
                    {isExpanded ? <TriangleDownFilled /> : <TriangleRightFilled />}
                  </Button>
                ) : (
                  <div className={classes.iconPlaceholder}></div>
                )}
              </div>

              <div className={classes.key}>
                {isArray ? <span className={classes.arrayIndex}>{key}</span> : key + ':'}
              </div>

              {isObject ? (
                isCircularRef ? (
                  <div className={classes.circularRef}>[Circular Reference]</div>
                ) : !isExpanded ? (
                  <div className={classes.value}>
                    {Array.isArray(value)
                      ? `[${value.length > 0 ? '...' : ''}]`
                      : Object.keys(value).length === 0
                        ? '{}'
                        : '{ ... }'}
                  </div>
                ) : null
              ) : (
                <Json className={classes.value} value={value} />
              )}
            </div>

            {isExpanded && isObject && !isCircularRef && (
              <div className={classes.expandedValue}>
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
}
