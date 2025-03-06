interface IBaseSchema {
  readonly $schema?: string;
  readonly $ref?: string;
  readonly id?: string;
  readonly title?: string;
  readonly description?: string;
  readonly type?: 'object' | 'array' | 'string' | 'number' | 'integer' | 'null' | 'boolean';
  readonly enum?: any[];
}

export type Schema =
  | IStringSchema
  | INumberSchema
  | IBooleanSchema
  | IObjectSchema
  | IArraySchema
  | INullSchema
  | IAnySchema;

export interface IStringSchema extends IBaseSchema {
  readonly type: 'string';
  readonly pattern?: string;
  readonly format?: string;
  readonly minLength?: number;
  readonly maxLength?: number;
}

export interface INumberSchema extends IBaseSchema {
  readonly type: 'number' | 'integer';
  readonly min?: number;
  readonly max?: number;
  readonly multipleOf?: number;
}

export interface IBooleanSchema extends IBaseSchema {
  readonly type: 'boolean';
}

export interface IObjectSchema extends IBaseSchema {
  readonly type: 'object';
  readonly properties?: {
    [key: string]: Schema;
  };
  readonly required?: string[] | boolean;
}

export interface IArraySchema extends IBaseSchema {
  readonly type: 'array';
  readonly items: Schema | Schema[];
  readonly additionalItems?: Schema | Schema[];
}

export interface INullSchema extends IBaseSchema {
  readonly type: 'null';
}

export interface IAnySchema extends IBaseSchema {
  readonly type: undefined;
}
