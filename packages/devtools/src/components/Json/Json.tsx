import { ComponentProps } from 'react';
import hljs from 'highlight.js/lib/core';
import jsonLanguage from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/atom-one-dark.min.css';

import JsonBool from './JsonBool';
import JsonNumber from './JsonNumber';
import JsonString from './JsonString';
import JsonArray from './JsonArray';
import JsonObject from './JsonObject';
import { useJsonClasses } from './Json.styles';

hljs.registerLanguage('json', jsonLanguage);

export interface JsonProps extends ComponentProps<'div'> {
  readonly value: any;
  readonly stringify?: boolean;
  readonly level?: number;
  readonly path?: any[];
  readonly isArray?: boolean;
}

export default function Json(props: JsonProps) {
  const classes = useJsonClasses();

  if (props.stringify) {
    const html = hljs.highlight(JSON.stringify(props.value, null, 2), { language: 'json' }).value;
    return <pre className={classes.pre} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  if (props.value === null) {
    return <div>null</div>;
  }

  if (props.value === undefined) {
    return <div>undefined</div>;
  }

  if (typeof props.value === 'boolean') {
    return <JsonBool {...props} />;
  }

  if (typeof props.value === 'number') {
    return <JsonNumber {...props} />;
  }

  if (typeof props.value === 'string') {
    return <JsonString {...props} />;
  }

  if (typeof props.value === 'object') {
    if (Array.isArray(props.value)) {
      return <JsonArray {...props} />;
    }
    return <JsonObject {...props} />;
  }

  return <>type "{typeof props.value}" not supported</>;
}
