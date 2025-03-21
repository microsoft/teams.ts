import { FC, memo } from 'react';
import { ComponentProps } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import hljs from 'highlight.js/lib/core';
import jsonLanguage from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/atom-one-dark.min.css';

import { JsonValue } from '../../types/JsonValue';

import useJsonClasses from './Json.styles';
import JsonArray from './JsonArray';
import JsonBool from './JsonBool';
import JsonNumber from './JsonNumber';
import JsonObject from './JsonObject';
import JsonString from './JsonString';

hljs.registerLanguage('json', jsonLanguage);

interface JsonProps extends ComponentProps<'div'> {
  readonly value: JsonValue;
  readonly stringify?: boolean;
  readonly level?: number;
  readonly path?: JsonValue[];
  readonly isArray?: boolean;
}

const StringifiedJson: FC<{ value: JsonValue; className?: string }> = ({ value, className }) => {
  const classes = useJsonClasses();
  const html = hljs.highlight(JSON.stringify(value, null, 2), { language: 'json' }).value;

  return (
    <pre
      className={mergeClasses(classes.base, classes.pre, className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const NullUndefinedValue: FC<{ value: null | undefined; className?: string }> = ({
  value,
  className,
}) => {
  const classes = useJsonClasses();
  return (
    <div className={mergeClasses(classes.base, classes.baseText, className)}>{String(value)}</div>
  );
};

const UnsupportedValue: FC<{ type: string; className?: string }> = ({ type, className }) => {
  const classes = useJsonClasses();
  return (
    <div className={mergeClasses(classes.base, classes.baseText, className)}>
      type "{type}" not supported
    </div>
  );
};

const Json: FC<JsonProps> = (props) => {
  if (props.stringify) {
    return <StringifiedJson value={props.value} className={props.className} />;
  }

  if (props.value === null || props.value === undefined) {
    return <NullUndefinedValue value={props.value} className={props.className} />;
  }

  const valueType = typeof props.value;

  switch (valueType) {
    case 'boolean':
      return <JsonBool {...props} value={props.value as boolean} />;
    case 'number':
      return <JsonNumber {...props} value={props.value as number} />;
    case 'string':
      return <JsonString {...props} value={props.value as string} />;
    case 'object':
      if (Array.isArray(props.value)) {
        return <JsonArray {...props} value={props.value} />;
      }
      return <JsonObject {...props} value={props.value as Record<string, JsonValue>} />;
    default:
      return <UnsupportedValue type={valueType} className={props.className} />;
  }
};

Json.displayName = 'Json';
export default memo(Json);
