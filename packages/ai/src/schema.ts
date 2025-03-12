type BaseSchema = {
  readonly $schema?: string;
  readonly $ref?: string;
  readonly id?: string;
  readonly title?: string;
  readonly description?: string;
  readonly type?: 'object' | 'array' | 'string' | 'number' | 'integer' | 'null' | 'boolean';
  readonly enum?: any[];
};

export type Schema =
  | StringSchema
  | NumberSchema
  | BooleanSchema
  | ObjectSchema
  | ArraySchema
  | NullSchema
  | AnySchema;

export type StringSchema = BaseSchema & {
  readonly type: 'string';
  readonly pattern?: string;
  readonly format?: string;
  readonly minLength?: number;
  readonly maxLength?: number;
};

export type NumberSchema = BaseSchema & {
  readonly type: 'number' | 'integer';
  readonly min?: number;
  readonly max?: number;
  readonly multipleOf?: number;
};

export type BooleanSchema = BaseSchema & {
  readonly type: 'boolean';
};

export type ObjectSchema = BaseSchema & {
  readonly type: 'object';
  readonly properties?: {
    [key: string]: Schema;
  };
  readonly required?: string[] | boolean;
};

export type ArraySchema = BaseSchema & {
  readonly type: 'array';
  readonly items: Schema | Schema[];
  readonly additionalItems?: Schema | Schema[];
};

export type NullSchema = BaseSchema & {
  readonly type: 'null';
};

export type AnySchema = BaseSchema & {
  readonly type?: undefined;
};
