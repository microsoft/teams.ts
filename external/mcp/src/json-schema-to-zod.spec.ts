import { z } from 'zod';

import type { Schema } from '@microsoft/teams.ai';

import { jsonSchemaToZod } from './json-schema-to-zod';

describe('jsonSchemaToZod', () => {
  describe('primitives', () => {
    it('converts a string schema', () => {
      const zod = jsonSchemaToZod({ type: 'string' });
      expect(zod.safeParse('hello').success).toBe(true);
      expect(zod.safeParse(42).success).toBe(false);
    });

    it('applies string constraints', () => {
      const zod = jsonSchemaToZod({
        type: 'string',
        minLength: 2,
        maxLength: 4,
        pattern: '^[a-z]+$',
      });
      expect(zod.safeParse('ab').success).toBe(true);
      expect(zod.safeParse('a').success).toBe(false);
      expect(zod.safeParse('abcde').success).toBe(false);
      expect(zod.safeParse('AB').success).toBe(false);
    });

    it('applies string format validators', () => {
      expect(jsonSchemaToZod({ type: 'string', format: 'email' }).safeParse('a@b.co').success).toBe(true);
      expect(jsonSchemaToZod({ type: 'string', format: 'email' }).safeParse('not-an-email').success).toBe(false);
      expect(jsonSchemaToZod({ type: 'string', format: 'url' }).safeParse('https://ex.com').success).toBe(true);
      expect(jsonSchemaToZod({ type: 'string', format: 'uri' }).safeParse('https://ex.com').success).toBe(true);
      expect(jsonSchemaToZod({ type: 'string', format: 'uuid' }).safeParse('not-a-uuid').success).toBe(false);
    });

    it('ignores unknown string formats', () => {
      const zod = jsonSchemaToZod({ type: 'string', format: 'something-custom' });
      expect(zod.safeParse('anything').success).toBe(true);
    });

    it('converts number and integer schemas', () => {
      expect(jsonSchemaToZod({ type: 'number' }).safeParse(1.5).success).toBe(true);
      expect(jsonSchemaToZod({ type: 'integer' }).safeParse(1.5).success).toBe(false);
      expect(jsonSchemaToZod({ type: 'integer' }).safeParse(2).success).toBe(true);
    });

    it('applies number min/max/multipleOf', () => {
      const zod = jsonSchemaToZod({ type: 'number', min: 0, max: 10, multipleOf: 2 });
      expect(zod.safeParse(4).success).toBe(true);
      expect(zod.safeParse(-1).success).toBe(false);
      expect(zod.safeParse(11).success).toBe(false);
      expect(zod.safeParse(3).success).toBe(false);
    });

    it('converts boolean and null schemas', () => {
      expect(jsonSchemaToZod({ type: 'boolean' }).safeParse(true).success).toBe(true);
      expect(jsonSchemaToZod({ type: 'boolean' }).safeParse('true').success).toBe(false);
      expect(jsonSchemaToZod({ type: 'null' }).safeParse(null).success).toBe(true);
      expect(jsonSchemaToZod({ type: 'null' }).safeParse(undefined).success).toBe(false);
    });

    it('converts untyped (Any) schemas', () => {
      const zod = jsonSchemaToZod({});
      expect(zod.safeParse('anything').success).toBe(true);
      expect(zod.safeParse({ whatever: 1 }).success).toBe(true);
    });
  });

  describe('enum', () => {
    it('converts a string enum', () => {
      const zod = jsonSchemaToZod({ type: 'string', enum: ['a', 'b', 'c'] });
      expect(zod.safeParse('a').success).toBe(true);
      expect(zod.safeParse('d').success).toBe(false);
    });

    it('converts a mixed-type enum via union of literals', () => {
      const zod = jsonSchemaToZod({ enum: [1, 'two', true] });
      expect(zod.safeParse(1).success).toBe(true);
      expect(zod.safeParse('two').success).toBe(true);
      expect(zod.safeParse(true).success).toBe(true);
      expect(zod.safeParse('three').success).toBe(false);
    });

    it('handles a single-value enum', () => {
      const zod = jsonSchemaToZod({ enum: ['only'] });
      expect(zod.safeParse('only').success).toBe(true);
      expect(zod.safeParse('other').success).toBe(false);
    });
  });

  describe('objects', () => {
    it('converts an object with required array', () => {
      const zod = jsonSchemaToZod({
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'integer' },
        },
        required: ['name'],
      });
      expect(zod.safeParse({ name: 'x' }).success).toBe(true);
      expect(zod.safeParse({ name: 'x', age: 3 }).success).toBe(true);
      expect(zod.safeParse({ age: 3 }).success).toBe(false);
    });

    it('treats required: true as all-required', () => {
      const zod = jsonSchemaToZod({
        type: 'object',
        properties: { a: { type: 'string' }, b: { type: 'string' } },
        required: true,
      });
      expect(zod.safeParse({ a: 'x', b: 'y' }).success).toBe(true);
      expect(zod.safeParse({ a: 'x' }).success).toBe(false);
    });

    it('treats required: false or missing as all-optional', () => {
      const zodFalse = jsonSchemaToZod({
        type: 'object',
        properties: { a: { type: 'string' } },
        required: false,
      });
      const zodMissing = jsonSchemaToZod({
        type: 'object',
        properties: { a: { type: 'string' } },
      });
      expect(zodFalse.safeParse({}).success).toBe(true);
      expect(zodMissing.safeParse({}).success).toBe(true);
    });

    it('handles empty properties', () => {
      const zod = jsonSchemaToZod({ type: 'object', properties: {} });
      expect(zod.safeParse({}).success).toBe(true);
    });

    it('returns a ZodObject with accessible .shape', () => {
      const zod = jsonSchemaToZod({
        type: 'object',
        properties: { name: { type: 'string' } },
        required: ['name'],
      });
      expect(zod).toBeInstanceOf(z.ZodObject);
      expect((zod as z.AnyZodObject).shape.name).toBeDefined();
    });
  });

  describe('arrays', () => {
    it('converts an array with a single items schema', () => {
      const zod = jsonSchemaToZod({ type: 'array', items: { type: 'string' } });
      expect(zod.safeParse(['a', 'b']).success).toBe(true);
      expect(zod.safeParse(['a', 1]).success).toBe(false);
    });

    it('converts an array with tuple items', () => {
      const zod = jsonSchemaToZod({
        type: 'array',
        items: [{ type: 'string' }, { type: 'number' }],
      });
      expect(zod.safeParse(['x', 1]).success).toBe(true);
      expect(zod.safeParse([1, 'x']).success).toBe(false);
    });

    it('handles an empty tuple', () => {
      const zod = jsonSchemaToZod({ type: 'array', items: [] });
      expect(zod.safeParse([]).success).toBe(true);
      expect(zod.safeParse(['x']).success).toBe(false);
    });
  });

  describe('descriptions', () => {
    it('applies description to the resulting Zod schema', () => {
      const zod = jsonSchemaToZod({ type: 'string', description: 'a greeting' });
      expect(zod.description).toBe('a greeting');
    });
  });

  describe('errors', () => {
    it('throws on $ref (unsupported)', () => {
      expect(() => jsonSchemaToZod({ $ref: '#/defs/Foo' })).toThrow(/\$ref/);
    });

    it('throws on enum values that are not string/number/boolean/null', () => {
      expect(() => jsonSchemaToZod({ enum: [{ foo: 1 }] })).toThrow(/enum values must be/);
      expect(() => jsonSchemaToZod({ enum: [[1, 2]] })).toThrow(/got array/);
    });

    it('throws a wrapped error for invalid regex patterns', () => {
      expect(() => jsonSchemaToZod({ type: 'string', pattern: '[unterminated' })).toThrow(
        /invalid string pattern/
      );
    });
  });

  describe('real-world ChatPrompt parameter schemas', () => {
    const pokemonSearch: Schema = {
      type: 'object',
      properties: { pokemonName: { type: 'string', description: 'the name of the pokemon' } },
      required: ['pokemonName'],
    };
    const weatherSearch: Schema = {
      type: 'object',
      properties: { location: { type: 'string', description: 'the name of the location' } },
      required: ['location'],
    };
    const structurify: Schema = {
      type: 'object',
      properties: { response: { type: 'string', description: 'The response to the user\'s message' } },
      required: ['response'],
    };
    const noArgs: Schema = { type: 'object', properties: {} };

    it.each([
      ['pokemonSearch', pokemonSearch, { pokemonName: 'pikachu' }, true],
      ['pokemonSearch missing required', pokemonSearch, {}, false],
      ['weatherSearch', weatherSearch, { location: 'Seattle' }, true],
      ['structurify', structurify, { response: 'hi' }, true],
      ['noArgs accepts empty', noArgs, {}, true],
    ])('%s parses as expected', (_name, schema, input, expected) => {
      const zod = jsonSchemaToZod(schema);
      expect(zod.safeParse(input).success).toBe(expected);
    });
  });
});
