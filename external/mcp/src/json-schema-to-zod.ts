import { z } from 'zod';

import type {
  AnySchema,
  ArraySchema,
  BooleanSchema,
  NullSchema,
  NumberSchema,
  ObjectSchema,
  Schema,
  StringSchema,
} from '@microsoft/teams.ai';

/**
 * Converts a {@link Schema} into an equivalent Zod schema by building the
 * schema tree directly — no string generation, no dynamic code evaluation.
 */
export function jsonSchemaToZod(schema: Schema): z.ZodTypeAny {
  if (schema.$ref) {
    throw new Error(
      `jsonSchemaToZod: $ref is not supported (got ${JSON.stringify(schema.$ref)})`
    );
  }

  if (schema.enum && schema.enum.length > 0) {
    return describe(buildEnum(schema.enum), schema);
  }

  switch (schema.type) {
    case 'string':
      return describe(buildString(schema), schema);
    case 'number':
      return describe(buildNumber(schema, false), schema);
    case 'integer':
      return describe(buildNumber(schema, true), schema);
    case 'boolean':
      return describe(buildBoolean(schema), schema);
    case 'null':
      return describe(buildNull(schema), schema);
    case 'array':
      return describe(buildArray(schema), schema);
    case 'object':
      return describe(buildObject(schema), schema);
    case undefined:
      return describe(buildAny(schema), schema);
    default: {
      const exhaustive: never = schema;
      throw new Error(
        `jsonSchemaToZod: unsupported schema type ${JSON.stringify((exhaustive as Schema).type)}`
      );
    }
  }
}

function buildString(schema: StringSchema): z.ZodString {
  let s = z.string();
  if (schema.minLength !== undefined) s = s.min(schema.minLength);
  if (schema.maxLength !== undefined) s = s.max(schema.maxLength);
  if (schema.pattern) {
    try {
      s = s.regex(new RegExp(schema.pattern));
    } catch (error) {
      throw new Error(
        `jsonSchemaToZod: invalid string pattern ${JSON.stringify(schema.pattern)}`,
        { cause: error }
      );
    }
  }
  if (schema.format) {
    switch (schema.format) {
      case 'email':
        s = s.email();
        break;
      case 'uri':
      case 'url':
        s = s.url();
        break;
      case 'uuid':
        s = s.uuid();
        break;
    }
  }
  return s;
}

function buildNumber(schema: NumberSchema, isInt: boolean): z.ZodNumber {
  let n = isInt ? z.number().int() : z.number();
  if (schema.min !== undefined) n = n.min(schema.min);
  if (schema.max !== undefined) n = n.max(schema.max);
  if (schema.multipleOf !== undefined) n = n.multipleOf(schema.multipleOf);
  return n;
}

function buildBoolean(_schema: BooleanSchema): z.ZodBoolean {
  return z.boolean();
}

function buildNull(_schema: NullSchema): z.ZodNull {
  return z.null();
}

function buildAny(_schema: AnySchema): z.ZodTypeAny {
  return z.any();
}

function buildObject(schema: ObjectSchema): z.ZodObject<z.ZodRawShape> {
  const shape: z.ZodRawShape = {};
  const properties = schema.properties ?? {};

  const requiredAll = schema.required === true;
  const requiredList = Array.isArray(schema.required) ? schema.required : [];

  for (const [key, child] of Object.entries(properties)) {
    const zodChild = jsonSchemaToZod(child);
    const isRequired = requiredAll || requiredList.includes(key);
    shape[key] = isRequired ? zodChild : zodChild.optional();
  }

  return z.object(shape);
}

function buildArray(schema: ArraySchema): z.ZodTypeAny {
  if (Array.isArray(schema.items)) {
    if (schema.items.length === 0) return z.tuple([]);
    const tuple = schema.items.map(jsonSchemaToZod) as [z.ZodTypeAny, ...z.ZodTypeAny[]];
    return z.tuple(tuple);
  }
  return z.array(jsonSchemaToZod(schema.items));
}

function buildEnum(values: readonly unknown[]): z.ZodTypeAny {
  if (values.every((v): v is string => typeof v === 'string')) {
    return z.enum(values as [string, ...string[]]);
  }

  for (const v of values) {
    if (v !== null && typeof v !== 'string' && typeof v !== 'number' && typeof v !== 'boolean') {
      const kind = Array.isArray(v) ? 'array' : typeof v;
      throw new Error(
        `jsonSchemaToZod: enum values must be string, number, boolean, or null (got ${kind})`
      );
    }
  }

  const literals = values.map((v) => z.literal(v as z.Primitive));
  if (literals.length === 1) return literals[0];
  return z.union(literals as [z.ZodLiteral<z.Primitive>, z.ZodLiteral<z.Primitive>, ...z.ZodLiteral<z.Primitive>[]]);
}

function describe<T extends z.ZodTypeAny>(zodType: T, schema: Schema): T {
  return schema.description ? (zodType.describe(schema.description) as T) : zodType;
}
