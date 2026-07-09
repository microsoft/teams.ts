import { isTruthyEnvValue } from './env';

describe('isTruthyEnvValue', () => {
  it.each(['1', 'true', 'TRUE', 't', 'yes', 'Y', 'on', ' ON '])(
    'should treat %s as truthy',
    (value) => {
      expect(isTruthyEnvValue(value)).toBe(true);
    }
  );

  it.each([undefined, '', '0', 'false', 'no', 'off', 'anything'])(
    'should treat %s as false',
    (value) => {
      expect(isTruthyEnvValue(value)).toBe(false);
    }
  );
});
