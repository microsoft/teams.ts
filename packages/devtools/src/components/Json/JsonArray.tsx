import { ComponentProps } from 'react';

import JsonObject from './JsonObject';

export interface JsonArrayProps extends ComponentProps<'div'> {
  readonly value: Array<any>;
  readonly level?: number;
  readonly path?: any[];
}

export default function JsonArray(props: JsonArrayProps) {
  return <JsonObject {...props} isArray={true} />;
}
