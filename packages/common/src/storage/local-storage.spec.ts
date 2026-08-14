import { LocalStorage } from './local-storage';

describe('LocalStorage', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should get undefined', () => {
    const storage = new LocalStorage();
    expect(storage.get('test')).toBeUndefined();
  });

  it('should set/get/delete key/value', () => {
    const storage = new LocalStorage();
    storage.set('testing', '123');
    expect(storage.get('testing')).toEqual('123');
    storage.delete('testing');
    expect(storage.get('testing')).toBeUndefined();
  });

  it('expires values using storage TTL options', () => {
    let now = 1_000;
    jest.spyOn(Date, 'now').mockImplementation(() => now);
    const storage = new LocalStorage();

    storage.set('session', 'value', { ttl: 10 });
    now += 9_999;
    expect(storage.get('session')).toBe('value');

    now += 1;
    expect(storage.get('session')).toBeUndefined();
    expect(storage.keys).not.toContain('session');
  });

  it('clears an existing expiration when overwritten without TTL', () => {
    let now = 1_000;
    jest.spyOn(Date, 'now').mockImplementation(() => now);
    const storage = new LocalStorage();

    storage.set('session', 'first', { ttl: 1 });
    storage.set('session', 'second');
    now += 1_001;

    expect(storage.get('session')).toBe('second');
  });

  it('does not let expired entries evict live entries at max capacity', () => {
    let now = 1_000;
    jest.spyOn(Date, 'now').mockImplementation(() => now);
    const storage = new LocalStorage(undefined, { max: 2 });

    storage.set('live', 1);
    storage.set('expired', 2, { ttl: 1 });
    now += 1_001;
    storage.set('new', 3);

    expect(storage.keys).toEqual(['live', 'new']);
  });

  it('rejects invalid TTL values', () => {
    const storage = new LocalStorage();

    expect(() => storage.set('negative', 1, { ttl: -1 })).toThrow(RangeError);
    expect(() => storage.set('infinite', 1, { ttl: Infinity })).toThrow(
      RangeError
    );
  });

  describe('max', () => {
    it('should remove oldest key to retain max length', () => {
      const storage = new LocalStorage(undefined, { max: 3 });

      storage.set('a', 1);
      storage.set('b', 2);
      storage.set('c', 3);

      expect(storage.get('a')).toEqual(1);
      expect(storage.get('b')).toEqual(2);
      expect(storage.get('c')).toEqual(3);
      expect(storage.keys).toStrictEqual(['a', 'b', 'c']);
      expect(storage.size).toEqual(3);

      storage.set('d', 4);

      expect(storage.get('a')).toBeUndefined();
      expect(storage.get('b')).toEqual(2);
      expect(storage.get('c')).toEqual(3);
      expect(storage.get('d')).toEqual(4);
      expect(storage.keys).toStrictEqual(['b', 'c', 'd']);
      expect(storage.size).toEqual(3);
      expect(storage.toString()).toEqual(
        JSON.stringify(
          [
            { key: 'b', value: 2 },
            { key: 'c', value: 3 },
            { key: 'd', value: 4 },
          ],
          null,
          2
        )
      );
    });
  });
});
