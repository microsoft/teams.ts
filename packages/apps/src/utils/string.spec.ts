import { isTruthyStringValue } from './string';

describe('isTruthyStringValue', () => {
  it.each(['1', 'true', 'TRUE', 't', 'yes', 'Y', 'on', ' ON '])(
    'should treat %s as truthy',
    (value) => {
      expect(isTruthyStringValue(value)).toBe(true);
    }
  );

  it.each([undefined, '', '0', 'false', 'no', 'off', 'anything'])(
    'should treat %s as false',
    (value) => {
      expect(isTruthyStringValue(value)).toBe(false);
    }
  );
});
