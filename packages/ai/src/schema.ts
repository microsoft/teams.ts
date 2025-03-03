interface BaseSchema {
  readonly $schema?: string;
  readonly $ref?: string;
  readonly id?: string;
  readonly title?: string;
  readonly description?: string;
  readonly type?: 'object' | 'array' | 'string' | 'number' | 'integer' | 'null' | 'boolean';
  readonly enum?: any[];
}

export type Schema =
  | StringSchema
  | NumberSchema
  | BooleanSchema
  | ObjectSchema
  | ArraySchema
  | NullSchema
  | AnySchema;

export interface StringSchema extends BaseSchema {
  readonly type: 'string';
  readonly pattern?: string;
  readonly format?: string;
  readonly minLength?: number;
  readonly maxLength?: number;
}

export interface NumberSchema extends BaseSchema {
  readonly type: 'number' | 'integer';
  readonly min?: number;
  readonly max?: number;
  readonly multipleOf?: number;
}

export interface BooleanSchema extends BaseSchema {
  readonly type: 'boolean';
}

export interface ObjectSchema extends BaseSchema {
  readonly type: 'object';
  readonly properties?: {
    [key: string]: Schema;
  };
  readonly required?: string[] | boolean;
}

export interface ArraySchema extends BaseSchema {
  readonly type: 'array';
  readonly items: Schema | Schema[];
  readonly additionalItems?: Schema | Schema[];
}

export interface NullSchema extends BaseSchema {
  readonly type: 'null';
}

export interface AnySchema extends BaseSchema {
  readonly type: undefined;
}
