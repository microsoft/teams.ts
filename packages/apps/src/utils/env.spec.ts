import { isTruthyEnvValue } from './env';

describe('isTruthyEnvValue', () => {
  const name = 'TEST_BOOLEAN_ENV_VALUE';
  const originalValue = process.env[name];

  afterEach(() => {
    if (originalValue === undefined) {
      delete process.env[name];
    } else {
      process.env[name] = originalValue;
    }
  });

  it.each(['1', 'true', 'TRUE', 'yes', 'on', ' ON '])(
    'should treat %s as truthy',
    (value) => {
      process.env[name] = value;

      expect(isTruthyEnvValue(name)).toBe(true);
    }
  );

  it.each([undefined, ''])(
    'should return undefined for %s',
    (value) => {
      if (value === undefined) {
        delete process.env[name];
      } else {
        process.env[name] = value;
      }

      expect(isTruthyEnvValue(name)).toBeUndefined();
    }
  );

  it.each(['0', 'false', 'no', 'off'])(
    'should treat %s as false',
    (value) => {
      process.env[name] = value;

      expect(isTruthyEnvValue(name)).toBe(false);
    }
  );

  it('should throw for invalid values', () => {
    process.env[name] = 'anything';

    expect(() => isTruthyEnvValue(name)).toThrow(
      'TEST_BOOLEAN_ENV_VALUE must be a boolean value: true/false, 1/0, yes/no, or on/off.'
    );
  });
});
